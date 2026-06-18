import { useMemo } from "react";

import DomainScoreCard from "../components/DomainScoreCard";
import {
  isAnswerCorrect,
  calculateDumpDomainScores
} from "../utils/dumpExamScoring";

export default function DumpResultsPage({ results, backDashboard }) {
  const { questions, answers } = results;

  const totalCorrect = useMemo(
    () => questions.filter((q, i) => isAnswerCorrect(q, answers[i])).length,
    [questions, answers]
  );

  const score = Math.round((totalCorrect / questions.length) * 100);

  const passed = score >= 70;

  const domainScores = useMemo(
    () => calculateDumpDomainScores(questions, answers),
    [questions, answers]
  );

  return (
    <div className="app-container">
      <h1>Exam Results</h1>

      <div className="card">
        <h2>{score}%</h2>

        <p>
          {totalCorrect} / {questions.length} Correct
        </p>

        <h3>{passed ? "✅ PASS" : "❌ FAIL"}</h3>
      </div>

      <h2>Domain Breakdown</h2>

      {Object.entries(domainScores).map(([domain, value]) => (
        <DomainScoreCard key={domain} domain={domain} score={value} />
      ))}

      <hr />

      <h2>Question Review</h2>

      {questions.map((question, index) => {
        const wasCorrect = isAnswerCorrect(question, answers[index]);
        const userAnswer = answers[index];

        const correctText = question.answers
          .map((a) => question.options[a])
          .join(" | ");

        const userText = Array.isArray(userAnswer)
          ? userAnswer.map((a) => question.options[a]).join(" | ")
          : userAnswer !== undefined
          ? question.options[userAnswer]
          : "Not answered";

        return (
          <div
            key={question.id}
            style={{
              border: `1px solid ${wasCorrect ? "#86efac" : "#fca5a5"}`,
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              background: wasCorrect ? "#f0fdf4" : "#fff1f2"
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
              <span>Q{index + 1}</span>

              <span>{wasCorrect ? "✅ Correct" : "❌ Incorrect"}</span>

              {question.type === "multiple" && (
                <span
                  style={{
                    fontSize: 12,
                    background: "#fef3c7",
                    color: "#92400e",
                    padding: "2px 6px",
                    borderRadius: 4
                  }}
                >
                  Multiple answers
                </span>
              )}
            </div>

            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              {question.question}
            </p>

            <p style={{ color: "#374151", marginBottom: 4 }}>
              <strong>Correct:</strong> {correctText}
            </p>

            {!wasCorrect && (
              <p style={{ color: "#374151", marginBottom: 4 }}>
                <strong>Your answer:</strong> {userText}
              </p>
            )}

            {question.explanation && (
              <details style={{ marginTop: 8 }}>
                <summary
                  style={{ cursor: "pointer", color: "#2563eb", fontSize: 14 }}
                >
                  Show explanation
                </summary>

                <p
                  style={{
                    marginTop: 8,
                    color: "#374151",
                    fontSize: 14,
                    whiteSpace: "pre-line"
                  }}
                >
                  {question.explanation}
                </p>
              </details>
            )}
          </div>
        );
      })}

      <div className="exam-actions">
        <button className="secondary-btn" onClick={backDashboard}>
          Dashboard
        </button>
      </div>
    </div>
  );
}
