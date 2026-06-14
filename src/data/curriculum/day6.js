export const day6 = {
  title: "RAG, Fine-Tuning & Agents",

  objectives: [
    "Understand Retrieval-Augmented Generation (RAG)",
    "Know when to use RAG vs Fine-Tuning",
    "Understand AI Agents",
    "Understand Guardrails",
    "Recognize AWS exam patterns for GenAI architectures"
  ],

  lessons: [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      definition:
        "A technique that retrieves relevant information before generating a response.",
      whyItMatters:
        "Keeps answers grounded in current and authoritative information.",
      examples: [
        "Company policy chatbot",
        "Internal knowledge search",
        "Customer support assistant"
      ],
      awsTip:
        "Current company knowledge usually means RAG."
    },

    {
      title: "RAG Workflow",
      definition:
        "Retrieve documents → Send context to model → Generate response.",
      whyItMatters:
        "Reduces hallucinations and improves accuracy.",
      examples: [
        "Search knowledge base",
        "Retrieve policy documents",
        "Generate answer"
      ],
      awsTip:
        "RAG retrieves before generation."
    },

    {
      title: "When to Use RAG",
      definition:
        "Best for knowledge that changes frequently.",
      whyItMatters:
        "Avoids retraining models every time data changes.",
      examples: [
        "Company policies",
        "Product catalogs",
        "Current documentation"
      ],
      awsTip:
        "Frequently changing knowledge = RAG."
    },

    {
      title: "Fine-Tuning",
      definition:
        "Training a model on additional examples to change its behavior.",
      whyItMatters:
        "Allows specialization for a particular style or task.",
      examples: [
        "Legal drafting style",
        "Medical report formatting",
        "Corporate writing standards"
      ],
      awsTip:
        "Fine-tuning changes behavior, not knowledge retrieval."
    },

    {
      title: "When to Use Fine-Tuning",
      definition:
        "Best when you want consistent outputs or specialized behavior.",
      whyItMatters:
        "Improves performance for specific tasks.",
      examples: [
        "Brand voice",
        "Specialized document generation"
      ],
      awsTip:
        "Writing style = Fine-Tuning."
    },

    {
      title: "RAG vs Fine-Tuning",
      definition:
        "RAG provides current information. Fine-tuning changes model behavior.",
      whyItMatters:
        "One of the most tested AWS exam concepts.",
      examples: [
        "Current policies → RAG",
        "Legal writing style → Fine-Tuning"
      ],
      awsTip:
        "Current knowledge = RAG. Behavior change = Fine-Tuning."
    },

    {
      title: "AI Agents",
      definition:
        "Systems that can reason, plan, use tools, and execute actions.",
      whyItMatters:
        "Agents move beyond simple chat interactions.",
      examples: [
        "Travel booking assistant",
        "IT support automation",
        "Workflow orchestration"
      ],
      awsTip:
        "Agents can take actions, not just answer questions."
    },

    {
      title: "Agent Capabilities",
      definition:
        "Reasoning, planning, tool use, and execution.",
      whyItMatters:
        "Distinguishes agents from standard chatbots.",
      examples: [
        "Book flights",
        "Create tickets",
        "Query databases"
      ],
      awsTip:
        "Tool usage is a key agent feature."
    },

    {
      title: "Guardrails",
      definition:
        "Safety controls applied to AI systems.",
      whyItMatters:
        "Protects users and organizations.",
      examples: [
        "Block hate speech",
        "Block PII",
        "Restrict topics"
      ],
      awsTip:
        "Guardrails are safety mechanisms."
    },

    {
      title: "Responsible Agent Design",
      definition:
        "Agents should operate within defined boundaries.",
      whyItMatters:
        "Prevents harmful or unauthorized actions.",
      examples: [
        "Restricted tool access",
        "Human approval workflows"
      ],
      awsTip:
        "Guardrails and oversight often appear together."
    }
  ],

  flashcards: [
    {
      q: "Current company knowledge?",
      a: "RAG",
      explanation:
        "Retrieves current information before generating responses.",
      example:
        "Internal policy chatbot.",
      examTip:
        "Frequently changing knowledge = RAG."
    },

    {
      q: "Change model behavior?",
      a: "Fine-Tuning",
      explanation:
        "Specializes model outputs.",
      example:
        "Legal writing style.",
      examTip:
        "Style change = Fine-Tuning."
    },

    {
      q: "Can reason and use tools?",
      a: "Agent",
      explanation:
        "Agents can plan and execute actions.",
      example:
        "Travel booking assistant.",
      examTip:
        "Agents perform actions."
    },

    {
      q: "AI safety controls?",
      a: "Guardrails",
      explanation:
        "Restrict unsafe outputs.",
      example:
        "Block PII.",
      examTip:
        "Guardrails = Safety."
    }
  ],

  checks: [
    {
      q: "A company wants answers based on frequently changing internal documents.",
      options: [
        "Fine-Tuning",
        "RAG",
        "Regression",
        "Classification"
      ],
      answer: 1,
      explanation:
        "Frequently changing knowledge is best handled with RAG."
    },

    {
      q: "A law firm wants a model to generate documents in a specific writing style.",
      options: [
        "RAG",
        "Fine-Tuning",
        "Monitoring",
        "Clustering"
      ],
      answer: 1,
      explanation:
        "Style changes require Fine-Tuning."
    },

    {
      q: "Which capability is most associated with AI Agents?",
      options: [
        "Classification",
        "Tool Usage",
        "Regression",
        "Embedding"
      ],
      answer: 1,
      explanation:
        "Agents can use tools and execute actions."
    },

    {
      q: "What are guardrails used for?",
      options: [
        "Training",
        "Safety",
        "Deployment",
        "Monitoring"
      ],
      answer: 1,
      explanation:
        "Guardrails provide safety controls."
    }
  ],

  scenarios: [
    {
      scenario:
        "An employee asks a chatbot about the latest HR policies. Policies change monthly.",
      options: [
        "Fine-Tuning",
        "RAG",
        "Regression",
        "Clustering"
      ],
      answer: 1,
      explanation:
        "Current and changing knowledge is a RAG use case."
    },

    {
      scenario:
        "A company wants generated contracts to match its legal writing style.",
      options: [
        "Fine-Tuning",
        "RAG",
        "Monitoring",
        "Embeddings"
      ],
      answer: 0,
      explanation:
        "Writing style customization is Fine-Tuning."
    },

    {
      scenario:
        "A travel assistant searches flights, compares options, and books tickets.",
      options: [
        "Agent",
        "Classification",
        "Embedding",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Agents can reason, plan, and take actions."
    }
  ]
};