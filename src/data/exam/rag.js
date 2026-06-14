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
},

{
  id: "RAG-009",
  domain: "RAG",
  difficulty: "easy",

  question:
    "What is the primary purpose of retrieval in a RAG system?",

  options: [
    "Find relevant information",
    "Train a model",
    "Generate embeddings",
    "Deploy infrastructure"
  ],

  answer: 0,

  explanation:
    "Retrieval locates relevant content before generation.",

  awsExamTip:
    "Retrieve first, generate second."
},

{
  id: "RAG-010",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Why is RAG commonly used with internal company documents?",

  options: [
    "To provide current business knowledge",
    "To reduce storage costs",
    "To replace IAM",
    "To train models faster"
  ],

  answer: 0,

  explanation:
    "RAG allows models to access current enterprise information.",

  awsExamTip:
    "Internal documents often indicate RAG."
},

{
  id: "RAG-011",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Which component converts documents into vectors for retrieval?",

  options: [
    "Embeddings",
    "Classification",
    "Monitoring",
    "Regression"
  ],

  answer: 0,

  explanation:
    "Embeddings transform content into searchable vectors.",

  awsExamTip:
    "Embeddings power retrieval."
},

{
  id: "RAG-012",
  domain: "RAG",
  difficulty: "hard",

  question:
    "What is a common benefit of RAG compared to retraining a model?",

  options: [
    "Lower maintenance effort",
    "Unlimited accuracy",
    "No prompts required",
    "No infrastructure costs"
  ],

  answer: 0,

  explanation:
    "RAG updates knowledge without retraining the model.",

  awsExamTip:
    "Dynamic knowledge without retraining."
},

{
  id: "RAG-013",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Which type of database is commonly used in RAG systems?",

  options: [
    "Vector Database",
    "Relational Database",
    "Time Series Database",
    "Graph Database"
  ],

  answer: 0,

  explanation:
    "Vector databases support similarity search.",

  awsExamTip:
    "Vector DB is central to RAG."
},

{
  id: "RAG-014",
  domain: "RAG",
  difficulty: "hard",

  question:
    "What problem does RAG help reduce?",

  options: [
    "Hallucinations",
    "Subnet exhaustion",
    "IAM misconfigurations",
    "DNS latency"
  ],

  answer: 0,

  explanation:
    "Grounding responses in retrieved content reduces hallucinations.",

  awsExamTip:
    "RAG improves factual grounding."
},

{
  id: "RAG-015",
  domain: "RAG",
  difficulty: "medium",

  question:
    "What happens after relevant documents are retrieved?",

  options: [
    "The model generates a response using the retrieved content",
    "The model retrains",
    "The database is rebuilt",
    "The embeddings are deleted"
  ],

  answer: 0,

  explanation:
    "Retrieved content becomes context for generation.",

  awsExamTip:
    "Retrieve → Augment → Generate."
},

{
  id: "RAG-016",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Which AWS Bedrock feature provides managed RAG capabilities?",

  options: [
    "Knowledge Bases",
    "Guardrails",
    "Agents",
    "Model Evaluation"
  ],

  answer: 0,

  explanation:
    "Knowledge Bases simplify retrieval workflows.",

  awsExamTip:
    "Managed RAG = Knowledge Bases."
},

{
  id: "RAG-017",
  domain: "RAG",
  difficulty: "hard",

  question:
    "A company updates policy documents daily. Which approach is preferable?",

  options: [
    "RAG",
    "Weekly Fine-Tuning",
    "Training From Scratch",
    "Classification"
  ],

  answer: 0,

  explanation:
    "RAG can use updated documents immediately.",

  awsExamTip:
    "Frequently changing knowledge = RAG."
},

{
  id: "RAG-018",
  domain: "RAG",
  difficulty: "medium",

  question:
    "What is semantic search?",

  options: [
    "Searching by meaning",
    "Searching by file size",
    "Searching by timestamp",
    "Searching by permissions"
  ],

  answer: 0,

  explanation:
    "Semantic search finds content based on meaning.",

  awsExamTip:
    "Semantic search relies on embeddings."
},

{
  id: "RAG-019",
  domain: "RAG",
  difficulty: "hard",

  question:
    "Which technology helps identify the most relevant documents during retrieval?",

  options: [
    "Vector Similarity Search",
    "IAM Policies",
    "CloudTrail",
    "Route 53"
  ],

  answer: 0,

  explanation:
    "Vector similarity identifies semantically related content.",

  awsExamTip:
    "Similarity search powers retrieval."
},

{
  id: "RAG-020",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Why are embeddings important in RAG?",

  options: [
    "They enable semantic retrieval",
    "They replace prompts",
    "They reduce IAM costs",
    "They perform monitoring"
  ],

  answer: 0,

  explanation:
    "Embeddings help locate relevant information.",

  awsExamTip:
    "No embeddings, no semantic retrieval."
},

{
  id: "RAG-021",
  domain: "RAG",
  difficulty: "hard",

  question:
    "A legal assistant must answer questions using current regulations. Which approach is most appropriate?",

  options: [
    "RAG",
    "Static Prompting",
    "Classification",
    "Regression"
  ],

  answer: 0,

  explanation:
    "Regulations change and should be retrieved dynamically.",

  awsExamTip:
    "Current knowledge = RAG."
},

{
  id: "RAG-022",
  domain: "RAG",
  difficulty: "medium",

  question:
    "Which stage adds retrieved information to the model prompt?",

  options: [
    "Augmentation",
    "Training",
    "Deployment",
    "Evaluation"
  ],

  answer: 0,

  explanation:
    "Retrieved content augments the prompt.",

  awsExamTip:
    "The A in RAG stands for Augmented."
},

{
  id: "RAG-023",
  domain: "RAG",
  difficulty: "hard",

  question:
    "Which approach is generally more cost-effective for changing knowledge sources?",

  options: [
    "RAG",
    "Repeated Fine-Tuning",
    "Retraining Foundation Models",
    "Building New Models"
  ],

  answer: 0,

  explanation:
    "RAG avoids expensive retraining cycles.",

  awsExamTip:
    "Changing knowledge usually means RAG."
},

{
  id: "RAG-024",
  domain: "RAG",
  difficulty: "medium",

  question:
    "What is a major limitation of foundation models that RAG helps address?",

  options: [
    "Knowledge cutoff dates",
    "Network throughput",
    "Storage quotas",
    "IAM permissions"
  ],

  answer: 0,

  explanation:
    "RAG provides access to newer information.",

  awsExamTip:
    "Knowledge cutoff = RAG use case."
},

{
  id: "RAG-025",
  domain: "RAG",
  difficulty: "hard",

  question:
    "A company wants AI responses grounded only in approved internal documents. Which solution should they implement?",

  options: [
    "RAG",
    "Classification",
    "Regression",
    "Data Labeling"
  ],

  answer: 0,

  explanation:
    "RAG retrieves approved content before generation.",

  awsExamTip:
    "Grounded enterprise answers = RAG."
}

];