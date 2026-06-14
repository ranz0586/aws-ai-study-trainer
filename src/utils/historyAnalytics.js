export function getAverageScore(
  history
) {
  if (
    history.length === 0
  ) {
    return 0;
  }

  const total =
    history.reduce(
      (
        sum,
        attempt
      ) =>
        sum +
        attempt.score,
      0
    );

  return Math.round(
    total /
      history.length
  );
}

export function getTrendDirection(
  history
) {
  if (
    history.length < 2
  ) {
    return "N/A";
  }

  const latest =
    history[0].score;

  const previous =
    history[1].score;

  if (
    latest > previous
  ) {
    return "Improving 📈";
  }

  if (
    latest < previous
  ) {
    return "Declining 📉";
  }

  return "Stable ➖";
}

export function buildWeakTopicTrends(
  history
) {
  const trends = {};

  history.forEach(
    (attempt) => {

      Object.entries(
        attempt.domainScores ||
          {}
      ).forEach(
        (
          [
            domain,
            score
          ]
        ) => {

          if (
            !trends[
              domain
            ]
          ) {
            trends[
              domain
            ] = [];
          }

          trends[
            domain
          ].push(
            score
          );

        }
      );

    }
  );

  return trends;
}