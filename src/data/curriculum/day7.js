export const day7 = {
  title: "Amazon Bedrock",

  objectives: [
    "Understand Amazon Bedrock",
    "Understand Foundation Models in Bedrock",
    "Understand Knowledge Bases",
    "Understand Bedrock Guardrails",
    "Understand Bedrock Agents",
    "Recognize Bedrock exam scenarios"
  ],

  lessons: [
    {
      title: "What is Amazon Bedrock?",
      definition:
        "AWS managed service for foundation models.",
      whyItMatters:
        "The most important GenAI service for the AWS AI Practitioner exam.",
      examples: [
        "Claude",
        "Titan",
        "Llama"
      ],
      awsTip:
        "GenAI on AWS usually means Bedrock."
    },

    {
      title: "Managed Foundation Models",
      definition:
        "Bedrock provides access to multiple foundation models through a single service.",
      whyItMatters:
        "Avoids managing infrastructure.",
      examples: [
        "Anthropic Claude",
        "Meta Llama",
        "Amazon Titan"
      ],
      awsTip:
        "Bedrock offers model choice."
    },

    {
      title: "Amazon Titan Models",
      definition:
        "Amazon's family of foundation models.",
      whyItMatters:
        "Provides text generation and embeddings.",
      examples: [
        "Titan Text",
        "Titan Embeddings"
      ],
      awsTip:
        "Titan Embeddings appear in RAG questions."
    },

    {
      title: "Knowledge Bases",
      definition:
        "Managed retrieval solution for RAG within Bedrock.",
      whyItMatters:
        "Simplifies retrieval workflows.",
      examples: [
        "Document search",
        "Policy retrieval"
      ],
      awsTip:
        "Knowledge Bases = Managed RAG."
    },

    {
      title: "Knowledge Base Workflow",
      definition:
        "Ingest documents → Create embeddings → Retrieve relevant content.",
      whyItMatters:
        "Supports enterprise knowledge systems.",
      examples: [
        "Internal documentation",
        "Support articles"
      ],
      awsTip:
        "Knowledge Bases automatically manage retrieval."
    },

    {
      title: "Bedrock Guardrails",
      definition:
        "Safety controls built into Bedrock.",
      whyItMatters:
        "Protects users and organizations.",
      examples: [
        "Content filtering",
        "PII filtering",
        "Topic restrictions"
      ],
      awsTip:
        "Guardrails enforce safe AI behavior."
    },

    {
      title: "Bedrock Agents",
      definition:
        "Managed agent capability within Bedrock.",
      whyItMatters:
        "Supports task automation.",
      examples: [
        "Customer service",
        "Travel planning",
        "Workflow execution"
      ],
      awsTip:
        "Bedrock Agents automate tasks."
    },

    {
      title: "Model Evaluation",
      definition:
        "Comparing foundation models.",
      whyItMatters:
        "Different models have different strengths.",
      examples: [
        "Accuracy",
        "Safety",
        "Cost",
        "Latency"
      ],
      awsTip:
        "Evaluation compares model performance."
    },

    {
      title: "Cost Considerations",
      definition:
        "Different models have different operational costs.",
      whyItMatters:
        "Model selection impacts budget.",
      examples: [
        "Token pricing",
        "Inference costs"
      ],
      awsTip:
        "Cost is often part of model evaluation."
    },

    {
      title: "Bedrock Exam Pattern",
      definition:
        "Many GenAI AWS exam questions have Bedrock as the answer.",
      whyItMatters:
        "High-value exam topic.",
      examples: [
        "Managed foundation models",
        "Managed RAG",
        "Agents"
      ],
      awsTip:
        "When unsure about GenAI on AWS, consider Bedrock."
    }
  ],

  flashcards: [
    {
      q: "Primary GenAI AWS service",
      a: "Amazon Bedrock",
      explanation:
        "Managed service for foundation models.",
      example:
        "Claude and Titan access.",
      examTip:
        "Most important AWS GenAI service."
    },

    {
      q: "Managed RAG in Bedrock",
      a: "Knowledge Bases",
      explanation:
        "Provides retrieval capabilities.",
      example:
        "Document search.",
      examTip:
        "Knowledge Bases = Managed RAG."
    },

    {
      q: "Bedrock safety controls",
      a: "Guardrails",
      explanation:
        "Filters unsafe content.",
      example:
        "PII blocking.",
      examTip:
        "Guardrails = Safety."
    },

    {
      q: "Managed task automation",
      a: "Bedrock Agents",
      explanation:
        "Agents automate workflows.",
      example:
        "Travel booking assistant.",
      examTip:
        "Agents perform actions."
    }
  ],

  checks: [
    {
      q: "Which AWS service provides managed access to foundation models?",
      options: [
        "SageMaker",
        "CloudTrail",
        "Amazon Bedrock",
        "IAM"
      ],
      answer: 2,
      explanation:
        "Bedrock is AWS's GenAI platform."
    },

    {
      q: "What Bedrock feature provides managed RAG?",
      options: [
        "Agents",
        "Knowledge Bases",
        "CloudTrail",
        "KMS"
      ],
      answer: 1,
      explanation:
        "Knowledge Bases provide retrieval capabilities."
    },

    {
      q: "What feature blocks unsafe content?",
      options: [
        "Embeddings",
        "Guardrails",
        "Evaluation",
        "Monitoring"
      ],
      answer: 1,
      explanation:
        "Guardrails provide safety controls."
    },

    {
      q: "What metric may be used during model evaluation?",
      options: [
        "Latency",
        "Accuracy",
        "Cost",
        "All of the Above"
      ],
      answer: 3,
      explanation:
        "All are evaluation criteria."
    }
  ],

  scenarios: [
    {
      scenario:
        "A company wants access to Claude and Llama models without managing infrastructure.",
      options: [
        "Amazon Bedrock",
        "CloudTrail",
        "KMS",
        "IAM"
      ],
      answer: 0,
      explanation:
        "Bedrock provides managed foundation models."
    },

    {
      scenario:
        "A company wants a chatbot that answers questions from uploaded internal documents.",
      options: [
        "Knowledge Bases",
        "CloudTrail",
        "Translate",
        "Polly"
      ],
      answer: 0,
      explanation:
        "Knowledge Bases provide managed retrieval."
    },

    {
      scenario:
        "A company must prevent AI responses from exposing personal information.",
      options: [
        "Guardrails",
        "Embeddings",
        "Regression",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Guardrails provide content safety controls."
    }
  ]
};