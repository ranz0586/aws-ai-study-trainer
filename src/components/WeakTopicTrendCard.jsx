export default function WeakTopicTrendCard({
  topic,
  scores
}) {
  return (
    <div
      style={{
        background:
          "var(--surface)",

        border:
          "1px solid var(--border)",

        borderRadius: 12,

        padding: 20,

        marginBottom: 16
      }}
    >
      <h3>
        {topic}
      </h3>

      <p>
        Trend:
      </p>

      <ul>
        {scores.map(
          (
            score,
            index
          ) => (
            <li
              key={index}
            >
              Attempt{" "}
              {index + 1}
              :
              {" "}
              {score}%
            </li>
          )
        )}
      </ul>
    </div>
  );
}