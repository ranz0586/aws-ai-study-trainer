export default function WeakTopicCard({ topic, score }) {
  return (
    <div
      style={{
        background: "#fee2e2",

        border: "1px solid #fecaca",

        borderRadius: 12,

        padding: 16,

        marginBottom: 12
      }}
    >
      <h3>{topic}</h3>

      <strong>Score: {score}%</strong>

      <p>Recommended Review Required</p>
    </div>
  );
}
