const DOMAIN_DAY_MAP = {

  "AI Fundamentals":
    [1],

  "ML Lifecycle":
    [2],

  "Generative AI":
    [3],

  "Embeddings":
    [4],

  "Prompt Engineering":
    [5],

  "RAG":
    [6],

  "Amazon Bedrock":
    [7],

  "AWS AI Services":
    [8],

  "Responsible AI":
    [9],

  "Security":
    [8, 9]

};

export function
generateRemediationPlan(
  domainScores,
  incorrectQuestions
) {

  const weakDomains =
    Object.entries(
      domainScores
    )
      .filter(
        ([, score]) =>
          score < 70
      )
      .sort(
        (
          a,
          b
        ) =>
          a[1] - b[1]
      );

  const recommendations =
    weakDomains.map(
      (
        [domain, score],
        index
      ) => ({

        priority:
          index + 1,

        domain,

        score,

        reviewDays:
          DOMAIN_DAY_MAP[
            domain
          ] || []

      })
    );

  return {

    weakDomains,

    recommendations,

    retakeQuestions:
      incorrectQuestions.length

  };

}