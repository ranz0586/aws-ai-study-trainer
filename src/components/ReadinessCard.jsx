export default function ReadinessCard({ readiness, status, weakDomains }) {
  return (
    <div className="card">
      <h2>Exam Readiness</h2>

      <h1>{readiness}%</h1>

      <h3>{status}</h3>

      <p>Weak Domains: {weakDomains}</p>
    </div>
  );
}
