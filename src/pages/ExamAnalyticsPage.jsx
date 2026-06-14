import useExamHistory
from "../hooks/useExamHistory";

import AttemptAnalyticsCard
from "../components/AttemptAnalyticsCard";

import WeakTopicTrendCard
from "../components/WeakTopicTrendCard";

import {
  getAverageScore,
  getTrendDirection,
  buildWeakTopicTrends
}
from "../utils/historyAnalytics";

export default function ExamAnalyticsPage({
  goBack
}) {

  const {
    history,
    bestScore,
    latestScore,
    totalAttempts
  } =
    useExamHistory();

  const average =
    getAverageScore(
      history
    );

  const trend =
    getTrendDirection(
      history
    );

  const domainTrends =
    buildWeakTopicTrends(
      history
    );

  return (
    <div className="app-container">

      <button
        className="secondary-btn"
        onClick={goBack}
      >
        ← Dashboard
      </button>

      <h1>
        Exam Analytics
      </h1>

      <div
        className="responsive-grid"
        style={{
          marginBottom: 24
        }}
      >

        <AttemptAnalyticsCard
          title="Best Score"
          value={`${bestScore}%`}
        />

        <AttemptAnalyticsCard
          title="Latest Score"
          value={`${latestScore}%`}
        />

        <AttemptAnalyticsCard
          title="Average Score"
          value={`${average}%`}
        />

        <AttemptAnalyticsCard
          title="Trend"
          value={trend}
        />

        <AttemptAnalyticsCard
          title="Attempts"
          value={
            totalAttempts
          }
        />

      </div>

      <h2>
        Domain Trends
      </h2>

      {Object.entries(
        domainTrends
      ).map(
        (
          [
            topic,
            scores
          ]
        ) => (
          <WeakTopicTrendCard
            key={topic}
            topic={topic}
            scores={scores}
          />
        )
      )}

    </div>
  );
}