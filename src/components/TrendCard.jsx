export default function TrendCard({
  title,
  value
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        textAlign: "center"
      }}
    >
      <h3>
        {title}
      </h3>

      <h1>
        {value}
      </h1>
    </div>
  );
}