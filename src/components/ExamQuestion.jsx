export default function ExamQuestion({
  question,
  questionNumber,
  selectedAnswer,
  onSelect
}) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20
      }}
    >
      <div
        style={{
          marginBottom: 12,
          color: "#6b7280"
        }}
      >
        Question {questionNumber}
      </div>

      <h3>
        {question.question}
      </h3>

      {question.options.map(
        (
          option,
          index
        ) => (
          <button
            key={index}
            onClick={() =>
              onSelect(index)
            }
            style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              marginBottom: 10,
              padding: 14,

              background:
                selectedAnswer ===
                index
                  ? "#dbeafe"
                  : "#ffffff",

              border:
                selectedAnswer ===
                index
                  ? "2px solid #2563eb"
                  : "1px solid #d1d5db",

              borderRadius: 8,

              color: "#111827"
            }}
          >
            {option}
          </button>
        )
      )}
    </div>
  );
}