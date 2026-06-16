import {
  useState
}
from "react";

import {
  questionBank
}
from "../data/exam";

import ExamQuestion
from "../components/ExamQuestion";

import ExamTimer
from "../components/ExamTimer";

import {
  buildExam
}
from "../utils/examBuilder";

import {
  buildAdaptiveExam
}
from "../utils/adaptiveExamBuilder";

export default function ExamSimulator({
  startResults,
  adaptive = false,
  domainScores = {}
}) {

  const [
    questions
  ] = useState(() => {

    if (
      adaptive
    ) {

      return buildAdaptiveExam({
        domainScores,
        count: 60
      });

    }

    return buildExam(
      questionBank,
      65
    );

  });

  const [
    answers,
    setAnswers
  ] =
    useState({});

  const [
    seconds,
    setSeconds
  ] =
    useState(3600);

  const submitExam =
    () => {

      startResults({
        questions,
        answers,
        adaptive
      });

    };

  return (
    <div className="app-container">

      <h1>

        {adaptive
          ? "Adaptive Practice Exam"
          : "AWS AI Practitioner Exam"}

      </h1>

      {adaptive && (

        <div className="card">

          <p>
            This exam is
            weighted toward
            weak domains
            identified from
            prior attempts.
          </p>

        </div>

      )}

      <ExamTimer
        seconds={seconds}
        setSeconds={
          setSeconds
        }
      />

      <p>
        Questions Answered:
        {" "}
        {
          Object.keys(
            answers
          ).length
        }
        {" / "}
        {
          questions.length
        }
      </p>

      {questions.map(
        (
          question,
          index
        ) => (

          <ExamQuestion
            key={
              question.id
            }
            question={
              question
            }
            questionNumber={
              index + 1
            }
            selectedAnswer={
              answers[index]
            }
            onSelect={(
              answer
            ) =>
              setAnswers(
                prev => ({
                  ...prev,
                  [index]:
                    answer
                })
              )
            }
          />

        )
      )}

      <div
        className="exam-actions"
      >

        <button
          className="primary-btn"
          onClick={
            submitExam
          }
        >
          Submit Exam
        </button>

      </div>

    </div>
  );

}