export function generateRemediationPlan(
  domainScores,
  incorrectQuestions
) {

  const recommendations = [];

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

  weakDomains.forEach(
    ([domain]) => {

      switch (
        domain
      ) {

        case "AI Fundamentals":
          recommendations.push(
            {
              domain,
              reviewDays:
                [1],
              priority:
                "High"
            }
          );
          break;

        case "ML Lifecycle":
          recommendations.push(
            {
              domain,
              reviewDays:
                [2],
              priority:
                "High"
            }
          );
          break;

        case "Generative AI":
          recommendations.push(
            {
              domain,
              reviewDays:
                [3],
              priority:
                "High"
            }
          );
          break;

        case "Embeddings":
          recommendations.push(
            {
              domain,
              reviewDays:
                [4],
              priority:
                "High"
            }
          );
          break;

        case "Prompt Engineering":
          recommendations.push(
            {
              domain,
              reviewDays:
                [5],
              priority:
                "Medium"
            }
          );
          break;

        case "RAG":
          recommendations.push(
            {
              domain,
              reviewDays:
                [6],
              priority:
                "High"
            }
          );
          break;

        case "Amazon Bedrock":
          recommendations.push(
            {
              domain,
              reviewDays:
                [7],
              priority:
                "High"
            }
          );
          break;

        case "AWS AI Services":
          recommendations.push(
            {
              domain,
              reviewDays:
                [8],
              priority:
                "Medium"
            }
          );
          break;

        case "Responsible AI":
          recommendations.push(
            {
              domain,
              reviewDays:
                [9],
              priority:
                "Medium"
            }
          );
          break;

        case "Security":
          recommendations.push(
            {
              domain,
              reviewDays:
                [8, 9],
              priority:
                "Medium"
            }
          );
          break;

        default:
          break;

      }

    });

  return {

    weakDomains,

    recommendations,

    retakeQuestions:
      incorrectQuestions.length

  };

}