export default function AdaptiveExamCard({ weakDomains, startAdaptiveExam }) {
  return (
    <div className="card">
      <h2>Adaptive Exam</h2>

      {weakDomains.length === 0 ? (
        <p>No weak domains detected yet.</p>
      ) : (
        <>
          <p>Focus Areas:</p>

          <ul>
            {weakDomains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </>
      )}

      <button className="primary-btn" onClick={startAdaptiveExam}>
        Start Adaptive Exam
      </button>
    </div>
  );
}
