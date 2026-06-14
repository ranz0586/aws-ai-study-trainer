import { useState } from "react";

export default function KnowledgeCheck({
  item,
  onResult
}) {
  const [answered, setAnswered] =
    useState(false);

  const [selected, setSelected] =
    useState(null);

  const choose = (index) => {
    if (answered) return;

    setAnswered(true);
    setSelected(index);

    onResult?.(
      index === item.answer
    );
  };

  const isCorrect =
    selected === item.answer;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        marginBottom: 20
      }}
    >
      <h4>{item.q}</h4>

      {item.options.map(
        (option, index) => (
          <button
            key={index}
            onClick={() =>
              choose(index)
            }
            disabled={answered}
            style={{
              display: "block",
              marginBottom: 8,
              width: "100%",
              textAlign: "left",
              padding: 10,

              background:
                answered &&
                index === item.answer
                  ? "#dcfce7"
                  : answered &&
                    index === selected
                  ? "#fee2e2"
                  : "white"
            }}
          >
            {option}
          </button>
        )
      )}

      {answered && (
        <div
          style={{
            marginTop: 12
          }}
        >
          {isCorrect ? (
            <p
              style={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              Correct ✅
            </p>
          ) : (
            <p
              style={{
                color: "red",
                fontWeight: "bold"
              }}
            >
              Incorrect ❌
            </p>
          )}

          <p>
            Correct Answer:
            {" "}
            {
              item.options[
                item.answer
              ]
            }
          </p>
        </div>
      )}
    </div>
  );
}