export default function StudyRecommendationCard({ recommendation }) {
  return (
    <div className="card">
      <h3>Priority {recommendation.priority}</h3>

      <p>
        <strong>{recommendation.domain}</strong>
      </p>

      <p>Score: {recommendation.score}%</p>

      <p>Review Day(s): {recommendation.reviewDays.join(", ")}</p>
    </div>
  );
}
