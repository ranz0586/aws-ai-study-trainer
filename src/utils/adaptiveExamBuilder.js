import { questionBank } from "../data/exam";

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function buildAdaptiveExam({ domainScores = {}, count = 60 }) {
  const weakDomains = Object.entries(domainScores)
    .filter(([, score]) => score < 70)
    .sort((a, b) => a[1] - b[1])
    .map(([domain]) => domain);

  if (weakDomains.length === 0) {
    return shuffle(questionBank).slice(0, count);
  }

  const weakQuestions = questionBank.filter((question) =>
    weakDomains.includes(question.domain)
  );

  const remainingQuestions = questionBank.filter(
    (question) => !weakDomains.includes(question.domain)
  );

  const targetWeakCount = Math.floor(count * 0.6);

  const selectedWeak = shuffle(weakQuestions).slice(0, targetWeakCount);

  const selectedRemaining = shuffle(remainingQuestions).slice(
    0,
    count - selectedWeak.length
  );

  return shuffle([...selectedWeak, ...selectedRemaining]);
}
