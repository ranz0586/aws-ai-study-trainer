export default function ProgressBar({ value }) {
  return (
    <div
      style={{
        width: "100%",
        height: 24,

        background: "#e5e7eb",

        borderRadius: 12,

        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: `${value}%`,

          height: "100%",

          background: value >= 70 ? "#16a34a" : "#2563eb",

          transition: "0.3s ease"
        }}
      />
    </div>
  );
}
