export const genAI = [
  {
    id: "GAI-001",
    domain: "Generative AI",
    difficulty: "easy",

    question: "What is a Foundation Model?",

    options: [
      "A large pretrained model",
      "A vector database",
      "A monitoring system",
      "A training metric"
    ],

    answer: 0,

    explanation: "Foundation Models are pretrained on large datasets.",

    awsExamTip: "Claude, Titan and Llama are examples."
  },

  {
    id: "GAI-002",
    domain: "Generative AI",
    difficulty: "easy",

    question: "What does LLM stand for?",

    options: [
      "Large Language Model",
      "Learning Logic Matrix",
      "Language Lifecycle Manager",
      "Large Learning Machine"
    ],

    answer: 0,

    explanation: "LLM stands for Large Language Model.",

    awsExamTip: "LLMs are specialized Foundation Models."
  },

  {
    id: "GAI-003",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What are tokens?",

    options: ["Pieces of text", "Images", "Embeddings", "Neural networks"],

    answer: 0,

    explanation: "Models process text as tokens.",

    awsExamTip: "More tokens = more cost."
  },

  {
    id: "GAI-004",
    domain: "Generative AI",
    difficulty: "medium",

    question: "Which parameter controls creativity and randomness?",

    options: ["Recall", "Precision", "Temperature", "Embedding"],

    answer: 2,

    explanation: "Temperature influences randomness.",

    awsExamTip: "High temperature = more creative."
  },

  {
    id: "GAI-005",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What is a hallucination?",

    options: [
      "Model downtime",
      "Incorrect but confident output",
      "A deployment process",
      "A vector database"
    ],

    answer: 1,

    explanation: "Hallucinations are fabricated responses presented as facts.",

    awsExamTip: "AWS frequently tests hallucination mitigation."
  },

  {
    id: "GAI-006",
    domain: "Generative AI",
    difficulty: "medium",

    question: "Which approach can help reduce hallucinations?",

    options: ["RAG", "Clustering", "Regression", "Underfitting"],

    answer: 0,

    explanation: "RAG provides current grounding information.",

    awsExamTip: "RAG is a common AWS answer."
  },

  {
    id: "GAI-007",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What does Context Window describe?",

    options: [
      "Amount of information a model can consider",
      "Training duration",
      "Model size",
      "Embedding dimension"
    ],

    answer: 0,

    explanation: "Context Window determines how much information is retained.",

    awsExamTip: "Larger windows support larger documents."
  },

  {
    id: "GAI-008",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "A legal firm requires highly factual responses with minimal creativity. What should be adjusted?",

    options: [
      "Increase Temperature",
      "Decrease Temperature",
      "Increase Tokens",
      "Decrease Context"
    ],

    answer: 1,

    explanation: "Lower temperature reduces randomness.",

    awsExamTip: "Low temperature = more deterministic."
  },

  {
    id: "GAI-009",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "A company sends 300-page documents to a model. Which feature becomes especially important?",

    options: ["Precision", "Context Window", "Classification", "Monitoring"],

    answer: 1,

    explanation: "Large context windows can handle larger inputs.",

    awsExamTip: "Long documents = Context Window."
  },

  {
    id: "GAI-010",
    domain: "Generative AI",
    difficulty: "medium",

    question: "Which statement about tokens is TRUE?",

    options: [
      "Tokens have no impact on cost",
      "Tokens affect cost and latency",
      "Tokens are only used for images",
      "Tokens replace prompts"
    ],

    answer: 1,

    explanation: "More tokens generally increase cost and latency.",

    awsExamTip: "AWS likes token-cost questions."
  },

  {
    id: "GAI-011",
    domain: "Generative AI",
    difficulty: "easy",

    question: "Which of the following is an example of a Foundation Model?",

    options: ["Claude", "Amazon S3", "Amazon EC2", "Amazon RDS"],

    answer: 0,

    explanation:
      "Claude is a Foundation Model available through Amazon Bedrock.",

    awsExamTip: "Know the major Foundation Models."
  },

  {
    id: "GAI-012",
    domain: "Generative AI",
    difficulty: "medium",

    question: "Why are Foundation Models considered reusable?",

    options: [
      "They are pretrained and adaptable to many tasks",
      "They require no compute resources",
      "They only support one workload",
      "They replace databases"
    ],

    answer: 0,

    explanation:
      "Foundation Models can be applied across many business use cases.",

    awsExamTip: "Pretrained + reusable = Foundation Model."
  },

  {
    id: "GAI-013",
    domain: "Generative AI",
    difficulty: "medium",

    question:
      "Which Generative AI workload creates summaries from long reports?",

    options: [
      "Text Summarization",
      "Classification",
      "Regression",
      "Clustering"
    ],

    answer: 0,

    explanation: "Summarization condenses content into a shorter version.",

    awsExamTip: "Summarization is a common GenAI use case."
  },

  {
    id: "GAI-014",
    domain: "Generative AI",
    difficulty: "medium",

    question:
      "A business wants AI to draft marketing emails automatically. Which capability is required?",

    options: ["Generative AI", "Clustering", "Regression", "Monitoring"],

    answer: 0,

    explanation: "Generating new content is a Generative AI capability.",

    awsExamTip: "Creating content = Generative AI."
  },

  {
    id: "GAI-015",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "Which factor most directly affects Generative AI inference cost?",

    options: ["Token usage", "Subnet count", "IAM policies", "CloudTrail logs"],

    answer: 0,

    explanation: "Generative AI pricing is often based on token consumption.",

    awsExamTip: "More tokens = more cost."
  },

  {
    id: "GAI-016",
    domain: "Generative AI",
    difficulty: "medium",

    question:
      "Which parameter should be increased when more creative responses are desired?",

    options: ["Temperature", "Recall", "Precision", "Accuracy"],

    answer: 0,

    explanation: "Higher temperature increases output variability.",

    awsExamTip: "Creativity = Higher Temperature."
  },

  {
    id: "GAI-017",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What is one risk associated with Generative AI systems?",

    options: [
      "Hallucinations",
      "Subnet exhaustion",
      "IAM drift",
      "DNS propagation"
    ],

    answer: 0,

    explanation:
      "Models may generate incorrect information that appears convincing.",

    awsExamTip: "Hallucinations are heavily tested."
  },

  {
    id: "GAI-018",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "Which technique most directly grounds model responses using external information?",

    options: [
      "Retrieval-Augmented Generation",
      "Classification",
      "Regression",
      "Normalization"
    ],

    answer: 0,

    explanation: "RAG retrieves information before generating responses.",

    awsExamTip: "Grounding data = RAG."
  },

  {
    id: "GAI-019",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What does a larger context window allow?",

    options: [
      "Processing more information in a single prompt",
      "Faster networking",
      "Lower storage costs",
      "Automatic fine-tuning"
    ],

    answer: 0,

    explanation:
      "Larger context windows support larger conversations and documents.",

    awsExamTip: "Large documents = large context window."
  },

  {
    id: "GAI-020",
    domain: "Generative AI",
    difficulty: "medium",

    question: "Which content type can Generative AI create?",

    options: ["Text", "Images", "Code", "All of the above"],

    answer: 3,

    explanation: "Generative AI supports multiple content modalities.",

    awsExamTip: "GenAI is not limited to text."
  },

  {
    id: "GAI-021",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "A company needs consistent and repeatable responses. Which adjustment is most appropriate?",

    options: [
      "Lower Temperature",
      "Increase Temperature",
      "Increase Token Count",
      "Decrease Context Window"
    ],

    answer: 0,

    explanation: "Lower temperature reduces randomness.",

    awsExamTip: "Deterministic outputs = lower temperature."
  },

  {
    id: "GAI-022",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What is the primary purpose of a prompt?",

    options: [
      "Provide instructions to the model",
      "Store embeddings",
      "Train the model",
      "Evaluate the model"
    ],

    answer: 0,

    explanation: "Prompts guide model behavior and output.",

    awsExamTip: "Prompt quality strongly impacts results."
  },

  {
    id: "GAI-023",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "A customer support chatbot begins inventing policy details. What issue is occurring?",

    options: [
      "Hallucination",
      "Overfitting",
      "Classification",
      "Normalization"
    ],

    answer: 0,

    explanation: "The model is generating unsupported information.",

    awsExamTip: "Invented facts = Hallucination."
  },

  {
    id: "GAI-024",
    domain: "Generative AI",
    difficulty: "medium",

    question: "What is one advantage of Foundation Models?",

    options: [
      "Can perform many tasks without training from scratch",
      "Require no compute resources",
      "Eliminate security requirements",
      "Replace databases"
    ],

    answer: 0,

    explanation:
      "Foundation Models provide broad capabilities from pretraining.",

    awsExamTip: "Pretrained models accelerate adoption."
  },

  {
    id: "GAI-025",
    domain: "Generative AI",
    difficulty: "hard",

    question:
      "A company wants AI-generated responses based only on approved internal documents. Which approach is most appropriate?",

    options: ["RAG", "Clustering", "Regression", "Data Labeling"],

    answer: 0,

    explanation: "RAG retrieves approved documents before generation.",

    awsExamTip: "Internal knowledge grounding usually means RAG."
  }
];
