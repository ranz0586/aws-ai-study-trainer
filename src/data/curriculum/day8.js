export const day8 = {
  title: "AWS AI Services",

  objectives: [
    "Identify AWS AI services and their use cases",
    "Match business problems to AWS AI services",
    "Distinguish Bedrock from SageMaker",
    "Recognize high-frequency exam services"
  ],

  lessons: [
    {
      title: "Amazon Textract",
      definition:
        "Extracts text, forms, and tables from documents.",
      whyItMatters:
        "Used for OCR and document processing.",
      examples: [
        "Invoices",
        "Receipts",
        "PDF forms"
      ],
      awsTip:
        "OCR documents = Textract."
    },

    {
      title: "Amazon Comprehend",
      definition:
        "Natural Language Processing (NLP) service.",
      whyItMatters:
        "Analyzes text for meaning and sentiment.",
      examples: [
        "Sentiment analysis",
        "Entity recognition",
        "Topic detection"
      ],
      awsTip:
        "Text sentiment = Comprehend."
    },

    {
      title: "Amazon Rekognition",
      definition:
        "Image and video analysis service.",
      whyItMatters:
        "Detects objects, scenes, and faces.",
      examples: [
        "Object detection",
        "Image moderation",
        "Face analysis"
      ],
      awsTip:
        "Image analysis = Rekognition."
    },

    {
      title: "Amazon Lex",
      definition:
        "Service for building conversational chatbots.",
      whyItMatters:
        "Provides speech and text interfaces.",
      examples: [
        "Support chatbot",
        "Virtual assistant"
      ],
      awsTip:
        "Chatbot = Lex."
    },

    {
      title: "Amazon Polly",
      definition:
        "Converts text into natural speech.",
      whyItMatters:
        "Used for voice generation.",
      examples: [
        "Audio narration",
        "Accessibility tools"
      ],
      awsTip:
        "Text → Speech = Polly."
    },

    {
      title: "Amazon Transcribe",
      definition:
        "Converts speech into text.",
      whyItMatters:
        "Supports transcription workloads.",
      examples: [
        "Meeting transcripts",
        "Call center recordings"
      ],
      awsTip:
        "Speech → Text = Transcribe."
    },

    {
      title: "Amazon Translate",
      definition:
        "Language translation service.",
      whyItMatters:
        "Supports multilingual applications.",
      examples: [
        "Website translation",
        "Customer support"
      ],
      awsTip:
        "Translation = Translate."
    },

    {
      title: "Amazon Personalize",
      definition:
        "Recommendation service.",
      whyItMatters:
        "Builds personalized experiences.",
      examples: [
        "Product recommendations",
        "Movie recommendations"
      ],
      awsTip:
        "Recommendations = Personalize."
    },

    {
      title: "Amazon SageMaker",
      definition:
        "Platform for building, training, and deploying ML models.",
      whyItMatters:
        "Core AWS ML service.",
      examples: [
        "Custom ML training",
        "Model deployment"
      ],
      awsTip:
        "Traditional ML = SageMaker."
    },

    {
      title: "Bedrock vs SageMaker",
      definition:
        "Bedrock focuses on GenAI. SageMaker focuses on ML.",
      whyItMatters:
        "Very common exam comparison.",
      examples: [
        "Claude → Bedrock",
        "Custom ML model → SageMaker"
      ],
      awsTip:
        "GenAI = Bedrock, ML = SageMaker."
    }
  ],

  flashcards: [
    {
      q: "OCR documents",
      a: "Amazon Textract",
      explanation:
        "Extracts text from documents.",
      example:
        "Invoices and receipts.",
      examTip:
        "OCR = Textract."
    },
    {
      q: "Sentiment analysis",
      a: "Amazon Comprehend",
      explanation:
        "Analyzes text meaning.",
      example:
        "Customer reviews.",
      examTip:
        "Text sentiment = Comprehend."
    },
    {
      q: "Image analysis",
      a: "Amazon Rekognition",
      explanation:
        "Analyzes images and videos.",
      example:
        "Object detection.",
      examTip:
        "Images = Rekognition."
    },
    {
      q: "Chatbot service",
      a: "Amazon Lex",
      explanation:
        "Builds conversational interfaces.",
      example:
        "Support chatbot.",
      examTip:
        "Chatbot = Lex."
    },
    {
      q: "Build/train/deploy ML models",
      a: "Amazon SageMaker",
      explanation:
        "AWS ML platform.",
      example:
        "Fraud detection model.",
      examTip:
        "ML = SageMaker."
    }
  ],

  checks: [
    {
      q: "Which AWS service extracts text from scanned invoices?",
      options: [
        "Textract",
        "Comprehend",
        "Lex",
        "Polly"
      ],
      answer: 0,
      explanation:
        "Textract performs OCR."
    },

    {
      q: "Which AWS service performs sentiment analysis?",
      options: [
        "Rekognition",
        "Translate",
        "Comprehend",
        "Polly"
      ],
      answer: 2,
      explanation:
        "Comprehend analyzes text."
    },

    {
      q: "Which service is best for recommendations?",
      options: [
        "Personalize",
        "Lex",
        "Textract",
        "Translate"
      ],
      answer: 0,
      explanation:
        "Personalize provides recommendation engines."
    },

    {
      q: "Which AWS service is used for traditional machine learning?",
      options: [
        "Bedrock",
        "Polly",
        "SageMaker",
        "Lex"
      ],
      answer: 2,
      explanation:
        "SageMaker is AWS's ML platform."
    }
  ],

  scenarios: [
    {
      scenario:
        "A company wants to automatically extract data from PDF invoices.",
      options: [
        "Textract",
        "Lex",
        "Comprehend",
        "Translate"
      ],
      answer: 0,
      explanation:
        "Textract performs OCR extraction."
    },

    {
      scenario:
        "A retailer wants Netflix-style product recommendations.",
      options: [
        "Personalize",
        "Rekognition",
        "Polly",
        "Lex"
      ],
      answer: 0,
      explanation:
        "Personalize generates recommendations."
    },

    {
      scenario:
        "A company wants to build a custom fraud detection model.",
      options: [
        "SageMaker",
        "Bedrock",
        "Translate",
        "Polly"
      ],
      answer: 0,
      explanation:
        "Custom ML models are built in SageMaker."
    }
  ]
};