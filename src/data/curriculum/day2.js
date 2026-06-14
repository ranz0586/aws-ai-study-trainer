export const day2 = {
  title: "ML Lifecycle",

  lessons: [
    {
      title: "Data Collection",
      definition:
        "Gather raw data for model training.",
      examples: [
        "Customer purchases",
        "Transaction logs"
      ],
      awsTip:
        "Good models start with quality data."
    },

    {
      title: "Data Preparation",
      definition:
        "Clean and organize data.",
      examples: [
        "Remove duplicates",
        "Fill missing values"
      ],
      awsTip:
        "Poor data quality creates poor models."
    },

    {
      title: "Training",
      definition:
        "Model learns patterns from data.",
      examples: [
        "Fraud detection",
        "Sales forecasting"
      ],
      awsTip:
        "Training discovers patterns."
    },

    {
      title: "Monitoring",
      definition:
        "Track production model performance.",
      examples: [
        "Data drift",
        "Accuracy decline"
      ],
      awsTip:
        "Monitoring catches model degradation."
    }
  ],

  flashcards: [
    {
      q: "Model memorizes training data?",
      a: "Overfitting"
    },

    {
      q: "Model too simple?",
      a: "Underfitting"
    },

    {
      q: "Correct predictions ratio?",
      a: "Accuracy"
    }
  ],

  checks: [
    {
      q: "Model performs well in training but poorly in production.",
      options: [
        "Underfitting",
        "Overfitting",
        "Monitoring",
        "Clustering"
      ],
      answer: 1
    }
  ],

  scenarios: [
    {
      scenario:
        "A fraud detection model has 99% training accuracy but fails in production.",
      options: [
        "Overfitting",
        "Recall",
        "Precision",
        "Embedding"
      ],
      answer: 0,
      explanation:
        "Model memorized training data."
    }
  ]
};