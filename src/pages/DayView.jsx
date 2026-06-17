import { useState } from "react";

import { curriculum } from "../data/curriculum";

import LessonCard from "../components/LessonCard";
import Flashcard from "../components/Flashcard";
import KnowledgeCheck from "../components/KnowledgeCheck";
import ScenarioQuestion from "../components/ScenarioQuestion";

export default function DayView({ day, recordScore, goBack }) {
  const content = curriculum[day];

  const [knowledgeResults, setKnowledgeResults] = useState([]);

  const [scenarioResults, setScenarioResults] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  if (!content) {
    return (
      <div>
        <button onClick={goBack}>← Dashboard</button>

        <h2>Curriculum not available yet</h2>
      </div>
    );
  }

  const totalQuestions = content.checks.length + content.scenarios.length;

  const correctAnswers =
    knowledgeResults.filter(Boolean).length +
    scenarioResults.filter(Boolean).length;

  const percent =
    totalQuestions === 0
      ? 0
      : Math.round((correctAnswers / totalQuestions) * 100);

  const passed = percent >= 70;

  const allAnswered =
    knowledgeResults.length === content.checks.length &&
    scenarioResults.length === content.scenarios.length;

  const submitDay = () => {
    setSubmitted(true);

    if (passed) {
      recordScore(day, percent);
    }
  };

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "auto",
        padding: 20
      }}
    >
      <button onClick={goBack}>← Dashboard</button>

      <h1>
        Day {day}: {content.title}
      </h1>

      <hr />

      {/* LESSONS */}

      <h2>📚 Lessons</h2>

      {content.lessons.map((lesson, index) => (
        <LessonCard key={index} lesson={lesson} />
      ))}

      <hr />

      {/* FLASHCARDS */}

      <h2>🧠 Flashcards</h2>

      <div
        style={{
          display: "grid",

          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",

          gap: 16,

          marginBottom: 24
        }}
      >
        {content.flashcards.map((card, index) => (
          <Flashcard key={index} card={card} />
        ))}
      </div>

      <hr />

      {/* KNOWLEDGE CHECK */}

      <h2>✅ Knowledge Checks</h2>

      {content.checks.map((question, index) => (
        <KnowledgeCheck
          key={index}
          item={question}
          onResult={(correct) => {
            setKnowledgeResults((prev) => {
              const copy = [...prev];

              copy[index] = correct;

              return copy;
            });
          }}
        />
      ))}

      <hr />

      {/* SCENARIOS */}

      <h2>🎯 AWS Scenario Practice</h2>

      {content.scenarios.map((scenario, index) => (
        <ScenarioQuestion
          key={index}
          item={scenario}
          onResult={(correct) => {
            setScenarioResults((prev) => {
              const copy = [...prev];

              copy[index] = correct;

              return copy;
            });
          }}
        />
      ))}

      <hr />

      {/* SCORE */}

      <h2>Current Score: {percent}%</h2>

      <p>
        Correct: {correctAnswers}
        {" / "}
        {totalQuestions}
      </p>

      {!submitted && (
        <button
          disabled={!allAnswered}
          onClick={submitDay}
          style={{
            padding: "12px 20px"
          }}
        >
          Submit Day
        </button>
      )}

      {submitted && (
        <>
          {passed ? (
            <div>
              <h2
                style={{
                  color: "green"
                }}
              >
                PASS ✅
              </h2>

              <p>You unlocked Day {day + 1}</p>
            </div>
          ) : (
            <div>
              <h2
                style={{
                  color: "red"
                }}
              >
                FAIL ❌
              </h2>

              <p>Minimum score: 70%</p>

              <p>Review the lessons and retry.</p>

              <button onClick={() => window.location.reload()}>
                Retry Day
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
