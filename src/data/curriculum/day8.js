export const day8 = {
  title: "AWS AI Services",

  objectives: [
    "Identify AWS AI and ML services",

    "Match business problems to AWS services",

    "Distinguish Bedrock from SageMaker",

    "Recognize high-frequency AIF-C01 services",

    "Understand managed AI service use cases",

    "Recognize service selection exam patterns"
  ],

  lessons: [
    {
      title: "Amazon Textract",

      definition: "Extracts text, forms, and tables from documents.",

      whyItMatters: "Frequently tested OCR service.",

      examples: ["Invoices", "Receipts", "PDF forms"],

      awsTip: "OCR documents = Textract."
    },

    {
      title: "Amazon Comprehend",

      definition: "Natural Language Processing service.",

      whyItMatters: "Analyzes text and extracts meaning.",

      examples: [
        "Sentiment analysis",
        "Entity detection",
        "Topic classification"
      ],

      awsTip: "Text understanding = Comprehend."
    },

    {
      title: "Amazon Rekognition",

      definition: "Image and video analysis service.",

      whyItMatters: "Primary AWS computer vision service.",

      examples: ["Object detection", "Face analysis", "Content moderation"],

      awsTip: "Images and video = Rekognition."
    },

    {
      title: "Amazon Lex",

      definition: "Service for building conversational chatbots.",

      whyItMatters: "Frequently appears in chatbot questions.",

      examples: ["Support bots", "Virtual assistants"],

      awsTip: "Chatbots = Lex."
    },

    {
      title: "Amazon Polly",

      definition: "Converts text into natural speech.",

      whyItMatters: "Text-to-speech service.",

      examples: ["Narration", "Accessibility"],

      awsTip: "Text → Speech = Polly."
    },

    {
      title: "Amazon Transcribe",

      definition: "Converts speech into text.",

      whyItMatters: "Speech-to-text service.",

      examples: ["Meeting transcripts", "Call recordings"],

      awsTip: "Speech → Text = Transcribe."
    },

    {
      title: "Amazon Translate",

      definition: "Language translation service.",

      whyItMatters: "Supports multilingual applications.",

      examples: ["Website translation", "Customer support"],

      awsTip: "Translation = Translate."
    },

    {
      title: "Amazon Personalize",

      definition: "Recommendation engine service.",

      whyItMatters: "Frequently appears in recommendation scenarios.",

      examples: ["Product recommendations", "Content recommendations"],

      awsTip: "Recommendations = Personalize."
    },

    {
      title: "Amazon Kendra",

      definition: "Enterprise intelligent search service.",

      whyItMatters: "Designed for enterprise document search.",

      examples: ["Internal search", "Knowledge discovery"],

      awsTip: "Enterprise search = Kendra."
    },

    {
      title: "Amazon Fraud Detector",

      definition: "Managed fraud detection service.",

      whyItMatters: "Common AWS AI service question.",

      examples: ["Payment fraud", "Account fraud"],

      awsTip: "Fraud detection = Fraud Detector."
    },

    {
      title: "Amazon Augmented AI (A2I)",

      definition: "Human review workflows for ML predictions.",

      whyItMatters: "Supports human oversight.",

      examples: ["Document review", "Prediction validation"],

      awsTip: "Human review = A2I."
    },

    {
      title: "Amazon Forecast",

      definition: "Time-series forecasting service.",

      whyItMatters: "Used for business forecasting.",

      examples: ["Demand forecasting", "Revenue forecasting"],

      awsTip: "Forecasting = Forecast."
    },

    {
      title: "Amazon SageMaker",

      definition: "Platform for building, training, and deploying ML models.",

      whyItMatters: "Core AWS machine learning platform.",

      examples: ["Fraud detection", "Prediction models"],

      awsTip: "Traditional ML = SageMaker."
    },

    {
      title: "SageMaker JumpStart",

      definition: "Provides pretrained models and solution templates.",

      whyItMatters: "Accelerates ML development.",

      examples: ["Foundation models", "Starter solutions"],

      awsTip: "JumpStart accelerates model deployment."
    },

    {
      title: "Amazon Bedrock",

      definition: "Managed Foundation Model platform.",

      whyItMatters: "Core AWS Generative AI service.",

      examples: ["Claude", "Titan", "Llama"],

      awsTip: "Generative AI = Bedrock."
    },

    {
      title: "Amazon Q",

      definition: "Generative AI assistant for business and developers.",

      whyItMatters: "Frequently mentioned in modern AWS AI workflows.",

      examples: ["Developer assistance", "Business assistance"],

      awsTip: "AI assistant = Amazon Q."
    },

    {
      title: "Amazon OpenSearch",

      definition:
        "Search and analytics service with vector search capabilities.",

      whyItMatters: "Commonly used with RAG.",

      examples: ["Semantic search", "Vector retrieval"],

      awsTip: "Vector search = OpenSearch."
    },

    {
      title: "Amazon Macie",

      definition:
        "Data security service that identifies sensitive information.",

      whyItMatters: "Frequently appears in governance and security questions.",

      examples: ["PII discovery", "Sensitive data monitoring"],

      awsTip: "Sensitive data discovery = Macie."
    },

    {
      title: "AWS DeepRacer",

      definition: "Reinforcement learning educational platform.",

      whyItMatters: "Often referenced when discussing reinforcement learning.",

      examples: ["Autonomous racing"],

      awsTip: "DeepRacer = Reinforcement Learning."
    },

    {
      title: "Bedrock vs SageMaker",

      definition:
        "Bedrock focuses on Generative AI while SageMaker focuses on ML development.",

      whyItMatters: "One of the most common AWS exam comparisons.",

      examples: ["Claude → Bedrock", "Custom ML Model → SageMaker"],

      awsTip: "GenAI = Bedrock. ML = SageMaker."
    }
  ],

  flashcards: [
    {
      q: "OCR documents",
      a: "Amazon Textract",
      explanation: "Extracts text from documents.",
      example: "Invoices.",
      examTip: "OCR = Textract."
    },

    {
      q: "Sentiment analysis",
      a: "Amazon Comprehend",
      explanation: "Analyzes text meaning.",
      example: "Customer reviews.",
      examTip: "Text = Comprehend."
    },

    {
      q: "Image analysis",
      a: "Amazon Rekognition",
      explanation: "Analyzes images and videos.",
      example: "Object detection.",
      examTip: "Images = Rekognition."
    },

    {
      q: "Recommendation engine",
      a: "Amazon Personalize",
      explanation: "Creates personalized recommendations.",
      example: "E-commerce products.",
      examTip: "Recommendations = Personalize."
    },

    {
      q: "Enterprise search",
      a: "Amazon Kendra",
      explanation: "Searches organizational knowledge.",
      example: "Company documentation.",
      examTip: "Enterprise search = Kendra."
    },

    {
      q: "Human review workflow",
      a: "Amazon A2I",
      explanation: "Humans validate predictions.",
      example: "Document review.",
      examTip: "Human review = A2I."
    },

    {
      q: "Sensitive data discovery",
      a: "Amazon Macie",
      explanation: "Detects sensitive information.",
      example: "PII scanning.",
      examTip: "Sensitive data = Macie."
    },

    {
      q: "GenAI platform",
      a: "Amazon Bedrock",
      explanation: "Managed Foundation Models.",
      example: "Claude.",
      examTip: "GenAI = Bedrock."
    }
  ],

  checks: [
    {
      q: "Which service extracts text from scanned documents?",

      options: ["Textract", "Comprehend", "Lex", "Polly"],

      answer: 0,

      explanation: "Textract performs OCR."
    },

    {
      q: "Which service provides enterprise document search?",

      options: ["Kendra", "Lex", "Polly", "Translate"],

      answer: 0,

      explanation: "Kendra provides enterprise search."
    },

    {
      q: "Which service identifies sensitive data such as PII?",

      options: ["Macie", "Textract", "Translate", "Polly"],

      answer: 0,

      explanation: "Macie discovers sensitive information."
    },

    {
      q: "Which service supports recommendation systems?",

      options: ["Personalize", "Comprehend", "Lex", "Translate"],

      answer: 0,

      explanation: "Personalize builds recommendation engines."
    },

    {
      q: "Which AWS service is primarily associated with Generative AI?",

      options: ["Bedrock", "Textract", "Forecast", "Lex"],

      answer: 0,

      explanation: "Bedrock is AWS's GenAI platform."
    },

    {
      q: "Which service supports human review of ML predictions?",

      options: ["A2I", "Kendra", "Macie", "Forecast"],

      answer: 0,

      explanation: "A2I provides human review workflows."
    }
  ],

  scenarios: [
    {
      scenario: "A company wants to extract structured data from invoices.",

      options: ["Textract", "Comprehend", "Lex", "Translate"],

      answer: 0,

      explanation: "Textract extracts text, forms, and tables."
    },

    {
      scenario: "A retailer wants Netflix-style recommendations.",

      options: ["Personalize", "Rekognition", "Translate", "Polly"],

      answer: 0,

      explanation: "Personalize provides recommendation engines."
    },

    {
      scenario:
        "A company wants employees to search millions of internal documents.",

      options: ["Kendra", "Polly", "Lex", "Translate"],

      answer: 0,

      explanation: "Kendra provides enterprise search."
    },

    {
      scenario:
        "A company wants humans to validate AI predictions before final decisions.",

      options: ["A2I", "Forecast", "Comprehend", "Polly"],

      answer: 0,

      explanation: "A2I enables human review workflows."
    },

    {
      scenario:
        "A company wants to build a Generative AI application using Claude.",

      options: ["Bedrock", "Textract", "Macie", "Forecast"],

      answer: 0,

      explanation: "Bedrock provides access to Foundation Models."
    }
  ]
};
