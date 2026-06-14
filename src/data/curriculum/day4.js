export const day4 = {
  title:
    "Embeddings & Vector Search",

  lessons: [
    {
      title: "Embeddings",

      definition:
        "Numerical representations of meaning.",

      examples: [
        "Cat → Vector",
        "Dog → Vector"
      ],

      awsTip:
        "Embeddings enable semantic search."
    },

    {
      title:
        "Vector Databases",

      definition:
        "Stores embeddings for retrieval.",

      examples: [
        "RAG",
        "Similarity Search"
      ],

      awsTip:
        "Often paired with Bedrock."
    }
  ],

  checks: [
    {
      q:
        "Embeddings represent:",

      options: [
        "Images",
        "Meaning",
        "IAM",
        "Logs"
      ],

      answer: 1
    }
  ],

  scenarios: [
    {
      scenario:
        "Search should return 'car' when user searches 'automobile'.",

      options: [
        "CloudTrail",
        "KMS",
        "Vector Search",
        "IAM"
      ],

      answer: 2,

      explanation:
        "Search by meaning."
    }
  ]
};