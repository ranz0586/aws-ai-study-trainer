export default function WeakDomainTrend({ domain, history }) {
  return (
    <div
      style={{
        background: "white",

        border: "1px solid #ddd",

        borderRadius: 12,

        padding: 16,

        marginBottom: 12
      }}
    >
      <h3>{domain}</h3>

      {history.map((item) => (
        <div key={item.date}>
          {item.date}
          {" - "}
          {item.score}%
        </div>
      ))}
    </div>
  );
}
