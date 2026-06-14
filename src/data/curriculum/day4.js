export const day4 = {
  title: "Embeddings & Vector Search",

  objectives: [
    "Understand embeddings",
    "Understand vector databases",
    "Understand similarity search",
    "Understand semantic search",
    "Understand how embeddings support RAG"
  ],

  lessons: [
    {
      title: "Embeddings",
      definition:
        "Numerical representations of meaning.",
      whyItMatters:
        "Embeddings allow AI systems to understand similarity between concepts.",
      examples: [
        "Cat → [0.2, 0.7, 0.9]",
        "Dog → [0.3, 0.8, 0.88]"
      ],
      awsTip:
        "Embeddings represent meaning as numbers."
    },

    {
      title: "Semantic Meaning",
      definition:
        "Concepts with similar meanings have similar embeddings.",
      whyItMatters:
        "Enables meaning-based retrieval.",
      examples: [
        "Car ≈ Automobile",
        "Laptop ≈ Notebook"
      ],
      awsTip:
        "Embeddings focus on meaning, not exact words."
    },

    {
      title: "Vector Database",
      definition:
        "A database optimized for storing and searching embeddings.",
      whyItMatters:
        "Essential for RAG and semantic search systems.",
      examples: [
        "Document retrieval",
        "Knowledge bases"
      ],
      awsTip:
        "Vector databases store embeddings."
    },

    {
      title: "Similarity Search",
      definition:
        "Finding content with similar meaning.",
      whyItMatters:
        "Supports intelligent search experiences.",
      examples: [
        "Car matching automobile",
        "Laptop matching notebook"
      ],
      awsTip:
        "Similarity search uses vectors."
    },

    {
      title: "Semantic Search",
      definition:
        "Search based on meaning rather than exact keywords.",
      whyItMatters:
        "Improves retrieval accuracy.",
      examples: [
        "Automobile returns car-related results"
      ],
      awsTip:
        "Semantic search is embedding-driven."
    },

    {
      title: "Embeddings in RAG",
      definition:
        "Embeddings help retrieve relevant content before generation.",
      whyItMatters:
        "Improves factual responses.",
      examples: [
        "Company policy search",
        "Knowledge retrieval"
      ],
      awsTip:
        "Embeddings are foundational to RAG."
    }
  ],

  flashcards: [
    {
      q: "Meaning represented as numbers",
      a: "Embeddings",
      explanation:
        "Embeddings encode semantic meaning.",
      example:
        "Cat and Dog vectors.",
      examTip:
        "Embeddings = numerical meaning."
    },
    {
      q: "Stores embeddings",
      a: "Vector Database",
      explanation:
        "Designed for vector retrieval.",
      example:
        "RAG document search.",
      examTip:
        "Vectors live in vector databases."
    },
    {
      q: "Search by meaning",
      a: "Semantic Search",
      explanation:
        "Finds related concepts.",
      example:
        "Car = Automobile.",
      examTip:
        "Meaning not keywords."
    },
    {
      q: "Find similar vectors",
      a: "Similarity Search",
      explanation:
        "Uses vector distance calculations.",
      example:
        "Product recommendations.",
      examTip:
        "Similarity = vector comparison."
    }
  ],

  checks: [
    {
      q: "Embeddings represent:",
      options: [
        "Meaning",
        "Images",
        "Labels",
        "Accuracy"
      ],
      answer: 0,
      explanation:
        "Embeddings represent meaning numerically."
    },
    {
      q: "Where are embeddings typically stored?",
      options: [
        "CloudTrail",
        "Vector Database",
        "KMS",
        "IAM"
      ],
      answer: 1,
      explanation:
        "Vector databases store embeddings."
    },
    {
      q: "What enables semantic search?",
      options: [
        "Regression",
        "Embeddings",
        "Classification",
        "Monitoring"
      ],
      answer: 1,
      explanation:
        "Semantic search relies on embeddings."
    }
  ],

  scenarios: [
    {
      scenario:
        "A user searches for 'automobile' and receives results about 'cars'. What enables this behavior?",
      options: [
        "Regression",
        "Embeddings",
        "Classification",
        "Monitoring"
      ],
      answer: 1,
      explanation:
        "Embeddings capture semantic meaning."
    },
    {
      scenario:
        "A company wants document retrieval based on meaning instead of keywords.",
      options: [
        "Semantic Search",
        "Regression",
        "Accuracy",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Semantic search retrieves by meaning."
    },
    {
      scenario:
        "A RAG system must find relevant documents before answering.",
      options: [
        "Vector Search",
        "Classification",
        "Recall",
        "Precision"
      ],
      answer: 0,
      explanation:
        "Vector search retrieves relevant context."
    }
  ]
};