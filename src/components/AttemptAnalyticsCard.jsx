export default function AttemptAnalyticsCard({ title, value }) {
  return (
    <div
      style={{
        background: "var(--surface)",

        border: "1px solid var(--border)",

        borderRadius: 12,

        padding: 20,

        textAlign: "center"
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}
