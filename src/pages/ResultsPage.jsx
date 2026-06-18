import { useEffect, useMemo } from "react";

import DomainScoreCard from "../components/DomainScoreCard";

import StudyRecommendationCard from "../components/StudyRecommendationCard";

import { calculateDomainScores } from "../utils/domainScoring";

import { generateRemediationPlan } from "../utils/remediationEngine";

import useExamHistory from "../hooks/useExamHistory";

export default function ResultsPage({
  results,
  reviewWeakTopics,
  backDashboard,
  startRetake,
  startAdaptiveExam
}) {
  const { addAttempt } = useExamHistory();

  const questions = results?.questions;

  const answers = results?.answers;

  const correct = questions
    ? questions.filter((question, index) => answers[index] === question.answer)
        .length
    : 0;

  const score = questions?.length
    ? Math.round((correct / questions.length) * 100)
    : 0;

  const passed = score >= 70;

  const domainScores = useMemo(() => {
    if (!questions || !answers) {
      return {};
    }

    return calculateDomainScores(questions, answers);
  }, [questions, answers]);

  const incorrectQuestions = useMemo(() => {
    if (!questions || !answers) {
      return [];
    }

    return questions.filter(
      (question, index) => answers[index] !== question.answer
    );
  }, [questions, answers]);

  const remediation = useMemo(
    () => generateRemediationPlan(domainScores, incorrectQuestions),
    [domainScores, incorrectQuestions]
  );

  useEffect(() => {
    if (!results) return;

    addAttempt({
      score,
      passed,
      domainScores
    });
  }, [results, score, passed, domainScores, addAttempt]);

  if (!results) {
    return (
      <div className="app-container">
        <h1>No Results Available</h1>

        <button className="primary-btn" onClick={backDashboard}>
          Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Exam Results</h1>

      <div className="card">
        <h2>{score}%</h2>

        <p>
          {correct}
          {" / "}
          {questions.length} Correct
        </p>

        <h3>{passed ? "✅ PASS" : "❌ FAIL"}</h3>
      </div>

      <h2>Domain Breakdown</h2>

      {Object.entries(domainScores).map(([domain, value]) => (
        <DomainScoreCard key={domain} domain={domain} score={value} />
      ))}

      <hr />

      <h2>Personalized Study Plan</h2>

      {remediation.recommendations.length === 0 ? (
        <div className="card">
          <h3>🎉 Exam Ready</h3>

          <p>No weak domains detected.</p>
        </div>
      ) : (
        remediation.recommendations.map((item) => (
          <StudyRecommendationCard key={item.domain} recommendation={item} />
        ))
      )}

      <div className="card">
        <h3>Retake Questions</h3>

        <p>{remediation.retakeQuestions} missed questions identified.</p>

        {incorrectQuestions.length > 0 && (
          <button
            className="primary-btn"
            onClick={() => startRetake(incorrectQuestions)}
          >
            Retake Missed Questions ({incorrectQuestions.length})
          </button>
        )}
      </div>

      <div className="exam-actions">
        <button className="primary-btn" onClick={reviewWeakTopics}>
          Review Weak Topics
        </button>

        {remediation.recommendations.length > 0 && (
          <button
            className="primary-btn"
            onClick={() => startAdaptiveExam(domainScores)}
          >
            Start Adaptive Exam
          </button>
        )}

        <button className="secondary-btn" onClick={backDashboard}>
          Dashboard
        </button>
      </div>
    </div>
  );
}
