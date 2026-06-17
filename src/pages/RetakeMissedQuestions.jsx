import { useState } from "react";

import ExamQuestion from "../components/ExamQuestion";

export default function RetakeMissedQuestions({ questions, finishRetake }) {
  const [answers, setAnswers] = useState({});

  const submitRetake = () => {
    const correct = questions.filter(
      (question, index) => answers[index] === question.answer
    ).length;

    const score = questions.length
      ? Math.round((correct / questions.length) * 100)
      : 0;

    finishRetake({
      score,
      correct,
      total: questions.length
    });
  };

  return (
    <div className="app-container">
      <h1>Retake Missed Questions</h1>

      <p>Questions: {questions.length}</p>

      {questions.map((question, index) => (
        <ExamQuestion
          key={question.id}
          question={question}
          questionNumber={index + 1}
          selectedAnswer={answers[index]}
          onSelect={(answer) =>
            setAnswers((prev) => ({
              ...prev,
              [index]: answer
            }))
          }
        />
      ))}

      <div className="exam-actions">
        <button className="primary-btn" onClick={submitRetake}>
          Submit Retake
        </button>
      </div>
    </div>
  );
}
