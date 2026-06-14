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
}

];