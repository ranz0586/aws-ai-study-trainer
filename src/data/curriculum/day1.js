export const day1 = {
  title: "AI & ML Foundations",

  objectives: [
    "Understand the relationship between AI, ML, Deep Learning, and Generative AI",
    "Understand supervised, unsupervised, and reinforcement learning",
    "Differentiate classification, regression, and clustering",
    "Recognize AWS exam keywords and common traps"
  ],

  lessons: [

    {
      title: "Artificial Intelligence (AI)",

      definition:
        "Systems capable of performing tasks that normally require human intelligence.",

      whyItMatters:
        "AI is the broadest category. Many AWS exam questions test whether you understand that ML and Generative AI are subsets of AI.",

      examples: [
        "ChatGPT",
        "Alexa",
        "Self-driving cars"
      ],

      awsTip:
        "AI is the umbrella category. Most exam distractors try to confuse AI with ML."
    },

    {
      title: "Machine Learning (ML)",

      definition:
        "A subset of AI where systems learn patterns from data instead of being explicitly programmed.",

      whyItMatters:
        "ML powers prediction systems such as fraud detection and recommendation engines.",

      examples: [
        "Spam filtering",
        "Fraud detection",
        "Product recommendations"
      ],

      awsTip:
        "When the question mentions learning from historical data, AWS usually wants Machine Learning."
    },

    {
      title: "Deep Learning",

      definition:
        "A subset of ML that uses neural networks with multiple layers.",

      whyItMatters:
        "Deep learning is commonly used for images, speech, and complex pattern recognition.",

      examples: [
        "Image recognition",
        "Speech recognition",
        "Face detection"
      ],

      awsTip:
        "Deep Learning is a subset of Machine Learning."
    },

    {
      title: "Generative AI",

      definition:
        "AI that creates new content such as text, images, code, audio, or video.",

      whyItMatters:
        "Generative AI is a major AWS AIF-C01 exam domain and heavily tested through Amazon Bedrock.",

      examples: [
        "ChatGPT",
        "Claude",
        "Midjourney"
      ],

      awsTip:
        "Generative AI creates content. Traditional ML predicts outcomes."
    },

    {
      title: "Supervised Learning",

      definition:
        "Machine learning that uses labeled data.",

      whyItMatters:
        "Many business prediction problems use supervised learning.",

      examples: [
        "Spam vs Not Spam",
        "Fraud vs Legitimate",
        "Approved vs Denied Loans"
      ],

      awsTip:
        "Known outcomes or labels = Supervised Learning."
    },

    {
      title: "Unsupervised Learning",

      definition:
        "Machine learning that uses unlabeled data.",

      whyItMatters:
        "Used to discover patterns that humans have not labeled.",

      examples: [
        "Customer segmentation",
        "Grouping products",
        "Pattern discovery"
      ],

      awsTip:
        "No labels available = Unsupervised Learning."
    },

    {
      title: "Reinforcement Learning",

      definition:
        "Learning through rewards and penalties.",

      whyItMatters:
        "The model improves by maximizing rewards over time.",

      examples: [
        "Chess AI",
        "Game playing",
        "Robotics"
      ],

      awsTip:
        "Reward system = Reinforcement Learning."
    },

    {
      title: "Classification",

      definition:
        "Predicting a category.",

      whyItMatters:
        "One of the most common supervised learning tasks.",

      examples: [
        "Spam / Not Spam",
        "Fraud / Legitimate",
        "Approved / Denied"
      ],

      awsTip:
        "Category prediction = Classification."
    },

    {
      title: "Regression",

      definition:
        "Predicting a numerical value.",

      whyItMatters:
        "Used for forecasting and estimating quantities.",

      examples: [
        "House prices",
        "Revenue forecast",
        "Sales forecast"
      ],

      awsTip:
        "Number prediction = Regression."
    },

    {
      title: "Clustering",

      definition:
        "Grouping similar items together.",

      whyItMatters:
        "A common unsupervised learning technique.",

      examples: [
        "Customer segmentation",
        "Product grouping",
        "Behavior analysis"
      ],

      awsTip:
        "Grouping without labels = Clustering."
    }
  ],

  flashcards: [

    {
      q: "Which learning type uses labeled data?",
      a: "Supervised Learning",
      explanation:
        "The model learns from examples with known outcomes.",
      example:
        "Spam vs Not Spam emails.",
      examTip:
        "Known labels = Supervised Learning."
    },

    {
      q: "Which learning type uses unlabeled data?",
      a: "Unsupervised Learning",
      explanation:
        "The model discovers patterns without known answers.",
      example:
        "Customer segmentation.",
      examTip:
        "No labels = Unsupervised Learning."
    },

    {
      q: "What predicts categories?",
      a: "Classification",
      explanation:
        "Classification predicts labels or categories.",
      example:
        "Fraud vs Legitimate.",
      examTip:
        "Category = Classification."
    },

    {
      q: "What predicts numbers?",
      a: "Regression",
      explanation:
        "Regression predicts numeric values.",
      example:
        "House price prediction.",
      examTip:
        "Number = Regression."
    },

    {
      q: "What groups similar items?",
      a: "Clustering",
      explanation:
        "Clustering finds similar groups.",
      example:
        "Customer segmentation.",
      examTip:
        "Grouping = Clustering."
    }
  ],

  checks: [

    {
      q:
        "A company has historical emails labeled Spam or Not Spam. Which learning approach should be used?",

      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Clustering",
        "Generative AI"
      ],

      answer: 0,

      explanation:
        "The data already contains known labels."
    },

    {
      q:
        "Predicting house prices is an example of:",

      options: [
        "Classification",
        "Regression",
        "Clustering",
        "Generation"
      ],

      answer: 1,

      explanation:
        "Regression predicts numerical values."
    },

    {
      q:
        "Grouping customers by purchasing behavior is:",

      options: [
        "Regression",
        "Classification",
        "Clustering",
        "Reinforcement Learning"
      ],

      answer: 2,

      explanation:
        "Customer segmentation is clustering."
    },

    {
      q:
        "A model learns by receiving rewards for successful actions. This is:",

      options: [
        "Supervised Learning",
        "Regression",
        "Reinforcement Learning",
        "Classification"
      ],

      answer: 2,

      explanation:
        "Rewards and penalties indicate Reinforcement Learning."
    }
  ],

  scenarios: [

    {
      scenario:
        "A bank has five years of transaction history labeled as fraudulent or legitimate. The bank wants to automatically identify future fraud.",

      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Clustering",
        "Generative AI"
      ],

      answer: 0,

      explanation:
        "Historical labeled outcomes make this a supervised learning problem."
    },

    {
      scenario:
        "A retailer wants to group customers based on shopping behavior but has no predefined labels.",

      options: [
        "Classification",
        "Regression",
        "Clustering",
        "Reinforcement Learning"
      ],

      answer: 2,

      explanation:
        "Grouping without labels is clustering."
    },

    {
      scenario:
        "A company wants a model that improves performance by receiving rewards for successful decisions.",

      options: [
        "Regression",
        "Classification",
        "Reinforcement Learning",
        "Generative AI"
      ],

      answer: 2,

      explanation:
        "Learning through rewards is reinforcement learning."
    }
  ]
};