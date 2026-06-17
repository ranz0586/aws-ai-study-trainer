export function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function buildExam(questionBank, count = 60) {
  return shuffle(questionBank).slice(0, count);
}

export function calculateScore(questions, answers) {
  const correct = questions.filter(
    (q, index) => answers[index] === q.answer
  ).length;

  return {
    correct,

    total: questions.length,

    percent: Math.round((correct / questions.length) * 100)
  };
}

export function getReadiness(percent) {
  if (percent >= 90) return "Exam Ready";

  if (percent >= 80) return "Nearly Ready";

  if (percent >= 70) return "Needs Reinforcement";

  return "Continue Studying";
}
