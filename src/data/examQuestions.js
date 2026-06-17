export const examQuestions = [
  {
    domain: "AI Fundamentals",

    question:
      "A company has historical emails labeled spam or not spam. Which learning type should be used?",

    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "RAG"
    ],

    answer: 0,

    explanation: "Labeled data indicates supervised learning."
  },

  {
    domain: "ML Lifecycle",

    question:
      "A model performs perfectly in training but poorly in production.",

    options: ["Underfitting", "Overfitting", "Embedding", "Tokenization"],

    answer: 1,

    explanation: "The model memorized training data."
  },

  {
    domain: "Generative AI",

    question: "What controls output randomness?",

    options: ["Context Window", "Temperature", "Embedding", "Recall"],

    answer: 1,

    explanation: "Temperature controls creativity."
  },

  {
    domain: "RAG",

    question: "Company policies change daily. Which approach is best?",

    options: ["Fine Tuning", "RAG", "Training from Scratch", "Classification"],

    answer: 1,

    explanation: "RAG retrieves current information."
  },

  {
    domain: "AWS Services",

    question: "Which AWS service extracts text from invoices?",

    options: ["Textract", "Lex", "Polly", "Translate"],

    answer: 0,

    explanation: "Textract performs OCR."
  },

  {
    domain: "Security",

    question: "Which AWS service records API activity?",

    options: ["IAM", "KMS", "CloudTrail", "Lex"],

    answer: 2,

    explanation: "CloudTrail stores audit logs."
  }
];
