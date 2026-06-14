export const day2 = {
  title: "ML Lifecycle",

  objectives: [
    "Understand the machine learning lifecycle",
    "Understand model evaluation metrics",
    "Recognize overfitting and underfitting",
    "Understand deployment and monitoring concepts"
  ],

  lessons: [
    {
      title: "Data Collection",
      definition:
        "The process of gathering raw data used to train machine learning models.",
      whyItMatters:
        "Model quality depends heavily on data quality.",
      examples: [
        "Customer purchases",
        "Website clicks",
        "Medical records"
      ],
      awsTip:
        "Bad data leads to bad predictions."
    },

    {
      title: "Data Preparation",
      definition:
        "Cleaning and transforming data before training.",
      whyItMatters:
        "Real-world data is often incomplete or inconsistent.",
      examples: [
        "Remove duplicates",
        "Fill missing values",
        "Normalize values"
      ],
      awsTip:
        "Data preparation often takes most of an ML project's time."
    },

    {
      title: "Training",
      definition:
        "The process where a model learns patterns from data.",
      whyItMatters:
        "Training determines what the model learns.",
      examples: [
        "Fraud detection",
        "Spam filtering"
      ],
      awsTip:
        "Training uses historical data."
    },

    {
      title: "Evaluation",
      definition:
        "Testing model performance using unseen data.",
      whyItMatters:
        "A model must generalize beyond training data.",
      examples: [
        "Accuracy testing",
        "Validation datasets"
      ],
      awsTip:
        "Evaluation happens before deployment."
    },

    {
      title: "Deployment",
      definition:
        "Making a trained model available for use.",
      whyItMatters:
        "Deployment delivers business value.",
      examples: [
        "Fraud detection API",
        "Recommendation engine"
      ],
      awsTip:
        "Deployment follows successful evaluation."
    },

    {
      title: "Monitoring",
      definition:
        "Tracking model performance after deployment.",
      whyItMatters:
        "Model performance can degrade over time.",
      examples: [
        "Accuracy tracking",
        "Model drift detection"
      ],
      awsTip:
        "AWS likes questions about model drift."
    },

    {
      title: "Accuracy",
      definition:
        "Correct predictions divided by total predictions.",
      whyItMatters:
        "Simple measurement of model performance.",
      examples: [
        "90 correct predictions out of 100 = 90% accuracy"
      ],
      awsTip:
        "Accuracy alone can be misleading."
    },

    {
      title: "Precision",
      definition:
        "Among predicted positives, how many were actually positive?",
      whyItMatters:
        "Useful when false positives are expensive.",
      examples: [
        "Fraud alerts",
        "Medical diagnosis"
      ],
      awsTip:
        "Predicted positives → Precision."
    },

    {
      title: "Recall",
      definition:
        "Among actual positives, how many were detected?",
      whyItMatters:
        "Useful when missing positives is costly.",
      examples: [
        "Cancer detection",
        "Fraud detection"
      ],
      awsTip:
        "Actual positives → Recall."
    },

    {
      title: "F1 Score",
      definition:
        "A balance between precision and recall.",
      whyItMatters:
        "Useful when both false positives and false negatives matter.",
      examples: [
        "Fraud detection",
        "Medical screening"
      ],
      awsTip:
        "F1 combines precision and recall."
    },

    {
      title: "Overfitting",
      definition:
        "A model memorizes training data instead of learning patterns.",
      whyItMatters:
        "Poor performance on new data.",
      examples: [
        "99% training accuracy but poor production performance"
      ],
      awsTip:
        "Overfitting = great training results, poor real-world results."
    },

    {
      title: "Underfitting",
      definition:
        "A model is too simple to learn meaningful patterns.",
      whyItMatters:
        "Poor performance everywhere.",
      examples: [
        "Low training accuracy and low test accuracy"
      ],
      awsTip:
        "Underfitting means the model has learned too little."
    }
  ],

  flashcards: [
    {
      q: "Correct predictions ÷ total predictions",
      a: "Accuracy",
      explanation:
        "Measures overall correctness.",
      example:
        "90/100 predictions correct.",
      examTip:
        "Most basic evaluation metric."
    },

    {
      q: "Predicted positives that were actually positive",
      a: "Precision",
      explanation:
        "Measures quality of positive predictions.",
      example:
        "Fraud alerts.",
      examTip:
        "Predicted positives = Precision."
    },

    {
      q: "Actual positives successfully detected",
      a: "Recall",
      explanation:
        "Measures detection capability.",
      example:
        "Cancer detection.",
      examTip:
        "Actual positives = Recall."
    },

    {
      q: "Balance between precision and recall",
      a: "F1 Score",
      explanation:
        "Combines both metrics.",
      example:
        "Fraud detection.",
      examTip:
        "Precision + Recall = F1."
    },

    {
      q: "Memorizes training data",
      a: "Overfitting",
      explanation:
        "Fails to generalize.",
      example:
        "Excellent training accuracy, poor production accuracy.",
      examTip:
        "Common AWS exam concept."
    }
  ],

  checks: [
    {
      q: "Which ML lifecycle stage cleans data?",
      options: [
        "Training",
        "Evaluation",
        "Data Preparation",
        "Monitoring"
      ],
      answer: 2,
      explanation:
        "Cleaning occurs during data preparation."
    },

    {
      q: "Which metric focuses on predicted positives?",
      options: [
        "Recall",
        "Precision",
        "Accuracy",
        "F1"
      ],
      answer: 1,
      explanation:
        "Precision evaluates predicted positives."
    },

    {
      q: "Which metric focuses on actual positives?",
      options: [
        "Accuracy",
        "Precision",
        "Recall",
        "F1"
      ],
      answer: 2,
      explanation:
        "Recall evaluates actual positives."
    },

    {
      q: "A model performs well in training but poorly in production.",
      options: [
        "Overfitting",
        "Underfitting",
        "Clustering",
        "Regression"
      ],
      answer: 0,
      explanation:
        "The model memorized training data."
    }
  ],

  scenarios: [
    {
      scenario:
        "A fraud detection model flags many legitimate transactions as fraud. Which metric should be improved?",
      options: [
        "Recall",
        "Precision",
        "Clustering",
        "Regression"
      ],
      answer: 1,
      explanation:
        "False positives indicate low precision."
    },

    {
      scenario:
        "A healthcare model misses many actual disease cases.",
      options: [
        "Recall",
        "Precision",
        "Accuracy",
        "Training"
      ],
      answer: 0,
      explanation:
        "Missing positives indicates poor recall."
    },

    {
      scenario:
        "A deployed model becomes less accurate because customer behavior changes.",
      options: [
        "Model Drift",
        "Clustering",
        "Regression",
        "Embedding"
      ],
      answer: 0,
      explanation:
        "Changing patterns cause model drift."
    }
  ]
};