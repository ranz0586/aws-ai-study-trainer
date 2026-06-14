export const day9 = {
  title: "Responsible AI",

  objectives: [
    "Understand responsible AI principles",
    "Recognize sources of bias",
    "Understand fairness and explainability",
    "Understand privacy and transparency",
    "Learn governance concepts tested on the exam"
  ],

  lessons: [
    {
      title: "Responsible AI",
      definition:
        "Developing and using AI systems safely, fairly, and transparently.",
      whyItMatters:
        "Essential for trustworthy AI adoption.",
      examples: [
        "Bias mitigation",
        "Privacy protection"
      ],
      awsTip:
        "Responsible AI is a major AWS exam domain."
    },

    {
      title: "Fairness",
      definition:
        "Ensuring AI systems do not unfairly disadvantage groups.",
      whyItMatters:
        "Supports ethical decision-making.",
      examples: [
        "Hiring systems",
        "Loan approvals"
      ],
      awsTip:
        "Fairness reduces discrimination."
    },

    {
      title: "Bias",
      definition:
        "Systematic errors that create unfair outcomes.",
      whyItMatters:
        "Bias reduces trust and fairness.",
      examples: [
        "Sampling bias",
        "Label bias"
      ],
      awsTip:
        "Bias is frequently tested."
    },

    {
      title: "Sampling Bias",
      definition:
        "Training data does not represent the real population.",
      whyItMatters:
        "Leads to unfair outcomes.",
      examples: [
        "Underrepresented groups"
      ],
      awsTip:
        "Bad data creates biased models."
    },

    {
      title: "Label Bias",
      definition:
        "Training labels contain human bias.",
      whyItMatters:
        "Models learn biased decisions.",
      examples: [
        "Historical hiring decisions"
      ],
      awsTip:
        "Biased labels produce biased models."
    },

    {
      title: "Explainability",
      definition:
        "Ability to understand why a model made a decision.",
      whyItMatters:
        "Supports trust and accountability.",
      examples: [
        "Loan approval explanation",
        "Medical diagnosis explanation"
      ],
      awsTip:
        "Users should understand decisions."
    },

    {
      title: "Transparency",
      definition:
        "Users know AI is involved in decision-making.",
      whyItMatters:
        "Builds trust.",
      examples: [
        "AI-generated content labels"
      ],
      awsTip:
        "Transparency informs users."
    },

    {
      title: "Privacy",
      definition:
        "Protecting sensitive information.",
      whyItMatters:
        "Required for compliance and trust.",
      examples: [
        "Customer data",
        "Medical records"
      ],
      awsTip:
        "Protect PII."
    },

    {
      title: "Human Oversight",
      definition:
        "Humans can review or override AI decisions.",
      whyItMatters:
        "Reduces risk from automated systems.",
      examples: [
        "Loan approvals",
        "Healthcare decisions"
      ],
      awsTip:
        "High-risk decisions often require humans."
    },

    {
      title: "Model Cards",
      definition:
        "Documentation describing a model's intended use, risks, and limitations.",
      whyItMatters:
        "Improves transparency and governance.",
      examples: [
        "Model documentation"
      ],
      awsTip:
        "Model Cards describe risks and limitations."
    }
  ],

  flashcards: [
    {
      q: "Systematic unfairness in AI",
      a: "Bias",
      explanation:
        "Creates unfair outcomes.",
      example:
        "Hiring discrimination.",
      examTip:
        "Bias = unfairness."
    },

    {
      q: "Understanding why a model made a decision",
      a: "Explainability",
      explanation:
        "Makes decisions understandable.",
      example:
        "Loan rejection explanation.",
      examTip:
        "Explainability = decision transparency."
    },

    {
      q: "Users know AI is involved",
      a: "Transparency",
      explanation:
        "AI usage is disclosed.",
      example:
        "AI-generated content labels.",
      examTip:
        "Transparency builds trust."
    },

    {
      q: "Humans can intervene",
      a: "Human Oversight",
      explanation:
        "Humans review decisions.",
      example:
        "Medical diagnosis review.",
      examTip:
        "Humans remain accountable."
    },

    {
      q: "Documents intended use and risks",
      a: "Model Card",
      explanation:
        "Model documentation.",
      example:
        "AI governance reports.",
      examTip:
        "Model Cards describe limitations."
    }
  ],

  checks: [
    {
      q: "What is systematic unfairness in AI called?",
      options: [
        "Bias",
        "Recall",
        "Regression",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Bias creates unfair outcomes."
    },

    {
      q: "What helps users understand model decisions?",
      options: [
        "Explainability",
        "Embedding",
        "Classification",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Explainability reveals decision logic."
    },

    {
      q: "What principle requires users to know AI is involved?",
      options: [
        "Privacy",
        "Transparency",
        "Recall",
        "Regression"
      ],
      answer: 1,
      explanation:
        "Transparency informs users."
    },

    {
      q: "What describes intended use, risks, and limitations?",
      options: [
        "Model Card",
        "CloudTrail",
        "IAM",
        "Embedding"
      ],
      answer: 0,
      explanation:
        "Model Cards document models."
    }
  ],

  scenarios: [
    {
      scenario:
        "A bank wants applicants to understand why loans are rejected.",
      options: [
        "Explainability",
        "Embedding",
        "Regression",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Explainability provides reasons for decisions."
    },

    {
      scenario:
        "A company reviews AI hiring recommendations before making final decisions.",
      options: [
        "Human Oversight",
        "Regression",
        "Embedding",
        "Classification"
      ],
      answer: 0,
      explanation:
        "Humans review AI decisions."
    },

    {
      scenario:
        "An AI system disadvantages a demographic group due to poor training data.",
      options: [
        "Bias",
        "Recall",
        "Monitoring",
        "Regression"
      ],
      answer: 0,
      explanation:
        "Unfair outcomes indicate bias."
    }
  ]
};