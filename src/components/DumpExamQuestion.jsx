import { isAnswerCorrect } from "../utils/dumpExamScoring";

export default function DumpExamQuestion({
  question,
  questionNumber,
  selectedAnswer,
  onSelect,
  revealed,
  onReveal
}) {
  const isMultiple =
    question.type === "multiple" || question.answers.length >= 2;
  const requiredCount = isMultiple ? question.answers.length : 1;

  const isSelected = (index) => {
    if (isMultiple) {
      return Array.isArray(selectedAnswer) && selectedAnswer.includes(index);
    }
    return selectedAnswer === index;
  };

  const handleClick = (index) => {
    if (revealed) return;
    if (isMultiple) {
      const current = Array.isArray(selectedAnswer) ? selectedAnswer : [];
      if (current.includes(index)) {
        onSelect(current.filter((i) => i !== index));
      } else {
        onSelect([...current, index]);
      }
    } else {
      onSelect(index);
      onReveal();
    }
  };

  const hasSelection = isMultiple
    ? Array.isArray(selectedAnswer) && selectedAnswer.length >= requiredCount
    : selectedAnswer !== undefined;

  const wasCorrect = revealed && isAnswerCorrect(question, selectedAnswer);

  const getOptionStyle = (index) => {
    const isCorrect = question.answers.includes(index);
    const selected = isSelected(index);

    if (!revealed) {
      if (selected) {
        return {
          bg: "#dbeafe",
          border: "2px solid #2563eb",
          indicatorBorder: "#2563eb",
          indicatorBg: "#2563eb",
          showMark: true,
          markColor: "white"
        };
      }
      return {
        bg: "#ffffff",
        border: "1px solid #d1d5db",
        indicatorBorder: "#9ca3af",
        indicatorBg: "white",
        showMark: false
      };
    }

    if (isCorrect && selected) {
      return {
        bg: "#dcfce7",
        border: "2px solid #16a34a",
        indicatorBorder: "#16a34a",
        indicatorBg: "#16a34a",
        showMark: true,
        markColor: "white",
        markChar: "✓"
      };
    }
    if (isCorrect && !selected) {
      return {
        bg: "#f0fdf4",
        border: "2px solid #16a34a",
        indicatorBorder: "#16a34a",
        indicatorBg: "white",
        showMark: true,
        markColor: "#16a34a",
        markChar: "✓"
      };
    }
    if (!isCorrect && selected) {
      return {
        bg: "#fee2e2",
        border: "2px solid #dc2626",
        indicatorBorder: "#dc2626",
        indicatorBg: "#dc2626",
        showMark: true,
        markColor: "white",
        markChar: "✗"
      };
    }
    return {
      bg: "#f9fafb",
      border: "1px solid #e5e7eb",
      indicatorBorder: "#d1d5db",
      indicatorBg: "#f9fafb",
      showMark: false
    };
  };

  return (
    <div
      style={{
        background: "white",
        border: revealed
          ? `2px solid ${wasCorrect ? "#86efac" : "#fca5a5"}`
          : "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20
      }}
    >
      <div
        style={{
          marginBottom: 8,
          color: "#6b7280",
          display: "flex",
          gap: 8,
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <span>Question {questionNumber}</span>

        {isMultiple && (
          <span
            style={{
              fontSize: 12,
              background: "#fef3c7",
              color: "#92400e",
              padding: "2px 8px",
              borderRadius: 4
            }}
          >
            Select {requiredCount} answers
          </span>
        )}

        {revealed && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: wasCorrect ? "#16a34a" : "#dc2626"
            }}
          >
            {wasCorrect ? "✅ Correct" : "❌ Incorrect"}
          </span>
        )}
      </div>

      <p style={{ fontWeight: 600, marginBottom: 16, lineHeight: 1.5 }}>
        {question.question}
      </p>

      {question.options.map((option, index) => {
        const s = getOptionStyle(index);

        return (
          <button
            key={index}
            onClick={() => handleClick(index)}
            disabled={revealed}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              width: "100%",
              textAlign: "left",
              marginBottom: 10,
              padding: "12px 14px",
              background: s.bg,
              border: s.border,
              borderRadius: 8,
              color: "#111827",
              cursor: revealed ? "default" : "pointer",
              transition: "background 0.15s, border 0.15s"
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: isMultiple ? 4 : "50%",
                border: `2px solid ${s.indicatorBorder}`,
                background: s.indicatorBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 1
              }}
            >
              {s.showMark &&
                (s.markChar ? (
                  <span
                    style={{
                      fontSize: 11,
                      color: s.markColor,
                      fontWeight: 700,
                      lineHeight: 1
                    }}
                  >
                    {s.markChar}
                  </span>
                ) : isMultiple ? (
                  <span
                    style={{ fontSize: 11, color: "white", lineHeight: 1 }}
                  >
                    ✓
                  </span>
                ) : (
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "white"
                    }}
                  />
                ))}
            </div>

            <span style={{ lineHeight: 1.4 }}>{option}</span>
          </button>
        );
      })}

      {isMultiple && !revealed && (
        <>
          {!hasSelection && (
            <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 6 }}>
              {Array.isArray(selectedAnswer) && selectedAnswer.length > 0
                ? `Select ${requiredCount - selectedAnswer.length} more answer${requiredCount - selectedAnswer.length === 1 ? "" : "s"}`
                : `Select ${requiredCount} answers to check`}
            </p>
          )}
          <button
            className="primary-btn"
            onClick={onReveal}
            disabled={!hasSelection}
            style={{ marginTop: 2, opacity: hasSelection ? 1 : 0.4 }}
          >
            Check Answer
          </button>
        </>
      )}

      {revealed && question.explanation && (
        <div
          style={{
            marginTop: 12,
            padding: "12px 14px",
            background: "#f8fafc",
            borderRadius: 8,
            borderLeft: "3px solid #2563eb"
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#374151",
              whiteSpace: "pre-line",
              margin: 0,
              lineHeight: 1.6
            }}
          >
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
