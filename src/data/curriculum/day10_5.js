export const day10_5 = {

  title:
    "AWS Foundations For AI",

  lessons: [

    {
      title:
        "Amazon S3",

      definition:
        "Object storage service used to store files, datasets, backups, and AI training data.",

      examples: [
        "Training datasets",
        "Bedrock knowledge bases",
        "Document storage"
      ],

      awsTip:
        "S3 is the default storage service referenced in many AI and ML workloads."
    },

    {
      title:
        "IAM",

      definition:
        "Identity and Access Management controls who can access AWS resources.",

      examples: [
        "User permissions",
        "Role-based access",
        "Bedrock access control"
      ],

      awsTip:
        "Always follow least privilege access."
    },

    {
      title:
        "AWS KMS",

      definition:
        "Key Management Service creates and manages encryption keys.",

      examples: [
        "Encrypting S3 data",
        "Securing AI datasets",
        "Protecting secrets"
      ],

      awsTip:
        "KMS manages encryption keys while S3 stores the data."
    },

    {
      title:
        "CloudWatch vs CloudTrail",

      definition:
        "CloudWatch monitors resources. CloudTrail records API activity.",

      examples: [
        "CloudWatch alarms",
        "CloudTrail audit logs"
      ],

      awsTip:
        "Monitoring = CloudWatch. Auditing = CloudTrail."
    },

    {
      title:
        "Lambda",

      definition:
        "Serverless compute service that runs code without managing servers.",

      examples: [
        "Process uploaded files",
        "Invoke AI workflows",
        "Automation"
      ],

      awsTip:
        "No server management required."
    },

    {
      title:
        "DynamoDB vs RDS",

      definition:
        "DynamoDB is NoSQL. RDS is relational SQL.",

      examples: [
        "Flexible metadata",
        "Structured business data"
      ],

      awsTip:
        "Need joins? Choose RDS. Need scale and flexibility? Choose DynamoDB."
    },

    {
      title:
        "VPC",

      definition:
        "A logically isolated network in AWS.",

      examples: [
        "Private AI workloads",
        "Secure databases"
      ],

      awsTip:
        "Think of a VPC as your private cloud network."
    },

    {
      title:
        "Regions and Availability Zones",

      definition:
        "Regions contain multiple Availability Zones.",

      examples: [
        "us-east-1",
        "eu-west-1"
      ],

      awsTip:
        "AZs provide high availability within a Region."
    },

    {
      title:
        "Shared Responsibility Model",

      definition:
        "AWS secures the cloud. Customers secure what they run in the cloud.",

      examples: [
        "AWS patches RDS",
        "Customer patches EC2 OS"
      ],

      awsTip:
        "Security OF the cloud = AWS. Security IN the cloud = Customer."
    }

  ],

  flashcards: [

    {
      q:
        "Which AWS service stores AI training data?",
      a:
        "Amazon S3",
      explanation:
        "S3 is AWS's primary object storage service.",
      example:
        "Store PDFs for a Bedrock knowledge base.",
      examTip:
        "Storage questions usually point to S3."
    },

    {
      q:
        "Which service controls permissions?",
      a:
        "IAM",
      explanation:
        "IAM manages authentication and authorization.",
      example:
        "Allow Bedrock access to S3.",
      examTip:
        "Least privilege is a common exam concept."
    },

    {
      q:
        "Which service manages encryption keys?",
      a:
        "AWS KMS",
      explanation:
        "KMS creates and manages cryptographic keys.",
      example:
        "Encrypt training data stored in S3.",
      examTip:
        "Encryption keys = KMS."
    },

    {
      q:
        "Monitoring or auditing?",
      a:
        "CloudWatch monitors, CloudTrail audits.",
      explanation:
        "CloudWatch tracks metrics while CloudTrail records API activity.",
      example:
        "Track CPU usage vs track who deleted a resource.",
      examTip:
        "Monitoring ≠ Auditing."
    },

    {
      q:
        "Serverless compute service?",
      a:
        "AWS Lambda",
      explanation:
        "Lambda runs code without managing servers.",
      example:
        "Process an uploaded document.",
      examTip:
        "Serverless questions often point to Lambda."
    }

  ],

  checks: [

    {
      q:
        "Which service is best for storing large AI datasets?",
      options: [
        "IAM",
        "CloudTrail",
        "Amazon S3",
        "Lambda"
      ],
      answer: 2
    },

    {
      q:
        "Which service records API activity?",
      options: [
        "CloudWatch",
        "CloudTrail",
        "Lambda",
        "KMS"
      ],
      answer: 1
    },

    {
      q:
        "Which service manages encryption keys?",
      options: [
        "IAM",
        "KMS",
        "S3",
        "RDS"
      ],
      answer: 1
    },

    {
      q:
        "Which database is NoSQL?",
      options: [
        "RDS",
        "Aurora",
        "DynamoDB",
        "PostgreSQL"
      ],
      answer: 2
    },

    {
      q:
        "A Region contains:",
      options: [
        "One AZ",
        "Multiple AZs",
        "One VPC",
        "One account"
      ],
      answer: 1
    }

  ],

  scenarios: [

    {
      scenario:
        "A company needs to store millions of documents for an AI chatbot.",

      options: [
        "IAM",
        "Amazon S3",
        "CloudTrail",
        "KMS"
      ],

      answer: 1,

      explanation:
        "S3 is AWS's scalable object storage service."
    },

    {
      scenario:
        "An auditor needs to determine who deleted an S3 bucket.",

      options: [
        "CloudWatch",
        "CloudTrail",
        "Lambda",
        "DynamoDB"
      ],

      answer: 1,

      explanation:
        "CloudTrail records API actions performed in AWS."
    },

    {
      scenario:
        "A company wants to encrypt AI training data stored in S3.",

      options: [
        "CloudWatch",
        "IAM",
        "KMS",
        "Route 53"
      ],

      answer: 2,

      explanation:
        "KMS manages encryption keys used to protect data."
    },

    {
      scenario:
        "A developer wants to run code automatically when a file is uploaded without managing servers.",

      options: [
        "EC2",
        "Lambda",
        "RDS",
        "CloudTrail"
      ],

      answer: 1,

      explanation:
        "Lambda provides serverless execution."
    }

  ]

};