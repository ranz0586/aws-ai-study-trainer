export const day6 = {
  title:
    "RAG, Fine-Tuning & Agents",

  lessons: [
    {
      title: "RAG",

      definition:
        "Retrieve before generate.",

      examples: [
        "HR policy lookup"
      ],

      awsTip:
        "Current knowledge = RAG"
    },

    {
      title:
        "Fine Tuning",

      definition:
        "Adjust model behavior.",

      examples: [
        "Legal writing style"
      ],

      awsTip:
        "Style changes = Fine Tuning"
    },

    {
      title: "Agents",

      definition:
        "Reason + Tools + Actions.",

      examples: [
        "Travel booking"
      ],

      awsTip:
        "Agents perform tasks."
    }
  ],

  checks: [
    {
      q:
        "Current company knowledge?",

      options: [
        "RAG",
        "Fine Tuning",
        "RL",
        "Training"
      ],

      answer: 0
    }
  ],

  scenarios: [
    {
      scenario:
        "Policies change daily and AI must answer accurately.",

      options: [
        "Fine Tuning",
        "RAG",
        "Training",
        "Embedding"
      ],

      answer: 1,

      explanation:
        "RAG retrieves current data."
    }
  ]
};