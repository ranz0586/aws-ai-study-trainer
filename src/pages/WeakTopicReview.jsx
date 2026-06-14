import {
  calculateDomainScores
} from "../utils/domainScoring";

import {
  weakTopics
} from "../utils/weakTopicDetector";

import ReviewQuestion
from "../components/ReviewQuestion";

import WeakTopicCard
from "../components/WeakTopicCard";

export default function WeakTopicReview({
  results,
  backResults
}) {

  const domainScores =
    calculateDomainScores(
      results.questions,
      results.answers
    );

  const weak =
    weakTopics(
      domainScores
    );

  const incorrectQuestions =
    results.questions
      .map(
        (
          question,
          index
        ) => ({
          question,
          index
        })
      )
      .filter(
        item =>
          results.answers[
            item.index
          ] !==
          item.question.answer
      );

  return (
    <div className="app-container">

      <h1>
        Weak Topic Review
      </h1>

      <hr />

      <h2>
        Weak Domains
      </h2>

      {weak.length === 0 ? (
        <p>
          No weak domains 🎉
        </p>
      ) : (
        weak.map(
          topic => (
            <WeakTopicCard
              key={topic}
              topic={topic}
              score={
                domainScores[
                  topic
                ]
              }
            />
          )
        )
      )}

      <hr />

      <h2>
        Review Incorrect Questions
      </h2>

      {incorrectQuestions.length === 0 ? (
        <p>
          Perfect Score 🎉
        </p>
      ) : (
        incorrectQuestions.map(
          item => (
            <ReviewQuestion
              key={
                item.question.id
              }
              question={
                item.question
              }
              userAnswer={
                results.answers[
                  item.index
                ]
              }
            />
          )
        )
      )}

      <button
        className="primary-btn"
        onClick={
          backResults
        }
      >
        Back To Results
      </button>

    </div>
  );
}