export const day5 = {
  title: "Prompt Engineering",

  objectives: [
    "Understand prompt engineering",
    "Understand zero-shot prompting",
    "Understand one-shot prompting",
    "Understand few-shot prompting",
    "Learn prompt structure"
  ],

  lessons: [
    {
      title: "Prompt Engineering",
      definition:
        "Improving model outputs through better prompts.",
      whyItMatters:
        "Often improves results without changing the model.",
      examples: [
        "Adding context",
        "Providing examples"
      ],
      awsTip:
        "AWS frequently tests prompt refinement."
    },

    {
      title: "Zero-Shot Prompting",
      definition:
        "Providing instructions without examples.",
      whyItMatters:
        "Fastest prompting method.",
      examples: [
        "Summarize this article."
      ],
      awsTip:
        "Instruction only."
    },

    {
      title: "One-Shot Prompting",
      definition:
        "Providing a single example.",
      whyItMatters:
        "Shows the desired response pattern.",
      examples: [
        "Example + task"
      ],
      awsTip:
        "One example."
    },

    {
      title: "Few-Shot Prompting",
      definition:
        "Providing multiple examples.",
      whyItMatters:
        "Improves consistency and accuracy.",
      examples: [
        "Three classification examples"
      ],
      awsTip:
        "Multiple examples."
    },

    {
      title: "Role",
      definition:
        "Defines who the AI should act as.",
      whyItMatters:
        "Provides context.",
      examples: [
        "Financial Analyst",
        "Marketing Expert"
      ],
      awsTip:
        "Role improves relevance."
    },

    {
      title: "Task",
      definition:
        "Specifies the work to perform.",
      whyItMatters:
        "Clarifies expectations.",
      examples: [
        "Summarize",
        "Translate"
      ],
      awsTip:
        "Always define the task."
    },

    {
      title: "Context",
      definition:
        "Provides supporting information.",
      whyItMatters:
        "Improves accuracy.",
      examples: [
        "Company report",
        "Internal policy"
      ],
      awsTip:
        "More relevant context improves outputs."
    },

    {
      title: "Constraints",
      definition:
        "Rules the model must follow.",
      whyItMatters:
        "Controls output quality.",
      examples: [
        "100 words maximum",
        "Bullet points only"
      ],
      awsTip:
        "Constraints reduce ambiguity."
    },

    {
      title: "Output Format",
      definition:
        "Defines the expected response structure.",
      whyItMatters:
        "Creates predictable results.",
      examples: [
        "JSON",
        "Bullet points",
        "Table"
      ],
      awsTip:
        "Explicit formats improve consistency."
    },

    {
      title: "Prompt Iteration",
      definition:
        "Refining prompts based on results.",
      whyItMatters:
        "AWS strongly favors iterative improvement.",
      examples: [
        "Add context",
        "Improve constraints"
      ],
      awsTip:
        "Prompt iteration is often the best answer."
    }
  ],

  flashcards: [
    {
      q: "Instruction only",
      a: "Zero-Shot Prompting",
      explanation:
        "No examples provided.",
      example:
        "Summarize this article.",
      examTip:
        "Zero examples."
    },
    {
      q: "One example provided",
      a: "One-Shot Prompting",
      explanation:
        "Single example shown.",
      example:
        "Example + task.",
      examTip:
        "One example."
    },
    {
      q: "Multiple examples provided",
      a: "Few-Shot Prompting",
      explanation:
        "Several examples guide responses.",
      example:
        "Classification samples.",
      examTip:
        "Multiple examples."
    },
    {
      q: "Improving prompts over time",
      a: "Prompt Iteration",
      explanation:
        "Refine prompts to improve outcomes.",
      example:
        "Add context and constraints.",
      examTip:
        "AWS likes prompt iteration."
    }
  ],

  checks: [
    {
      q: "Which prompting technique uses no examples?",
      options: [
        "Few-Shot",
        "One-Shot",
        "Zero-Shot",
        "RAG"
      ],
      answer: 2,
      explanation:
        "Zero-shot uses instructions only."
    },
    {
      q: "Which component defines who the AI should act as?",
      options: [
        "Task",
        "Role",
        "Constraint",
        "Output"
      ],
      answer: 1,
      explanation:
        "Role provides identity and perspective."
    },
    {
      q: "AWS often recommends improving results through:",
      options: [
        "Prompt Iteration",
        "Regression",
        "Classification",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Prompt iteration is a common exam answer."
    }
  ],

  scenarios: [
    {
      scenario:
        "A user wants better responses without retraining or changing the model.",
      options: [
        "Prompt Engineering",
        "Fine-Tuning",
        "Regression",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "Prompt engineering improves outputs without changing the model."
    },
    {
      scenario:
        "A company provides three examples before asking the model to perform a task.",
      options: [
        "Zero-Shot",
        "One-Shot",
        "Few-Shot",
        "RAG"
      ],
      answer: 2,
      explanation:
        "Multiple examples indicate few-shot prompting."
    },
    {
      scenario:
        "A prompt specifies a role, task, context, and output format.",
      options: [
        "Good Prompt Design",
        "Regression",
        "Embedding",
        "Monitoring"
      ],
      answer: 0,
      explanation:
        "These are core prompt components."
    }
  ]
};