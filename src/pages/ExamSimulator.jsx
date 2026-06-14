import {
  useMemo,
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

export default function ExamSimulator({
  startResults
}) {

  const questions =
    useMemo(
      () =>
        buildExam(
          questionBank,
          60
        ),
      []
    );

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
        answers
      });

    };

  return (
    <div className="app-container">

      <h1>
        AWS AI Practitioner Exam
      </h1>

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
        {questions.length}
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