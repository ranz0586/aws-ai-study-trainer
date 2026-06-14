export const security = [

{
  id: "SEC-001",
  domain: "Security",

  difficulty: "easy",

  question:
    "Which AWS service manages permissions and access control?",

  options: [
    "IAM",
    "CloudTrail",
    "KMS",
    "Textract"
  ],

  answer: 0,

  explanation:
    "IAM controls identities and permissions.",

  awsExamTip:
    "Permissions = IAM."
},

{
  id: "SEC-002",
  domain: "Security",

  difficulty: "easy",

  question:
    "Which AWS service records API activity for auditing purposes?",

  options: [
    "CloudTrail",
    "IAM",
    "KMS",
    "Bedrock"
  ],

  answer: 0,

  explanation:
    "CloudTrail records who did what and when.",

  awsExamTip:
    "Audit logs = CloudTrail."
},

{
  id: "SEC-003",
  domain: "Security",

  difficulty: "medium",

  question:
    "Which AWS service manages encryption keys?",

  options: [
    "KMS",
    "IAM",
    "CloudTrail",
    "Lex"
  ],

  answer: 0,

  explanation:
    "KMS provides encryption key management.",

  awsExamTip:
    "Encryption keys = KMS."
},

{
  id: "SEC-004",
  domain: "Security",
  difficulty: "easy",

  question:
    "What does IAM stand for?",

  options: [
    "Identity and Access Management",
    "Internet Access Monitoring",
    "Internal Authorization Manager",
    "Identity Audit Mechanism"
  ],

  answer: 0,

  explanation:
    "IAM manages users, roles, and permissions in AWS.",

  awsExamTip:
    "IAM is foundational AWS security knowledge."
},

{
  id: "SEC-005",
  domain: "Security",
  difficulty: "medium",

  question:
    "Which security principle grants only the permissions required to perform a task?",

  options: [
    "Least Privilege",
    "High Availability",
    "Fault Tolerance",
    "Elasticity"
  ],

  answer: 0,

  explanation:
    "Least privilege minimizes security risk by limiting permissions.",

  awsExamTip:
    "Least Privilege is frequently tested."
},

{
  id: "SEC-006",
  domain: "Security",
  difficulty: "medium",

  question:
    "Why is encryption important for AI workloads?",

  options: [
    "Protect sensitive data",
    "Improve model accuracy",
    "Reduce latency",
    "Increase token limits"
  ],

  answer: 0,

  explanation:
    "Encryption helps protect data at rest and in transit.",

  awsExamTip:
    "Security questions often involve encryption."
},

{
  id: "SEC-007",
  domain: "Security",
  difficulty: "easy",

  question:
    "Which AWS service is used to encrypt data using managed keys?",

  options: [
    "KMS",
    "CloudTrail",
    "IAM",
    "Bedrock"
  ],

  answer: 0,

  explanation:
    "KMS provides centralized key management.",

  awsExamTip:
    "Encryption = KMS."
},

{
  id: "SEC-008",
  domain: "Security",
  difficulty: "medium",

  question:
    "Which AWS service helps organizations track user activity for compliance?",

  options: [
    "CloudTrail",
    "Lex",
    "Polly",
    "Textract"
  ],

  answer: 0,

  explanation:
    "CloudTrail provides detailed audit logs.",

  awsExamTip:
    "Compliance often points to CloudTrail."
},

{
  id: "SEC-009",
  domain: "Security",
  difficulty: "medium",

  question:
    "What is multi-factor authentication (MFA)?",

  options: [
    "Using multiple forms of verification",
    "Using multiple AWS Regions",
    "Using multiple models",
    "Using multiple databases"
  ],

  answer: 0,

  explanation:
    "MFA improves account security by requiring additional verification.",

  awsExamTip:
    "Enable MFA on privileged accounts."
},

{
  id: "SEC-010",
  domain: "Security",
  difficulty: "hard",

  question:
    "A company wants to control who can invoke foundation models in Bedrock. Which AWS service should be used?",

  options: [
    "IAM",
    "CloudTrail",
    "KMS",
    "Route 53"
  ],

  answer: 0,

  explanation:
    "IAM controls access to AWS services and resources.",

  awsExamTip:
    "Access control = IAM."
},

{
  id: "SEC-011",
  domain: "Security",
  difficulty: "medium",

  question:
    "What is the purpose of encryption at rest?",

  options: [
    "Protect stored data",
    "Protect network traffic",
    "Reduce latency",
    "Increase throughput"
  ],

  answer: 0,

  explanation:
    "Encryption at rest secures stored information.",

  awsExamTip:
    "At rest = stored."
},

{
  id: "SEC-012",
  domain: "Security",
  difficulty: "medium",

  question:
    "What is the purpose of encryption in transit?",

  options: [
    "Protect data moving across networks",
    "Protect stored data",
    "Manage IAM users",
    "Improve retrieval accuracy"
  ],

  answer: 0,

  explanation:
    "Encryption in transit secures communications.",

  awsExamTip:
    "In transit = moving data."
},

{
  id: "SEC-013",
  domain: "Security",
  difficulty: "hard",

  question:
    "Which security control helps prevent unauthorized access even if a password is compromised?",

  options: [
    "MFA",
    "CloudTrail",
    "Embeddings",
    "RAG"
  ],

  answer: 0,

  explanation:
    "MFA adds an additional authentication factor.",

  awsExamTip:
    "MFA is a strong security best practice."
},

{
  id: "SEC-014",
  domain: "Security",
  difficulty: "medium",

  question:
    "Why should access permissions be reviewed regularly?",

  options: [
    "To maintain least privilege",
    "To improve latency",
    "To reduce token usage",
    "To improve prompts"
  ],

  answer: 0,

  explanation:
    "Regular reviews reduce excessive permissions.",

  awsExamTip:
    "Least privilege requires ongoing review."
},

{
  id: "SEC-015",
  domain: "Security",
  difficulty: "medium",

  question:
    "Which AWS service helps determine who performed a specific API action?",

  options: [
    "CloudTrail",
    "KMS",
    "IAM",
    "Bedrock"
  ],

  answer: 0,

  explanation:
    "CloudTrail logs AWS API activity.",

  awsExamTip:
    "Who did what? CloudTrail."
},

{
  id: "SEC-016",
  domain: "Security",
  difficulty: "hard",

  question:
    "A company must ensure AI training data remains confidential. Which security control is most important?",

  options: [
    "Encryption",
    "Clustering",
    "Prompting",
    "Regression"
  ],

  answer: 0,

  explanation:
    "Encryption protects sensitive datasets.",

  awsExamTip:
    "Sensitive data = encryption."
},

{
  id: "SEC-017",
  domain: "Security",
  difficulty: "easy",

  question:
    "Which AWS service manages user identities?",

  options: [
    "IAM",
    "CloudTrail",
    "Textract",
    "Comprehend"
  ],

  answer: 0,

  explanation:
    "IAM manages users, groups, and roles.",

  awsExamTip:
    "Users and roles = IAM."
},

{
  id: "SEC-018",
  domain: "Security",
  difficulty: "medium",

  question:
    "What is a primary benefit of audit logging?",

  options: [
    "Accountability",
    "Lower latency",
    "Better prompts",
    "Reduced storage"
  ],

  answer: 0,

  explanation:
    "Audit logs support investigation and compliance.",

  awsExamTip:
    "Auditing = accountability."
},

{
  id: "SEC-019",
  domain: "Security",
  difficulty: "hard",

  question:
    "A company wants proof that only authorized employees accessed AI systems. Which AWS service provides the evidence?",

  options: [
    "CloudTrail",
    "Lex",
    "Polly",
    "Translate"
  ],

  answer: 0,

  explanation:
    "CloudTrail records access activity.",

  awsExamTip:
    "Evidence and auditing = CloudTrail."
},

{
  id: "SEC-020",
  domain: "Security",
  difficulty: "medium",

  question:
    "What is the main purpose of KMS?",

  options: [
    "Manage encryption keys",
    "Manage prompts",
    "Store vectors",
    "Monitor models"
  ],

  answer: 0,

  explanation:
    "KMS centralizes key management.",

  awsExamTip:
    "Keys = KMS."
},

{
  id: "SEC-021",
  domain: "Security",
  difficulty: "medium",

  question:
    "Which security principle reduces attack surface by limiting permissions?",

  options: [
    "Least Privilege",
    "Scalability",
    "Elasticity",
    "Availability"
  ],

  answer: 0,

  explanation:
    "Least privilege reduces unnecessary access.",

  awsExamTip:
    "Give only required permissions."
},

{
  id: "SEC-022",
  domain: "Security",
  difficulty: "hard",

  question:
    "Which AWS service would most likely be used to verify whether a Bedrock API call occurred?",

  options: [
    "CloudTrail",
    "IAM",
    "KMS",
    "SageMaker"
  ],

  answer: 0,

  explanation:
    "CloudTrail records service API calls.",

  awsExamTip:
    "API auditing = CloudTrail."
},

{
  id: "SEC-023",
  domain: "Security",
  difficulty: "medium",

  question:
    "Which security practice protects accounts from stolen passwords?",

  options: [
    "MFA",
    "Prompt Engineering",
    "RAG",
    "Embedding"
  ],

  answer: 0,

  explanation:
    "MFA requires an additional authentication factor.",

  awsExamTip:
    "MFA is one of the easiest security wins."
},

{
  id: "SEC-024",
  domain: "Security",
  difficulty: "hard",

  question:
    "A company stores sensitive embeddings containing proprietary knowledge. What security control should be prioritized?",

  options: [
    "Encryption",
    "Temperature",
    "Few-Shot Prompting",
    "Classification"
  ],

  answer: 0,

  explanation:
    "Sensitive information should be encrypted.",

  awsExamTip:
    "Protect proprietary data with encryption."
},

{
  id: "SEC-025",
  domain: "Security",
  difficulty: "medium",

  question:
    "Which AWS service is most associated with permissions, roles, and access policies?",

  options: [
    "IAM",
    "KMS",
    "CloudTrail",
    "Bedrock"
  ],

  answer: 0,

  explanation:
    "IAM manages access control across AWS.",

  awsExamTip:
    "Permissions = IAM."
}

];