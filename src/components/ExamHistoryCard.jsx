export default function ExamHistoryCard({
  attempt
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12
      }}
    >
      <h4>
        Attempt
      </h4>

      <p>
        Date:
        {" "}
        {attempt.date}
      </p>

      <p>
        Score:
        {" "}
        {attempt.score}%
      </p>

      <p>
        Readiness:
        {" "}
        {attempt.readiness}
      </p>

      <p>
        Weak Topics:
        {" "}
        {attempt.weakTopics
          ?.join(", ") ||
          "None"}
      </p>
    </div>
  );
}