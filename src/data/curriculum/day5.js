export const day5 = {
  title:
    "Prompt Engineering",

  lessons: [
    {
      title: "Zero Shot",

      definition:
        "Instruction only.",

      examples: [
        "Summarize article"
      ],

      awsTip:
        "No examples provided."
    },

    {
      title:
        "Prompt Iteration",

      definition:
        "Refining prompts.",

      examples: [
        "Improve accuracy"
      ],

      awsTip:
        "AWS frequently tests this."
    }
  ],

  checks: [
    {
      q:
        "Multiple examples in prompt?",

      options: [
        "Zero Shot",
        "One Shot",
        "Few Shot",
        "RAG"
      ],

      answer: 2
    }
  ],

  scenarios: [
    {
      scenario:
        "Model output improves after refining instructions repeatedly.",

      options: [
        "Fine Tuning",
        "Prompt Iteration",
        "Training",
        "Clustering"
      ],

      answer: 1,

      explanation:
        "Prompt iteration."
    }
  ]
};