export default function ScoreBadge({ score }) {
  let bg = "#fef3c7";

  let color = "#92400e";

  if (score >= 70) {
    bg = "#dcfce7";
    color = "#166534";
  }

  return (
    <span
      style={{
        background: bg,

        color,

        padding: "8px 12px",

        borderRadius: 999,

        fontWeight: 700
      }}
    >
      {score}%
    </span>
  );
}
