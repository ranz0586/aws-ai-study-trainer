export const day4 = {

  title: "Embeddings & Vector Search",

  objectives: [

    "Understand embeddings",

    "Understand vector representations",

    "Understand vector databases",

    "Understand similarity search",

    "Understand semantic search",

    "Understand chunking",

    "Understand vector retrieval",

    "Understand how embeddings support RAG",

    "Understand OpenSearch vector search concepts"

  ],

  lessons: [

    {
      title: "Embeddings",

      definition:
        "Numerical representations of meaning stored as vectors.",

      whyItMatters:
        "Embeddings allow AI systems to compare concepts based on meaning rather than exact wording.",

      examples: [
        "Car",
        "Automobile",
        "Vehicle"
      ],

      awsTip:
        "Embeddings represent semantic meaning as numbers."
    },

    {
      title: "Semantic Meaning",

      definition:
        "Concepts with similar meanings are represented by similar vectors.",

      whyItMatters:
        "This enables semantic retrieval and intelligent search.",

      examples: [
        "Car ≈ Automobile",
        "Laptop ≈ Notebook",
        "Doctor ≈ Physician"
      ],

      awsTip:
        "Embeddings focus on meaning, not exact keywords."
    },

    {
      title: "Vectors",

      definition:
        "Arrays of numbers used to represent meaning mathematically.",

      whyItMatters:
        "Vectors allow similarity calculations between concepts.",

      examples: [
        "[0.21, 0.84, 0.62]",
        "[0.19, 0.81, 0.66]"
      ],

      awsTip:
        "Embeddings are stored as vectors."
    },

    {
      title: "Embedding Models",

      definition:
        "Models that convert text, images, or other data into vector representations.",

      whyItMatters:
        "Embedding models power semantic search and retrieval systems.",

      examples: [
        "Text embeddings",
        "Document embeddings",
        "Query embeddings"
      ],

      awsTip:
        "Embedding models create vectors from content."
    },

    {
      title: "Document Embeddings",

      definition:
        "Vector representations of stored content.",

      whyItMatters:
        "Documents must be converted into embeddings before retrieval can occur.",

      examples: [
        "Policy documents",
        "Knowledge base articles",
        "PDF files"
      ],

      awsTip:
        "Documents are embedded before storage."
    },

    {
      title: "Query Embeddings",

      definition:
        "Vector representations of user searches or questions.",

      whyItMatters:
        "Queries are converted into vectors before similarity comparison.",

      examples: [
        "What is our refund policy?",
        "How do I reset my password?"
      ],

      awsTip:
        "Queries and documents must use compatible embeddings."
    },

    {
      title: "Vector Database",

      definition:
        "A database optimized for storing and searching embeddings.",

      whyItMatters:
        "Vector databases support semantic retrieval and RAG systems.",

      examples: [
        "Knowledge retrieval",
        "Document search",
        "Recommendation systems"
      ],

      awsTip:
        "Vector databases store embeddings."
    },

    {
      title: "Similarity Search",

      definition:
        "Finding vectors that are most similar to a query vector.",

      whyItMatters:
        "Similarity search powers semantic retrieval.",

      examples: [
        "Car matching automobile",
        "Laptop matching notebook"
      ],

      awsTip:
        "Similarity search compares vectors."
    },

    {
      title: "Nearest Neighbor Search",

      definition:
        "Finding vectors closest to a query vector in vector space.",

      whyItMatters:
        "Most semantic retrieval systems rely on nearest neighbor search.",

      examples: [
        "Top 5 similar documents",
        "Most relevant products"
      ],

      awsTip:
        "Nearest neighbors are usually the most relevant results."
    },

    {
      title: "Semantic Search",

      definition:
        "Search based on meaning rather than exact keyword matches.",

      whyItMatters:
        "Provides more relevant results than traditional keyword search.",

      examples: [
        "Automobile returning car results",
        "Physician returning doctor results"
      ],

      awsTip:
        "Semantic search uses embeddings."
    },

    {
      title: "Chunking",

      definition:
        "Splitting large documents into smaller pieces before embedding.",

      whyItMatters:
        "Improves retrieval quality and relevance.",

      examples: [
        "Split PDF into sections",
        "Split policies into paragraphs"
      ],

      awsTip:
        "Chunking often appears in RAG questions."
    },

    {
      title: "Cosine Similarity",

      definition:
        "A common method for measuring similarity between vectors.",

      whyItMatters:
        "Helps determine which documents are most relevant.",

      examples: [
        "Compare query vector to document vectors"
      ],

      awsTip:
        "AWS focuses on the concept, not the math."
    },

    {
      title: "Vector Retrieval Flow",

      definition:
        "Convert query to embedding → Search vectors → Return relevant documents.",

      whyItMatters:
        "This retrieval process powers many AI applications.",

      examples: [
        "Knowledge search",
        "Support chatbots"
      ],

      awsTip:
        "Retrieval happens before generation in RAG."
    },

    {
      title: "Embeddings in RAG",

      definition:
        "Embeddings help retrieve relevant content before generation occurs.",

      whyItMatters:
        "Improves factual accuracy and reduces hallucinations.",

      examples: [
        "Knowledge bases",
        "Internal documentation",
        "Policy retrieval"
      ],

      awsTip:
        "Embeddings are foundational to RAG."
    },

    {
      title: "Amazon OpenSearch Vector Search",

      definition:
        "AWS capability that enables vector-based similarity search.",

      whyItMatters:
        "Common AWS service associated with semantic retrieval.",

      examples: [
        "Knowledge search",
        "Recommendation systems"
      ],

      awsTip:
        "OpenSearch frequently appears in vector search questions."
    }

  ],

  flashcards: [

    {
      q: "Meaning represented as numbers",
      a: "Embeddings",
      explanation:
        "Embeddings encode semantic meaning.",
      example:
        "Car and automobile.",
      examTip:
        "Embeddings = numerical meaning."
    },

    {
      q: "What stores embeddings?",
      a: "Vector Database",
      explanation:
        "Designed for vector retrieval.",
      example:
        "Knowledge base search.",
      examTip:
        "Vectors live in vector databases."
    },

    {
      q: "Search by meaning",
      a: "Semantic Search",
      explanation:
        "Retrieves related concepts.",
      example:
        "Automobile = Car.",
      examTip:
        "Meaning, not keywords."
    },

    {
      q: "Find most similar vectors",
      a: "Similarity Search",
      explanation:
        "Uses vector comparisons.",
      example:
        "Product recommendations.",
      examTip:
        "Similarity = vector comparison."
    },

    {
      q: "Split large documents before embedding",
      a: "Chunking",
      explanation:
        "Large documents are divided into smaller pieces.",
      example:
        "Policy sections.",
      examTip:
        "Chunking is common in RAG."
    },

    {
      q: "Closest vectors to a query",
      a: "Nearest Neighbor Search",
      explanation:
        "Finds the most relevant content.",
      example:
        "Top matching documents.",
      examTip:
        "Nearest neighbors = most relevant."
    },

    {
      q: "What powers semantic retrieval?",
      a: "Embeddings",
      explanation:
        "Embeddings enable meaning-based search.",
      example:
        "Knowledge bases.",
      examTip:
        "Embeddings power semantic search."
    },

    {
      q: "AWS service commonly associated with vector search",
      a: "Amazon OpenSearch",
      explanation:
        "Supports vector search capabilities.",
      example:
        "Knowledge retrieval.",
      examTip:
        "OpenSearch often appears in vector questions."
    }

  ],

  checks: [

    {
      q:
        "Embeddings represent:",

      options: [
        "Meaning",
        "Accuracy",
        "Labels",
        "Training"
      ],

      answer: 0,

      explanation:
        "Embeddings numerically represent meaning."
    },

    {
      q:
        "Where are embeddings commonly stored?",

      options: [
        "IAM",
        "Vector Database",
        "KMS",
        "CloudTrail"
      ],

      answer: 1,

      explanation:
        "Vector databases store embeddings."
    },

    {
      q:
        "Which concept allows automobile and car to match?",

      options: [
        "Classification",
        "Embeddings",
        "Regression",
        "Monitoring"
      ],

      answer: 1,

      explanation:
        "Embeddings capture semantic meaning."
    },

    {
      q:
        "What is chunking used for?",

      options: [
        "Encrypting data",
        "Splitting documents",
        "Training models",
        "Monitoring endpoints"
      ],

      answer: 1,

      explanation:
        "Chunking divides large content into smaller sections."
    },

    {
      q:
        "What finds vectors closest to a query vector?",

      options: [
        "Regression",
        "Nearest Neighbor Search",
        "Monitoring",
        "Classification"
      ],

      answer: 1,

      explanation:
        "Nearest neighbor search finds similar vectors."
    },

    {
      q:
        "Which AWS service is associated with vector search?",

      options: [
        "CloudTrail",
        "OpenSearch",
        "IAM",
        "KMS"
      ],

      answer: 1,

      explanation:
        "Amazon OpenSearch supports vector search."
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
        "A company wants document retrieval based on meaning instead of exact keywords.",

      options: [
        "Semantic Search",
        "Regression",
        "Accuracy",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "Semantic search retrieves content based on meaning."
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
    },

    {
      scenario:
        "A company wants to split large PDFs into smaller sections before embedding them.",

      options: [
        "Chunking",
        "Regression",
        "Classification",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "Chunking improves retrieval quality."
    },

    {
      scenario:
        "A chatbot converts a user question into a vector and searches for the most similar documents.",

      options: [
        "Nearest Neighbor Search",
        "Regression",
        "Monitoring",
        "Classification"
      ],

      answer: 0,

      explanation:
        "The chatbot retrieves nearest vectors."
    }

  ]

};