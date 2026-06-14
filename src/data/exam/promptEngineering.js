export const promptEngineering = [

{
  id: "PE-001",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "What is Prompt Engineering?",

  options: [
    "Improving results without changing the model",
    "Training a new model",
    "Building embeddings",
    "Monitoring accuracy"
  ],

  answer: 0,

  explanation:
    "Prompt engineering improves output quality through better instructions.",

  awsExamTip:
    "AWS tests prompt design frequently."
},

{
  id: "PE-002",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "A prompt containing only instructions and no examples is called:",

  options: [
    "Few-Shot",
    "One-Shot",
    "Zero-Shot",
    "Fine-Tuning"
  ],

  answer: 2,

  explanation:
    "Zero-shot prompts provide instructions only.",

  awsExamTip:
    "No examples = Zero-Shot."
},

{
  id: "PE-003",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "A prompt that includes exactly one example is called:",

  options: [
    "One-Shot",
    "Few-Shot",
    "Zero-Shot",
    "RAG"
  ],

  answer: 0,

  explanation:
    "One-shot prompting provides a single example.",

  awsExamTip:
    "One example = One-Shot."
},

{
  id: "PE-004",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "A prompt containing multiple examples is known as:",

  options: [
    "Zero-Shot",
    "Few-Shot",
    "RAG",
    "Embedding"
  ],

  answer: 1,

  explanation:
    "Few-shot prompting teaches patterns through examples.",

  awsExamTip:
    "Multiple examples = Few-Shot."
},

{
  id: "PE-005",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "Which prompt component helps define the perspective the model should adopt?",

  options: [
    "Role",
    "Temperature",
    "Embedding",
    "Token"
  ],

  answer: 0,

  explanation:
    "Roles guide the model's behavior.",

  awsExamTip:
    "'Act as a financial analyst' = Role."
},

{
  id: "PE-006",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "A team continuously refines prompts to improve output quality. What practice are they using?",

  options: [
    "Prompt Iteration",
    "Fine-Tuning",
    "Monitoring",
    "Clustering"
  ],

  answer: 0,

  explanation:
    "Prompt iteration involves repeatedly improving prompts.",

  awsExamTip:
    "AWS likes Prompt Iteration questions."
}

];