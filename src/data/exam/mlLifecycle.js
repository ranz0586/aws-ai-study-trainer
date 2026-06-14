export const mlLifecycle = [

{
  id: "ML-001",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "Which stage gathers raw information for model development?",

  options: [
    "Training",
    "Evaluation",
    "Data Collection",
    "Monitoring"
  ],

  answer: 2,

  explanation:
    "Data Collection gathers information before preparation and training.",

  awsExamTip:
    "Collection comes first."
},

{
  id: "ML-002",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Removing duplicates and handling missing values occurs during:",

  options: [
    "Training",
    "Monitoring",
    "Data Preparation",
    "Deployment"
  ],

  answer: 2,

  explanation:
    "Data preparation improves data quality before training.",

  awsExamTip:
    "Garbage in = garbage out."
},

{
  id: "ML-003",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "A model performs perfectly during training but poorly in production. What is the most likely cause?",

  options: [
    "Overfitting",
    "Underfitting",
    "Embedding",
    "Classification"
  ],

  answer: 0,

  explanation:
    "Overfitting means the model memorized training data.",

  awsExamTip:
    "Perfect training + poor real-world = Overfitting."
},

{
  id: "ML-004",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Which stage helps detect model drift after deployment?",

  options: [
    "Training",
    "Monitoring",
    "Evaluation",
    "Collection"
  ],

  answer: 1,

  explanation:
    "Monitoring tracks accuracy degradation and drift.",

  awsExamTip:
    "Production models must be monitored."
}

];