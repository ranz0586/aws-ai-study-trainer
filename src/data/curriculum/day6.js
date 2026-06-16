export const day6 = {

  title: "RAG, Fine-Tuning & Agents",

  objectives: [

    "Understand Retrieval-Augmented Generation (RAG)",

    "Understand vector retrieval workflows",

    "Understand chunking and embeddings in RAG",

    "Differentiate RAG and Fine-Tuning",

    "Understand Knowledge Bases",

    "Understand AI Agents",

    "Understand tool use and orchestration",

    "Understand RLHF",

    "Recognize common AWS exam scenarios"

  ],

  lessons: [

    {
      title: "Retrieval-Augmented Generation (RAG)",

      definition:
        "A technique that retrieves external information and provides it to a model before generating a response.",

      whyItMatters:
        "One of the most heavily tested Generative AI concepts.",

      examples: [
        "Internal knowledge bases",
        "Policy documents",
        "Customer support systems"
      ],

      awsTip:
        "RAG retrieves information before generation."
    },

    {
      title: "Why RAG Exists",

      definition:
        "Foundation Models do not automatically know company-specific information.",

      whyItMatters:
        "Organizations often need responses based on internal documents.",

      examples: [
        "HR policies",
        "Product manuals",
        "Company procedures"
      ],

      awsTip:
        "RAG adds external knowledge without retraining."
    },

    {
      title: "Knowledge Base",

      definition:
        "A collection of trusted information used during retrieval.",

      whyItMatters:
        "Knowledge bases improve factual accuracy.",

      examples: [
        "PDFs",
        "Wiki articles",
        "Internal documentation"
      ],

      awsTip:
        "Knowledge Bases are commonly paired with RAG."
    },

    {
      title: "Chunking",

      definition:
        "Splitting documents into smaller sections before creating embeddings.",

      whyItMatters:
        "Improves retrieval relevance.",

      examples: [
        "Paragraph chunks",
        "Section chunks"
      ],

      awsTip:
        "Chunking is often tested alongside RAG."
    },

    {
      title: "Embeddings in RAG",

      definition:
        "Documents and queries are converted into vectors for semantic retrieval.",

      whyItMatters:
        "Embeddings make semantic search possible.",

      examples: [
        "Document embeddings",
        "Query embeddings"
      ],

      awsTip:
        "Embeddings power retrieval."
    },

    {
      title: "Vector Search",

      definition:
        "Finding the most relevant content using vector similarity.",

      whyItMatters:
        "Retrieval depends on vector search.",

      examples: [
        "Policy retrieval",
        "Knowledge search"
      ],

      awsTip:
        "Vector search occurs before generation."
    },

    {
      title: "RAG Workflow",

      definition:
        "User Question → Embedding → Vector Search → Retrieved Context → LLM Response.",

      whyItMatters:
        "Understanding the sequence is important for the exam.",

      examples: [
        "Support chatbot",
        "Internal assistant"
      ],

      awsTip:
        "Retrieval happens before generation."
    },

    {
      title: "Fine-Tuning",

      definition:
        "Additional model training using domain-specific data.",

      whyItMatters:
        "Changes model behavior and knowledge.",

      examples: [
        "Medical assistant",
        "Legal assistant"
      ],

      awsTip:
        "Fine-tuning modifies the model."
    },

    {
      title: "RAG vs Fine-Tuning",

      definition:
        "RAG retrieves knowledge while Fine-Tuning changes model weights.",

      whyItMatters:
        "This distinction appears frequently on AWS exams.",

      examples: [
        "Policy updates → RAG",
        "Specialized behavior → Fine-Tuning"
      ],

      awsTip:
        "Changing knowledge usually favors RAG."
    },

    {
      title: "When to Use RAG",

      definition:
        "Use RAG when information changes frequently.",

      whyItMatters:
        "Updating documents is easier than retraining models.",

      examples: [
        "Policies",
        "Product documentation",
        "Knowledge bases"
      ],

      awsTip:
        "Frequently changing information = RAG."
    },

    {
      title: "When to Use Fine-Tuning",

      definition:
        "Use Fine-Tuning when model behavior must change.",

      whyItMatters:
        "Specialized output styles may require training.",

      examples: [
        "Industry-specific terminology",
        "Custom writing styles"
      ],

      awsTip:
        "Behavior changes = Fine-Tuning."
    },

    {
      title: "Agents",

      definition:
        "AI systems capable of planning, reasoning, and performing actions using tools.",

      whyItMatters:
        "Agents are a major Foundation Model application area.",

      examples: [
        "Travel assistants",
        "Research assistants",
        "Customer support automation"
      ],

      awsTip:
        "Agents can use tools and workflows."
    },

    {
      title: "Tools",

      definition:
        "External capabilities an agent can invoke to complete tasks.",

      whyItMatters:
        "Agents often need access to systems beyond the LLM.",

      examples: [
        "Databases",
        "APIs",
        "Calendars"
      ],

      awsTip:
        "Agents become more useful through tools."
    },

    {
      title: "Agent Orchestration",

      definition:
        "Coordinating steps, tools, and reasoning to accomplish goals.",

      whyItMatters:
        "Allows multi-step task completion.",

      examples: [
        "Research then summarize",
        "Book then confirm"
      ],

      awsTip:
        "Agents execute workflows."
    },

    {
      title: "Human Feedback",

      definition:
        "People evaluate outputs and provide guidance for improvement.",

      whyItMatters:
        "Human feedback improves model quality.",

      examples: [
        "Response ranking",
        "Preference scoring"
      ],

      awsTip:
        "Humans help improve model behavior."
    },

    {
      title: "RLHF",

      definition:
        "Reinforcement Learning from Human Feedback.",

      whyItMatters:
        "A common technique used to improve Foundation Models.",

      examples: [
        "Chatbot improvement",
        "Response alignment"
      ],

      awsTip:
        "RLHF combines reinforcement learning and human preferences."
    },

    {
      title: "Hallucination Reduction",

      definition:
        "Techniques that improve factual accuracy.",

      whyItMatters:
        "Hallucinations remain a major GenAI challenge.",

      examples: [
        "RAG",
        "Grounding",
        "Knowledge Bases"
      ],

      awsTip:
        "RAG commonly reduces hallucinations."
    }

  ],

  flashcards: [

    {
      q: "What does RAG stand for?",
      a: "Retrieval-Augmented Generation",
      explanation:
        "Retrieves information before generation.",
      example:
        "Internal chatbot.",
      examTip:
        "RAG retrieves external knowledge."
    },

    {
      q: "What powers retrieval?",
      a: "Embeddings",
      explanation:
        "Embeddings enable semantic search.",
      example:
        "Knowledge retrieval.",
      examTip:
        "Embeddings power RAG."
    },

    {
      q: "Split documents before embedding",
      a: "Chunking",
      explanation:
        "Improves retrieval quality.",
      example:
        "Policy documents.",
      examTip:
        "Chunking appears often in RAG questions."
    },

    {
      q: "RAG vs Fine-Tuning",
      a: "RAG retrieves knowledge, Fine-Tuning changes the model.",
      explanation:
        "Different solutions for different needs.",
      example:
        "Policy updates vs behavior changes.",
      examTip:
        "One of the most important exam distinctions."
    },

    {
      q: "Information changes frequently",
      a: "Use RAG",
      explanation:
        "Updating documents is easier than retraining.",
      example:
        "HR policies.",
      examTip:
        "Changing information = RAG."
    },

    {
      q: "Need specialized model behavior",
      a: "Use Fine-Tuning",
      explanation:
        "Training modifies model behavior.",
      example:
        "Medical terminology.",
      examTip:
        "Behavior change = Fine-Tuning."
    },

    {
      q: "AI system that uses tools",
      a: "Agent",
      explanation:
        "Agents perform actions and workflows.",
      example:
        "Travel booking assistant.",
      examTip:
        "Agents can use tools."
    },

    {
      q: "What does RLHF stand for?",
      a: "Reinforcement Learning from Human Feedback",
      explanation:
        "Uses human preferences to improve models.",
      example:
        "Chatbot ranking systems.",
      examTip:
        "RLHF improves model alignment."
    }

  ],

  checks: [

    {
      q:
        "Which technique retrieves external information before generating a response?",

      options: [
        "Regression",
        "RAG",
        "Clustering",
        "Monitoring"
      ],

      answer: 1,

      explanation:
        "RAG retrieves information before generation."
    },

    {
      q:
        "Which technique changes model weights?",

      options: [
        "Fine-Tuning",
        "RAG",
        "Vector Search",
        "Chunking"
      ],

      answer: 0,

      explanation:
        "Fine-Tuning modifies the model."
    },

    {
      q:
        "What is typically stored in a Knowledge Base?",

      options: [
        "Training hardware",
        "Company documents",
        "IAM policies only",
        "CloudWatch metrics"
      ],

      answer: 1,

      explanation:
        "Knowledge bases contain retrievable information."
    },

    {
      q:
        "Which concept helps reduce hallucinations by retrieving trusted information?",

      options: [
        "Regression",
        "RAG",
        "Clustering",
        "Monitoring"
      ],

      answer: 1,

      explanation:
        "RAG provides trusted context."
    },

    {
      q:
        "Which AI system can plan actions and use tools?",

      options: [
        "Agent",
        "Embedding",
        "Vector",
        "Classifier"
      ],

      answer: 0,

      explanation:
        "Agents perform multi-step tasks."
    },

    {
      q:
        "What does RLHF use?",

      options: [
        "Human Feedback",
        "CloudTrail",
        "Monitoring",
        "Embeddings"
      ],

      answer: 0,

      explanation:
        "RLHF uses human preferences."
    }

  ],

  scenarios: [

    {
      scenario:
        "A company updates its HR policies every week and wants chatbot answers based on the latest documents.",

      options: [
        "RAG",
        "Fine-Tuning",
        "Regression",
        "Classification"
      ],

      answer: 0,

      explanation:
        "RAG allows updated documents without retraining."
    },

    {
      scenario:
        "A company wants an LLM to consistently write in a specialized legal style.",

      options: [
        "Fine-Tuning",
        "RAG",
        "Chunking",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "Behavior changes usually require Fine-Tuning."
    },

    {
      scenario:
        "A chatbot converts a question into a vector and retrieves similar documents before answering.",

      options: [
        "RAG Workflow",
        "Regression",
        "Classification",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "This is the standard RAG process."
    },

    {
      scenario:
        "An AI assistant searches a calendar, checks availability, and books a meeting.",

      options: [
        "Agent",
        "Embedding",
        "Vector Search",
        "Classification"
      ],

      answer: 0,

      explanation:
        "Agents can perform actions using tools."
    },

    {
      scenario:
        "A company wants to improve factual accuracy using trusted company documents.",

      options: [
        "RAG",
        "Regression",
        "Clustering",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "RAG grounds responses using retrieved information."
    }

  ]

};