import { COURSE } from "../data/course";

import DayCard from "../components/DayCard";

import ProgressBar from "../components/ProgressBar";

import ScoreBadge from "../components/ScoreBadge";

import PageHeader from "../components/PageHeader";

import TrendCard from "../components/TrendCard";

import ReadinessCard from "../components/ReadinessCard";

import AdaptiveExamCard from "../components/AdaptiveExamCard";

import useExamHistory from "../hooks/useExamHistory";

import useAdaptiveExam from "../hooks/useAdaptiveExam";

import { calculateReadiness } from "../utils/readinessPredictor";

export default function Dashboard({
  progress,
  openDay,
  startAdaptiveExam,
  openDumpExam
}) {
  const { history, bestScore, latestScore } = useExamHistory();

  const { weakDomains, hasHistory } = useAdaptiveExam();

  const progressPercent = Math.round(
    (progress.completedDays.length / 10) * 100
  );

  const readinessData = calculateReadiness({
    history,
    domainScores: history.length > 0 ? history[0].domainScores || {} : {}
  });

  return (
    <div className="app-container">
      <PageHeader
        title="AWS AI Practitioner Trainer"
        subtitle="10-Day Certification System"
      />

      <ProgressBar value={progressPercent} />

      <div
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      >
        <ScoreBadge score={progressPercent} />
      </div>

      <ReadinessCard
        readiness={readinessData.readiness}
        status={readinessData.status}
        weakDomains={readinessData.weakDomains}
      />

      {hasHistory && (
        <div
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <AdaptiveExamCard
            weakDomains={weakDomains}
            startAdaptiveExam={startAdaptiveExam}
          />
        </div>
      )}

      <div
        className="responsive-grid"
        style={{
          marginTop: 20,
          marginBottom: 32
        }}
      >
        <TrendCard title="Best Score" value={`${bestScore}%`} />

        <TrendCard title="Latest Score" value={`${latestScore}%`} />

        <TrendCard title="Attempts" value={history.length} />
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ marginBottom: 4 }}>Practice Exam (AIF Dump)</h3>

        <p style={{ color: "#6b7280", marginBottom: 12 }}>
          65 questions drawn from the full AIF question bank with single and
          multi-select support.
        </p>

        <button className="primary-btn" onClick={openDumpExam}>
          Start Practice Exam
        </button>
      </div>

      <div className="responsive-grid">
        {COURSE.map((day) => (
          <DayCard
            key={day.day}
            {...day}
            unlocked={
              day.day === 10 ||
              day.day === 10.5 ||
              day.day <= progress.currentDay
            }
            onOpen={() => openDay(day.day)}
          />
        ))}
      </div>
    </div>
  );
}
