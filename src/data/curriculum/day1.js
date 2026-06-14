export const day1 = {
  title: "AI & ML Foundations",

  lessons: [
    {
      title: "Artificial Intelligence",
      definition:
        "Systems capable of performing tasks requiring human intelligence.",
      examples: [
        "ChatGPT",
        "Alexa",
        "Self-driving cars"
      ],
      awsTip:
        "AI is the broad category. ML is a subset."
    },

    {
      title: "Machine Learning",
      definition:
        "A subset of AI where systems learn from data.",
      examples: [
        "Spam filtering",
        "Fraud detection"
      ],
      awsTip:
        "SageMaker is AWS's primary ML platform."
    },

    {
      title: "Deep Learning",
      definition:
        "Machine learning using neural networks.",
      examples: [
        "Image recognition",
        "Speech recognition"
      ],
      awsTip:
        "Deep Learning is a subset of ML."
    },

    {
      title: "Generative AI",
      definition:
        "AI that creates new content.",
      examples: [
        "ChatGPT",
        "Claude",
        "Midjourney"
      ],
      awsTip:
        "Creates content instead of predicting categories."
    }
  ],

  flashcards: [
    {
      q: "Labeled Data",
      a: "Supervised Learning"
    },
    {
      q: "Unlabeled Data",
      a: "Unsupervised Learning"
    },
    {
      q: "Predict Category",
      a: "Classification"
    },
    {
      q: "Predict Number",
      a: "Regression"
    }
  ],

  checks: [
    {
      q: "Predicting house prices is:",
      options: [
        "Classification",
        "Regression",
        "Clustering",
        "Embedding"
      ],
      answer: 1
    },

    {
      q: "Customer segmentation is:",
      options: [
        "Regression",
        "Classification",
        "Clustering",
        "Generation"
      ],
      answer: 2
    }
  ],

  scenarios: [
    {
      scenario:
        "A bank has historical transactions labeled as fraudulent or legitimate.",
      options: [
        "Reinforcement Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "Generative AI"
      ],
      answer: 1,
      explanation:
        "Historical labels already exist."
    }
  ]
};