export function isAnswerCorrect(question, userAnswer) {
  if (question.type === "multiple") {
    if (!Array.isArray(userAnswer) || userAnswer.length === 0) return false;
    const correct = [...question.answers].sort((a, b) => a - b);
    const user = [...userAnswer].sort((a, b) => a - b);
    return (
      correct.length === user.length && correct.every((v, i) => v === user[i])
    );
  }
  return userAnswer === question.answers[0];
}

export function calculateDumpDomainScores(questions, answers) {
  const results = {};

  questions.forEach((question, index) => {
    const domain = question.domain;

    if (!results[domain]) results[domain] = { correct: 0, total: 0 };

    results[domain].total++;

    if (isAnswerCorrect(question, answers[index])) results[domain].correct++;
  });

  const scores = {};

  Object.keys(results).forEach((domain) => {
    scores[domain] = Math.round(
      (results[domain].correct / results[domain].total) * 100
    );
  });

  return scores;
}
