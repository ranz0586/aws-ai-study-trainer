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
},

{
  id: "EMB-005",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "What do embeddings primarily represent?",

  options: [
    "Meaning",
    "Storage Size",
    "Permissions",
    "Encryption Keys"
  ],

  answer: 0,

  explanation:
    "Embeddings encode semantic meaning into vectors.",

  awsExamTip:
    "Embeddings capture meaning, not exact words."
},

{
  id: "EMB-006",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Which technology relies heavily on embeddings?",

  options: [
    "RAG",
    "IAM",
    "CloudTrail",
    "Route 53"
  ],

  answer: 0,

  explanation:
    "RAG uses embeddings to retrieve relevant information.",

  awsExamTip:
    "Embeddings are foundational to RAG."
},

{
  id: "EMB-007",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "What is similarity search?",

  options: [
    "Finding vectors that are close together",
    "Finding duplicate IAM users",
    "Comparing encryption keys",
    "Comparing subnet IDs"
  ],

  answer: 0,

  explanation:
    "Similarity search finds vectors with related meanings.",

  awsExamTip:
    "Similarity search works on vector distance."
},

{
  id: "EMB-008",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "Which pair is most likely to have similar embeddings?",

  options: [
    "Car and Automobile",
    "Car and Banana",
    "Cloud and Pizza",
    "Chair and Database"
  ],

  answer: 0,

  explanation:
    "Words with similar meanings tend to have similar embeddings.",

  awsExamTip:
    "Semantic similarity produces nearby vectors."
},

{
  id: "EMB-009",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Why are embeddings useful for search systems?",

  options: [
    "They search by meaning",
    "They reduce storage costs",
    "They replace databases",
    "They improve IAM security"
  ],

  answer: 0,

  explanation:
    "Embeddings allow retrieval based on semantic meaning.",

  awsExamTip:
    "Semantic search beats exact keyword matching."
},

{
  id: "EMB-010",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "What is typically stored inside a vector database?",

  options: [
    "Embeddings",
    "IAM Policies",
    "CloudTrail Logs",
    "VPC Configurations"
  ],

  answer: 0,

  explanation:
    "Vector databases store embeddings for retrieval.",

  awsExamTip:
    "Vector DB = storage for embeddings."
},

{
  id: "EMB-011",
  domain: "Embeddings",
  difficulty: "hard",

  question:
    "Which operation is commonly performed on embeddings during retrieval?",

  options: [
    "Similarity Comparison",
    "Regression",
    "Classification",
    "Encryption"
  ],

  answer: 0,

  explanation:
    "Embeddings are compared to identify semantically related content.",

  awsExamTip:
    "Similarity scoring drives retrieval."
},

{
  id: "EMB-012",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Embeddings enable systems to understand:",

  options: [
    "Relationships between concepts",
    "Network latency",
    "IAM permissions",
    "Cloud costs"
  ],

  answer: 0,

  explanation:
    "Embeddings capture relationships and meaning.",

  awsExamTip:
    "Embeddings model semantic relationships."
},

{
  id: "EMB-013",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "What makes embeddings useful in RAG systems?",

  options: [
    "They help retrieve relevant documents",
    "They reduce EC2 costs",
    "They create prompts",
    "They train models"
  ],

  answer: 0,

  explanation:
    "Embeddings support semantic document retrieval.",

  awsExamTip:
    "Retrieval relies on embeddings."
},

{
  id: "EMB-014",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "Embeddings convert information into:",

  options: [
    "Vectors",
    "Policies",
    "Logs",
    "Images"
  ],

  answer: 0,

  explanation:
    "Embeddings are vector representations.",

  awsExamTip:
    "Vector = embedding."
},

{
  id: "EMB-015",
  domain: "Embeddings",
  difficulty: "hard",

  question:
    "A search system returns relevant results even when exact keywords are absent. Why?",

  options: [
    "Embeddings capture meaning",
    "IAM policies allow it",
    "CloudTrail stores logs",
    "The database is encrypted"
  ],

  answer: 0,

  explanation:
    "Embeddings support semantic matching instead of exact matching.",

  awsExamTip:
    "Meaning-based retrieval is a key embedding benefit."
},

