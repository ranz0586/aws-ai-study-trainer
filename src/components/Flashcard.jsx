import { useState } from "react";

export default function Flashcard({
  card
}) {
  const [revealed, setRevealed] =
    useState(false);

  return (
    <div
      onClick={() =>
        setRevealed(!revealed)
      }
      style={{
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        minHeight: 140,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        textAlign: "center",

        cursor: "pointer",

        transition: "0.2s",

        boxShadow:
          "0 2px 6px rgba(0,0,0,0.05)"
      }}
    >
      {!revealed ? (
        <div>
          <small
            style={{
              color: "#6b7280"
            }}
          >
            Question
          </small>

          <h3>
            {card.q}
          </h3>
        </div>
      ) : (
        <div>
          <small
            style={{
              color: "#16a34a"
            }}
          >
            Answer
          </small>

          <h3>
            {card.a}
          </h3>
        </div>
      )}
    </div>
  );
}