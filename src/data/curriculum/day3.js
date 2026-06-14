export const day3 = {
  title: "Generative AI Foundations",

  lessons: [
    {
      title: "Foundation Models",
      definition:
        "Large pretrained models.",
      examples: [
        "Claude",
        "Titan",
        "Llama"
      ],
      awsTip:
        "Bedrock provides access to FMs."
    },

    {
      title: "LLMs",
      definition:
        "Language-focused foundation models.",
      examples: [
        "Claude",
        "GPT"
      ],
      awsTip:
        "LLM is a type of foundation model."
    },

    {
      title: "Tokens",
      definition:
        "Pieces of text processed by models.",
      examples: [
        "Hello world"
      ],
      awsTip:
        "More tokens increase cost."
    },

    {
      title: "Hallucinations",
      definition:
        "Confidently incorrect outputs.",
      examples: [
        "Fake legal citation"
      ],
      awsTip:
        "Mitigate with RAG."
    }
  ],

  flashcards: [
    {
      q: "Randomness control?",
      a: "Temperature"
    },

    {
      q: "Confidently wrong output?",
      a: "Hallucination"
    },

    {
      q: "Model memory size?",
      a: "Context Window"
    }
  ],

  checks: [
    {
      q: "High temperature causes:",
      options: [
        "More creativity",
        "Less creativity",
        "No tokens",
        "No memory"
      ],
      answer: 0
    }
  ],

  scenarios: [
    {
      scenario:
        "Marketing wants more creative ad copy from an LLM.",
      options: [
        "Lower Temperature",
        "Increase Temperature",
        "Reduce Tokens",
        "Disable Context"
      ],
      answer: 1,
      explanation:
        "Higher temperature increases randomness and creativity."
    }
  ]
};