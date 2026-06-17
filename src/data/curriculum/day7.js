export const day7 = {
  title: "Amazon Bedrock",

  objectives: [
    "Understand Amazon Bedrock",

    "Understand Foundation Models in Bedrock",

    "Understand model selection",

    "Understand inference",

    "Understand Bedrock Knowledge Bases",

    "Understand Bedrock Agents",

    "Understand Guardrails",

    "Understand model customization",

    "Understand Prompt Management",

    "Understand Bedrock evaluation capabilities"
  ],

  lessons: [
    {
      title: "Amazon Bedrock",

      definition:
        "A fully managed AWS service that provides access to Foundation Models through a unified API.",

      whyItMatters: "Bedrock is the primary Generative AI service on AWS.",

      examples: ["Claude", "Titan", "Llama", "Mistral"],

      awsTip: "Bedrock = Foundation Models as a managed AWS service."
    },

    {
      title: "Foundation Models",

      definition:
        "Large pretrained models capable of performing many tasks without task-specific training.",

      whyItMatters:
        "Foundation Models power modern Generative AI applications.",

      examples: ["Claude", "Titan", "Llama"],

      awsTip: "Bedrock provides access to multiple Foundation Models."
    },

    {
      title: "Single API Access",

      definition:
        "Bedrock provides one consistent API for multiple model providers.",

      whyItMatters:
        "Developers can switch models without major application changes.",

      examples: ["Claude to Titan", "Titan to Llama"],

      awsTip: "One API, many Foundation Models."
    },

    {
      title: "Model Selection",

      definition:
        "Choosing the most appropriate Foundation Model for a use case.",

      whyItMatters:
        "Different models have different strengths, costs, and capabilities.",

      examples: ["Chatbots", "Summarization", "Code generation"],

      awsTip: "AWS often tests model selection scenarios."
    },

    {
      title: "Inference",

      definition: "Using a trained model to generate outputs.",

      whyItMatters: "Most Bedrock usage involves inference.",

      examples: ["Chat responses", "Image generation", "Summaries"],

      awsTip: "Training teaches. Inference answers."
    },

    {
      title: "Prompt Management",

      definition:
        "A Bedrock capability for storing and managing reusable prompts.",

      whyItMatters: "Improves consistency and governance.",

      examples: ["Customer support prompts", "Summarization templates"],

      awsTip: "Prompt Management standardizes prompt usage."
    },

    {
      title: "Knowledge Bases",

      definition:
        "Managed retrieval systems that connect Foundation Models to external data.",

      whyItMatters: "Simplifies RAG implementations.",

      examples: ["Internal documentation", "Policy repositories"],

      awsTip: "Knowledge Bases enable RAG in Bedrock."
    },

    {
      title: "Bedrock Agents",

      definition:
        "Agents that plan actions and interact with tools to accomplish goals.",

      whyItMatters: "Agents automate multi-step workflows.",

      examples: [
        "Travel assistants",
        "Support assistants",
        "Research assistants"
      ],

      awsTip: "Agents can invoke tools and APIs."
    },

    {
      title: "Action Groups",

      definition: "External capabilities that Bedrock Agents can invoke.",

      whyItMatters: "Allows agents to interact with systems beyond the model.",

      examples: ["Database lookups", "Calendar scheduling", "API calls"],

      awsTip: "Action Groups extend agent capabilities."
    },

    {
      title: "Guardrails",

      definition:
        "Safety controls that help enforce policies and reduce harmful outputs.",

      whyItMatters: "Responsible AI is a major exam domain.",

      examples: ["Content filtering", "Blocked topics", "Safety controls"],

      awsTip: "Guardrails improve safety and compliance."
    },

    {
      title: "Model Customization",

      definition: "Adapting Foundation Models for specific business needs.",

      whyItMatters: "Organizations often require specialized behavior.",

      examples: ["Industry-specific assistants", "Custom workflows"],

      awsTip: "Customization changes model behavior."
    },

    {
      title: "Fine-Tuning",

      definition: "Additional training using organization-specific data.",

      whyItMatters: "Improves specialized performance.",

      examples: ["Legal assistant", "Medical assistant"],

      awsTip: "Fine-Tuning modifies model weights."
    },

    {
      title: "Continued Pretraining",

      definition: "Additional training using domain-specific datasets.",

      whyItMatters: "Expands model knowledge.",

      examples: ["Industry datasets", "Internal content"],

      awsTip: "Continued pretraining updates knowledge."
    },

    {
      title: "Model Evaluation",

      definition:
        "Comparing Foundation Models using quality and performance metrics.",

      whyItMatters: "Helps organizations choose the best model.",

      examples: [
        "Accuracy comparison",
        "Cost comparison",
        "Latency comparison"
      ],

      awsTip: "Evaluate before selecting a model."
    },

    {
      title: "Bedrock Studio",

      definition:
        "Visual environment for experimenting with Foundation Models.",

      whyItMatters: "Allows testing without building applications.",

      examples: ["Prompt testing", "Model comparisons"],

      awsTip: "Studio helps prototype quickly."
    },

    {
      title: "Model Lifecycle",

      definition: "The availability state of a Foundation Model over time.",

      whyItMatters: "Models can become deprecated or replaced.",

      examples: ["Active", "Legacy", "Retired"],

      awsTip: "AWS may test lifecycle terminology conceptually."
    }
  ],

  flashcards: [
    {
      q: "AWS managed Foundation Model platform",
      a: "Amazon Bedrock",
      explanation: "Provides access to multiple Foundation Models.",
      example: "Claude and Titan.",
      examTip: "Generative AI on AWS = Bedrock."
    },

    {
      q: "What uses a trained model?",
      a: "Inference",
      explanation: "Inference generates outputs.",
      example: "Chatbot responses.",
      examTip: "Training learns. Inference answers."
    },

    {
      q: "Managed RAG capability",
      a: "Knowledge Bases",
      explanation: "Connects models to external data.",
      example: "Internal documentation.",
      examTip: "Knowledge Bases simplify RAG."
    },

    {
      q: "AI system that can use tools",
      a: "Agent",
      explanation: "Agents execute workflows.",
      example: "Booking assistants.",
      examTip: "Agents can invoke actions."
    },

    {
      q: "Safety controls in Bedrock",
      a: "Guardrails",
      explanation: "Reduce unsafe outputs.",
      example: "Content filtering.",
      examTip: "Guardrails improve safety."
    },

    {
      q: "Reusable prompts in Bedrock",
      a: "Prompt Management",
      explanation: "Stores standardized prompts.",
      example: "Support templates.",
      examTip: "Prompt consistency."
    },

    {
      q: "Additional model training",
      a: "Fine-Tuning",
      explanation: "Specializes a Foundation Model.",
      example: "Medical assistant.",
      examTip: "Changes model behavior."
    },

    {
      q: "Visual Bedrock testing environment",
      a: "Bedrock Studio",
      explanation: "Experiment with models visually.",
      example: "Prompt testing.",
      examTip: "Studio for experimentation."
    }
  ],

  checks: [
    {
      q: "Which AWS service provides access to multiple Foundation Models?",

      options: ["Bedrock", "Textract", "Translate", "Macie"],

      answer: 0,

      explanation:
        "Amazon Bedrock provides Foundation Models through a managed platform."
    },

    {
      q: "Which Bedrock capability simplifies Retrieval-Augmented Generation?",

      options: ["Knowledge Bases", "Guardrails", "Polly", "Translate"],

      answer: 0,

      explanation: "Knowledge Bases provide managed retrieval."
    },

    {
      q: "Which Bedrock feature helps reduce unsafe outputs?",

      options: ["Guardrails", "Lex", "Comprehend", "OpenSearch"],

      answer: 0,

      explanation: "Guardrails enforce safety controls."
    },

    {
      q: "What is the primary purpose of inference?",

      options: [
        "Generate outputs",
        "Train models",
        "Store vectors",
        "Monitor drift"
      ],

      answer: 0,

      explanation: "Inference uses trained models to generate responses."
    },

    {
      q: "Which Bedrock capability stores reusable prompts?",

      options: ["Prompt Management", "Guardrails", "Knowledge Bases", "A2I"],

      answer: 0,

      explanation: "Prompt Management standardizes prompt usage."
    },

    {
      q: "Which capability allows Bedrock Agents to interact with external systems?",

      options: ["Action Groups", "Embeddings", "Chunking", "Vectors"],

      answer: 0,

      explanation: "Action Groups connect agents to tools and APIs."
    }
  ],

  scenarios: [
    {
      scenario:
        "A company wants to switch between Claude and Titan without rewriting application code.",

      options: ["Amazon Bedrock", "Textract", "Macie", "Forecast"],

      answer: 0,

      explanation: "Bedrock provides a unified API across models."
    },

    {
      scenario:
        "A support chatbot needs answers based on company documentation.",

      options: ["Knowledge Bases", "Translate", "Polly", "Forecast"],

      answer: 0,

      explanation: "Knowledge Bases provide managed retrieval."
    },

    {
      scenario:
        "An AI assistant needs to check a database before answering a question.",

      options: [
        "Agent with Action Groups",
        "Embedding",
        "Regression",
        "Classification"
      ],

      answer: 0,

      explanation: "Agents use Action Groups to interact with external systems."
    },

    {
      scenario:
        "A company wants to prevent harmful responses from a Foundation Model.",

      options: ["Guardrails", "Chunking", "Embedding", "OpenSearch"],

      answer: 0,

      explanation: "Guardrails enforce safety policies."
    },

    {
      scenario:
        "A legal firm wants a Foundation Model specialized in legal terminology.",

      options: ["Fine-Tuning", "Translate", "Lex", "Polly"],

      answer: 0,

      explanation: "Fine-Tuning specializes model behavior."
    }
  ]
};
