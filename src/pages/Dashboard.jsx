import { COURSE }
from "../data/course";

import DayCard
from "../components/DayCard";

import ProgressBar
from "../components/ProgressBar";

import ScoreBadge
from "../components/ScoreBadge";

import PageHeader
from "../components/PageHeader";

import TrendCard
from "../components/TrendCard";

import useExamHistory
from "../hooks/useExamHistory";

export default function Dashboard({
  progress,
  openDay
}) {

  const {
    history,
    bestScore,
    latestScore
  } = useExamHistory();

  const readiness =
    Math.round(
      (
        progress.completedDays
          .length /
        10
      ) * 100
    );

  return (
    <div className="app-container">

      <PageHeader
        title="AWS AI Practitioner Trainer"
        subtitle="10-Day Certification System"
      />

      <ProgressBar
        value={readiness}
      />

      <div
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      >
        <ScoreBadge
          score={readiness}
        />
      </div>

      <div
        className="responsive-grid"
        style={{
          marginBottom: 32
        }}
      >
        <TrendCard
          title="Best Score"
          value={`${bestScore}%`}
        />

        <TrendCard
          title="Latest Score"
          value={`${latestScore}%`}
        />

        <TrendCard
          title="Attempts"
          value={history.length}
        />
      </div>

      <div
        className="responsive-grid"
      >
        {COURSE.map(
          day => (
            <DayCard
              key={day.day}
              {...day}
              unlocked={
                day.day <=
                progress.currentDay
              }
              onOpen={() =>
                openDay(day.day)
              }
            />
          )
        )}
      </div>

    </div>
  );
}