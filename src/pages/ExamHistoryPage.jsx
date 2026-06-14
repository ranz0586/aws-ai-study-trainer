import useExamHistory
from "../hooks/useExamHistory";

import ExamHistoryCard
from "../components/ExamHistoryCard";

export default function ExamHistoryPage({
  goBack
}) {

  const {
    history,
    clearHistory
  } =
    useExamHistory();

  return (
    <div className="app-container">

      <button
        className="secondary-btn"
        onClick={goBack}
      >
        ← Dashboard
      </button>

      <h1>
        Exam History
      </h1>

      <p>
        Total Attempts:
        {" "}
        {history.length}
      </p>

      {history.length ===
      0 ? (
        <p>
          No attempts yet.
        </p>
      ) : (
        history.map(
          attempt => (
            <ExamHistoryCard
              key={
                attempt.id
              }
              attempt={
                attempt
              }
            />
          )
        )
      )}

      {history.length >
        0 && (
        <button
          className="secondary-btn"
          onClick={
            clearHistory
          }
        >
          Clear History
        </button>
      )}

    </div>
  );
}