export const day10_5 = {
  title: "AWS Foundations For AI",

  objectives: [
    "Understand core AWS services frequently referenced in AI workloads",

    "Understand AWS security fundamentals",

    "Understand networking fundamentals",

    "Understand monitoring and auditing",

    "Understand encryption concepts",

    "Understand the Shared Responsibility Model",

    "Understand governance and compliance services",

    "Recognize common CLF-C02 overlap topics that appear in AIF-C01"
  ],

  lessons: [
    {
      title: "Amazon S3",

      definition:
        "Object storage service used to store files, datasets, backups, and AI training data.",

      examples: [
        "Training datasets",
        "Bedrock Knowledge Bases",
        "Document storage"
      ],

      awsTip:
        "S3 is the most common storage service referenced in AI workloads."
    },

    {
      title: "IAM",

      definition:
        "Identity and Access Management controls who can access AWS resources.",

      examples: [
        "User permissions",
        "Role-based access",
        "Bedrock access control"
      ],

      awsTip: "Follow the principle of least privilege."
    },

    {
      title: "AWS KMS",

      definition: "Key Management Service creates and manages encryption keys.",

      examples: [
        "Encrypting S3 data",
        "Securing AI datasets",
        "Protecting secrets"
      ],

      awsTip: "KMS manages keys, not the data itself."
    },

    {
      title: "Encryption at Rest",

      definition: "Protecting stored data using encryption.",

      examples: ["Encrypted S3 buckets", "Encrypted databases"],

      awsTip: "Stored data = Encryption at Rest."
    },

    {
      title: "Encryption in Transit",

      definition: "Protecting data while it moves across networks.",

      examples: ["HTTPS", "TLS connections"],

      awsTip: "Moving data = Encryption in Transit."
    },

    {
      title: "CloudWatch",

      definition: "Monitoring service that collects metrics, logs, and alarms.",

      examples: ["CPU monitoring", "Application logs", "Alerts"],

      awsTip: "Monitoring = CloudWatch."
    },

    {
      title: "CloudTrail",

      definition: "Records API activity across AWS accounts.",

      examples: ["Audit logs", "User actions", "Resource changes"],

      awsTip: "Auditing = CloudTrail."
    },

    {
      title: "AWS Lambda",

      definition:
        "Serverless compute service that runs code without managing servers.",

      examples: [
        "Process uploaded files",
        "Automation workflows",
        "AI triggers"
      ],

      awsTip: "No servers to manage."
    },

    {
      title: "Amazon EC2",

      definition: "Virtual servers running in AWS.",

      examples: ["Web servers", "ML workloads", "Custom applications"],

      awsTip: "EC2 provides full operating system control."
    },

    {
      title: "DynamoDB vs RDS",

      definition: "DynamoDB is NoSQL. RDS is relational SQL.",

      examples: ["Flexible metadata", "Structured business data"],

      awsTip: "Need joins? Use RDS. Need scale? Use DynamoDB."
    },

    {
      title: "VPC",

      definition: "A logically isolated network in AWS.",

      examples: ["Private AI workloads", "Secure databases"],

      awsTip: "Think of a VPC as your private cloud network."
    },

    {
      title: "Security Groups",

      definition:
        "Virtual firewalls that control inbound and outbound traffic.",

      examples: ["Allow HTTPS", "Restrict database access"],

      awsTip: "Security Groups control network traffic."
    },

    {
      title: "AWS PrivateLink",

      definition:
        "Provides private connectivity between AWS services without traversing the public internet.",

      examples: ["Private Bedrock access", "Private service communication"],

      awsTip: "Private connectivity = PrivateLink."
    },

    {
      title: "Regions and Availability Zones",

      definition: "Regions contain multiple Availability Zones.",

      examples: ["us-east-1", "eu-west-1"],

      awsTip: "Multiple AZs improve availability."
    },

    {
      title: "Shared Responsibility Model",

      definition:
        "AWS secures the cloud. Customers secure what they run in the cloud.",

      examples: [
        "AWS patches managed services",
        "Customer manages IAM permissions"
      ],

      awsTip: "Security OF the cloud = AWS. Security IN the cloud = Customer."
    },

    {
      title: "AWS Config",

      definition: "Tracks resource configurations and compliance over time.",

      examples: ["Compliance auditing", "Configuration tracking"],

      awsTip: "Configuration history = AWS Config."
    },

    {
      title: "AWS Artifact",

      definition: "Provides compliance reports and agreements.",

      examples: ["SOC reports", "Compliance documentation"],

      awsTip: "Compliance documents = AWS Artifact."
    },

    {
      title: "Trusted Advisor",

      definition:
        "Provides recommendations for cost optimization, security, reliability, and performance.",

      examples: ["Security checks", "Cost savings"],

      awsTip: "Best-practice recommendations = Trusted Advisor."
    },

    {
      title: "AWS Well-Architected Framework",

      definition:
        "A framework for designing secure, reliable, efficient, and cost-effective architectures.",

      examples: ["Security", "Reliability", "Cost Optimization"],

      awsTip: "Frequently referenced in AWS best-practice questions."
    }
  ],

  flashcards: [
    {
      q: "Which AWS service stores AI training data?",
      a: "Amazon S3",
      explanation: "S3 is AWS's primary object storage service.",
      example: "Store PDFs for Bedrock Knowledge Bases.",
      examTip: "Storage = S3."
    },

    {
      q: "Which service controls permissions?",
      a: "IAM",
      explanation: "IAM manages authentication and authorization.",
      example: "Grant Bedrock access to S3.",
      examTip: "Least privilege."
    },

    {
      q: "Which service manages encryption keys?",
      a: "AWS KMS",
      explanation: "Creates and manages encryption keys.",
      example: "Encrypt S3 data.",
      examTip: "Keys = KMS."
    },

    {
      q: "Monitoring vs Auditing",
      a: "CloudWatch monitors, CloudTrail audits.",
      explanation: "Monitoring and auditing serve different purposes.",
      example: "CPU metrics vs API logs.",
      examTip: "Monitoring ≠ Auditing."
    },

    {
      q: "Serverless compute service?",
      a: "AWS Lambda",
      explanation: "Runs code without managing servers.",
      example: "Process uploaded files.",
      examTip: "Serverless = Lambda."
    },

    {
      q: "Private cloud network?",
      a: "VPC",
      explanation: "Provides network isolation.",
      example: "Private AI workloads.",
      examTip: "Network = VPC."
    },

    {
      q: "Private service connectivity?",
      a: "AWS PrivateLink",
      explanation: "Avoids the public internet.",
      example: "Private Bedrock access.",
      examTip: "Private connectivity = PrivateLink."
    },

    {
      q: "Compliance reports?",
      a: "AWS Artifact",
      explanation: "Provides compliance documentation.",
      example: "SOC reports.",
      examTip: "Compliance docs = Artifact."
    }
  ],

  checks: [
    {
      q: "Which service is best for storing large AI datasets?",
      options: ["IAM", "CloudTrail", "Amazon S3", "Lambda"],
      answer: 2
    },

    {
      q: "Which service records API activity?",
      options: ["CloudWatch", "CloudTrail", "Lambda", "KMS"],
      answer: 1
    },

    {
      q: "Which service manages encryption keys?",
      options: ["IAM", "KMS", "S3", "RDS"],
      answer: 1
    },

    {
      q: "Which AWS service provides private connectivity without using the public internet?",
      options: ["CloudWatch", "PrivateLink", "IAM", "Artifact"],
      answer: 1
    },

    {
      q: "Which AWS service provides compliance reports?",
      options: ["CloudTrail", "Artifact", "Lambda", "S3"],
      answer: 1
    },

    {
      q: "Which AWS service tracks configuration compliance over time?",
      options: ["Config", "S3", "Polly", "Lex"],
      answer: 0
    }
  ],

  scenarios: [
    {
      scenario:
        "A company needs to store millions of documents for an AI chatbot.",

      options: ["IAM", "Amazon S3", "CloudTrail", "KMS"],

      answer: 1,

      explanation: "S3 is AWS's scalable object storage service."
    },

    {
      scenario: "An auditor needs to determine who deleted an S3 bucket.",

      options: ["CloudWatch", "CloudTrail", "Lambda", "DynamoDB"],

      answer: 1,

      explanation: "CloudTrail records API actions."
    },

    {
      scenario: "A company wants to encrypt AI training data stored in S3.",

      options: ["CloudWatch", "IAM", "KMS", "Route 53"],

      answer: 2,

      explanation: "KMS manages encryption keys."
    },

    {
      scenario:
        "A company needs private access to AWS AI services without traversing the public internet.",

      options: ["PrivateLink", "CloudTrail", "Lambda", "Route 53"],

      answer: 0,

      explanation: "PrivateLink provides private connectivity."
    },

    {
      scenario:
        "A compliance team needs AWS SOC reports and compliance documentation.",

      options: ["Artifact", "CloudWatch", "Config", "Lambda"],

      answer: 0,

      explanation: "AWS Artifact provides compliance reports."
    }
  ]
};
