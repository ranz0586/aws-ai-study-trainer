export const bedrock = [

{
  id: "BED-001",
  domain: "Amazon Bedrock",
  difficulty: "easy",

  question:
    "What is Amazon Bedrock?",

  options: [
    "A managed service for foundation models",
    "A vector database",
    "A machine learning algorithm",
    "A security service"
  ],

  answer: 0,

  explanation:
    "Amazon Bedrock provides managed access to foundation models.",

  awsExamTip:
    "For GenAI on AWS, Bedrock is often the answer."
},

{
  id: "BED-002",
  domain: "Amazon Bedrock",
  difficulty: "easy",

  question:
    "Which model family is available through Amazon Bedrock?",

  options: [
    "Claude",
    "CloudTrail",
    "Lambda",
    "CloudFormation"
  ],

  answer: 0,

  explanation:
    "Bedrock provides access to Claude and other foundation models.",

  awsExamTip:
    "Know Claude, Titan, and Llama."
},

{
  id: "BED-003",
  domain: "Amazon Bedrock",
  difficulty: "medium",

  question:
    "Which Bedrock capability simplifies Retrieval-Augmented Generation?",

  options: [
    "Knowledge Bases",
    "CloudTrail",
    "KMS",
    "Route 53"
  ],

  answer: 0,

  explanation:
    "Knowledge Bases provide managed RAG functionality.",

  awsExamTip:
    "Managed RAG = Knowledge Bases."
},

{
  id: "BED-004",
  domain: "Amazon Bedrock",
  difficulty: "medium",

  question:
    "A company wants to compare multiple foundation models before deployment. Which Bedrock feature helps?",

  options: [
    "Model Evaluation",
    "Textract",
    "CloudWatch",
    "IAM"
  ],

  answer: 0,

  explanation:
    "Model Evaluation compares accuracy, cost, latency, and safety.",

  awsExamTip:
    "AWS likes model comparison scenarios."
},

{
  id: "BED-005",
  domain: "Amazon Bedrock",
  difficulty: "medium",

  question:
    "Which Bedrock feature helps enforce AI safety policies?",

  options: [
    "Guardrails",
    "CloudTrail",
    "Personalize",
    "Rekognition"
  ],

  answer: 0,

  explanation:
    "Guardrails help restrict unsafe or undesired outputs.",

  awsExamTip:
    "Guardrails = Safety Controls."
},

{
  id: "BED-006",
  domain: "Amazon Bedrock",
  difficulty: "hard",

  question:
    "A company wants an AI assistant that can reason, plan, and call APIs. Which Bedrock feature is most appropriate?",

  options: [
    "Agents",
    "Embeddings",
    "Fine-Tuning",
    "Comprehend"
  ],

  answer: 0,

  explanation:
    "Agents can orchestrate reasoning and tool usage.",

  awsExamTip:
    "Reason + Plan + Tools = Agent."
},

{
  id: "BED-007",
  domain: "Amazon Bedrock",
  difficulty: "hard",

  question:
    "A team wants access to multiple foundation models without managing infrastructure. What should they use?",

  options: [
    "Amazon Bedrock",
    "Amazon EC2",
    "AWS Lambda",
    "Amazon EKS"
  ],

  answer: 0,

  explanation:
    "Bedrock abstracts infrastructure management.",

  awsExamTip:
    "Managed foundation model access = Bedrock."
},

{
  id: "BED-008",
  domain: "Amazon Bedrock",
  difficulty: "hard",

  question:
    "Which Bedrock capability helps automate multi-step tasks using foundation models?",

  options: [
    "Agents",
    "Guardrails",
    "Embeddings",
    "CloudTrail"
  ],

  answer: 0,

  explanation:
    "Agents can execute workflows and actions.",

  awsExamTip:
    "Automation scenarios often point to Agents."
}

];