import { useState } from "react";

import { awsAiQuestions } from "../data/awsAiQuestions_dump";
import DumpExamQuestion from "../components/DumpExamQuestion";
import ExamTimer from "../components/ExamTimer";
import { shuffle } from "../utils/examBuilder";

export default function FullDumpExamSimulator({ startResults }) {
  const [questions] = useState(() => {
    const shuffled = shuffle(awsAiQuestions);
    const seen = new Set();
    const unique = [];

    for (const q of shuffled) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        unique.push(q);
      }
    }

    return unique;
  });

  const [answers, setAnswers] = useState({});

  const [revealed, setRevealed] = useState({});

  const [seconds, setSeconds] = useState(10800);

  const revealQuestion = (index) =>
    setRevealed((prev) => ({ ...prev, [index]: true }));

  const checkedCount = Object.keys(revealed).length;

  return (
    <div className="app-container">
      <h1>AWS AI Practitioner Full Practice Exam</h1>

      <ExamTimer seconds={seconds} setSeconds={setSeconds} />

      <p style={{ marginBottom: 20 }}>
        Checked: {checkedCount} / {questions.length}
      </p>

      {questions.map((question, index) => (
        <DumpExamQuestion
          key={question.id}
          question={question}
          questionNumber={index + 1}
          selectedAnswer={answers[index]}
          onSelect={(answer) =>
            setAnswers((prev) => ({ ...prev, [index]: answer }))
          }
          revealed={!!revealed[index]}
          onReveal={() => revealQuestion(index)}
        />
      ))}

      <div className="exam-actions">
        <button
          className="primary-btn"
          onClick={() => startResults({ questions, answers })}
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
}
