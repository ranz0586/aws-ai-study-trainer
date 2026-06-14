export const promptEngineering = [

{
  id: "PE-001",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "What is Prompt Engineering?",

  options: [
    "Improving results without changing the model",
    "Training a new model",
    "Building embeddings",
    "Monitoring accuracy"
  ],

  answer: 0,

  explanation:
    "Prompt engineering improves output quality through better instructions.",

  awsExamTip:
    "AWS tests prompt design frequently."
},

{
  id: "PE-002",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "A prompt containing only instructions and no examples is called:",

  options: [
    "Few-Shot",
    "One-Shot",
    "Zero-Shot",
    "Fine-Tuning"
  ],

  answer: 2,

  explanation:
    "Zero-shot prompts provide instructions only.",

  awsExamTip:
    "No examples = Zero-Shot."
},

{
  id: "PE-003",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "A prompt that includes exactly one example is called:",

  options: [
    "One-Shot",
    "Few-Shot",
    "Zero-Shot",
    "RAG"
  ],

  answer: 0,

  explanation:
    "One-shot prompting provides a single example.",

  awsExamTip:
    "One example = One-Shot."
},

{
  id: "PE-004",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "A prompt containing multiple examples is known as:",

  options: [
    "Zero-Shot",
    "Few-Shot",
    "RAG",
    "Embedding"
  ],

  answer: 1,

  explanation:
    "Few-shot prompting teaches patterns through examples.",

  awsExamTip:
    "Multiple examples = Few-Shot."
},

{
  id: "PE-005",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "Which prompt component helps define the perspective the model should adopt?",

  options: [
    "Role",
    "Temperature",
    "Embedding",
    "Token"
  ],

  answer: 0,

  explanation:
    "Roles guide the model's behavior.",

  awsExamTip:
    "'Act as a financial analyst' = Role."
},

{
  id: "PE-006",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "A team continuously refines prompts to improve output quality. What practice are they using?",

  options: [
    "Prompt Iteration",
    "Fine-Tuning",
    "Monitoring",
    "Clustering"
  ],

  answer: 0,

  explanation:
    "Prompt iteration involves repeatedly improving prompts.",

  awsExamTip:
    "AWS likes Prompt Iteration questions."
},

{
  id: "PE-007",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "What is the primary goal of prompt engineering?",

  options: [
    "Improve model outputs",
    "Train new models",
    "Reduce storage",
    "Manage permissions"
  ],

  answer: 0,

  explanation:
    "Prompt engineering improves response quality through better instructions.",

  awsExamTip:
    "Prompt quality directly affects output quality."
},

{
  id: "PE-008",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "Which prompt technique provides examples to guide the model?",

  options: [
    "Few-Shot Prompting",
    "Monitoring",
    "Clustering",
    "Tokenization"
  ],

  answer: 0,

  explanation:
    "Few-shot prompting uses examples to establish patterns.",

  awsExamTip:
    "Examples improve consistency."
},

{
  id: "PE-009",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "Why are clear instructions important in prompts?",

  options: [
    "They reduce ambiguity",
    "They increase storage",
    "They replace embeddings",
    "They reduce security"
  ],

  answer: 0,

  explanation:
    "Clear instructions help models understand expectations.",

  awsExamTip:
    "Be specific whenever possible."
},

{
  id: "PE-010",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "Which prompt is an example of role prompting?",

  options: [
    "Act as a cybersecurity analyst",
    "Summarize this text",
    "Translate this sentence",
    "List three cities"
  ],

  answer: 0,

  explanation:
    "Role prompting assigns a persona or expertise.",

  awsExamTip:
    "Role prompts often start with 'Act as'."
},

{
  id: "PE-011",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "What is a common benefit of few-shot prompting?",

  options: [
    "Improved output consistency",
    "Reduced token usage",
    "Model retraining",
    "Lower storage costs"
  ],

  answer: 0,

  explanation:
    "Examples help guide the model toward desired formats.",

  awsExamTip:
    "Few-shot often improves formatting."
},

{
  id: "PE-012",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "Which prompt technique is most useful when a model struggles to follow formatting requirements?",

  options: [
    "Few-Shot Prompting",
    "Regression",
    "Classification",
    "Embedding"
  ],

  answer: 0,

  explanation:
    "Examples demonstrate the expected structure.",

  awsExamTip:
    "Show the model what good output looks like."
},

{
  id: "PE-013",
  domain: "Prompt Engineering",
  difficulty: "easy",

  question:
    "Which prompting approach uses no examples?",

  options: [
    "Zero-Shot",
    "One-Shot",
    "Few-Shot",
    "RAG"
  ],

  answer: 0,

  explanation:
    "Zero-shot prompting relies entirely on instructions.",

  awsExamTip:
    "No examples = Zero-Shot."
},

{
  id: "PE-014",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "Why might prompt iteration be necessary?",

  options: [
    "Initial prompts may not produce ideal results",
    "Models require retraining",
    "Embeddings expire",
    "IAM policies change"
  ],

  answer: 0,

  explanation:
    "Prompts are often refined through experimentation.",

  awsExamTip:
    "Prompt engineering is iterative."
},

{
  id: "PE-015",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "A company wants AI responses written in a professional tone. What should be included in the prompt?",

  options: [
    "Tone instructions",
    "A subnet",
    "An embedding",
    "A vector database"
  ],

  answer: 0,

  explanation:
    "Explicit tone guidance improves consistency.",

  awsExamTip:
    "Specify style and tone directly."
},

{
  id: "PE-016",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "Which prompt technique helps establish a desired output pattern with one example?",

  options: [
    "One-Shot Prompting",
    "Zero-Shot Prompting",
    "Monitoring",
    "Fine-Tuning"
  ],

  answer: 0,

  explanation:
    "One-shot prompting provides a single demonstration.",

  awsExamTip:
    "One example = One-Shot."
},

{
  id: "PE-017",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "What is the purpose of defining output format requirements?",

  options: [
    "Improve response consistency",
    "Train the model",
    "Create embeddings",
    "Reduce latency"
  ],

  answer: 0,

  explanation:
    "Formatting guidance helps control output structure.",

  awsExamTip:
    "Tell the model exactly how to respond."
},

{
  id: "PE-018",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "Which technique helps guide a model without modifying model weights?",

  options: [
    "Prompt Engineering",
    "Fine-Tuning",
    "Retraining",
    "Data Labeling"
  ],

  answer: 0,

  explanation:
    "Prompt engineering changes instructions, not the model.",

  awsExamTip:
    "Prompting is often faster than retraining."
},

{
  id: "PE-019",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "What is the benefit of providing context in a prompt?",

  options: [
    "More relevant responses",
    "Smaller models",
    "Fewer vectors",
    "Reduced storage"
  ],

  answer: 0,

  explanation:
    "Context helps the model generate better answers.",

  awsExamTip:
    "Context improves relevance."
},

{
  id: "PE-020",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "A prompt asks a model to answer as an AWS Solutions Architect. Which technique is being used?",

  options: [
    "Role Prompting",
    "Few-Shot Prompting",
    "Classification",
    "Regression"
  ],

  answer: 0,

  explanation:
    "Role prompting establishes expertise and perspective.",

  awsExamTip:
    "Role prompts define behavior."
},

{
  id: "PE-021",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "Which technique is often attempted before fine-tuning a model?",

  options: [
    "Prompt Engineering",
    "Model Retraining",
    "Data Collection",
    "Clustering"
  ],

  answer: 0,

  explanation:
    "Prompt improvements are typically cheaper and faster.",

  awsExamTip:
    "Prompt first, fine-tune later."
},

{
  id: "PE-022",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "What is a common reason to use few-shot prompting?",

  options: [
    "Teach desired patterns",
    "Reduce storage",
    "Create vectors",
    "Encrypt data"
  ],

  answer: 0,

  explanation:
    "Examples demonstrate expected outputs.",

  awsExamTip:
    "Examples teach behavior."
},

{
  id: "PE-023",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "A model gives inconsistent responses to the same task. What should be improved first?",

  options: [
    "Prompt Design",
    "Subnet Design",
    "IAM Policies",
    "CloudTrail Logs"
  ],

  answer: 0,

  explanation:
    "Better prompts often improve consistency.",

  awsExamTip:
    "Prompt quality matters."
},

{
  id: "PE-024",
  domain: "Prompt Engineering",
  difficulty: "medium",

  question:
    "What does prompt engineering primarily influence?",

  options: [
    "Model Output",
    "Training Data",
    "Network Performance",
    "Storage Capacity"
  ],

  answer: 0,

  explanation:
    "Prompt engineering affects generated responses.",

  awsExamTip:
    "Prompts influence outputs."
},

{
  id: "PE-025",
  domain: "Prompt Engineering",
  difficulty: "hard",

  question:
    "A company wants more reliable structured JSON responses from a model. What should they do?",

  options: [
    "Explicitly specify the output format in the prompt",
    "Increase storage",
    "Create more IAM roles",
    "Reduce context"
  ],

  answer: 0,

  explanation:
    "Explicit formatting instructions improve structured output reliability.",

  awsExamTip:
    "Always specify the desired format."
}

];