export default function
StudyRecommendationCard({
  recommendation
}) {

  return (
    <div className="card">

      <h3>
        {recommendation.domain}
      </h3>

      <p>
        Priority:
        {" "}
        <strong>
          {
            recommendation.priority
          }
        </strong>
      </p>

      <p>
        Review Day(s):
        {" "}
        {
          recommendation.reviewDays.join(
            ", "
          )
        }
      </p>

    </div>
  );
}