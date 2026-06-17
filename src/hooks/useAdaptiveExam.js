import useExamHistory from "./useExamHistory";

import { buildAdaptiveExam } from "../utils/adaptiveExamBuilder";

export default function useAdaptiveExam() {
  const { history } = useExamHistory();

  const latestAttempt = history[0];

  const domainScores = latestAttempt?.domainScores || {};

  const adaptiveExam = buildAdaptiveExam({
    domainScores,
    count: 60
  });

  return {
    adaptiveExam,

    hasHistory: history.length > 0,

    weakDomains: Object.entries(domainScores)
      .filter(([, score]) => score < 70)
      .map(([domain]) => domain)
  };
}
