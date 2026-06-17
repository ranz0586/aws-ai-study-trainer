# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint over the repo (flat config in `eslint.config.js`)
- `npm run format` — Prettier over `src/` (config in `.prettierrc.json`)

There is no test framework configured and no TypeScript — this is a plain JS + JSX project.

## Architecture

A fully client-side React 19 + Vite SPA for studying the AWS AI Practitioner (AIF) exam. There is no backend, no router, and no external API. All state lives in `localStorage`.

### Navigation
There is no router. [src/App.jsx](src/App.jsx) holds a single `page` string in `useState` and conditionally renders one page component at a time. Navigation is done by passing callbacks (e.g. `openDay`, `backDashboard`, `startRetake`) that call `setPage(...)`. Cross-page data (exam results, retake question sets) is held in `App.jsx` state and threaded down as props. When adding a page, register it as a new `page` value and wire its navigation callbacks here.

### Persistence (two localStorage keys, two hooks)
- [src/hooks/useProgress.js](src/hooks/useProgress.js) — key `aws-aif-progress`. Tracks `currentDay`, `completedDays`, and per-day `scores`. `recordScore(day, score)` only unlocks the next day when `score >= 70`.
- [src/hooks/useExamHistory.js](src/hooks/useExamHistory.js) — key `aws-aif-exam-history`. Append-only list of exam attempts (`{id, date, score, passed, domainScores}`), newest first. Attempts are recorded by a `useEffect` in [src/pages/ResultsPage.jsx](src/pages/ResultsPage.jsx) when results render.

Each hook owns its own `useState` + persisting `useEffect`. Multiple components calling the same hook get independent state synced only through localStorage, not React — be aware they do not share an in-memory store.

### Data is the content (`src/data/`)
The course content is static data, not fetched. Two parallel data systems:

- **Curriculum** ([src/data/curriculum/](src/data/curriculum/)) — one file per learning day (`day1.js` … `day9.js`, plus the float-keyed bonus `day10_5.js`), aggregated into a keyed object in [src/data/curriculum/index.js](src/data/curriculum/index.js). Each day exports `{ title, objectives, lessons, flashcards, checks, scenarios }`. [src/pages/DayView.jsx](src/pages/DayView.jsx) renders these and computes a day score from `checks` + `scenarios`. [src/data/course.js](src/data/course.js) is the separate day index/manifest (day number, title, phase) shown on the Dashboard. **Day 10 is special**: it is not a curriculum entry — `App.jsx` routes `day === 10` to the exam simulator instead of `DayView`.

- **Exam question bank** ([src/data/exam/](src/data/exam/)) — one file per domain (e.g. `aiFundamentals.js`, `bedrock.js`, `rag.js`), each exporting an array of questions, all spread into a single `questionBank` array in [src/data/exam/index.js](src/data/exam/index.js). Question shape: `{ id, domain, difficulty, question, options[], answer (index), explanation, awsExamTip }`.

**Critical invariant:** the `domain` string on each exam question is the join key for all scoring and adaptive logic. `domainScoring`, `weakTopicDetector`, `adaptiveExamBuilder`, and `remediationEngine` all group/filter by exact `domain` string match. Keep domain strings consistent across question files.

### Exam + analytics flow (`src/utils/`)
The pipeline after an exam is submitted:
1. [examBuilder.js](src/utils/examBuilder.js) / [adaptiveExamBuilder.js](src/utils/adaptiveExamBuilder.js) select questions (adaptive mode weights ~60% of questions toward domains scoring `< 70`).
2. `ExamSimulator` collects an `answers` map keyed by question index and passes `{questions, answers, adaptive}` to `ResultsPage`.
3. [domainScoring.js](src/utils/domainScoring.js) computes per-domain `%`; [weakTopicDetector.js](src/utils/weakTopicDetector.js) flags domains `< 70`; [remediationEngine.js](src/utils/remediationEngine.js) builds the study plan; [readinessPredictor.js](src/utils/readinessPredictor.js) and [historyAnalytics.js](src/utils/historyAnalytics.js) drive the Analytics page over exam history.

The **70% pass threshold** is the single most repeated business rule (day completion, exam pass/fail, weak-domain detection). Several utils duplicate the same `shuffle` helper — there is no shared util module for it.

## Code style

The codebase is formatted with Prettier (`.prettierrc.json`: 2-space indent, double quotes, semicolons, no trailing commas, 80-col width). Run `npm run format` after editing, or rely on your editor's Prettier integration, so new code matches the existing style.
