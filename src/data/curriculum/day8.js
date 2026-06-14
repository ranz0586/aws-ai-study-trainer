export const day8 = {
  title: "AWS AI Services Reinforcement",

  lessons: [],

  flashcards: [
    {
      q: "OCR documents",
      a: "Textract"
    },
    {
      q: "Sentiment analysis",
      a: "Comprehend"
    },
    {
      q: "Image analysis",
      a: "Rekognition"
    },
    {
      q: "Chatbot",
      a: "Lex"
    },
    {
      q: "Speech → Text",
      a: "Transcribe"
    },
    {
      q: "Text → Speech",
      a: "Polly"
    },
    {
      q: "Translation",
      a: "Translate"
    },
    {
      q: "Recommendations",
      a: "Personalize"
    },
    {
      q: "Traditional ML platform",
      a: "SageMaker"
    }
  ],

  checks: [
    {
      q: "Which AWS service extracts text from PDFs?",
      options: [
        "Comprehend",
        "Textract",
        "Lex",
        "Polly"
      ],
      answer: 1
    },
    {
      q: "Which AWS service performs sentiment analysis?",
      options: [
        "Comprehend",
        "Textract",
        "Translate",
        "Polly"
      ],
      answer: 0
    }
  ],

  scenarios: [
    {
      scenario:
        "A company needs to extract tables and text from scanned invoices.",
      options: [
        "Textract",
        "Lex",
        "Polly",
        "Translate"
      ],
      answer: 0,
      explanation:
        "Textract performs OCR and document extraction."
    }
  ]
};