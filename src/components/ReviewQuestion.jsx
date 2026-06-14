export default function ReviewQuestion({
  question,
  userAnswer
}) {
  const correctAnswer =
    question.options[
      question.answer
    ];

  const selectedAnswer =
    userAnswer !==
    undefined
      ? question.options[
          userAnswer
        ]
      : "No Answer";

  return (
    <div
      style={{
        background:
          "var(--surface)",

        border:
          "1px solid var(--border)",

        borderRadius: 12,

        padding: 20,

        marginBottom: 20
      }}
    >
      <h3>
        {question.question}
      </h3>

      <p>
        <strong>
          Your Answer:
        </strong>
        {" "}
        {selectedAnswer}
      </p>

      <p>
        <strong>
          Correct Answer:
        </strong>
        {" "}
        {correctAnswer}
      </p>

      <p>
        <strong>
          Explanation:
        </strong>
        {" "}
        {
          question.explanation
        }
      </p>

      <p>
        <strong>
          AWS Exam Tip:
        </strong>
        {" "}
        {
          question.awsExamTip
        }
      </p>
    </div>
  );
}