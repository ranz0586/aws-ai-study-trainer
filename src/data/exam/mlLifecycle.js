export const mlLifecycle = [

{
  id: "ML-001",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "Which stage gathers raw information for model development?",

  options: [
    "Training",
    "Evaluation",
    "Data Collection",
    "Monitoring"
  ],

  answer: 2,

  explanation:
    "Data Collection gathers information before preparation and training.",

  awsExamTip:
    "Collection comes first."
},

{
  id: "ML-002",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Removing duplicates and handling missing values occurs during:",

  options: [
    "Training",
    "Monitoring",
    "Data Preparation",
    "Deployment"
  ],

  answer: 2,

  explanation:
    "Data preparation improves data quality before training.",

  awsExamTip:
    "Garbage in = garbage out."
},

{
  id: "ML-003",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "A model performs perfectly during training but poorly in production. What is the most likely cause?",

  options: [
    "Overfitting",
    "Underfitting",
    "Embedding",
    "Classification"
  ],

  answer: 0,

  explanation:
    "Overfitting means the model memorized training data.",

  awsExamTip:
    "Perfect training + poor real-world = Overfitting."
},

{
  id: "ML-004",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Which stage helps detect model drift after deployment?",

  options: [
    "Training",
    "Monitoring",
    "Evaluation",
    "Collection"
  ],

  answer: 1,

  explanation:
    "Monitoring tracks accuracy degradation and drift.",

  awsExamTip:
    "Production models must be monitored."
},

{
  id: "ML-005",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "What is the primary purpose of model training?",

  options: [
    "Store data",
    "Learn patterns from data",
    "Deploy applications",
    "Create dashboards"
  ],

  answer: 1,

  explanation:
    "Training allows a model to learn relationships from data.",

  awsExamTip:
    "Training = learning."
},

{
  id: "ML-006",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Why is model evaluation performed?",

  options: [
    "To measure model performance",
    "To deploy the model",
    "To collect new data",
    "To create embeddings"
  ],

  answer: 0,

  explanation:
    "Evaluation determines how well a model performs before deployment.",

  awsExamTip:
    "Evaluation happens before production."
},

{
  id: "ML-007",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Which stage makes a trained model available to users?",

  options: [
    "Monitoring",
    "Deployment",
    "Preparation",
    "Collection"
  ],

  answer: 1,

  explanation:
    "Deployment places a model into production.",

  awsExamTip:
    "Deployment delivers business value."
},

{
  id: "ML-008",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is inference?",

  options: [
    "Cleaning data",
    "Training a model",
    "Using a model to make predictions",
    "Monitoring performance"
  ],

  answer: 2,

  explanation:
    "Inference occurs when a trained model processes new inputs.",

  awsExamTip:
    "Inference = prediction."
},

{
  id: "ML-009",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "What is the first step in a typical machine learning lifecycle?",

  options: [
    "Model Deployment",
    "Data Collection",
    "Monitoring",
    "Inference"
  ],

  answer: 1,

  explanation:
    "The ML lifecycle begins with gathering relevant data.",

  awsExamTip:
    "Without data, the rest of the ML lifecycle cannot proceed."
},

{
  id: "ML-010",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "Why is data preparation important before training?",

  options: [
    "To improve data quality",
    "To deploy the model",
    "To reduce storage costs",
    "To create embeddings"
  ],

  answer: 0,

  explanation:
    "Cleaning and preparing data improves model performance.",

  awsExamTip:
    "Garbage in, garbage out."
},

{
  id: "ML-011",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is the purpose of splitting data into training and test datasets?",

  options: [
    "Reduce storage costs",
    "Evaluate model performance",
    "Generate synthetic data",
    "Deploy faster"
  ],

  answer: 1,

  explanation:
    "The test set measures how well the model generalizes.",

  awsExamTip:
    "Training learns. Testing evaluates."
},

{
  id: "ML-012",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What occurs during model training?",

  options: [
    "The model learns patterns from data",
    "The model is deployed",
    "The model is monitored",
    "The model is deleted"
  ],

  answer: 0,

  explanation:
    "Training adjusts model parameters using data.",

  awsExamTip:
    "Training is the learning phase."
},

{
  id: "ML-013",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is model evaluation?",

  options: [
    "Measuring model performance",
    "Creating a dataset",
    "Deploying to production",
    "Generating labels"
  ],

  answer: 0,

  explanation:
    "Evaluation determines how accurately a model performs.",

  awsExamTip:
    "Evaluation happens before deployment."
},

{
  id: "ML-014",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is overfitting?",

  options: [
    "Model performs well on training data but poorly on new data",
    "Model performs poorly everywhere",
    "Model has too little data",
    "Model is deployed incorrectly"
  ],

  answer: 0,

  explanation:
    "Overfitting occurs when a model memorizes instead of generalizing.",

  awsExamTip:
    "Excellent training score + poor real-world results = Overfitting."
},

{
  id: "ML-015",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is underfitting?",

  options: [
    "Model fails to learn patterns",
    "Model memorizes data",
    "Model is overtrained",
    "Model is encrypted"
  ],

  answer: 0,

  explanation:
    "Underfitting occurs when the model is too simple.",

  awsExamTip:
    "Poor training and test performance usually indicates underfitting."
},

{
  id: "ML-016",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "What happens after successful model evaluation?",

  options: [
    "Deployment",
    "Data Collection",
    "Labeling",
    "Clustering"
  ],

  answer: 0,

  explanation:
    "Models are typically deployed after meeting performance goals.",

  awsExamTip:
    "Evaluation before Deployment."
},

{
  id: "ML-017",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Why is monitoring important after deployment?",

  options: [
    "To detect performance degradation",
    "To create datasets",
    "To increase storage",
    "To label data"
  ],

  answer: 0,

  explanation:
    "Monitoring ensures the model continues performing as expected.",

  awsExamTip:
    "ML lifecycle does not end at deployment."
},

{
  id: "ML-018",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is model drift?",

  options: [
    "Model performance declines as real-world data changes",
    "Model training speeds up",
    "Model storage increases",
    "Model becomes encrypted"
  ],

  answer: 0,

  explanation:
    "Data changes over time can reduce model accuracy.",

  awsExamTip:
    "Changing data can cause model drift."
},

{
  id: "ML-019",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "A company notices prediction accuracy dropping after deployment. What should they investigate first?",

  options: [
    "Model Drift",
    "IAM Policies",
    "S3 Storage",
    "VPC Routing"
  ],

  answer: 0,

  explanation:
    "Changes in incoming data may have reduced model effectiveness.",

  awsExamTip:
    "Declining accuracy often signals drift."
},

{
  id: "ML-020",
  domain: "ML Lifecycle",
  difficulty: "hard",

  question:
    "Which AWS service is commonly used to build, train, and deploy ML models?",

  options: [
    "Amazon SageMaker",
    "Amazon CloudTrail",
    "Amazon Route 53",
    "Amazon SNS"
  ],

  answer: 0,

  explanation:
    "Amazon SageMaker supports the entire ML lifecycle.",

  awsExamTip:
    "SageMaker is heavily tested on AIF-C01."
},

{
  id: "ML-021",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "What is the purpose of a validation dataset?",

  options: [
    "Tune model settings before testing",
    "Deploy the model",
    "Store logs",
    "Generate embeddings"
  ],

  answer: 0,

  explanation:
    "Validation data helps optimize models before final evaluation.",

  awsExamTip:
    "Training → Validation → Testing."
},

{
  id: "ML-022",
  domain: "ML Lifecycle",
  difficulty: "medium",

  question:
    "Which phase typically consumes the most time in ML projects?",

  options: [
    "Data Preparation",
    "Inference",
    "Deployment",
    "Monitoring"
  ],

  answer: 0,

  explanation:
    "Data preparation often represents the largest effort.",

  awsExamTip:
    "Expect data preparation questions on the exam."
},

{
  id: "ML-023",
  domain: "ML Lifecycle",
  difficulty: "hard",

  question:
    "A model performs well during testing but poorly in production. What is the most likely cause?",

  options: [
    "Data Drift",
    "Regression",
    "Classification",
    "Generation"
  ],

  answer: 0,

  explanation:
    "Production data may differ from training data.",

  awsExamTip:
    "Production issues often point to drift."
},

{
  id: "ML-024",
  domain: "ML Lifecycle",
  difficulty: "hard",

  question:
    "Which metric measures the percentage of correct predictions overall?",

  options: [
    "Accuracy",
    "Recall",
    "Precision",
    "Latency"
  ],

  answer: 0,

  explanation:
    "Accuracy measures total correct predictions divided by total predictions.",

  awsExamTip:
    "Accuracy is the most common baseline metric."
},

{
  id: "ML-025",
  domain: "ML Lifecycle",
  difficulty: "easy",

  question:
    "Which ML lifecycle stage uses a trained model to answer new requests?",

  options: [
    "Inference",
    "Training",
    "Evaluation",
    "Preparation"
  ],

  answer: 0,

  explanation:
    "Inference is the prediction stage.",

  awsExamTip:
    "Inference = using the model."
}

];