export const genAI = [

{
  id: "GAI-001",
  domain: "Generative AI",
  difficulty: "easy",

  question:
    "What is a Foundation Model?",

  options: [
    "A large pretrained model",
    "A vector database",
    "A monitoring system",
    "A training metric"
  ],

  answer: 0,

  explanation:
    "Foundation Models are pretrained on large datasets.",

  awsExamTip:
    "Claude, Titan and Llama are examples."
},

{
  id: "GAI-002",
  domain: "Generative AI",
  difficulty: "easy",

  question:
    "What does LLM stand for?",

  options: [
    "Large Language Model",
    "Learning Logic Matrix",
    "Language Lifecycle Manager",
    "Large Learning Machine"
  ],

  answer: 0,

  explanation:
    "LLM stands for Large Language Model.",

  awsExamTip:
    "LLMs are specialized Foundation Models."
},

{
  id: "GAI-003",
  domain: "Generative AI",
  difficulty: "medium",

  question:
    "What are tokens?",

  options: [
    "Pieces of text",
    "Images",
    "Embeddings",
    "Neural networks"
  ],

  answer: 0,

  explanation:
    "Models process text as tokens.",

  awsExamTip:
    "More tokens = more cost."
},

{
  id: "GAI-004",
  domain: "Generative AI",
  difficulty: "medium",

  question:
    "Which parameter controls creativity and randomness?",

  options: [
    "Recall",
    "Precision",
    "Temperature",
    "Embedding"
  ],

  answer: 2,

  explanation:
    "Temperature influences randomness.",

  awsExamTip:
    "High temperature = more creative."
},

{
  id: "GAI-005",
  domain: "Generative AI",
  difficulty: "medium",

  question:
    "What is a hallucination?",

  options: [
    "Model downtime",
    "Incorrect but confident output",
    "A deployment process",
    "A vector database"
  ],

  answer: 1,

  explanation:
    "Hallucinations are fabricated responses presented as facts.",

  awsExamTip:
    "AWS frequently tests hallucination mitigation."
},

{
  id: "GAI-006",
  domain: "Generative AI",
  difficulty: "medium",

  question:
    "Which approach can help reduce hallucinations?",

  options: [
    "RAG",
    "Clustering",
    "Regression",
    "Underfitting"
  ],

  answer: 0,

  explanation:
    "RAG provides current grounding information.",

  awsExamTip:
    "RAG is a common AWS answer."
},

{
  id: "GAI-007",
  domain: "Generative AI",
  difficulty: "medium",

  question:
    "What does Context Window describe?",

  options: [
    "Amount of information a model can consider",
    "Training duration",
    "Model size",
    "Embedding dimension"
  ],

  answer: 0,

  explanation:
    "Context Window determines how much information is retained.",

  awsExamTip:
    "Larger windows support larger documents."
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

  explanation:
    "Lower temperature reduces randomness.",

  awsExamTip:
    "Low temperature = more deterministic."
},

{
  id: "GAI-009",
  domain: "Generative AI",
  difficulty: "hard",

  question:
    "A company sends 300-page documents to a model. Which feature becomes especially important?",

  options: [
    "Precision",
    "Context Window",
    "Classification",
    "Monitoring"
  ],

  answer: 1,

  explanation:
    "Large context windows can handle larger inputs.",

  awsExamTip:
    "Long documents = Context Window."
},

{
  id: "GAI-010",
  domain: "Generative AI",
  difficulty: "medium",

  question:
    "Which statement about tokens is TRUE?",

  options: [
    "Tokens have no impact on cost",
    "Tokens affect cost and latency",
    "Tokens are only used for images",
    "Tokens replace prompts"
  ],

  answer: 1,

  explanation:
    "More tokens generally increase cost and latency.",

  awsExamTip:
    "AWS likes token-cost questions."
}

];