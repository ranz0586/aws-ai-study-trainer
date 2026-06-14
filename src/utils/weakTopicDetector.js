export function weakTopics(
  domainScores
) {
  return Object.entries(
    domainScores
  )
    .filter(
      ([, score]) =>
        score < 70
    )
    .map(
      ([domain]) =>
        domain
    );
}