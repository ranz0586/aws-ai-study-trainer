export default function
RetakeSummary({
  score,
  correct,
  total,
  backResults
}) {

  return (

    <div className="app-container">

      <h1>
        Retake Results
      </h1>

      <div className="card">

        <h2>
          {score}%
        </h2>

        <p>
          {correct}
          {" / "}
          {total}
          {" "}
          Correct
        </p>

      </div>

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