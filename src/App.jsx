import { useState } from "react";

import Dashboard
from "./pages/Dashboard";

import DayView
from "./pages/DayView";

import ExamSimulator
from "./pages/ExamSimulator";

import ResultsPage
from "./pages/ResultsPage";

import WeakTopicReview
from "./pages/WeakTopicReview";

import ExamHistoryPage
from "./pages/ExamHistoryPage";

import ExamAnalyticsPage
from "./pages/ExamAnalyticsPage";

import ErrorBoundary
from "./components/ErrorBoundary";

import useProgress
from "./hooks/useProgress";

import useTheme
from "./hooks/useTheme";

export default function App() {

  const {
    progress,
    recordScore
  } = useProgress();

  const {
    theme,
    toggleTheme
  } = useTheme();

  const [
    page,
    setPage
  ] =
    useState(
      "dashboard"
    );

  const [
    selectedDay,
    setSelectedDay
  ] =
    useState(null);

  const [
    examResults,
    setExamResults
  ] =
    useState(null);

  return (
    <ErrorBoundary>

      <div>

        <div
          style={{
            padding: 16,

            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            borderBottom:
              "1px solid var(--border)",

            marginBottom:
              16
          }}
        >

          <div>

            <button
              className="secondary-btn"
              onClick={() =>
                setPage(
                  "dashboard"
                )
              }
            >
              Dashboard
            </button>

          </div>

          <div
            style={{
              display:
                "flex",

              gap: 8
            }}
          >

            <button
              className="secondary-btn"
              onClick={() =>
                setPage(
                  "history"
                )
              }
            >
              History
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                setPage(
                  "analytics"
                )
              }
            >
              Analytics
            </button>

            <button
              className="secondary-btn"
              onClick={
                toggleTheme
              }
            >
              {theme ===
              "light"
                ? "🌙 Dark"
                : "☀️ Light"}
            </button>

          </div>

        </div>

        {page ===
          "dashboard" && (
          <Dashboard
            progress={
              progress
            }
            openDay={(
              day
            ) => {

              if (
                day === 10
              ) {

                setPage(
                  "exam"
                );

                return;

              }

              setSelectedDay(
                day
              );

              setPage(
                "day"
              );

            }}
          />
        )}

        {page ===
          "day" && (
          <DayView
            day={
              selectedDay
            }
            recordScore={
              recordScore
            }
            goBack={() =>
              setPage(
                "dashboard"
              )
            }
          />
        )}

        {page ===
          "exam" && (
          <ExamSimulator
            startResults={
              (
                results
              ) => {

                setExamResults(
                  results
                );

                setPage(
                  "results"
                );

              }
            }
          />
        )}

        {page ===
          "results" &&
          examResults && (
            <ResultsPage
              results={
                examResults
              }
              reviewWeakTopics={() =>
                setPage(
                  "review"
                )
              }
              backDashboard={() =>
                setPage(
                  "dashboard"
                )
              }
            />
          )}

        {page ===
          "review" &&
          examResults && (
            <WeakTopicReview
              results={
                examResults
              }
              backResults={() =>
                setPage(
                  "results"
                )
              }
            />
          )}

        {page ===
          "history" && (
          <ExamHistoryPage
            goBack={() =>
              setPage(
                "dashboard"
              )
            }
          />
        )}

        {page ===
          "analytics" && (
          <ExamAnalyticsPage
            goBack={() =>
              setPage(
                "dashboard"
              )
            }
          />
        )}

      </div>

    </ErrorBoundary>
  );
}