export const day9 = {
  title:
    "Responsible AI & Security Reinforcement",

  lessons: [],

  flashcards: [
    {
      q: "Systematic unfairness",
      a: "Bias"
    },
    {
      q: "Understand AI decisions",
      a: "Explainability"
    },
    {
      q: "Permissions",
      a: "IAM"
    },
    {
      q: "Audit Logs",
      a: "CloudTrail"
    },
    {
      q: "Encryption Keys",
      a: "KMS"
    }
  ],

  checks: [
    {
      q:
        "Users should understand why a loan was rejected.",
      options: [
        "Bias",
        "Explainability",
        "Embedding",
        "Latency"
      ],
      answer: 1
    },

    {
      q:
        "Which AWS service provides audit logs?",
      options: [
        "IAM",
        "KMS",
        "CloudTrail",
        "Lambda"
      ],
      answer: 2
    }
  ],

  scenarios: [
    {
      scenario:
        "A company wants to know who changed IAM permissions last week.",
      options: [
        "CloudTrail",
        "KMS",
        "S3",
        "Textract"
      ],
      answer: 0,

      explanation:
        "CloudTrail records API activity."
    }
  ]
};