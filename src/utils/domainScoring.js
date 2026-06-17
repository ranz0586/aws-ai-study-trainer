export function calculateDomainScores(questions, answers) {
  const results = {};

  questions.forEach((question, index) => {
    const domain = question.domain;

    if (!results[domain]) {
      results[domain] = {
        correct: 0,
        total: 0
      };
    }

    results[domain].total++;

    if (answers[index] === question.answer) {
      results[domain].correct++;
    }
  });

  const scores = {};

  Object.keys(results).forEach((domain) => {
    scores[domain] = Math.round(
      (results[domain].correct / results[domain].total) * 100
    );
  });

  return scores;
}
