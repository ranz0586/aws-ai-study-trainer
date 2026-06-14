export function shuffle(
  array
) {

  const copy =
    [...array];

  for (
    let i =
      copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
          (i + 1)
      );

    [
      copy[i],
      copy[j]
    ] = [
      copy[j],
      copy[i]
    ];

  }

  return copy;

}

export function buildExam(
  questionBank,
  count = 60
) {

  return shuffle(
    questionBank
  ).slice(
    0,
    count
  );

}