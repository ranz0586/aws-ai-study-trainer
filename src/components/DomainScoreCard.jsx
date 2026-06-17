export default function DomainScoreCard({ domain, score }) {
  const color = score >= 70 ? "var(--success)" : "var(--danger)";

  return (
    <div
      style={{
        background: "var(--surface)",

        border: "1px solid var(--border)",

        borderRadius: 12,

        padding: 16,

        marginBottom: 12
      }}
    >
      <h3>{domain}</h3>

      <strong
        style={{
          color
        }}
      >
        {score}%
      </strong>
    </div>
  );
}
