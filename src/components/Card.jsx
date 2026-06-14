export default function Card({
  children
}) {
  return (
    <div
      style={{
        background: "white",

        border:
          "1px solid #e5e7eb",

        borderRadius: 12,

        padding: 20,

        marginBottom: 20,

        boxShadow:
          "0 2px 8px rgba(0,0,0,0.06)"
      }}
    >
      {children}
    </div>
  );
}