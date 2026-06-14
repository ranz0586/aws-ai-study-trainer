export const day3 = {
  title: "Generative AI Foundations",

  objectives: [
    "Understand foundation models and LLMs",
    "Understand tokens and context windows",
    "Understand temperature settings",
    "Recognize hallucinations and mitigation techniques"
  ],

  lessons: [
    {
      title: "Foundation Models",
      definition:
        "Large pretrained models trained on massive datasets.",
      whyItMatters:
        "Foundation models power modern Generative AI systems.",
      examples: [
        "Claude",
        "Titan",
        "Llama"
      ],
      awsTip:
        "Amazon Bedrock provides access to foundation models."
    },

    {
      title: "Large Language Models (LLMs)",
      definition:
        "Foundation models specialized for text generation and understanding.",
      whyItMatters:
        "LLMs power chatbots and assistants.",
      examples: [
        "Claude",
        "ChatGPT"
      ],
      awsTip:
        "LLMs are a type of foundation model."
    },

    {
      title: "Tokens",
      definition:
        "Small units of text processed by a model.",
      whyItMatters:
        "Token usage affects cost and latency.",
      examples: [
        "Words",
        "Parts of words",
        "Punctuation"
      ],
      awsTip:
        "More tokens = more cost."
    },

    {
      title: "Context Window",
      definition:
        "The amount of information a model can remember during a conversation.",
      whyItMatters:
        "Larger context windows support larger documents.",
      examples: [
        "Long reports",
        "Books",
        "Large conversations"
      ],
      awsTip:
        "Large context windows improve document understanding."
    },

    {
      title: "Temperature",
      definition:
        "Controls randomness in model outputs.",
      whyItMatters:
        "Determines creativity versus consistency.",
      examples: [
        "Creative writing",
        "Factual responses"
      ],
      awsTip:
        "Low temperature = factual. High temperature = creative."
    },

    {
      title: "Hallucinations",
      definition:
        "Confidently incorrect AI responses.",
      whyItMatters:
        "Hallucinations create trust and accuracy issues.",
      examples: [
        "Fake citations",
        "Invented facts"
      ],
      awsTip:
        "Hallucinations are heavily tested."
    },

    {
      title: "Reducing Hallucinations",
      definition:
        "Techniques that improve factual accuracy.",
      whyItMatters:
        "Critical for enterprise AI systems.",
      examples: [
        "RAG",
        "Prompt engineering",
        "Human review"
      ],
      awsTip:
        "RAG is a common mitigation strategy."
    }
  ],

  flashcards: [
    {
      q: "Large pretrained model",
      a: "Foundation Model",
      explanation:
        "Pretrained on massive datasets.",
      example:
        "Claude.",
      examTip:
        "Foundation model is broader than LLM."
    },

    {
      q: "Foundation model specialized for text",
      a: "LLM",
      explanation:
        "Large Language Model.",
      example:
        "Claude.",
      examTip:
        "LLM is a subset of foundation models."
    },

    {
      q: "Pieces of text processed by models",
      a: "Tokens",
      explanation:
        "Models process tokens rather than words.",
      example:
        "Hello world can become multiple tokens.",
      examTip:
        "More tokens = higher cost."
    },

    {
      q: "Amount of information remembered",
      a: "Context Window",
      explanation:
        "Defines memory capacity.",
      example:
        "200-page document.",
      examTip:
        "Larger context = more information retained."
    },

    {
      q: "Confidently incorrect output",
      a: "Hallucination",
      explanation:
        "AI-generated false information.",
      example:
        "Fake legal cases.",
      examTip:
        "RAG reduces hallucinations."
    }
  ],

  checks: [
    {
      q: "Which setting increases creativity?",
      options: [
        "Temperature",
        "Embedding",
        "Recall",
        "Precision"
      ],
      answer: 0,
      explanation:
        "Temperature controls randomness."
    },

    {
      q: "What increases token cost?",
      options: [
        "More tokens",
        "Fewer tokens",
        "Lower temperature",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Token usage drives cost."
    },

    {
      q: "What is a hallucination?",
      options: [
        "Correct answer",
        "Model drift",
        "Confidently incorrect response",
        "Embedding"
      ],
      answer: 2,
      explanation:
        "Hallucinations are incorrect outputs."
    },

    {
      q: "Which technique reduces hallucinations?",
      options: [
        "Regression",
        "RAG",
        "Clustering",
        "Reinforcement Learning"
      ],
      answer: 1,
      explanation:
        "RAG provides factual context."
    }
  ],

  scenarios: [
    {
      scenario:
        "A company chatbot invents company policies that do not exist.",
      options: [
        "Temperature",
        "Hallucination",
        "Clustering",
        "Regression"
      ],
      answer: 1,
      explanation:
        "Invented facts are hallucinations."
    },

    {
      scenario:
        "An organization wants a chatbot to answer questions using internal documents.",
      options: [
        "RAG",
        "Regression",
        "Classification",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "RAG retrieves documents before generating responses."
    },

    {
      scenario:
        "A marketing team wants highly creative content generation.",
      options: [
        "Low Temperature",
        "High Temperature",
        "Regression",
        "Clustering"
      ],
      answer: 1,
      explanation:
        "High temperature increases creativity."
    }
  ]
};