{
  id: "EMB-016",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Which type of search is most associated with embeddings?",

  options: [
    "Semantic Search",
    "Binary Search",
    "Keyword Matching",
    "Hash Lookup"
  ],

  answer: 0,

  explanation:
    "Embeddings are commonly used in semantic search systems.",

  awsExamTip:
    "Embeddings + Semantic Search."
},

{
  id: "EMB-017",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "What does a vector database optimize for?",

  options: [
    "Similarity Retrieval",
    "IAM Management",
    "DNS Routing",
    "Encryption"
  ],

  answer: 0,

  explanation:
    "Vector databases are optimized for similarity searches.",

  awsExamTip:
    "Vector DBs are built for retrieval workloads."
},

{
  id: "EMB-018",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Which AWS exam topic is most closely associated with embeddings?",

  options: [
    "RAG",
    "CloudFormation",
    "IAM",
    "SNS"
  ],

  answer: 0,

  explanation:
    "RAG depends on embeddings for retrieval.",

  awsExamTip:
    "Expect RAG and embeddings together."
},

{
  id: "EMB-019",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "A chatbot retrieves company documents before generating a response. Which technology helps find the most relevant documents?",

  options: [
    "Embeddings",
    "CloudTrail",
    "IAM",
    "KMS"
  ],

  answer: 0,

  explanation:
    "Embeddings enable semantic retrieval of relevant content.",

  awsExamTip:
    "Retrieval step = embeddings."
},

{
  id: "EMB-020",
  domain: "Embeddings",
  difficulty: "hard",

  question:
    "What is the main purpose of embedding vectors?",

  options: [
    "Represent meaning numerically",
    "Encrypt information",
    "Store permissions",
    "Generate prompts"
  ],

  answer: 0,

  explanation:
    "Embeddings transform meaning into numerical form.",

  awsExamTip:
    "Meaning as numbers."
},

{
  id: "EMB-021",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Which workload benefits most from vector similarity search?",

  options: [
    "Knowledge Retrieval",
    "Subnet Routing",
    "IAM Auditing",
    "Cloud Monitoring"
  ],

  answer: 0,

  explanation:
    "Knowledge retrieval depends on semantic similarity.",

  awsExamTip:
    "Knowledge search often means vectors."
},

{
  id: "EMB-022",
  domain: "Embeddings",
  difficulty: "medium",

  question:
    "Embeddings are usually generated from:",

  options: [
    "Content",
    "IAM Policies",
    "Subnets",
    "Billing Reports"
  ],

  answer: 0,

  explanation:
    "Embeddings are created from text, images, or other content.",

  awsExamTip:
    "Content becomes vectors."
},

{
  id: "EMB-023",
  domain: "Embeddings",
  difficulty: "hard",

  question:
    "Which statement best describes vector similarity?",

  options: [
    "Closer vectors usually represent similar meanings",
    "Closer vectors use less storage",
    "Closer vectors improve security",
    "Closer vectors reduce latency"
  ],

  answer: 0,

  explanation:
    "Vector distance often correlates with semantic similarity.",

  awsExamTip:
    "Close vectors = related concepts."
},

{
  id: "EMB-024",
  domain: "Embeddings",
  difficulty: "easy",

  question:
    "Which concept is central to embeddings?",

  options: [
    "Semantic Meaning",
    "Network Routing",
    "Encryption",
    "User Authentication"
  ],

  answer: 0,

  explanation:
    "Embeddings are designed to represent meaning.",

  awsExamTip:
    "Embeddings are about meaning."
},

{
  id: "EMB-025",
  domain: "Embeddings",
  difficulty: "hard",

  question:
    "A company wants search results based on intent rather than exact words. Which approach should they implement?",

  options: [
    "Embeddings with Semantic Search",
    "Keyword Search Only",
    "CloudTrail Analysis",
    "IAM Policies"
  ],

  answer: 0,

  explanation:
    "Embeddings enable intent-based semantic retrieval.",

  awsExamTip:
    "Intent-based search = embeddings + semantic search."
}

];