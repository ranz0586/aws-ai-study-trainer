export const day9 = {

  title: "Responsible AI & Governance",

  objectives: [

    "Understand Responsible AI principles",

    "Understand bias and fairness",

    "Understand transparency and explainability",

    "Understand hallucinations and veracity",

    "Understand human oversight",

    "Understand AI safety and robustness",

    "Understand SageMaker Clarify",

    "Understand Model Monitor",

    "Understand RLHF",

    "Understand governance and compliance"

  ],

  lessons: [

    {
      title: "Responsible AI",

      definition:
        "The practice of developing and using AI systems safely, fairly, and ethically.",

      whyItMatters:
        "Responsible AI is a dedicated AIF-C01 exam domain.",

      examples: [
        "Fair lending",
        "Medical AI",
        "Hiring systems"
      ],

      awsTip:
        "Responsible AI balances innovation and trust."
    },

    {
      title: "Bias",

      definition:
        "Systematic unfairness in AI outputs.",

      whyItMatters:
        "Biased models can produce harmful or discriminatory outcomes.",

      examples: [
        "Hiring bias",
        "Loan approval bias",
        "Dataset imbalance"
      ],

      awsTip:
        "Bias often originates from training data."
    },

    {
      title: "Fairness",

      definition:
        "Ensuring AI systems treat people and groups equitably.",

      whyItMatters:
        "Fairness helps prevent discriminatory outcomes.",

      examples: [
        "Equal hiring opportunities",
        "Fair loan decisions"
      ],

      awsTip:
        "Bias reduces fairness."
    },

    {
      title: "Transparency",

      definition:
        "Providing visibility into how AI systems operate.",

      whyItMatters:
        "Users should understand when AI is being used.",

      examples: [
        "AI disclosures",
        "Model documentation"
      ],

      awsTip:
        "Transparency builds trust."
    },

    {
      title: "Explainability",

      definition:
        "The ability to understand why a model produced a specific output.",

      whyItMatters:
        "Critical for regulated industries.",

      examples: [
        "Loan decisions",
        "Medical recommendations"
      ],

      awsTip:
        "Explainability answers 'why'."
    },

    {
      title: "Hallucinations",

      definition:
        "Confidently generated but incorrect information.",

      whyItMatters:
        "A major limitation of Generative AI.",

      examples: [
        "Invented facts",
        "Fake citations"
      ],

      awsTip:
        "RAG helps reduce hallucinations."
    },

    {
      title: "Veracity",

      definition:
        "The truthfulness and factual accuracy of AI outputs.",

      whyItMatters:
        "Reliable AI systems require accurate information.",

      examples: [
        "Verified answers",
        "Trusted citations"
      ],

      awsTip:
        "Hallucinations reduce veracity."
    },

    {
      title: "Robustness",

      definition:
        "The ability of a model to perform reliably under different conditions.",

      whyItMatters:
        "Models should remain dependable when inputs change.",

      examples: [
        "Unexpected prompts",
        "Noisy data"
      ],

      awsTip:
        "Robust systems are more reliable."
    },

    {
      title: "AI Safety",

      definition:
        "Practices that reduce harmful or unintended AI behavior.",

      whyItMatters:
        "Essential for trustworthy AI systems.",

      examples: [
        "Content filtering",
        "Guardrails",
        "Safety controls"
      ],

      awsTip:
        "Safety reduces harmful outputs."
    },

    {
      title: "Human Oversight",

      definition:
        "Humans review or supervise AI decisions.",

      whyItMatters:
        "Critical for high-impact use cases.",

      examples: [
        "Medical review",
        "Fraud review"
      ],

      awsTip:
        "High-risk decisions often require humans."
    },

    {
      title: "Human-in-the-Loop",

      definition:
        "Humans participate in the decision-making process.",

      whyItMatters:
        "Improves quality and accountability.",

      examples: [
        "Approval workflows",
        "Prediction review"
      ],

      awsTip:
        "Human review is a common Responsible AI solution."
    },

    {
      title: "Amazon Augmented AI (A2I)",

      definition:
        "AWS service that adds human review workflows to AI systems.",

      whyItMatters:
        "Supports Human-in-the-Loop architectures.",

      examples: [
        "Document review",
        "Prediction validation"
      ],

      awsTip:
        "Human review = A2I."
    },

    {
      title: "Amazon SageMaker Clarify",

      definition:
        "AWS service that helps detect bias and improve explainability.",

      whyItMatters:
        "Frequently referenced in Responsible AI discussions.",

      examples: [
        "Bias detection",
        "Feature importance"
      ],

      awsTip:
        "Bias and explainability = Clarify."
    },

    {
      title: "Amazon SageMaker Model Monitor",

      definition:
        "AWS service that monitors deployed models.",

      whyItMatters:
        "Helps identify drift and performance issues.",

      examples: [
        "Data drift",
        "Quality monitoring"
      ],

      awsTip:
        "Model Monitor watches deployed models."
    },

    {
      title: "RLHF",

      definition:
        "Reinforcement Learning from Human Feedback.",

      whyItMatters:
        "Improves model alignment with human preferences.",

      examples: [
        "Chatbot ranking",
        "Response preferences"
      ],

      awsTip:
        "RLHF uses humans to improve outputs."
    },

    {
      title: "Governance",

      definition:
        "Policies and controls that guide AI usage.",

      whyItMatters:
        "Organizations need responsible AI oversight.",

      examples: [
        "Usage policies",
        "Approval processes"
      ],

      awsTip:
        "Governance defines how AI should be used."
    },

    {
      title: "Compliance",

      definition:
        "Following laws, regulations, and organizational policies.",

      whyItMatters:
        "AI systems often operate in regulated environments.",

      examples: [
        "Financial regulations",
        "Healthcare regulations"
      ],

      awsTip:
        "Compliance reduces organizational risk."
    }

  ],

  flashcards: [

    {
      q: "Systematic unfairness in AI",
      a: "Bias",
      explanation:
        "Bias can create unfair outcomes.",
      example:
        "Hiring discrimination.",
      examTip:
        "Bias often originates from data."
    },

    {
      q: "Treating groups equitably",
      a: "Fairness",
      explanation:
        "Fairness helps reduce discrimination.",
      example:
        "Equal loan evaluations.",
      examTip:
        "Fairness combats bias."
    },

    {
      q: "Understanding why a model responded a certain way",
      a: "Explainability",
      explanation:
        "Explains model decisions.",
      example:
        "Loan approval reasons.",
      examTip:
        "Explainability = Why."
    },

    {
      q: "Confident but incorrect AI output",
      a: "Hallucination",
      explanation:
        "Generated false information.",
      example:
        "Fake citations.",
      examTip:
        "Hallucinations reduce trust."
    },

    {
      q: "Truthfulness of AI output",
      a: "Veracity",
      explanation:
        "Measures factual correctness.",
      example:
        "Accurate responses.",
      examTip:
        "Hallucinations reduce veracity."
    },

    {
      q: "AWS service for bias detection",
      a: "SageMaker Clarify",
      explanation:
        "Supports bias analysis and explainability.",
      example:
        "Fairness reviews.",
      examTip:
        "Bias = Clarify."
    },

    {
      q: "AWS service for deployed model monitoring",
      a: "SageMaker Model Monitor",
      explanation:
        "Tracks model quality after deployment.",
      example:
        "Detecting drift.",
      examTip:
        "Monitor = Model Monitor."
    },

    {
      q: "Human review workflow service",
      a: "Amazon A2I",
      explanation:
        "Adds humans into AI workflows.",
      example:
        "Prediction review.",
      examTip:
        "Human review = A2I."
    }

  ],

  checks: [

    {
      q:
        "Which concept focuses on reducing unfair outcomes?",

      options: [
        "Fairness",
        "Hallucination",
        "Embedding",
        "Chunking"
      ],

      answer: 0,

      explanation:
        "Fairness promotes equitable treatment."
    },

    {
      q:
        "What is a hallucination?",

      options: [
        "Generated false information",
        "Model retraining",
        "Vector search",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "Hallucinations are incorrect outputs."
    },

    {
      q:
        "Which AWS service helps detect model bias?",

      options: [
        "Clarify",
        "Textract",
        "Translate",
        "Lex"
      ],

      answer: 0,

      explanation:
        "Clarify supports bias analysis."
    },

    {
      q:
        "Which AWS service monitors deployed models?",

      options: [
        "Model Monitor",
        "Polly",
        "Comprehend",
        "Translate"
      ],

      answer: 0,

      explanation:
        "Model Monitor tracks deployed model quality."
    },

    {
      q:
        "Which approach introduces humans into AI decisions?",

      options: [
        "Human-in-the-Loop",
        "Chunking",
        "Regression",
        "Embedding"
      ],

      answer: 0,

      explanation:
        "Humans review or validate outputs."
    },

    {
      q:
        "What does RLHF stand for?",

      options: [
        "Reinforcement Learning from Human Feedback",
        "Regression Learning for Human Functions",
        "Reinforced Logic Framework",
        "Rule Learning Human Feedback"
      ],

      answer: 0,

      explanation:
        "RLHF improves model alignment through human feedback."
    }

  ],

  scenarios: [

    {
      scenario:
        "A bank wants to evaluate whether its loan approval model treats applicants fairly.",

      options: [
        "SageMaker Clarify",
        "Textract",
        "Translate",
        "Polly"
      ],

      answer: 0,

      explanation:
        "Clarify helps identify bias."
    },

    {
      scenario:
        "A company wants humans to verify AI-generated decisions before final approval.",

      options: [
        "A2I",
        "Forecast",
        "Rekognition",
        "Translate"
      ],

      answer: 0,

      explanation:
        "A2I provides human review workflows."
    },

    {
      scenario:
        "A chatbot confidently generates incorrect information.",

      options: [
        "Hallucination",
        "Clustering",
        "Regression",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "This is a hallucination."
    },

    {
      scenario:
        "A company wants to monitor a deployed model for quality degradation.",

      options: [
        "Model Monitor",
        "Polly",
        "Textract",
        "Translate"
      ],

      answer: 0,

      explanation:
        "Model Monitor tracks deployed model quality."
    },

    {
      scenario:
        "A healthcare organization requires explanations for AI-generated recommendations.",

      options: [
        "Explainability",
        "Chunking",
        "Embedding",
        "Prompting"
      ],

      answer: 0,

      explanation:
        "Explainability helps users understand decisions."
    }

  ]

};