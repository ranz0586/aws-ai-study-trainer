export const rag = [

{
  id: "RAG-001",
  domain: "RAG",
  difficulty: "easy",

  question:
    "What does RAG stand for?",

  options: [
    "Retrieval-Augmented Generation",
    "Reasoning-Augmented Graph",
    "Retrieval-Augmented Governance",
    "Response-Augmented Generation"
  ],

  answer: 0,

  explanation:
    "RAG retrieves information before generating a response.",

  awsExamTip:
    "Know the acronym exactly."
},

{
  id: "RAG-002",
  domain: "RAG",
  difficulty: "easy",

  question:
    "What is the first step in a typical RAG workflow?",

  options: [
    "Retrieve information",
    "Generate response",
    "Fine-tune model",
    "Train embeddings"
  ],

  answer: 0,

  explanation:
    "RAG retrieves relevant information before generation.",

  awsExamTip:
    "Retrieve first, generate second."
},

{
  id: "RAG-003",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Which use case is best suited for RAG?",

  options: [
    "Current company policies",
    "Permanent writing style changes",
    "Image classification",
    "Regression"
  ],

  answer: 0,

  explanation:
    "RAG excels with frequently changing knowledge.",

  awsExamTip:
    "Current knowledge = RAG."
},

{
  id: "RAG-004",
  domain: "RAG",
  difficulty: "medium",

  question:
    "A company's HR policies change weekly. Which approach is most appropriate?",

  options: [
    "Fine-Tuning",
    "RAG",
    "Training from scratch",
    "Classification"
  ],

  answer: 1,

  explanation:
    "RAG can retrieve the latest policies dynamically.",

  awsExamTip:
    "Changing documents usually indicate RAG."
},

{
  id: "RAG-005",
  domain: "RAG",
  difficulty: "medium",

  question:
    "What is a primary benefit of RAG?",

  options: [
    "Provides current information",
    "Eliminates embeddings",
    "Removes prompts",
    "Eliminates hallucinations entirely"
  ],

  answer: 0,

  explanation:
    "RAG allows access to information unavailable during model training.",

  awsExamTip:
    "Current data is the strongest RAG benefit."
},

{
  id: "RAG-006",
  domain: "RAG",
  difficulty: "hard",

  question:
    "Which technology is commonly paired with RAG for document retrieval?",

  options: [
    "Vector Search",
    "Regression",
    "CloudTrail",
    "IAM"
  ],

  answer: 0,

  explanation:
    "Embeddings and vector search power modern RAG systems.",

  awsExamTip:
    "RAG + Embeddings + Vector DB."
},

{
  id: "RAG-007",
  domain: "RAG",
  difficulty: "hard",

  question:
    "Which statement best differentiates RAG from Fine-Tuning?",

  options: [
    "RAG updates knowledge dynamically",
    "RAG changes writing style",
    "RAG retrains the foundation model",
    "RAG removes hallucinations completely"
  ],

  answer: 0,

  explanation:
    "RAG injects current knowledge without retraining.",

  awsExamTip:
    "Knowledge = RAG. Behavior = Fine-Tuning."
},

{
  id: "RAG-008",
  domain: "RAG",
  difficulty: "hard",

  question:
    "A support chatbot must answer questions using a constantly updated product manual. Which solution is most cost-effective?",

  options: [
    "RAG",
    "Continuous Fine-Tuning",
    "Train New Models Weekly",
    "Regression"
  ],

  answer: 0,

  explanation:
    "RAG avoids repeated retraining while keeping answers current.",

  awsExamTip:
    "Frequently changing knowledge almost always points to RAG."
}

];