export const day7 = {
  title:
    "Amazon Bedrock",

  lessons: [
    {
      title:
        "Amazon Bedrock",

      definition:
        "Managed foundation model platform.",

      examples: [
        "Claude",
        "Llama",
        "Titan"
      ],

      awsTip:
        "Most important GenAI AWS service."
    },

    {
      title:
        "Knowledge Bases",

      definition:
        "Managed RAG.",

      examples: [
        "Internal docs"
      ],

      awsTip:
        "No custom retrieval required."
    }
  ],

  checks: [
    {
      q:
        "AWS GenAI platform?",

      options: [
        "Lambda",
        "EC2",
        "Bedrock",
        "CloudTrail"
      ],

      answer: 2
    }
  ],

  scenarios: [
    {
      scenario:
        "Company wants managed access to Claude models.",

      options: [
        "S3",
        "EC2",
        "Bedrock",
        "CloudFormation"
      ],

      answer: 2,

      explanation:
        "Bedrock provides Claude."
    }
  ]
};