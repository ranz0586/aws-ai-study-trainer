import {
  useEffect,
  useMemo
} from "react";

import {
  calculateScore,
  getReadiness
} from "../utils/examUtils";

import {
  calculateDomainScores
} from "../utils/domainScoring";

import {
  weakTopics
} from "../utils/weakTopicDetector";

import DomainScoreCard
from "../components/DomainScoreCard";

import useExamHistory
from "../hooks/useExamHistory";

export default function ResultsPage({
  results,
  reviewWeakTopics,
  backDashboard
}) {

  const {
    addAttempt
  } = useExamHistory();

  const hasResults =
    Boolean(results);

  const scoreData =
    useMemo(() => {

      if (!hasResults) {
        return null;
      }

      return calculateScore(
        results.questions,
        results.answers
      );

    }, [
      hasResults,
      results
    ]);

  const readiness =
    useMemo(() => {

      if (!scoreData) {
        return null;
      }

      return getReadiness(
        scoreData.percent
      );

    }, [scoreData]);

  const domainScores =
    useMemo(() => {

      if (!hasResults) {
        return {};
      }

      return calculateDomainScores(
        results.questions,
        results.answers
      );

    }, [
      hasResults,
      results
    ]);

  const weak =
    useMemo(() => {

      if (!hasResults) {
        return [];
      }

      return weakTopics(
        domainScores
      );

    }, [
      hasResults,
      domainScores
    ]);

  useEffect(() => {

    if (!hasResults) {
      return;
    }

    const key =
      `attempt-${scoreData.percent}-${scoreData.correct}`;

    if (
      sessionStorage.getItem(
        key
      )
    ) {
      return;
    }

    addAttempt({

      score:
        scoreData.percent,

      readiness,

      weakTopics:
        weak,

      domainScores

    });

    sessionStorage.setItem(
      key,
      "saved"
    );

  }, [
    hasResults,
    addAttempt,
    scoreData,
    readiness,
    weak,
    domainScores
  ]);

  if (!hasResults) {

    return (
      <div className="app-container">

        <h1>
          No Results Found
        </h1>

        <button
          className="primary-btn"
          onClick={
            backDashboard
          }
        >
          Dashboard
        </button>

      </div>
    );

  }

  return (
    <div className="app-container">

      <h1>
        Exam Results
      </h1>

      <h2>
        Overall Score:
        {" "}
        {scoreData.percent}%
      </h2>

      <h3>
        {readiness}
      </h3>

      <p>
        Correct:
        {" "}
        {scoreData.correct}
        {" / "}
        {scoreData.total}
      </p>

      <hr />

      <h2>
        Domain Scores
      </h2>

      {Object.entries(
        domainScores
      ).map(
        ([
          domain,
          score
        ]) => (
          <DomainScoreCard
            key={domain}
            domain={domain}
            score={score}
          />
        )
      )}

      <hr />

      <h2>
        Weak Topics
      </h2>

      {weak.length === 0 ? (
        <p>
          None 🎉
        </p>
      ) : (
        <ul>
          {weak.map(
            topic => (
              <li
                key={topic}
              >
                {topic}
              </li>
            )
          )}
        </ul>
      )}

      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 24
        }}
      >

        <button
          className="primary-btn"
          onClick={
            reviewWeakTopics
          }
        >
          Review Weak Topics
        </button>

        <button
          className="secondary-btn"
          onClick={
            backDashboard
          }
        >
          Dashboard
        </button>

      </div>

    </div>
  );
}