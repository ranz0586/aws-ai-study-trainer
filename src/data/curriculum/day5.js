export const day5 = {

  title: "Prompt Engineering",

  objectives: [

    "Understand prompt engineering",

    "Understand zero-shot prompting",

    "Understand one-shot prompting",

    "Understand few-shot prompting",

    "Understand prompt structure",

    "Understand prompt templates",

    "Understand temperature and prompt behavior",

    "Understand prompt iteration",

    "Understand prompt injection",

    "Understand jailbreaking",

    "Understand grounding and context"

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
        "Providing examples",
        "Adding constraints"
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
        "Three classification examples",
        "Sample support tickets"
      ],

      awsTip:
        "Multiple examples."
    },

    {
      title: "Role",

      definition:
        "Defines who the AI should act as.",

      whyItMatters:
        "Provides context and perspective.",

      examples: [
        "Financial Analyst",
        "Marketing Expert",
        "Security Consultant"
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
        "Translate",
        "Classify"
      ],

      awsTip:
        "Always define the task."
    },

    {
      title: "Context",

      definition:
        "Supporting information supplied to the model.",

      whyItMatters:
        "Context improves accuracy and relevance.",

      examples: [
        "Company policy",
        "Internal report",
        "Customer data"
      ],

      awsTip:
        "Relevant context improves outputs."
    },

    {
      title: "Constraints",

      definition:
        "Rules the model must follow.",

      whyItMatters:
        "Reduces ambiguity and improves consistency.",

      examples: [
        "100 words maximum",
        "Bullet points only",
        "JSON output"
      ],

      awsTip:
        "Constraints improve reliability."
    },

    {
      title: "Output Format",

      definition:
        "The structure expected in the response.",

      whyItMatters:
        "Creates predictable outputs.",

      examples: [
        "JSON",
        "Markdown",
        "Table"
      ],

      awsTip:
        "Explicit output formats improve consistency."
    },

    {
      title: "Prompt Template",

      definition:
        "A reusable prompt structure used across multiple requests.",

      whyItMatters:
        "Promotes consistency and scalability.",

      examples: [
        "Customer support template",
        "Summarization template"
      ],

      awsTip:
        "Templates help standardize prompts."
    },

    {
      title: "Grounding",

      definition:
        "Providing trusted information to improve response accuracy.",

      whyItMatters:
        "Reduces hallucinations.",

      examples: [
        "Company documentation",
        "Knowledge base content"
      ],

      awsTip:
        "Grounding often uses retrieved content."
    },

    {
      title: "Prompt Iteration",

      definition:
        "Refining prompts based on observed results.",

      whyItMatters:
        "Usually improves outputs faster than retraining.",

      examples: [
        "Add context",
        "Improve constraints",
        "Clarify instructions"
      ],

      awsTip:
        "Prompt iteration is frequently the best AWS exam answer."
    },

    {
      title: "Temperature and Prompt Behavior",

      definition:
        "Temperature controls randomness while prompts guide behavior.",

      whyItMatters:
        "Both influence output quality.",

      examples: [
        "Creative writing",
        "Deterministic reporting"
      ],

      awsTip:
        "Low temperature = predictable. High temperature = creative."
    },

    {
      title: "Prompt Injection",

      definition:
        "A technique that attempts to manipulate a model by inserting malicious instructions.",

      whyItMatters:
        "Major security concern in Generative AI systems.",

      examples: [
        "Ignore previous instructions",
        "Reveal hidden data"
      ],

      awsTip:
        "Prompt injection is a common GenAI security topic."
    },

    {
      title: "Jailbreaking",

      definition:
        "Attempts to bypass safety controls and guardrails.",

      whyItMatters:
        "Can lead to unsafe or unauthorized outputs.",

      examples: [
        "Circumventing restrictions",
        "Forcing unsafe responses"
      ],

      awsTip:
        "Guardrails help mitigate jailbreaking."
    },

    {
      title: "Prompt Length and Cost",

      definition:
        "Longer prompts generally consume more tokens.",

      whyItMatters:
        "More tokens often increase inference costs.",

      examples: [
        "Large context windows",
        "Long conversations"
      ],

      awsTip:
        "Reducing unnecessary prompt length lowers costs."
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
      q: "Reusable prompt structure",
      a: "Prompt Template",
      explanation:
        "Templates standardize prompting.",
      example:
        "Support ticket template.",
      examTip:
        "Reusable = Template."
    },

    {
      q: "Providing trusted information",
      a: "Grounding",
      explanation:
        "Improves factual accuracy.",
      example:
        "Company policy documents.",
      examTip:
        "Grounding reduces hallucinations."
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
    },

    {
      q: "Attack that manipulates prompts",
      a: "Prompt Injection",
      explanation:
        "Attempts to override intended behavior.",
      example:
        "Ignore previous instructions.",
      examTip:
        "Security concern."
    },

    {
      q: "Bypassing safety controls",
      a: "Jailbreaking",
      explanation:
        "Attempts to circumvent restrictions.",
      example:
        "Unsafe content requests.",
      examTip:
        "Guardrails help prevent this."
    }

  ],

  checks: [

    {
      q:
        "Which prompting technique uses no examples?",

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
      q:
        "Which component defines who the AI should act as?",

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
      q:
        "AWS often recommends improving results through:",

      options: [
        "Prompt Iteration",
        "Regression",
        "Classification",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "Prompt iteration is commonly the best answer."
    },

    {
      q:
        "Which technique reduces hallucinations by providing trusted information?",

      options: [
        "Grounding",
        "Regression",
        "Classification",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "Grounding improves factual accuracy."
    },

    {
      q:
        "What is prompt injection?",

      options: [
        "Model retraining",
        "Prompt attack",
        "Vector search",
        "Classification"
      ],

      answer: 1,

      explanation:
        "Prompt injection attempts to manipulate model behavior."
    },

    {
      q:
        "What most directly increases inference cost?",

      options: [
        "More tokens",
        "CloudWatch",
        "IAM",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "More tokens generally increase cost."
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
        "Prompt engineering improves outputs without modifying the model."
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
        "A prompt specifies a role, task, context, constraints, and output format.",

      options: [
        "Good Prompt Design",
        "Regression",
        "Embedding",
        "Monitoring"
      ],

      answer: 0,

      explanation:
        "These are core prompt engineering components."
    },

    {
      scenario:
        "A company wants factual responses based on internal documentation.",

      options: [
        "Grounding",
        "Regression",
        "Monitoring",
        "Clustering"
      ],

      answer: 0,

      explanation:
        "Grounding provides trusted information."
    },

    {
      scenario:
        "A user attempts to override instructions by adding 'Ignore all previous instructions.'",

      options: [
        "Prompt Injection",
        "Few-Shot Prompting",
        "Grounding",
        "Classification"
      ],

      answer: 0,

      explanation:
        "This is a prompt injection attempt."
    }

  ]

};