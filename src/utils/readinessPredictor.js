export function calculateReadiness({ history, domainScores }) {
  if (!history || history.length === 0) {
    return {
      readiness: 0,
      status: "No Data",
      weakDomains: 0
    };
  }

  const latestScore = history[0]?.score ?? 0;

  const bestScore = Math.max(...history.map((item) => item.score));

  const weakDomains = Object.values(domainScores || {}).filter(
    (score) => score < 70
  ).length;

  let readiness = latestScore * 0.6 + bestScore * 0.4;

  readiness -= weakDomains * 5;

  readiness = Math.max(0, Math.min(100, Math.round(readiness)));

  let status = "Needs Review";

  if (readiness >= 85) {
    status = "Exam Ready";
  } else if (readiness >= 70) {
    status = "Almost Ready";
  }

  return {
    readiness,

    status,

    weakDomains
  };
}
