import { useState } from "react";

import Dashboard from "./pages/Dashboard";

import DayView from "./pages/DayView";

import ExamSimulator from "./pages/ExamSimulator";

import ResultsPage from "./pages/ResultsPage";

import WeakTopicReview from "./pages/WeakTopicReview";

import ExamHistoryPage from "./pages/ExamHistoryPage";

import ExamAnalyticsPage from "./pages/ExamAnalyticsPage";

import RetakeMissedQuestions from "./pages/RetakeMissedQuestions";

import RetakeSummary from "./components/RetakeSummary";

import DumpExamSimulator from "./pages/DumpExamSimulator";

import FullDumpExamSimulator from "./pages/FullDumpExamSimulator";

import DumpResultsPage from "./pages/DumpResultsPage";

import ErrorBoundary from "./components/ErrorBoundary";

import useProgress from "./hooks/useProgress";

import useExamHistory from "./hooks/useExamHistory";

import useTheme from "./hooks/useTheme";

export default function App() {
  const { progress, recordScore } = useProgress();

  const { history } = useExamHistory();

  const { theme, toggleTheme } = useTheme();

  const [examIsAdaptive, setExamIsAdaptive] = useState(false);

  const [examDomainScores, setExamDomainScores] = useState({});

  const [page, setPage] = useState("dashboard");

  const [selectedDay, setSelectedDay] = useState(null);

  const [examResults, setExamResults] = useState(null);

  const [retakeQuestions, setRetakeQuestions] = useState([]);

  const [retakeResults, setRetakeResults] = useState(null);

  const [dumpResults, setDumpResults] = useState(null);

  const [fullDumpResults, setFullDumpResults] = useState(null);

  return (
    <ErrorBoundary>
      <div>
        <div
          style={{
            padding: 16,

            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",

            borderBottom: "1px solid var(--border)",

            marginBottom: 16
          }}
        >
          <div>
            <button
              className="secondary-btn"
              onClick={() => setPage("dashboard")}
            >
              Dashboard
            </button>
          </div>

          <div
            style={{
              display: "flex",

              gap: 8
            }}
          >
            <button
              className="secondary-btn"
              onClick={() => setPage("dumpExam")}
            >
              Practice Exam (65Q)
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPage("fullDumpExam")}
            >
              Full Exam (168Q)
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPage("history")}
            >
              History
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPage("analytics")}
            >
              Analytics
            </button>

            <button className="secondary-btn" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>

        {page === "dashboard" && (
          <Dashboard
            progress={progress}
            openDumpExam={() => setPage("dumpExam")}
            startAdaptiveExam={() => {
              setExamIsAdaptive(true);
              setExamDomainScores(history[0]?.domainScores || {});
              setPage("exam");
            }}
            openDay={(day) => {
              if (day === 10) {
                setExamIsAdaptive(false);
                setPage("exam");
                return;
              }

              setSelectedDay(day);

              setPage("day");
            }}
          />
        )}

        {page === "day" && (
          <DayView
            day={selectedDay}
            recordScore={recordScore}
            goBack={() => setPage("dashboard")}
          />
        )}

        {page === "exam" && (
          <ExamSimulator
            adaptive={examIsAdaptive}
            domainScores={examDomainScores}
            startResults={(results) => {
              setExamIsAdaptive(false);

              setExamDomainScores({});

              setExamResults(results);

              setPage("results");
            }}
          />
        )}

        {page === "results" && examResults && (
          <ResultsPage
            results={examResults}
            reviewWeakTopics={() => setPage("review")}
            backDashboard={() => setPage("dashboard")}
            startRetake={(questions) => {
              setRetakeQuestions(questions);

              setPage("retake");
            }}
            startAdaptiveExam={(domainScores) => {
              setExamIsAdaptive(true);

              setExamDomainScores(domainScores);

              setPage("exam");
            }}
          />
        )}

        {page === "review" && examResults && (
          <WeakTopicReview
            results={examResults}
            backResults={() => setPage("results")}
            startAdaptiveExam={(domainScores) => {
              setExamIsAdaptive(true);

              setExamDomainScores(domainScores);

              setPage("exam");
            }}
          />
        )}

        {page === "retake" && (
          <RetakeMissedQuestions
            questions={retakeQuestions}
            finishRetake={(results) => {
              setRetakeResults(results);

              setPage("retakeSummary");
            }}
          />
        )}

        {page === "retakeSummary" && retakeResults && (
          <RetakeSummary
            score={retakeResults.score}
            correct={retakeResults.correct}
            total={retakeResults.total}
            backResults={() => setPage("results")}
          />
        )}

        {page === "dumpExam" && (
          <DumpExamSimulator
            startResults={(results) => {
              setDumpResults(results);

              setPage("dumpResults");
            }}
          />
        )}

        {page === "dumpResults" && dumpResults && (
          <DumpResultsPage
            results={dumpResults}
            backDashboard={() => setPage("dashboard")}
          />
        )}

        {page === "fullDumpExam" && (
          <FullDumpExamSimulator
            startResults={(results) => {
              setFullDumpResults(results);

              setPage("fullDumpResults");
            }}
          />
        )}

        {page === "fullDumpResults" && fullDumpResults && (
          <DumpResultsPage
            results={fullDumpResults}
            backDashboard={() => setPage("dashboard")}
          />
        )}

        {page === "history" && (
          <ExamHistoryPage goBack={() => setPage("dashboard")} />
        )}

        {page === "analytics" && (
          <ExamAnalyticsPage goBack={() => setPage("dashboard")} />
        )}
      </div>
    </ErrorBoundary>
  );
}
