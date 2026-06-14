export const embeddings = [

{
  id: "EMB-001",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "What is an embedding?",

  options: [
    "A numerical representation of meaning",
    "A database record",
    "A prompt template",
    "An IAM role"
  ],

  answer: 0,

  explanation:
    "Embeddings convert meaning into numerical vectors.",

  awsExamTip:
    "Embeddings = Meaning as numbers."
},

{
  id: "EMB-002",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "Words with similar meanings generally have embeddings that are:",

  options: [
    "Numerically similar",
    "Random",
    "Encrypted",
    "Larger"
  ],

  answer: 0,

  explanation:
    "Semantically similar words produce nearby vectors.",

  awsExamTip:
    "'Car' and 'Automobile' are classic examples."
},

{
  id: "EMB-003",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Which system is commonly used to store embeddings?",

  options: [
    "Vector Database",
    "CloudTrail",
    "KMS",
    "IAM"
  ],

  answer: 0,

  explanation:
    "Vector databases store embeddings for similarity searches.",

  awsExamTip:
    "Vector DB + RAG is heavily tested."
},

{
  id: "EMB-004",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "A user searches for 'automobile' and receives results for 'car'. Which capability enables this behavior?",

  options: [
    "Semantic Search",
    "Classification",
    "Regression",
    "Monitoring"
  ],

  answer: 0,

  explanation:
    "Semantic search retrieves by meaning instead of exact keywords.",

  awsExamTip:
    "Search by meaning = Semantic Search."
}

];