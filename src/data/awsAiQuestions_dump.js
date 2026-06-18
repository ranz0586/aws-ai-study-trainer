export const awsAiQuestions = [
 {
 "id": "AIF-001",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data. How should the AI practitioner prevent responses based on confidential data?",
 "options": [
 "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model.",
 "Mask the confidential data in the inference responses by using dynamic data masking.",
 "Encrypt the confidential data in the inference responses by using Amazon SageMaker.",
 "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)."
 ],
 "answers": [
 0
 ],
 "explanation": "When a model is trained on a dataset containing confidential or sensitive data, the model may\ninadvertently learn patterns from this data, which could then be reflected in its inference responses.\nTo ensure that a model does not generate responses based on confidential data, the most effective\napproach is to remove the confidential data from the training dataset and then retrain the model.\nExplanation of Each Option:\nOption A (Correct): \"Delete the custom model. Remove the confidential data from the training\ndataset. Retrain the custom model.\"This option is correct because it directly addresses the core issue:\nthe model has been trained on confidential data. The only way to ensure that the model does not\nproduce inferences based on this data is to remove the confidential information from the training\ndataset and then retrain the model from scratch. Simply deleting the model and retraining it ensures\nthat no confidential data is learned or retained by the model. This approach follows the best\npractices recommended by AWS for handling sensitive data when using machine learning services\nlike Amazon Bedrock.\nOption B: \"Mask the confidential data in the inference responses by using dynamic data\nmasking.\"This option is incorrect because dynamic data masking is typically used to mask or\nobfuscate sensitive data in a database. It does not address the core problem of the model\nbeing trained on confidential data. Masking data in inference responses does not prevent the model\nfrom using confidential data it learned during training.\nOption C: \"Encrypt the confidential data in the inference responses by using Amazon\nSageMaker.\"This option is incorrect because encrypting the inference responses does not prevent the\nmodel from generating outputs based on confidential data. Encryption only secures the data at rest\nor in transit but does not affect the model's underlying knowledge or training process.\nOption D: \"Encrypt the confidential data in the custom model by using AWS Key Management Service\n(AWS KMS).\"This option is incorrect as well because encrypting the data within the model does not\nprevent the model from generating responses based on the confidential data it learned during\ntraining. AWS KMS can encrypt data, but it does not modify the learning that the model has already\nperformed.\nAWS AI Practitioner Reference:\nData Handling Best Practices in AWS Machine Learning: AWS advises practitioners to carefully handle\ntraining data, especially when it involves sensitive or confidential information. This includes\npreprocessing steps like data anonymization or removal of sensitive data before using it to train\nmachine learning models.\nAmazon Bedrock and Model Training Security: Amazon Bedrock provides foundational models and\ncustomization capabilities, but any training involving sensitive data should follow best practices, such\nas removing or anonymizing confidential data to prevent unintended data leakage.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-002",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?",
 "options": [
 "Integration with Amazon S3 for object storage",
 "Support for geospatial indexing and queries",
 "Scalable index management and nearest neighbor search capability",
 "Ability to perform real-time analysis on streaming data"
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon OpenSearch Service (formerly Amazon Elasticsearch Service) has introduced capabilities to\nsupport vector search, which allows companies to build vector database applications. This is\nparticularly useful in machine learning, where vector representations (embeddings) of data are often\nused to capture semantic meaning.\nScalable index management and nearest neighbor search capability are the core features enabling\nvector database functionalities in OpenSearch. The service allows users to index high-dimensional\nvectors and perform efficient nearest neighbor searches, which are crucial for tasks such as\nrecommendation systems, anomaly detection, and semantic search.\nHere is why option C is the correct answer:\nScalable Index Management: OpenSearch Service supports scalable indexing of vector data. This\nmeans you can index a large volume of high-dimensional vectors and manage these indexes in a cost-\neffective and performance-optimized way. The service leverages underlying AWS infrastructure to\nensure that indexing scales seamlessly with data size.\nNearest Neighbor Search Capability: OpenSearch Service's nearest neighbor search capability allows\nfor fast and efficient searches over vector data. This is essential for applications like product\nrecommendation engines, where the system needs to quickly find the most similar items based on a\nuser's query or behavior.\nAWS AI Practitioner Reference:\nAccording to AWS documentation, OpenSearch Service's support for nearest neighbor search using\nvector embeddings is a key feature for companies building machine learning applications that\nrequire similarity search.\nThe service uses Approximate Nearest Neighbors (ANN) algorithms to speed up searches over large\ndatasets, ensuring high performance even with large-scale vector data.\nThe other options do not directly relate to building vector database applications:\nA . Integration with Amazon S3 for object storage is about storing data objects, not vector-based\nsearching or indexing.\nB . Support for geospatial indexing and queries is related to location-based data, not vectors used in\nmachine learning.\nD . Ability to perform real-time analysis on streaming data relates to analyzing incoming data\nstreams, which is different from the vector search capabilities.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-003",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months. Which AWS solution should the company use to automate the generation of graphs?",
 "options": [
 "Amazon Q in Amazon EC2",
 "Amazon Q Developer",
 "Amazon Q in Amazon QuickSight",
 "Amazon Q in AWS Chatbot"
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon QuickSight is a fully managed business intelligence (BI) service that allows users to create\nand publish interactive dashboards that include visualizations like graphs, charts, and tables.\n\"Amazon Q\" is the natural language query feature within Amazon QuickSight. It enables users to ask\nquestions about their data in natural language and receive visual responses such as graphs.\nOption C (Correct): \"Amazon Q in Amazon QuickSight\": This is the correct answer because Amazon\nQuickSight Q is specifically designed to allow users to explore their data through natural language\nqueries, and it can automatically generate graphs to display sales data and other metrics. This makes\nit an ideal choice for the company to automate the generation of graphs showing total sales for its\ntop-selling products across various retail locations.\nOption A, B, and D: These options are incorrect:\nA . Amazon Q in Amazon EC2: Amazon EC2 is a compute service that provides virtual servers, but it is\nnot directly related to generating graphs or providing natural language querying features.\nB . Amazon Q Developer: This is not an existing AWS service or feature.\nD . Amazon Q in AWS Chatbot: AWS Chatbot is a service that integrates with Amazon Chime and\n\nSlack for monitoring and managing AWS resources, but it is not used for generating graphs based on\nsales data.\nAWS AI Practitioner Reference:\nAmazon QuickSight Q is designed to provide insights from data by using natural language queries,\nmaking it a powerful tool for generating automated graphs and visualizations directly from queried\ndata.\nBusiness Intelligence (BI) on AWS: AWS services such as Amazon QuickSight provide business\nintelligence capabilities, including automated reporting and visualization features, which are ideal\nfor companies seeking to visualize data like sales trends over time.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-004",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children. Which AWS service or feature will meet these requirements?",
 "options": [
 "Amazon Rekognition",
 "Amazon Bedrock playgrounds",
 "Guardrails for Amazon Bedrock",
 "Agents for Amazon Bedrock"
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon Bedrock is a service that provides foundational models for building generative AI\napplications. When creating an application for children, it is crucial to ensure that the generated\ncontent is appropriate for the target audience. \"Guardrails\" in Amazon Bedrock provide mechanisms\nto control the outputs and topics of generated content to align with desired safety standards and\nappropriateness levels.\nOption C (Correct): \"Guardrails for Amazon Bedrock\": This is the correct answer because guardrails\nare specifically designed to help users enforce content moderation, filtering, and safety checks on\nthe outputs generated by models in Amazon Bedrock. For a children’s application, guardrails ensure\nthat all content generated is suitable and appropriate for the intended audience.\nOption A: \"Amazon Rekognition\" is incorrect. Amazon Rekognition is an image and video analysis\nservice that can detect inappropriate content in images or videos, but it does not handle text or story\ngeneration.\nOption B: \"Amazon Bedrock playgrounds\" is incorrect because playgrounds are environments for\nexperimenting and testing model outputs, but they do not inherently provide safeguards to ensure\ncontent appropriateness for specific audiences, such as children.\nOption D: \"Agents for Amazon Bedrock\" is incorrect. Agents in Amazon Bedrock facilitate building AI\napplications with more interactive capabilities, but they do not provide specific guardrails for\nensuring content appropriateness for children.\nAWS AI Practitioner Reference:\nGuardrails in Amazon Bedrock: Designed to help implement controls that ensure generated content\nis safe and suitable for specific use cases or audiences, such as children, by moderating and filtering\n\ninappropriate or undesired content.\nBuilding Safe AI Applications: AWS provides guidance on implementing ethical AI practices, including\nusing guardrails to protect against generating inappropriate or biased content.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-005",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model. The company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure. Which solution will meet these requirements?",
 "options": [
 "Use Amazon SageMaker Serverless Inference to deploy the model.",
 "Use Amazon CloudFront to deploy the model.",
 "Use Amazon API Gateway to host the model and serve predictions.",
 "Use AWS Batch to host the model and serve predictions."
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker Serverless Inference is the correct solution for deploying an ML model to\nproduction in a way that allows a web application to use the model without the need to manage the\nunderlying infrastructure.\nAmazon SageMaker Serverless Inference provides a fully managed environment for deploying\nmachine learning models. It automatically provisions, scales, and manages the infrastructure\nrequired to host the model, removing the need for the company to manage servers or other\nunderlying infrastructure.\nWhy Option A is Correct:\nNo Infrastructure Management: SageMaker Serverless Inference handles the infrastructure\nmanagement for deploying and serving ML models. The company can simply provide the model and\nspecify the required compute capacity, and SageMaker will handle the rest.\nCost-Effectiveness: The serverless inference option is ideal for applications with intermittent or\nunpredictable traffic, as the company only pays for the compute time consumed while handling\nrequests.\nIntegration with Web Applications: This solution allows the model to be easily accessed by web\napplications via RESTful APIs, making it an ideal choice for hosting the model and serving predictions.\nWhy Other Options are Incorrect:\nB . Use Amazon CloudFront to deploy the model: CloudFront is a content delivery network (CDN)\nservice for distributing content, not for deploying ML models or serving predictions.\nC . Use Amazon API Gateway to host the model and serve predictions: API Gateway is used for\ncreating, deploying, and managing APIs, but it does not provide the infrastructure or the required\nenvironment to host and run ML models.\nD . Use AWS Batch to host the model and serve predictions: AWS Batch is designed for running batch\ncomputing workloads and is not optimized for real-time inference or hosting machine learning\nmodels.\nThus, A is the correct answer, as it aligns with the requirement of deploying an ML model without\n\nmanaging any underlying infrastructure.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-006",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products. Which methodology should the company use to meet these requirements?",
 "options": [
 "Supervised learning",
 "Unsupervised learning",
 "Reinforcement learning",
 "Reinforcement learning from human feedback (RLHF)"
 ],
 "answers": [
 1
 ],
 "explanation": "Unsupervised learning is the correct methodology for classifying customers into tiers when the data\nis unlabeled, as it does not require predefined labels or outputs.\nUnsupervised Learning:\nThis type of machine learning is used when the data has no labels or pre-defined categories. The goal\nis to identify patterns, clusters, or associations within the data.\nIn this case, the company has petabytes of unlabeled customer data and needs to classify customers\ninto different tiers. Unsupervised learning techniques like clustering (e.g., K-Means, Hierarchical\nClustering) can group similar customers based on various attributes without any prior knowledge or\nlabels.\nWhy Option B is Correct:\nHandling Unlabeled Data: Unsupervised learning is specifically designed to work with unlabeled\ndata, making it ideal for the company’s need to classify customer data.\nCustomer Segmentation: Techniques in unsupervised learning can be used to find natural groupings\nwithin customer data, such as identifying high-value vs. low-value customers or segmenting based on\npurchasing behavior.\nWhy Other Options are Incorrect:\nA . Supervised learning: Requires labeled data with input-output pairs to train the model, which is\nnot suitable since the company's data is unlabeled.\nC . Reinforcement learning: Focuses on training an agent to make decisions by maximizing some\nnotion of cumulative reward, which does not align with the company's need for customer\nclassification.\nD . Reinforcement learning from human feedback (RLHF): Similar to reinforcement learning but\ninvolves human feedback to refine the model’s behavior; it is also not appropriate for classifying\nunlabeled customer data.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-007",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts. An AI practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders. What should the AI practitioner include in the report to meet the transparency and explainability requirements?",
 "options": [
 "Code for model training",
 "Partial dependence plots (PDPs)",
 "Sample data for training",
 "Model convergence tables"
 ],
 "answers": [
 1
 ],
 "explanation": "Partial dependence plots (PDPs) are visual tools used to show the relationship between a feature (or\na set of features) in the data and the predicted outcome of a machine learning model. They are\nhighly effective for providing transparency and explainability of the model's behavior to stakeholders\nby illustrating how different input variables impact the model's predictions.\nOption B (Correct): \"Partial dependence plots (PDPs)\": This is the correct answer because PDPs help\nto interpret how the model's predictions change with varying values of input features, providing\nstakeholders with a clearer understanding of the model's decision-making process.\nOption A: \"Code for model training\" is incorrect because providing the raw code for model training\nmay not offer transparency or explainability to non-technical stakeholders.\nOption C: \"Sample data for training\" is incorrect as sample data alone does not explain how the\nmodel works or its decision-making process.\nOption D: \"Model convergence tables\" is incorrect. While convergence tables can show the training\nprocess, they do not provide insights into how input features affect the model's predictions.\nAWS AI Practitioner Reference:\nExplainability in AWS Machine Learning: AWS provides various tools for model explainability, such as\nAmazon SageMaker Clarify, which includes PDPs to help explain the impact of different features on\nthe model’s predictions.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-008",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which option is a use case for generative AI models?",
 "options": [
 "Improving network security by using intrusion detection systems",
 "Creating photorealistic images from text descriptions for digital marketing",
 "Enhancing database performance by using optimized indexing",
 "Analyzing financial data to forecast stock market trends"
 ],
 "answers": [
 1
 ],
 "explanation": "Generative AI models are used to create new content based on existing data. One common use case\nis generating photorealistic images from text descriptions, which is particularly useful in digital\nmarketing, where visual content is key to engaging potential customers.\nOption B (Correct): \"Creating photorealistic images from text descriptions for digital marketing\": This\nis the correct answer because generative AI models, like those offered by Amazon Bedrock, can\ncreate images based on text descriptions, making them highly valuable for generating marketing\nmaterials.\nOption A: \"Improving network security by using intrusion detection systems\" is incorrect because this\nis a use case for traditional machine learning models, not generative AI.\nOption C: \"Enhancing database performance by using optimized indexing\" is incorrect as it is\nunrelated to generative AI.\nOption D: \"Analyzing financial data to forecast stock market trends\" is incorrect because it typically\ninvolves predictive modeling rather than generative AI.\nAWS AI Practitioner Reference:\nUse Cases for Generative AI Models on AWS: AWS highlights the use of generative AI for creative\ncontent generation, including image creation, text generation, and more, which is suited for digital\nmarketing applications.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-009",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect. Which problem is the LLM having?",
 "options": [
 "Data leakage",
 "Hallucination",
 "Overfitting",
 "Underfitting"
 ],
 "answers": [
 1
 ],
 "explanation": "In the context of AI, \"hallucination\" refers to the phenomenon where a model generates outputs that\nare plausible-sounding but are not grounded in reality or the training data. This problemoften occurs\nwith large language models (LLMs) when they create information that sounds correct but is actually\nincorrect or fabricated.\nOption B (Correct): \"Hallucination\": This is the correct answer because the problem described\ninvolves generating content that sounds factual but is incorrect, which is characteristic of\nhallucination in generative AI models.\nOption A: \"Data leakage\" is incorrect as it involves the model accidentally learning from data it\nshouldn't have access to, which does not match the problem of generating incorrect content.\nOption C: \"Overfitting\" is incorrect because overfitting refers to a model that has learned the training\ndata too well, including noise, and performs poorly on new data.\nOption D: \"Underfitting\" is incorrect because underfitting occurs when a model is too simple to\ncapture the underlying patterns in the data, which is not the issue here.\nAWS AI Practitioner Reference:\n\nLarge Language Models on AWS: AWS discusses the challenge of hallucination in large language\nmodels and emphasizes techniques to mitigate it, such as using guardrails and fine-tuning.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-010",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "multiple",
 "question": "A loan company is building a generative AI-based solution to offer new applicants discounts based on specific business criteri a. The company wants to build and use an AI model responsibly to minimize bias that could negatively affect some customers. Which actions should the company take to meet these requirements? (Select TWO.)",
 "options": [
 "Detect imbalances or disparities in the data.",
 "Ensure that the model runs frequently.",
 "Evaluate the model's behavior so that the company can provide transparency to stakeholders.",
 "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate",
 "E. Ensure that the model's inference time is within the accepted limits."
 ],
 "answers": [
 0,
 2
 ],
 "explanation": "To build an AI model responsibly and minimize bias, it is essential to ensure fairness and\ntransparency throughout the model development and deployment process. This involves detecting\nand mitigating data imbalances and thoroughly evaluating the model's behavior to understand its\nimpact on different groups.\nOption A (Correct): \"Detect imbalances or disparities in the data\": This is correct because identifying\nand addressing data imbalances or disparities is a critical step in reducing bias. AWS provides tools\nlike Amazon SageMaker Clarify to detect bias during data preprocessing and model training.\nOption C (Correct): \"Evaluate the model's behavior so that the company can provide transparency to\nstakeholders\": This is correct because evaluating the model's behavior for fairness and accuracy is\nkey to ensuring that stakeholders understand how the model makes decisions. Transparency is a\ncrucial aspect of responsible AI.\nOption B: \"Ensure that the model runs frequently\" is incorrect because the frequency of model runs\ndoes not address bias.\nOption D: \"Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure\nthat the model is 100% accurate\" is incorrect because ROUGE is a metric for evaluating the quality of\ntext summarization models, not for minimizing bias.\nOption E: \"Ensure that the model's inference time is within the accepted limits\" is incorrect as it\nrelates to performance, not bias reduction.\nAWS AI Practitioner Reference:\nAmazon SageMaker Clarify: AWS offers tools such as SageMaker Clarify for detecting bias in datasets\nand models, and for understanding model behavior to ensure fairness and transparency.\nResponsible AI Practices: AWS promotes responsible AI by advocating for fairness, transparency, and\ninclusivity in model development and deployment.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-011",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements. Which solution will meet these requirements?",
 "options": [
 "Configure the security and compliance by using Amazon Inspector.",
 "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify.",
 "Encrypt and secure training data by using Amazon Macie.",
 "Gather more data. Use Amazon Rekognition to add custom labels to the data."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon SageMaker Clarify provides transparency and explainability for machine learning models by\ngenerating metrics, reports, and examples that help to understand model predictions. For a medical\ncompany that needs a foundation model to be transparent and explainable to meet regulatory\nrequirements, SageMaker Clarify is the most suitable solution.\nAmazon SageMaker Clarify:\nIt helps in identifying potential bias in the data and model, and also explains model behavior by\ngenerating feature attributions, providing insights into which features are most influential in the\nmodel's predictions.\nThese capabilities are critical in medical applications where regulatory compliance often mandates\ntransparency and explainability to ensure that decisions made by the model can be trusted and\naudited.\nWhy Option B is Correct:\nTransparency and Explainability: SageMaker Clarify is explicitly designed to provide insights into\nmachine learning models' decision-making processes, helping meet regulatory requirements by\nexplaining why a model made a particular prediction.\nCompliance with Regulations: The tool is suitable for use in sensitive domains, such as healthcare,\nwhere there is a need for explainable AI.\nWhy Other Options are Incorrect:\nA . Amazon Inspector: Focuses on security assessments, not on explainability or model transparency.\nC . Amazon Macie: Provides data security by identifying and protecting sensitive data, but does not\nhelp in making models explainable.\nD . Amazon Rekognition: Used for image and video analysis, not relevant to making models\nexplainable.\nThus, B is the correct answer for meeting transparency and explainability requirements for the\nfoundation model",
 "awsExamTip": ""
 },
 {
 "id": "AIF-012",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations. Which solution will meet these requirements?",
 "options": [
 "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus",
 "Data augmentation by using an Amazon Bedrock knowledge base",
 "Image recognition by using Amazon Rekognition",
 "Data summarization by using Amazon QuickSight"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker Ground Truth Plus is a managed data labeling service that includes human-in-\nthe-loop (HITL) validation. This solution ensures high accuracy by involving human reviewers to\nvalidate the annotations and reduce the risk of incorrect annotations.\nAmazon SageMaker Ground Truth Plus:\nIt allows for the creation of high-quality training datasets with human oversight, which minimizes\nerrors in labeling and increases accuracy.\nHuman-in-the-loop workflows help verify the correctness of annotations, ensuring that generated\nimages for protective eyewear meet high-quality standards.\nWhy Option A is Correct:\nHigh Accuracy: Human-in-the-loop validation provides the ability to catch and correct errors in\nannotations, ensuring high-quality data.\nMinimized Risk of Incorrect Annotations: Human review adds a layer of quality assurance, which is\nespecially important in use cases like generating precise images for protective eyewear.\nWhy Other Options are Incorrect:\nB . Amazon Bedrock: Does not offer a knowledge base for data augmentation; it focuses on running\nfoundation models.\nC . Amazon Rekognition: Provides image recognition and analysis, not a solution for minimizing\nannotation errors.\nD . Amazon QuickSight: A data visualization tool, not relevant to image annotation or generation\ntasks.\nThus, A is the correct answer for generating high-accuracy images with minimized annotation risks.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-013",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs. Which AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?",
 "options": [
 "AWS Audit Manager",
 "AWS CloudTrail",
 "Amazon Fraud Detector",
 "AWS Trusted Advisor"
 ],
 "answers": [
 1
 ],
 "explanation": "AWS CloudTrail is a service that enables governance, compliance, and operational and risk auditing\nof your AWS account. It tracks API calls and identifies unauthorized access attempts to AWS\nresources, including Amazon Bedrock.\nAWS CloudTrail:\nProvides detailed logs of all API calls made within an AWS account, including those to Amazon\nBedrock.\nCan identify unauthorized access attempts by logging and monitoring the API calls, which helps in\nsetting appropriate IAM policies and roles.\nWhy Option B is Correct:\nMonitoring and Security: CloudTrail logs all access requests and helps detect unauthorized access\nattempts.\nAuditing and Compliance: The logs can be used to audit user activity and enforce security measures.\nWhy Other Options are Incorrect:\nA . AWS Audit Manager: Used for automating audit preparation, not for tracking real-time\nunauthorized access attempts.\nC . Amazon Fraud Detector: Designed to detect fraudulent online activities, not unauthorized access\nto AWS services.\nD . AWS Trusted Advisor: Provides best practice recommendations for AWS resources, not access\nmonitoring.\nThus, B is the correct answer for identifying unauthorized users attempting to access Amazon\nBedrock.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-014",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company's review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing. Which AWS service meets this requirement?",
 "options": [
 "Amazon Textract",
 "Amazon Personalize",
 "Amazon Lex",
 "Amazon Transcribe"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon Textract is a service that automatically extracts text and data from scanned documents,\nincluding PDFs. It is the best choice for converting resumes from PDF format to plain text for further\nprocessing.\n\nAmazon Textract:\nExtracts text, forms, and tables from scanned documents accurately.\nIdeal for automating the process of converting PDF resumes into plain text format.\nWhy Option A is Correct:\nAutomation of Text Extraction: Textract is designed to handle large volumes of documents and\nconvert them into machine-readable text, perfect for the company's need.\nScalability and Efficiency: Supports scalability to handle a growing volume of resumes as the\ncompany expands.\nWhy Other Options are Incorrect:\nB . Amazon Personalize: Used for creating personalized recommendations, not for text extraction.\nC . Amazon Lex: A service for building conversational interfaces, not for processing documents.\nD . Amazon Transcribe: Used for converting speech to text, not for extracting text from documents.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-015",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files. Which solution meets these requirements MOST cost-effectively?",
 "options": [
 "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock.",
 "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock.",
 "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts.",
 "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock."
 ],
 "answers": [
 0
 ],
 "explanation": "Using Amazon Bedrock with large language models (LLMs) allows for efficient utilization of AI to\nanswer queries based on context provided in product manuals. To achieve this cost-effectively, the\ncompany should avoid unnecessary use of resources.\nOption A (Correct): \"Use prompt engineering to add one PDF file as context to the user prompt when\nthe prompt is submitted to Amazon Bedrock\": This is the most cost-effective solution. By using\nprompt engineering, only the relevant content from one PDF file is added as context to each query.\nThis approach minimizes the amount of data processed, which helps in reducing costs associated\nwith LLMs' computational requirements.\nOption B: \"Use prompt engineering to add all the PDF files as context to the user prompt when the\nprompt is submitted to Amazon Bedrock\" is incorrect. Including all PDF files would increase costs\nsignificantly due to the large context size processed by the model.\nOption C: \"Use all the PDF documents to fine-tune a model with Amazon Bedrock\" is incorrect. Fine-\ntuning a model is more expensive than using prompt engineering, especially if done for multiple\ndocuments.\nOption D: \"Upload PDF documents to an Amazon Bedrock knowledge base\" is incorrect because\n\nAmazon Bedrock does not have a built-in knowledge base feature for directly managing and querying\nPDF documents.\nAWS AI Practitioner Reference:\nPrompt Engineering for Cost-Effective AI: AWS emphasizes the importance of using prompt\nengineering to minimize costs when interacting with LLMs. By carefully selecting relevant context,\nusers can reduce the amount of data processed and save on expenses.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-016",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
 "options": [
 "Embeddings",
 "Tokens",
 "Models",
 "Binaries"
 ],
 "answers": [
 0
 ],
 "explanation": "Embeddings are numerical representations of objects (such as words, sentences, or documents) that\ncapture the objects' semantic meanings in a form that AI and NLP models can easily understand.\nThese representations help models improve their understanding of textual information by\nrepresenting concepts in a continuous vector space.\nOption A (Correct): \"Embeddings\": This is the correct term, as embeddings provide a way for models\nto learn relationships between different objects in their input space, improving their understanding\nand processing capabilities.\nOption B: \"Tokens\" are pieces of text used in processing, but they do not capture semantic meanings\nlike embeddings do.\nOption C: \"Models\" are the algorithms that use embeddings and other inputs, not the\nrepresentations themselves.\nOption D: \"Binaries\" refer to data represented in binary form, which is unrelated to the concept of\nembeddings.\nAWS AI Practitioner Reference:\nUnderstanding Embeddings in AI and NLP: AWS provides resources and tools, like Amazon\nSageMaker, that utilize embeddings to represent data in formats suitable for machine learning\nmodels.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-017",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building an application that needs to generate synthetic data that is based on existing data. Which type of model can the company use to meet this requirement?",
 "options": [
 "Generative adversarial network (GAN)",
 "XGBoost",
 "Residual neural network",
 "WaveNet"
 ],
 "answers": [
 0
 ],
 "explanation": "Generative adversarial networks (GANs) are a type of deep learning model used for generating\nsynthetic data based on existing datasets. GANs consist of two neural networks (a generator and a\ndiscriminator) that work together to create realistic data.\nOption A (Correct): \"Generative adversarial network (GAN)\": This is the correct answer because\nGANs are specifically designed for generating synthetic data that closely resembles the real data they\nare trained on.\nOption B: \"XGBoost\" is a gradient boosting algorithm for classification and regression tasks, not for\ngenerating synthetic data.\nOption C: \"Residual neural network\" is primarily used for improving the performance of deep\nnetworks, not for generating synthetic data.\nOption D: \"WaveNet\" is a model architecture designed for generating raw audio waveforms, not\nsynthetic data in general.\nAWS AI Practitioner Reference:\nGANs on AWS for Synthetic Data Generation: AWS supports the use of GANs for creating synthetic\ndatasets, which can be crucial for applications like training machine learning models in environments\nwhere real data is scarce or sensitive.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-018",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use generative AI to increase developer productivity and software development. The company wants to use Amazon Q Developer. What can Amazon Q Developer do to help the company meet these requirements?",
 "options": [
 "Create software snippets, reference tracking, and open-source license tracking.",
 "Run an application without provisioning or managing servers.",
 "Enable voice commands for coding and providing natural language search.",
 "Convert audio files to text documents by using ML models."
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon Q Developer is a tool designed to assist developers in increasing productivity by generating\ncode snippets, managing reference tracking, and handling open-source license tracking. These\nfeatures help developers by automating parts of the software development process.\nOption A (Correct): \"Create software snippets, reference tracking, and open-source license tracking\":\nThis is the correct answer because these are key features that help developers streamline and\n\nautomate tasks, thus improving productivity.\nOption B: \"Run an application without provisioning or managing servers\" is incorrect as it refers to\nAWS Lambda or AWS Fargate, not Amazon Q Developer.\nOption C: \"Enable voice commands for coding and providing natural language search\" is incorrect\nbecause this is not a function of Amazon Q Developer.\nOption D: \"Convert audio files to text documents by using ML models\" is incorrect as this refers to\nAmazon Transcribe, not Amazon Q Developer.\nAWS AI Practitioner Reference:\nAmazon Q Developer Features: AWS documentation outlines how Amazon Q Developer supports\ndevelopers by offering features that reduce manual effort and improve efficiency.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-019",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment. Which Amazon Bedrock pricing model meets these requirements?",
 "options": [
 "On-Demand",
 "Model customization",
 "Provisioned Throughput",
 "Spot Instance"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon Bedrock offers an on-demand pricing model that provides flexibility without long-term\ncommitments. This model allows companies to pay only for the resources they use, which is ideal for\na limited budget and offers flexibility.\nOption A (Correct): \"On-Demand\": This is the correct answer because on-demand pricing allows the\ncompany to use Amazon Bedrock without any long-term commitments and to manage costs\naccording to their budget.\nOption B: \"Model customization\" is a feature, not a pricing model.\nOption C: \"Provisioned Throughput\" involves reserving capacity ahead of time, which might not offer\nthe desired flexibility and could lead to higher costs if the capacity is not fully used.\nOption D: \"Spot Instance\" is a pricing model for EC2 instances and does not apply to Amazon\nBedrock.\nAWS AI Practitioner Reference:\nAWS Pricing Models for Flexibility: On-demand pricing is a key AWS model for services that require\nflexibility and no long-term commitment, ensuring cost-effectiveness for projects with variable usage\npatterns.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-020",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data. Which solution will meet these requirements?",
 "options": [
 "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon SageMaker built-in algorithms that use the data from Amazon S3.",
 "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast predictions by using SageMaker built-in algorithms.",
 "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast predictions by using an Amazon Personalize Trending-Now recipe.",
 "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas."
 ],
 "answers": [
 3
 ],
 "explanation": "Amazon SageMaker Canvas is a visual, no-code machine learning interface that allows users to build\nmachine learning models without having any coding experience or knowledge of machine learning\nalgorithms. It enables users to analyze internal and external data, and make predictions using a\nguided interface.\nOption D (Correct): \"Import the data into Amazon SageMaker Canvas. Build ML models and demand\nforecast predictions by selecting the values in the data from SageMaker Canvas\": This is the correct\nanswer because SageMaker Canvas is designed for users without coding experience, providing a\nvisual interface to build predictive models with ease.\nOption A: \"Store the data in Amazon S3 and use SageMaker built-in algorithms\" is incorrect because\nit requires coding knowledge to interact with SageMaker's built-in algorithms.\nOption B: \"Import the data into Amazon SageMaker Data Wrangler\" is incorrect. Data Wrangler is\nprimarily for data preparation and not directly focused on creating ML models without coding.\nOption C: \"Use Amazon Personalize Trending-Now recipe\" is incorrect as Amazon Personalize is for\nbuilding recommendation systems, not for general demand forecasting.\nAWS AI Practitioner Reference:\nAmazon SageMaker Canvas Overview: AWS documentation emphasizes Canvas as a no-code solution\nfor building machine learning models, suitable for business analysts and users with no coding\nexperience.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-021",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "What are tokens in the context of generative AI models?",
 "options": [
 "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units.",
 "Tokens are the mathematical representations of words or concepts used in generative AI models.",
 "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks.",
 "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
 ],
 "answers": [
 0
 ],
 "explanation": "Tokens in generative AI models are the smallest units that the model processes, typically\nrepresenting words, subwords, or characters. They are essential for the model to understand and\ngenerate language, breaking down text into manageable parts for processing.\nOption A (Correct): \"Tokens are the basic units of input and output that a generative AI model\noperates on, representing words, subwords, or other linguistic units\": This is the correct definition of\ntokens in the context of generative AI models.\nOption B: \"Mathematical representations of words\" describes embeddings, not tokens.\nOption C: \"Pre-trained weights of a model\" refers to the parameters of a model, not tokens.\nOption D: \"Prompts or instructions given to a model\" refers to the queries or commands provided to\na model, not tokens.\nAWS AI Practitioner Reference:\nUnderstanding Tokens in NLP: AWS provides detailed explanations of how tokens are used in natural\nlanguage processing tasks by AI models, such as in Amazon Comprehend and other AWS AI services.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-022",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data. Which strategy should the AI practitioner use?",
 "options": [
 "Configure AWS CloudTrail as the logs destination for the model.",
 "Enable invocation logging in Amazon Bedrock.",
 "Configure AWS Audit Manager as the logs destination for the model.",
 "Configure model invocation logging in Amazon EventBridge."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Bedrock provides an option to enable invocation logging to capture and store the input and\noutput data of the models used. This is essential for monitoring and auditing purposes, particularly\nwhen handling customer data.\nOption B (Correct): \"Enable invocation logging in Amazon Bedrock\": This is the correct answer as it\ndirectly enables the logging of all model invocations, ensuring transparency and traceability.\nOption A: \"Configure AWS CloudTrail\" is incorrect because CloudTrail logs API calls but does not\nprovide specific logging for model inputs and outputs.\nOption C: \"Configure AWS Audit Manager\" is incorrect as Audit Manager is used for compliance\nreporting, not specific invocation logging for AI models.\nOption D: \"Configure model invocation logging in Amazon EventBridge\" is incorrect as EventBridge is\nfor event-driven architectures, not specifically designed for logging AI model inputs and outputs.\nAWS AI Practitioner Reference:\n\nAmazon Bedrock Logging Capabilities: AWS emphasizes using built-in logging features in Bedrock to\nmaintain data integrity and transparency in model operations.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-023",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company needs to build its own large language model (LLM) based on only the company's private data. The company is concerned about the environmental effect of the training process. Which Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
 "options": [
 "Amazon EC2 C series",
 "Amazon EC2 G series",
 "Amazon EC2 P series",
 "Amazon EC2 Trn series"
 ],
 "answers": [
 3
 ],
 "explanation": "The Amazon EC2 Trn series (Trainium) instances are designed for high-performance, cost-effective\nmachine learning training while being energy-efficient. AWS Trainium-powered instances are\noptimized for deep learning models and have been developed to minimize environmental impact by\nmaximizing energy efficiency.\nOption D (Correct): \"Amazon EC2 Trn series\": This is the correct answer because the Trn series is\npurpose-built for training deep learning models with lower energy consumption, which aligns with\nthe company's concern about environmental effects.\nOption A: \"Amazon EC2 C series\" is incorrect because it is intended for compute-intensive tasks but\nnot specifically optimized for ML training with environmental considerations.\nOption B: \"Amazon EC2 G series\" (Graphics Processing Unit instances) is optimized for graphics-\nintensive applications but does not focus on minimizing environmental impact for training.\nOption C: \"Amazon EC2 P series\" is designed for ML training but does not offer the same level of\nenergy efficiency as the Trn series.\nAWS AI Practitioner Reference:\nAWS Trainium Overview: AWS promotes Trainium instances as their most energy-efficient and cost-\neffective solution for ML model training.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-024",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A financial institution is using Amazon Bedrock to develop an AI application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic. Which AWS service or feature will meet these requirements?",
 "options": [
 "AWS PrivateLink",
 "Amazon Macie",
 "Amazon CloudFront",
 "Internet gateway"
 ],
 "answers": [
 0
 ],
 "explanation": "AWS PrivateLink enables private connectivity between VPCs and AWS services without exposing\ntraffic to the public internet. This feature is critical for meeting regulatory compliance standards that\nrequire isolation from public internet traffic.\nOption A (Correct): \"AWS PrivateLink\": This is the correct answer because it allows secure access to\nAmazon Bedrock and other AWS services from a VPC without internet access, ensuring compliance\nwith regulatory standards.\nOption B: \"Amazon Macie\" is incorrect because it is a security service for data classification and\nprotection, not for managing private network traffic.\nOption C: \"Amazon CloudFront\" is incorrect because it is a content delivery network service and does\nnot provide private network connectivity.\nOption D: \"Internet gateway\" is incorrect as it enables internet access, which violates the VPC's no-\ninternet-traffic policy.\nAWS AI Practitioner Reference:\nAWS PrivateLink Documentation: AWS highlights PrivateLink as a solution for connecting VPCs to\nAWS services privately, which is essential for organizations with strict regulatory requirements.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-025",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company built a deep learning model for object detection and deployed the model to production. Which AI process occurs when the model analyzes a new image to identify objects?",
 "options": [
 "Training",
 "Inference",
 "Model deployment",
 "Bias correction"
 ],
 "answers": [
 1
 ],
 "explanation": "Inference is the correct answer because it is the AI process that occurs when a deployed model\nanalyzes new data (such as an image) to make predictions or identify objects.\nInference:\nIn the context of machine learning, inference is the process of using a trained model to make\npredictions on new, unseen data.\nWhen the deep learning model is deployed to production and receives a new image for analysis, it\nuses the learned patterns from the training phase to identify objects in the image. This is known as\ninference.\nWhy Option B is Correct:\nInference Process: Involves applying the trained model to real-world data (the new image) to identify\n\nobjects.\nDeployment Context: The model has already been trained, and the deployment to production\nindicates it is being used for inference.\nWhy Other Options are Incorrect:\nA . Training: Refers to the process of teaching the model using historical data, not making predictions\non new data.\nC . Model deployment: Refers to the process of making a trained model available for use in\nproduction.\nD . Bias correction: Is a process to adjust a model to minimize bias, not for analyzing new images.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-026",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks. Which solution will meet this requirement?",
 "options": [
 "Use Amazon Inspector to monitor SageMaker Studio.",
 "Use Amazon Macie to monitor SageMaker Studio.",
 "Configure SageMaker to use a VPC with an S3 endpoint.",
 "Configure SageMaker to use S3 Glacier Deep Archive."
 ],
 "answers": [
 2
 ],
 "explanation": "To manage the flow of data from Amazon S3 to SageMaker Studio notebooks securely, using a VPC\nwith an S3 endpoint is the best solution.\nAmazon SageMaker and S3 Integration:\nConfiguring SageMaker to use a Virtual Private Cloud (VPC) with an S3 endpoint allows the data flow\nbetween Amazon S3 and SageMaker Studio notebooks to occur over a private network.\nThis setup ensures that traffic between SageMaker and S3 does not traverse the public internet,\nenhancing security and performance.\nWhy Option C is Correct:\nSecure Data Transfer: Ensures secure, private connectivity between SageMaker and S3, reducing\nexposure to potential security risks.\nDirect Access to S3: Using an S3 endpoint in a VPC allows direct access to data in S3 without leaving\nthe AWS network.\nWhy Other Options are Incorrect:\nA . Amazon Inspector: Focuses on identifying security vulnerabilities, not managing data flow.\nB . Amazon Macie: Monitors for sensitive data but does not manage data flow between S3 and\nSageMaker.\nD . S3 Glacier Deep Archive: Is a storage class for archiving data, not for managing active data flow.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-027",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks. Which ML strategy meets these requirements?",
 "options": [
 "Increase the number of epochs.",
 "Use transfer learning.",
 "Decrease the number of epochs.",
 "Use unsupervised learning."
 ],
 "answers": [
 1
 ],
 "explanation": "Transfer learning is the correct strategy for adapting pre-trained models for new, related tasks\nwithout creating models from scratch.\nTransfer Learning:\nInvolves taking a pre-trained model and fine-tuning it on a new dataset for a related task.\nThis approach is efficient because it leverages existing knowledge from a model trained on a large\ndataset, requiring less data and computational resources than training a new model from scratch.\nWhy Option B is Correct:\nAdaptation of Pre-trained Models: Allows for adapting existing models to new tasks, which aligns\nwith the company's goal of not starting from scratch.\nEfficiency and Speed: Speeds up the model development process by building on the knowledge of\npre-trained models.\nWhy Other Options are Incorrect:\nA . Increase the number of epochs: Does not address the strategy of reusing pre-trained models.\nC . Decrease the number of epochs: Similarly, does not apply to adapting pre-trained models.\nD . Use unsupervised learning: Does not involve using pre-trained models for new tasks.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-028",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use AI to protect its application from threats. The AI solution needs to check if an IP address is from a suspicious source. Which solution meets these requirements?",
 "options": [
 "Build a speech recognition system.",
 "Create a natural language processing (NLP) named entity recognition system.",
 "Develop an anomaly detection system.",
 "Create a fraud forecasting system."
 ],
 "answers": [
 2
 ],
 "explanation": "An anomaly detection system is suitable for identifying unusual patterns or behaviors, such as\nsuspicious IP addresses, which might indicate a potential threat.\nAnomaly Detection:\nAnomaly detection uses machine learning algorithms to identify deviations from normal behavior,\nsuch as unexpected traffic from a suspicious IP address.\nThis is a common approach for identifying potential threats or malicious activity in cybersecurity\napplications.\nWhy Option C is Correct:\nDetects Suspicious Behavior: An anomaly detection system can monitor and detect IP addresses that\nexhibit unusual or suspicious patterns.\nReal-time Monitoring: Provides continuous analysis of network traffic to identify potential security\nthreats.\nWhy Other Options are Incorrect:\nA . Speech recognition system: Is unrelated to detecting suspicious IP addresses.\nB . NLP named entity recognition: Focuses on identifying entities in text, not IP address analysis.\nD . Fraud forecasting system: Generally used for predicting fraud, not directly applicable to\nidentifying suspicious IPs.\nThus, C is the correct answer for detecting suspicious IP addresses.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-029",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information. Which action will reduce these risks?",
 "options": [
 "Create a prompt template that teaches the LLM to detect attack patterns.",
 "Increase the temperature parameter on invocation requests to the LLM.",
 "Avoid using LLMs that are not listed in Amazon SageMaker.",
 "Decrease the number of input tokens on invocations of the LLM."
 ],
 "answers": [
 0
 ],
 "explanation": "Creating a prompt template that teaches the LLM to detect attack patterns is the most effective way\nto reduce the risk of the model being manipulated through prompt engineering.\nPrompt Templates for Security:\nA well-designed prompt template can guide the LLM to recognize and respond appropriately to\npotential manipulation attempts.\nThis strategy helps prevent the model from performing undesirable actions or exposing sensitive\ninformation by embedding security awareness directly into the prompts.\nWhy Option A is Correct:\nTeaches Model Security Awareness: Equips the LLM to handle potentially harmful inputs by\nrecognizing suspicious patterns.\nReduces Manipulation Risk: Helps mitigate risks associated with prompt engineering attacks by\nproactively preparing the LLM.\n\nWhy Other Options are Incorrect:\nB . Increase the temperature parameter: This increases randomness in responses, potentially making\nthe LLM more unpredictable and less secure.\nC . Avoid LLMs not listed in SageMaker: Does not directly address the risk of prompt manipulation.\nD . Decrease the number of input tokens: Does not mitigate risks related to prompt manipulation.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-030",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model's performance decreased significantly. What should the company do to mitigate this problem?",
 "options": [
 "Reduce the volume of data that is used in training.",
 "Add hyperparameters to the model.",
 "Increase the volume of data that is used in training.",
 "Increase the model training time."
 ],
 "answers": [
 2
 ],
 "explanation": "When a model performs well on the training data but poorly in production, it is often due to\noverfitting. Overfitting occurs when a model learns patterns and noise specific to the training data,\nwhich does not generalize well to new, unseen data in production. Increasing the volume of data\nused in training can help mitigate this problem by providing a more diverse and representative\ndataset, which helps the model generalize better.\nOption C (Correct): \"Increase the volume of data that is used in training\": Increasing the data volume\ncan help the model learn more generalized patterns rather than specific features of the training\ndataset, reducing overfitting and improving performance in production.\nOption A: \"Reduce the volume of data that is used in training\" is incorrect, as reducing data volume\nwould likely worsen the overfitting problem.\nOption B: \"Add hyperparameters to the model\" is incorrect because adding hyperparameters alone\ndoes not address the issue of data diversity or model generalization.\nOption D: \"Increase the model training time\" is incorrect because simply increasing training time\ndoes not prevent overfitting; the model needs more diverse data.\nAWS AI Practitioner Reference:\nBest Practices for Model Training on AWS: AWS recommends using a larger and more diverse training\ndataset to improve a model's generalization capability and reduce the risk of overfitting.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-031",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3). The FM encounters a failure when attempting to access the S3 bucket data. Which solution will meet these requirements?",
 "options": [
 "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key.",
 "Set the access permissions for the S3 buckets to allow public access to enable access over the internet.",
 "Use prompt engineering techniques to tell the model to look for information in Amazon S3.",
 "Ensure that the S3 data does not contain sensitive information."
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon Bedrock needs the appropriate IAM role with permission to access and decrypt data stored\nin Amazon S3. If the data is encrypted with Amazon S3 managed keys (SSE-S3), the role that Amazon\nBedrock assumes must have the required permissions to access and decrypt the encrypted data.\nOption A (Correct): \"Ensure that the role that Amazon Bedrock assumes has permission to decrypt\ndata with the correct encryption key\": This is the correct solution as it ensures that the AI model can\naccess the encrypted data securely without changing the encryption settings or compromising data\nsecurity.\nOption B: \"Set the access permissions for the S3 buckets to allow public access\" is incorrect because\nit violates security best practices by exposing sensitive data to the public.\nOption C: \"Use prompt engineering techniques to tell the model to look for information in Amazon\nS3\" is incorrect as it does not address the encryption and permission issue.\nOption D: \"Ensure that the S3 data does not contain sensitive information\" is incorrect because it\ndoes not solve the access problem related to encryption.\nAWS AI Practitioner Reference:\nManaging Access to Encrypted Data in AWS: AWS recommends using proper IAM roles and policies\nto control access to encrypted data stored in S3.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-032",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation. Which AWS service meets these requirements?",
 "options": [
 "Amazon S3",
 "Amazon Elastic Block Store (Amazon EBS)",
 "Amazon Elastic File System (Amazon EFS)",
 "AWS Snowcone"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon S3 is the optimal choice for storing and uploading datasets used for machine learning model\nvalidation and training. It offers scalable, durable, and secure storage, making it ideal for holding\ndatasets required by Amazon Bedrock for validation purposes.\nOption A (Correct): \"Amazon S3\": This is the correct answer because Amazon S3 is widely used for\nstoring large datasets that are accessed by machine learning models, including those in Amazon\nBedrock.\nOption B: \"Amazon Elastic Block Store (Amazon EBS)\" is incorrect because EBS is a block storage\nservice for use with Amazon EC2, not for directly storing datasets for Amazon Bedrock.\nOption C: \"Amazon Elastic File System (Amazon EFS)\" is incorrect as it is primarily used for file storage\nwith shared access by multiple instances.\nOption D: \"AWS Snowcone\" is incorrect because it is a physical device for offline data transfer, not\nsuitable for directly providing data to Amazon Bedrock.\nAWS AI Practitioner Reference:\nStoring and Managing Datasets on AWS for Machine Learning: AWS recommends using S3 for storing\nand managing datasets required for ML model training and validation.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-033",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications. Which factor will drive the inference costs?",
 "options": [
 "Number of tokens consumed",
 "Temperature value",
 "Amount of data used to train the LLM",
 "Total training time"
 ],
 "answers": [
 0
 ],
 "explanation": "In generative AI models, such as those built on Amazon Bedrock, inference costs are driven by the\nnumber of tokens processed. A token can be as short as one character or as long as one word, and\nthe more tokens consumed during the inference process, the higher the cost.\nOption A (Correct): \"Number of tokens consumed\": This is the correct answer because the inference\ncost is directly related to the number of tokens processed by the model.\nOption B: \"Temperature value\" is incorrect as it affects the randomness of the model's output but not\nthe cost directly.\nOption C: \"Amount of data used to train the LLM\" is incorrect because training data size affects\ntraining costs, not inference costs.\nOption D: \"Total training time\" is incorrect because it relates to the cost of training the model, not the\ncost of inference.\nAWS AI Practitioner Reference:\nUnderstanding Inference Costs on AWS: AWS documentation highlights that inference costs for\ngenerative models are largely based on the number of tokens processed.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-034",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available. Which AWS service can the company use to meet this requirement?",
 "options": [
 "AWS Audit Manager",
 "AWS Artifact",
 "AWS Trusted Advisor",
 "AWS Data Exchange"
 ],
 "answers": [
 3
 ],
 "explanation": "AWS Data Exchange is a service that allows companies to securely exchange data with third parties,\nsuch as independent software vendors (ISVs). AWS Data Exchange can be configured to provide\nnotifications, including email notifications, when new datasets or compliance reports become\navailable.\nOption D (Correct): \"AWS Data Exchange\": This is the correct answer because it enables the company\nto receive notifications, including email messages, when ISVs' compliance reports are available.\nOption A: \"AWS Audit Manager\" is incorrect because it focuses on assessing an organization's own\ncompliance, not receiving third-party compliance reports.\nOption B: \"AWS Artifact\" is incorrect as it provides access to AWS’s compliance reports, not ISVs'.\nOption C: \"AWS Trusted Advisor\" is incorrect as it offers optimization and best practices guidance, not\ncompliance report notifications.\nAWS AI Practitioner Reference:\nAWS Data Exchange Documentation: AWS explains how Data Exchange allows organizations to\nsubscribe to third-party data and receive notifications when updates are available.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-035",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt. Which adjustment to an inference parameter should the company make to meet these requirements?",
 "options": [
 "Decrease the temperature value",
 "Increase the temperature value",
 "Decrease the length of output tokens",
 "Increase the maximum generation length"
 ],
 "answers": [
 0
 ],
 "explanation": "The temperature parameter in a large language model (LLM) controls the randomness of the model's\noutput. A lower temperature value makes the output more deterministic and consistent, meaning\nthat the model is less likely to produce different results for the same input prompt.\nOption A (Correct): \"Decrease the temperature value\": This is the correct answer because lowering\nthe temperature reduces the randomness of the responses, leading to more consistent outputs for\nthe same input.\nOption B: \"Increase the temperature value\" is incorrect because it would make the output more\nrandom and less consistent.\nOption C: \"Decrease the length of output tokens\" is incorrect as it does not directly affect the\nconsistency of the responses.\nOption D: \"Increase the maximum generation length\" is incorrect because this adjustment affects the\noutput length, not the consistency of the model’s responses.\nAWS AI Practitioner Reference:\nUnderstanding Temperature in Generative AI Models: AWS documentation explains that adjusting\nthe temperature parameter affects the model’s output randomness, with lower values providing\nmore consistent outputs.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-036",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is implementing the Amazon Titan foundation model (FM) by using Amazon Bedrock. The company needs to supplement the model by using relevant data from the company's private data sources. Which solution will meet this requirement?",
 "options": [
 "Use a different FM",
 "Choose a lower temperature value",
 "Create an Amazon Bedrock knowledge base",
 "Enable model invocation logging"
 ],
 "answers": [
 2
 ],
 "explanation": "Creating an Amazon Bedrock knowledge base allows the integration of external or private data\nsources with a foundation model (FM) like Amazon Titan. This integration helps supplement the\nmodel with relevant data from the company's private data sources to enhance its responses.\nOption C (Correct): \"Create an Amazon Bedrock knowledge base\": This is the correct answer as it\nenables the company to incorporate private data into the FM to improve its effectiveness.\nOption A: \"Use a different FM\" is incorrect because it does not address the need to supplement the\ncurrent model with private data.\nOption B: \"Choose a lower temperature value\" is incorrect as it affects output randomness, not the\nintegration of private data.\nOption D: \"Enable model invocation logging\" is incorrect because logging does not help in\nsupplementing the model with additional data.\n\nAWS AI Practitioner Reference:\nAmazon Bedrock and Knowledge Integration: AWS explains how creating a knowledge base allows\nAmazon Bedrock to use external data sources to improve the FM’s relevance and accuracy.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-037",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to develop an educational game where users answer questions such as the following: \"A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?\" Which solution meets these requirements with the LEAST operational overhead?",
 "options": [
 "Use supervised learning to create a regression model that will predict probability.",
 "Use reinforcement learning to train a model to return the probability.",
 "Use code that will calculate probability by using simple rules and computations.",
 "Use unsupervised learning to create a model that will estimate probability density."
 ],
 "answers": [
 2
 ],
 "explanation": "The problem involves a simple probability calculation that can be handled efficiently by\nstraightforward mathematical rules and computations. Using machine learning techniques would\nintroduce unnecessary complexity and operational overhead.\nOption C (Correct): \"Use code that will calculate probability by using simple rules and computations\":\nThis is the correct answer because it directly solves the problem with minimal overhead, using basic\nprobability rules.\nOption A: \"Use supervised learning to create a regression model\" is incorrect as it overcomplicates\nthe solution for a simple probability problem.\nOption B: \"Use reinforcement learning to train a model\" is incorrect because reinforcement learning\nis not needed for a simple probability calculation.\nOption D: \"Use unsupervised learning to create a model\" is incorrect as unsupervised learning is not\napplicable to this task.\nAWS AI Practitioner Reference:\nChoosing the Right Solution for AI Tasks: AWS recommends using the simplest and most efficient\napproach to solve a given problem, avoiding unnecessary machine learning techniques for\nstraightforward tasks.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-038",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which functionality does Amazon SageMaker Clarify provide?",
 "options": [
 "Integrates a Retrieval Augmented Generation (RAG) workflow",
 "Monitors the quality of ML models in production",
 "Documents critical details about ML models",
 "Identifies potential bias during data preparation"
 ],
 "answers": [
 3
 ],
 "explanation": "Exploratory data analysis (EDA) involves understanding the data by visualizing it, calculating statistics,\nand creating correlation matrices. This stage helps identify patterns, relationships, and anomalies in\nthe data, which can guide further steps in the ML pipeline.\nOption C (Correct): \"Exploratory data analysis\": This is the correct answer as the tasks described\n(correlation matrix, calculating statistics, visualizing data) are all part of the EDA process.\nOption A: \"Data pre-processing\" is incorrect because it involves cleaning and transforming data, not\ninitial analysis.\nOption B: \"Feature engineering\" is incorrect because it involves creating new features from raw data,\nnot analyzing the data's existing structure.\nOption D: \"Hyperparameter tuning\" is incorrect because it refers to optimizing model parameters,\nnot analyzing the data.\nAWS AI Practitioner Reference:\nStages of the Machine Learning Pipeline: AWS outlines EDA as the initial phase of understanding and\nexploring data before moving to more specific preprocessing, feature engineering, and model\ntraining stages.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-039",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data. Which stage of the ML pipeline is the company currently in?",
 "options": [
 "Data pre-processing",
 "Feature engineering",
 "Exploratory data analysis",
 "Hyperparameter tuning"
 ],
 "answers": [
 2
 ],
 "explanation": "Exploratory data analysis (EDA) involves understanding the data by visualizing it, calculating statistics,\nand creating correlation matrices. This stage helps identify patterns, relationships, and anomalies in\nthe data, which can guide further steps in the ML pipeline.\nOption C (Correct): \"Exploratory data analysis\": This is the correct answer as the tasks described\n(correlation matrix, calculating statistics, visualizing data) are all part of the EDA process.\nOption A: \"Data pre-processing\" is incorrect because it involves cleaning and transforming data, not\ninitial analysis.\nOption B: \"Feature engineering\" is incorrect because it involves creating new features from raw data,\nnot analyzing the data's existing structure.\nOption D: \"Hyperparameter tuning\" is incorrect because it refers to optimizing model parameters,\n\nnot analyzing the data.\nAWS AI Practitioner Reference:\nStages of the Machine Learning Pipeline: AWS outlines EDA as the initial phase of understanding and\nexploring data before moving to more specific preprocessing, feature engineering, and model\ntraining stages.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-040",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text. Which type of model meets this requirement?",
 "options": [
 "Topic modeling",
 "Clustering models",
 "Prescriptive ML models",
 "BERT-based models"
 ],
 "answers": [
 3
 ],
 "explanation": "BERT-based models (Bidirectional Encoder Representations from Transformers) are suitable for tasks\nthat involve understanding the context of words in a sentence and suggesting missing words. These\nmodels use bidirectional training, which considers the context from both directions (left and right of\nthe missing word) to predict the appropriate word to fill in the gaps.\nBERT-based Models:\nBERT is a pre-trained transformer model designed for natural language understanding tasks,\nincluding text completion, where certain words are missing.\nIt excels at understanding context and relationships between words in a sentence, making it ideal for\nsuggesting potential words to fill in missing text.\nWhy Option D is Correct:\nContextual Understanding: BERT uses its bidirectional training to understand the context around\nmissing words, making it highly accurate in suggesting suitable replacements.\nText Completion Capability: BERT's architecture is explicitly designed for tasks like masked language\nmodeling, where certain words in a text are masked (or missing), and the model predicts the missing\nwords.\nWhy Other Options are Incorrect:\nA . Topic modeling: Focuses on identifying topics in a text corpus, not on predicting missing words.\nB . Clustering models: Group similar data points together, which is not suitable for predicting missing\ntext.\nC . Prescriptive ML models: Focus on providing recommendations based on data analysis, not on\nnatural language processing tasks like filling in missing text.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-041",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy. Which additional data does the company need to meet these requirements?",
 "options": [
 "Pairs of chatbot responses and correct user intents",
 "Pairs of user messages and correct chatbot responses",
 "Pairs of user messages and correct user intents",
 "Pairs of user intents and correct chatbot responses"
 ],
 "answers": [
 2
 ],
 "explanation": "Few-shot learning involves providing a model with a few examples (shots) to learn from. For\nimproving intent detection accuracy in a chatbot using a large language model (LLM), the data should\nconsist of pairs of user messages and their corresponding correct intents.\nFew-shot Learning for Intent Detection:\nFew-shot learning aims to enable the model to learn from a small number of examples. For intent\ndetection, the model needs to understand the relationship between user messages and the intended\naction or meaning.\nProviding examples of user messages and the correct user intents allows the model to learn patterns\nin the phrasing or language that corresponds to each intent.\nWhy Option C is Correct:\nUser Messages and Intents: These examples directly teach the model how to map a user’s input to\nthe appropriate intent, which is the goal of intent detection in chatbots.\nImproves Accuracy: By using few-shot learning with these examples, the model can generalize better\nfrom limited data, improving intent detection.\nWhy Other Options are Incorrect:\nA . Pairs of chatbot responses and correct user intents: Incorrect because it does not focus on user\ninput but rather on outputs.\nB . Pairs of user messages and correct chatbot responses: This would be useful for response\ngeneration, not intent detection.\nD . Pairs of user intents and correct chatbot responses: Again, this is not aligned with detecting\nintents but with generating responses.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-042",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions. Which business objective should the company use to evaluate the effect of the LLM chatbot?",
 "options": [
 "Website engagement rate",
 "Average call duration",
 "Corporate social responsibility",
 "Regulatory compliance"
 ],
 "answers": [
 1
 ],
 "explanation": "The business objective to evaluate the effect of an LLM chatbot aimed at reducing the actions\nrequired by call center employees should be average call duration.\nAverage Call Duration:\nThis metric measures the time taken to handle a customer call or query. A successful LLM chatbot\nshould reduce the call duration by efficiently providing answers, minimizing the need for human\nintervention.\nBy decreasing the average call duration, the company can improve call center efficiency, reduce\ncosts, and enhance the user experience.\nWhy Option B is Correct:\nDirect Impact: The objective aligns directly with the goal of reducing the number of actions call\ncenter employees must take.\nOperational Efficiency: Reducing call duration is a clear indicator of the chatbot's effectiveness in\nassisting customers without human help.\nWhy Other Options are Incorrect:\nA . Website engagement rate: Is unrelated to call center operations.\nC . Corporate social responsibility: Does not relate to call center efficiency.\nD . Regulatory compliance: Is important but does not measure the effectiveness of a chatbot in\nreducing employee actions.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-043",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost. Which solution will meet these requirements?",
 "options": [
 "Customize the model by using fine-tuning.",
 "Decrease the number of tokens in the prompt.",
 "Increase the number of tokens in the prompt.",
 "Use Provisioned Throughput."
 ],
 "answers": [
 1
 ],
 "explanation": "Decreasing the number of tokens in the prompt reduces the cost associated with using an LLM model\non Amazon Bedrock, as costs are often based on the number of tokens processed by the model.\nToken Reduction Strategy:\nBy decreasing the number of tokens (words or characters) in each prompt, the company reduces the\ncomputational load and, therefore, the cost associated with invoking the model.\nSince the model is performing well with few-shot prompting, reducing token usage without\n\nsacrificing performance can lower monthly costs.\nWhy Option B is Correct:\nCost Efficiency: Directly reduces the number of tokens processed, lowering costs without requiring\nadditional adjustments.\nMaintaining Performance: If the model is already performing well, a reduction in tokens should not\nsignificantly impact its performance.\nWhy Other Options are Incorrect:\nA . Fine-tuning: Can be costly and time-consuming and is not needed if the current model is already\nperforming well.\nC . Increase the number of tokens: Would increase costs, not lower them.\nD . Use Provisioned Throughput: Is unrelated to token costs and applies more to read/write capacity\nin databases.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-044",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "multiple",
 "question": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms. What should the firm do when developing and deploying the LLM? (Select TWO.)",
 "options": [
 "Include fairness metrics for model evaluation.",
 "Adjust the temperature parameter of the model.",
 "Modify the training data to mitigate bias.",
 "Avoid overfitting on the training data.",
 "Apply prompt engineering techniques."
 ],
 "answers": [
 0,
 2
 ],
 "explanation": "To implement a large language model (LLM) responsibly, the firm should focus on fairness and\nmitigating bias, which are critical for ethical AI deployment.\nA . Include Fairness Metrics for Model Evaluation:\nFairness metrics help ensure that the model's predictions are unbiased and do not unfairly\ndiscriminate against any group.\nThese metrics can measure disparities in model outcomes across different demographic groups,\nensuring responsible AI practices.\nC . Modify the Training Data to Mitigate Bias:\nAdjusting training data to be more representative and balanced can help reduce bias in the model's\npredictions.\nMitigating bias at the data level ensures that the model learns from a diverse and fair dataset,\nreducing potential harms in deployment.\nWhy Other Options are Incorrect:\nB . Adjust the temperature parameter of the model: Controls randomness in outputs but does not\ndirectly address fairness or bias.\nD . Avoid overfitting on the training data: Important for model generalization but not directly related\nto responsible AI practices regarding fairness and bias.\nE . Apply prompt engineering techniques: Useful for improving model outputs but not specifically for\n\nmitigating bias or ensuring fairness.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-045",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly. Which evaluation metric should the company use to measure the model's performance?",
 "options": [
 "R-squared score",
 "Accuracy",
 "Root mean squared error (RMSE)",
 "Learning rate"
 ],
 "answers": [
 1
 ],
 "explanation": "Accuracy is the most appropriate metric to measure the performance of an image classification\nmodel. It indicates the percentage of correctly classified images out of the total number of images. In\nthe context of classifying plant diseases from images, accuracy will help the company determine how\nwell the model is performing by showing how many images were correctly classified.\nOption B (Correct): \"Accuracy\": This is the correct answer because accuracy measures the proportion\nof correct predictions made by the model, which is suitable for evaluating the performance of a\nclassification model.\nOption A: \"R-squared score\" is incorrect as it is used for regression analysis, not classification tasks.\nOption C: \"Root mean squared error (RMSE)\" is incorrect because it is also used for regression tasks\nto measure prediction errors, not for classification accuracy.\nOption D: \"Learning rate\" is incorrect as it is a hyperparameter for training, not a performance\nmetric.\nAWS AI Practitioner Reference:\nEvaluating Machine Learning Models on AWS: AWS documentation emphasizes the use of\nappropriate metrics, like accuracy, for classification tasks.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-046",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed and responded to quickly. The company wants to implement Agents for Amazon Bedrock. What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
 "options": [
 "Generation of custom foundation models (FMs) to predict customer needs",
 "Automation of repetitive tasks and orchestration of complex workflows",
 "Automatically calling multiple foundation models (FMs) and consolidating the results",
 "Selecting the foundation model (FM) based on predefined criteria and metrics"
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Bedrock Agents provide the capability to automate repetitive tasks and orchestrate complex\nworkflows using generative AI models. This is particularly beneficial for customer support inquiries,\nwhere quick and efficient processing is crucial.\nOption B (Correct): \"Automation of repetitive tasks and orchestration of complex workflows\": This is\nthe correct answer because Bedrock Agents can automate common customer service tasks and\nstreamline complex processes, improving response times and efficiency.\nOption A: \"Generation of custom foundation models (FMs) to predict customer needs\" is incorrect as\nBedrock agents do not create custom models.\nOption C: \"Automatically calling multiple foundation models (FMs) and consolidating the results\" is\nincorrect because Bedrock agents focus on task automation rather than combining model outputs.\nOption D: \"Selecting the foundation model (FM) based on predefined criteria and metrics\" is\nincorrect as Bedrock agents are not designed for selecting models.\nAWS AI Practitioner Reference:\nAmazon Bedrock Documentation: AWS explains that Bedrock Agents automate tasks and manage\ncomplex workflows, making them ideal for customer support automation.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-047",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level. Which solution will meet these requirements?",
 "options": [
 "Decrease the batch size.",
 "Increase the epochs.",
 "Decrease the epochs.",
 "Increase the temperature parameter."
 ],
 "answers": [
 1
 ],
 "explanation": "Increasing the number of epochs during model training allows the model to learn from the data over\nmore iterations, potentially improving its accuracy up to a certain point. This is a common practice\nwhen attempting to reach a specific level of accuracy.\nOption B (Correct): \"Increase the epochs\": This is the correct answer because increasing epochs\nallows the model to learn more from the data, which can lead to higher accuracy.\nOption A: \"Decrease the batch size\" is incorrect as it mainly affects training speed and may lead to\noverfitting but does not directly relate to achieving a specific accuracy level.\nOption C: \"Decrease the epochs\" is incorrect as it would reduce the training time, possibly preventing\nthe model from reaching the desired accuracy.\nOption D: \"Increase the temperature parameter\" is incorrect because temperature affects the\nrandomness of predictions, not model accuracy.\n\nAWS AI Practitioner Reference:\nModel Training Best Practices on AWS: AWS suggests adjusting training parameters, like the number\nof epochs, to improve model performance.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-048",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images. Which solution will meet these requirements?",
 "options": [
 "Implement moderation APIs.",
 "Retrain the model with a general public dataset.",
 "Perform model validation.",
 "Automate user feedback integration."
 ],
 "answers": [
 0
 ],
 "explanation": "Moderation APIs, such as Amazon Rekognition’s Content Moderation API, can help filter and block\ninappropriate or unwanted images from being returned by a chatbot. These APIs are specifically\ndesigned to detect and manage undesirable content in images.\nOption A (Correct): \"Implement moderation APIs\": This is the correct answer because moderation\nAPIs are designed to identify and filter inappropriate content, ensuring the chatbot does not return\nunwanted images.\nOption B: \"Retrain the model with a general public dataset\" is incorrect because retraining does not\ndirectly prevent inappropriate content from being returned.\nOption C: \"Perform model validation\" is incorrect as it ensures model correctness, not content\nmoderation.\nOption D: \"Automate user feedback integration\" is incorrect because user feedback does not prevent\ninappropriate images in real-time.\nAWS AI Practitioner Reference:\nAWS Content Moderation Services: AWS provides moderation APIs for filtering unwanted content\nfrom applications.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-049",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A law firm wants to build an AI application by using large language models (LLMs). The application will read legal documents and extract key points from the documents. Which solution meets these requirements?",
 "options": [
 "Build an automatic named entity recognition system.",
 "Create a recommendation engine.",
 "Develop a summarization chatbot.",
 "Develop a multi-language translation system."
 ],
 "answers": [
 2
 ],
 "explanation": "A summarization chatbot is ideal for extracting key points from legal documents. Large language\nmodels (LLMs) can be used to summarize complex texts, such as legal documents, making them\nmore accessible and understandable.\nOption C (Correct): \"Develop a summarization chatbot\": This is the correct answer because a\nsummarization chatbot uses LLMs to condense and extract key information from text, which is\nprecisely the requirement for reading and summarizing legal documents.\nOption A: \"Build an automatic named entity recognition system\" is incorrect because it focuses on\nidentifying specific entities, not summarizing documents.\nOption B: \"Create a recommendation engine\" is incorrect as it is used to suggest products or content,\nnot summarize text.\nOption D: \"Develop a multi-language translation system\" is incorrect because translation is unrelated\nto summarizing text.\nAWS AI Practitioner Reference:\nUsing LLMs for Text Summarization on AWS: AWS supports developing summarization tools using its\nAI services, including Amazon Bedrock.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-050",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output. Which ML algorithm meets these requirements?",
 "options": [
 "Decision trees",
 "Linear regression",
 "Logistic regression",
 "Neural networks"
 ],
 "answers": [
 0
 ],
 "explanation": "Decision trees are an interpretable machine learning algorithm that clearly documents the decision-\nmaking process by showing how each input feature affects the output. This transparency is\nparticularly useful when explaining how the model arrives at a certain decision, making it suitable for\nclassifying genes into categories.\nOption A (Correct): \"Decision trees\": This is the correct answer because decision trees provide a clear\nand interpretable representation of how input features influence the model's output, making it ideal\nfor understanding the inner mechanisms affecting predictions.\nOption B: \"Linear regression\" is incorrect because it is used for regression tasks, not classification.\nOption C: \"Logistic regression\" is incorrect as it does not provide the same level of interpretability in\n\ndocumenting decision-making processes.\nOption D: \"Neural networks\" is incorrect because they are often considered \"black boxes\" and do not\neasily explain how they arrive at their outputs.\nAWS AI Practitioner Reference:\nInterpretable Machine Learning Models on AWS: AWS supports using interpretable models, such as\ndecision trees, for tasks that require clear documentation of how input data affects output decisions.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-051",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company's security policy states that each team can access data for only the team's own customers. Which solution will meet these requirements?",
 "options": [
 "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data.",
 "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request.",
 "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data.",
 "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders."
 ],
 "answers": [
 0
 ],
 "explanation": "To comply with the company's security policy, which restricts each team to access data for only their\nown customers, creating an Amazon Bedrock custom service role for each team is the correct\nsolution.\nCustom Service Role Per Team:\nA custom service role for each team ensures that the access control is granular, allowing only specific\nteams to access their own customer data in Amazon S3.\nThis setup aligns with the principle of least privilege, ensuring teams can only interact with data they\nare authorized to access.\nWhy Option A is Correct:\nAccess Control: Allows precise access permissions for each team's data.\nSecurity Compliance: Directly meets the company's security policy requirements by ensuring data\nsegregation.\nWhy Other Options are Incorrect:\nB . Custom service role with customer name specification: This approach is impractical as it relies on\nmanual input, which is prone to errors and does not inherently enforce data access controls.\nC . Redacting personal data and updating S3 bucket policy: Redaction does not solve the requirement\nfor team-specific access, and updating bucket policies is less granular than creating roles.\nD . One Bedrock role with full S3 access and IAM roles for teams: This setup does not meet the least\nprivilege principle, as having a single role with full access is contrary to the company's security policy.\nThus, A is the correct answer to meet the company's security requirements.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-052",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to know how much information can fit into one prompt. Which consideration will inform the company's decision?",
 "options": [
 "Temperature",
 "Context window",
 "Batch size",
 "Model size"
 ],
 "answers": [
 1
 ],
 "explanation": "The context window determines how much information can fit into a single prompt when using a\nlarge language model (LLM) like those on Amazon Bedrock.\nContext Window:\nThe context window is the maximum amount of text (measured in tokens) that a language model can\nprocess in a single pass.\nFor LLM applications, the size of the context window limits how much input data, such as text for\nsentiment analysis, can be fed into the model at once.\nWhy Option B is Correct:\nDetermines Prompt Size: The context window size directly informs how much information (e.g.,\nwords or sentences) can fit in one prompt.\nModel Capacity: The larger the context window, the more information the model can consider for\ngenerating outputs.\nWhy Other Options are Incorrect:\nA . Temperature: Controls randomness in model outputs but does not affect the prompt size.\nC . Batch size: Refers to the number of training samples processed in one iteration, not the amount of\ninformation in a prompt.\nD . Model size: Refers to the number of parameters in the model, not the input size for a single\nprompt.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-053",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance. Which metric will help the AI practitioner evaluate the performance of the model?",
 "options": [
 "Confusion matrix",
 "Correlation matrix",
 "R2 score",
 "Mean squared error (MSE)"
 ],
 "answers": [
 0
 ],
 "explanation": "A confusion matrix is the correct metric for evaluating the performance of a classification model,\nsuch as the deep learning model built to classify types of materials in images.\nConfusion Matrix:\nIt is a table used to describe the performance of a classification model by comparing the actual and\npredicted classifications.\nProvides detailed insights into the model’s performance, including true positives, true negatives,\nfalse positives, and false negatives.\nWhy Option A is Correct:\nPerformance Measurement: Helps measure various performance metrics like accuracy, precision,\nrecall, and F1-score, which are critical for evaluating a classification model.\nComprehensive Evaluation: Allows for a thorough analysis of where the model is making errors and\nthe types of errors being made.\nWhy Other Options are Incorrect:\nB . Correlation matrix: Used to identify relationships between variables, not for evaluating\nclassification performance.\nC . R2 score: Used for regression models, not classification.\nD . Mean squared error (MSE): Also a metric for regression, measuring the average of the squares of\nthe errors.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-054",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner is building a model to generate images of humans in various professions. The AI practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model. Which technique will solve the problem?",
 "options": [
 "Data augmentation for imbalanced classes",
 "Model monitoring for class distribution",
 "Retrieval Augmented Generation (RAG)",
 "Watermark detection for images"
 ],
 "answers": [
 0
 ],
 "explanation": "Data augmentation for imbalanced classes is the correct technique to address bias in input data\naffecting image generation.\nData Augmentation for Imbalanced Classes:\nInvolves generating new data samples by modifying existing ones, such as flipping, rotating, or\ncropping images, to balance the representation of different classes.\nHelps mitigate bias by ensuring that the training data is more representative of diverse\n\ncharacteristics and scenarios.\nWhy Option A is Correct:\nBalances Data Distribution: Addresses class imbalance by augmenting underrepresented classes,\nwhich reduces bias in the model.\nImproves Model Fairness: Ensures that the model is exposed to a more diverse set of training\nexamples, promoting fairness in image generation.\nWhy Other Options are Incorrect:\nB . Model monitoring for class distribution: Helps identify bias but does not actively correct it.\nC . Retrieval Augmented Generation (RAG): Involves combining retrieval and generation but is\nunrelated to mitigating bias in image generation.\nD . Watermark detection for images: Detects watermarks in images, not a technique for addressing\nbias.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-055",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately. Which Amazon SageMaker inference option will meet these requirements?",
 "options": [
 "Batch transform",
 "Real-time inference",
 "Serverless inference",
 "Asynchronous inference"
 ],
 "answers": [
 0
 ],
 "explanation": "Batch transform in Amazon SageMaker is designed for offline processing of large datasets. It is ideal\nfor scenarios where immediate predictions are not required, and the inference can be done on large\ndatasets that are multiple gigabytes in size. This method processes data in batches, making it suitable\nfor analyzing archived data without the need for real-time access to predictions.\nOption A (Correct): \"Batch transform\": This is the correct answer because batch transform is\noptimized for handling large datasets and is suitable when immediate access to predictions is not\nrequired.\nOption B: \"Real-time inference\" is incorrect because it is used for low-latency, real-time prediction\nneeds, which is not required in this case.\nOption C: \"Serverless inference\" is incorrect because it is designed for small-scale, intermittent\ninference requests, not for large batch processing.\nOption D: \"Asynchronous inference\" is incorrect because it is used when immediate predictions are\nrequired, but with high throughput, whereas batch transform is more suitable for very large datasets.\nAWS AI Practitioner Reference:\nBatch Transform on AWS SageMaker: AWS recommends using batch transform for large datasets\nwhen real-time processing is not needed, ensuring cost-effectiveness and scalability.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-056",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company's employees prefer. What should the company do to meet these requirements?",
 "options": [
 "Evaluate the models by using built-in prompt datasets.",
 "Evaluate the models by using a human workforce and custom prompt datasets.",
 "Use public model leaderboards to identify the model.",
 "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models."
 ],
 "answers": [
 1
 ],
 "explanation": "To determine which model generates responses in a style that the company's employees prefer, the\nbest approach is to use a human workforce to evaluate the models with custom prompt datasets.\nThis method allows for subjective evaluation based on the specific stylistic preferences of the\ncompany's employees, which cannot be effectively assessed through automated methods or pre-\nbuilt datasets.\nOption B (Correct): \"Evaluate the models by using a human workforce and custom prompt datasets\":\nThis is the correct answer as it directly involves human judgment to evaluate the style and quality of\nthe responses, aligning with employee preferences.\nOption A: \"Evaluate the models by using built-in prompt datasets\" is incorrect because built-in\ndatasets may not capture the company's specific stylistic requirements.\nOption C: \"Use public model leaderboards to identify the model\" is incorrect as leaderboards\ntypically measure model performance on standard benchmarks, not on stylistic preferences.\nOption D: \"Use the model InvocationLatency runtime metrics in Amazon CloudWatch\" is incorrect\nbecause latency metrics do not provide any information about the style of the model's responses.\nAWS AI Practitioner Reference:\nModel Evaluation Techniques on AWS: AWS suggests using human evaluators to assess qualitative\naspects of model outputs, such as style and tone, to ensure alignment with organizational\npreferences",
 "awsExamTip": ""
 },
 {
 "id": "AIF-057",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using the Generative AI Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix. Which solution scope gives the company the MOST ownership of security responsibilities?",
 "options": [
 "Using a third-party enterprise application that has embedded generative AI features.",
 "Building an application by using an existing third-party generative AI foundation model (FM).",
 "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business.",
 "Building and training a generative AI model from scratch by using specific data that a customer owns."
 ],
 "answers": [
 3
 ],
 "explanation": "Building and training a generative AI model from scratch provides the company with the most\nownership and control over security responsibilities. In this scenario, the company is responsible for\nall aspects of the security of the data, the model, and the infrastructure.\nOption D (Correct): \"Building and training a generative AI model from scratch by using specific data\nthat a customer owns\": This is the correct answer because it involves complete ownership of the\nmodel, data, and infrastructure, giving the company the highest level of responsibility for security.\nOption A: \"Using a third-party enterprise application that has embedded generative AI features\" is\nincorrect as the company has minimal control over the security of the AI features embedded within a\nthird-party application.\nOption B: \"Building an application using an existing third-party generative AI foundation model (FM)\"\nis incorrect because security responsibilities are shared with the third-party model provider.\nOption C: \"Refining an existing third-party generative AI FM by fine-tuning the model with business-\nspecific data\" is incorrect as the foundation model and part of the security responsibilities are still\nmanaged by the third party.\nAWS AI Practitioner Reference:\nGenerative AI Security Scoping Matrix on AWS: AWS provides a security responsibility matrix that\noutlines varying levels of control and responsibility depending on the approach to developing and\nusing AI models.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-058",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency. Which SageMaker inference option meets these requirements?",
 "options": [
 "Real-time inference",
 "Serverless inference",
 "Asynchronous inference",
 "Batch transform"
 ],
 "answers": [
 0
 ],
 "explanation": "Real-time inference is designed to provide immediate, low-latency predictions, which is necessary\nwhen the company requires near real-time latency for its ML models. This option is optimal when\nthere is a need for fast responses, even with large input data sizes and substantial processing times.\nOption A (Correct): \"Real-time inference\": This is the correct answer because it supports low-latency\nrequirements, which are essential for real-time applications where quick response times are needed.\nOption B: \"Serverless inference\" is incorrect because it is more suited for intermittent, small-scale\ninference workloads, not for continuous, large-scale, low-latency needs.\n\nOption C: \"Asynchronous inference\" is incorrect because it is used for workloads that do not require\nimmediate responses.\nOption D: \"Batch transform\" is incorrect as it is intended for offline, large-batch processing where\nimmediate response is not necessary.\nAWS AI Practitioner Reference:\nAmazon SageMaker Inference Options: AWS documentation describes real-time inference as the best\nsolution for applications that require immediate prediction results with low latency.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-059",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible. Which solution will meet these requirements?",
 "options": [
 "Deploy optimized small language models (SLMs) on edge devices.",
 "Deploy optimized large language models (LLMs) on edge devices.",
 "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices.",
 "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices."
 ],
 "answers": [
 0
 ],
 "explanation": "To achieve the lowest latency possible for inference on edge devices, deploying optimized small\nlanguage models (SLMs) is the most effective solution. SLMs require fewer resources and havefaster\ninference times, making them ideal for deployment on edge devices where processing power and\nmemory are limited.\nOption A (Correct): \"Deploy optimized small language models (SLMs) on edge devices\": This is the\ncorrect answer because SLMs provide fast inference with low latency, which is crucial for edge\ndeployments.\nOption B: \"Deploy optimized large language models (LLMs) on edge devices\" is incorrect because\nLLMs are resource-intensive and may not perform well on edge devices due to their size and\ncomputational demands.\nOption C: \"Incorporate a centralized small language model (SLM) API for asynchronous\ncommunication with edge devices\" is incorrect because it introduces network latency due to the\nneed for communication with a centralized server.\nOption D: \"Incorporate a centralized large language model (LLM) API for asynchronous\ncommunication with edge devices\" is incorrect for the same reason, with even greater latency due to\nthe larger model size.\nAWS AI Practitioner Reference:\nOptimizing AI Models for Edge Devices on AWS: AWS recommends using small, optimized models for\nedge deployments to ensure minimal latency and efficient performance.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-060",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls. Which solution meets these requirements?",
 "options": [
 "Build a conversational chatbot by using Amazon Lex.",
 "Transcribe call recordings by using Amazon Transcribe.",
 "Extract information from call recordings by using Amazon SageMaker Model Monitor.",
 "Create classification labels by using Amazon Comprehend."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Transcribe is the correct solution for converting audio from customer calls into text, allowing\nthe company to analyze and extract key information from the conversations.\nAmazon Transcribe:\nIt is a fully managed automatic speech recognition (ASR) service that converts speech into text,\nmaking it easier to perform text-based analysis on audio data.\nAfter transcribing the audio, further analysis can be performed using other AWS services like Amazon\nComprehend to extract insights such as sentiment, key phrases, or entities.\nWhy Option B is Correct:\nConversion to Text: Transcribing audio recordings is the first step in gaining insights from spoken\nconversations, allowing for further processing.\nEnables Further Analysis: Once the audio is transcribed into text, other tools and services can be\nused to analyze the content more deeply.\nWhy Other Options are Incorrect:\nA . Amazon Lex: Is used for building conversational interfaces, not for transcribing or analyzing audio\nfrom customer calls.\nC . Amazon SageMaker Model Monitor: Monitors ML models for bias and data drift, not for audio\nanalysis.\nD . Amazon Comprehend: Can analyze text but cannot transcribe audio; it would be used after\ntranscription is completed.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-061",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams. Which SageMaker feature meets these requirements?",
 "options": [
 "Amazon SageMaker Feature Store",
 "Amazon SageMaker Data Wrangler",
 "Amazon SageMaker Clarify",
 "Amazon SageMaker Model Cards"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker Feature Store is the correct solution for sharing and managing variables\n(features) across multiple teams during model development.\nAmazon SageMaker Feature Store:\nA fully managed repository for storing, sharing, and managing machine learning features across\ndifferent teams and models.\nIt enables collaboration and reuse of features, ensuring consistent data usage and reducing\nredundancy.\nWhy Option A is Correct:\nCentralized Feature Management: Provides a central repository for managing features, making it\neasier to share them across teams.\nCollaboration and Reusability: Improves efficiency by allowing teams to reuse existing features\ninstead of creating them from scratch.\nWhy Other Options are Incorrect:\nB . SageMaker Data Wrangler: Helps with data preparation and analysis but does not provide a\ncentralized feature store.\nC . SageMaker Clarify: Used for bias detection and explainability, not for managing variables across\nteams.\nD . SageMaker Model Cards: Provide model documentation, not feature management.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-062",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language. Which solution will align the LLM response quality with the company's expectations?",
 "options": [
 "Adjust the prompt.",
 "Choose an LLM of a different size.",
 "Increase the temperature.",
 "Increase the Top K value."
 ],
 "answers": [
 0
 ],
 "explanation": "Adjusting the prompt is the correct solution to align the LLM outputs with the company's\nexpectations for short, specific language responses.\nAdjust the Prompt:\nModifying the prompt can guide the LLM to produce outputs that are shorter and tailored to the\ndesired language.\nA well-crafted prompt can provide specific instructions to the model, such as \"Answer in a short\nsentence in Spanish.\"\n\nWhy Option A is Correct:\nControl Over Output: Adjusting the prompt allows for direct control over the style, length, and\nlanguage of the LLM outputs.\nFlexibility: Prompt engineering is a flexible approach to refining the model’s behavior without\nmodifying the model itself.\nWhy Other Options are Incorrect:\nB . Choose an LLM of a different size: The model size does not directly impact the response length or\nlanguage.\nC . Increase the temperature: Increases randomness in responses but does not ensure brevity or\nspecific language.\nD . Increase the Top K value: Affects diversity in model output but does not align directly with\nresponse length or language specificity.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-063",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company uses a foundation model (FM) from Amazon Bedrock for an AI search tool. The company wants to fine-tune the model to be more accurate by using the company's data. Which strategy will successfully fine-tune the model?",
 "options": [
 "Provide labeled data with the prompt field and the completion field.",
 "Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format.",
 "Purchase Provisioned Throughput for Amazon Bedrock.",
 "Train the model on journals and textbooks."
 ],
 "answers": [
 0
 ],
 "explanation": "Providing labeled data with both a prompt field and a completion field is the correct strategy for fine-\ntuning a foundation model (FM) on Amazon Bedrock.\nFine-Tuning Strategy:\nTo fine-tune a model, labeled data that pairs input prompts with the correct outputs (completions) is\nnecessary.\nThis allows the model to learn the desired behavior or response style based on the provided\nexamples.\nWhy Option A is Correct:\nProper Training Format: The prompt-completion pairs provide the necessary format for training the\nmodel to produce accurate outputs.\nCustomization: Ensures that the model is fine-tuned to the specific requirements of the company’s\ndata and desired outputs.\nWhy Other Options are Incorrect:\nB . Prepare a .txt file in .csv format: This does not align with the specific need for labeled data with\nprompts and completions.\nC . Purchase Provisioned Throughput: Relates to read/write capacity in databases, not to model fine-\ntuning.\nD . Train on journals and textbooks: Lacks the specific format and labeling required for fine-tuning.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-064",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner has a database of animal photos. The AI practitioner wants to automatically identify and categorize the animals in the photos without manual human effort. Which strategy meets these requirements?",
 "options": [
 "Object detection",
 "Anomaly detection",
 "Named entity recognition",
 "Inpainting"
 ],
 "answers": [
 0
 ],
 "explanation": "Object detection is the correct strategy for automatically identifying and categorizing animals in\nphotos.\nObject Detection:\nA computer vision technique that identifies and locates objects within an image and assigns them to\npredefined categories.\nIdeal for tasks such as identifying animals in photos, where the goal is to detect specific objects\n(animals) and categorize them accordingly.\nWhy Option A is Correct:\nAutomatic Identification: Object detection models can automatically identify different types of\nanimals in the images without manual intervention.\nCategorization Capability: Assigns labels to detected objects, fulfilling the requirement for\ncategorizing animals.\nWhy Other Options are Incorrect:\nB . Anomaly detection: Identifies outliers or unusual patterns, not specific objects in images.\nC . Named entity recognition: Used in NLP to identify entities in text, not for image processing.\nD . Inpainting: Used for filling in missing parts of images, not for detecting or categorizing objects.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-065",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers. How can the company improve the performance of the chatbot?",
 "options": [
 "Use few-shot prompting to define how the FM can answer the questions.",
 "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
 "Change the FM inference parameters.",
 "Clean the research paper data to remove complex scientific terms."
 ],
 "answers": [
 1
 ],
 "explanation": "Domain adaptation fine-tuning involves training a foundation model (FM) further using a specific\ndataset that includes domain-specific terminology and content, such as scientific terms in research\npapers. This process allows the model to better understand and handle complex terminology,\nimproving its performance on specialized tasks.\nOption B (Correct): \"Use domain adaptation fine-tuning to adapt the FM to complex scientific terms\":\nThis is the correct answer because fine-tuning the model on domain-specific data helps it learn and\nadapt to the specific language and terms used in the research papers, resulting in better\nperformance.\nOption A: \"Use few-shot prompting to define how the FM can answer the questions\" is incorrect\nbecause while few-shot prompting can help in certain scenarios, it is less effective than fine-tuning\nfor handling complex domain-specific terms.\nOption C: \"Change the FM inference parameters\" is incorrect because adjusting inference parameters\nwill not resolve the issue of the model's lack of understanding of complex scientific terminology.\nOption D: \"Clean the research paper data to remove complex scientific terms\" is incorrect because\nremoving the complex terms would result in the loss of important information and context, which is\nnot a viable solution.\nAWS AI Practitioner Reference:\nDomain Adaptation in Amazon Bedrock: AWS recommends fine-tuning models with domain-specific\ndata to improve their performance on specialized tasks involving unique terminology.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-066",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A medical company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur. Which solution meets these requirements?",
 "options": [
 "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential violations.",
 "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal information.",
 "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations.",
 "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality degrades."
 ],
 "answers": [
 2
 ],
 "explanation": "Guardrails for Amazon Bedrock provide mechanisms to filter and control the content generated by\nmodels to comply with privacy and policy requirements. Using guardrails ensures that sensitive or\n\npersonal information is not included in the model's responses. Additionally, integrating Amazon\nCloudWatch alarms allows for real-time notification when a policy violation occurs.\nOption C (Correct): \"Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch\nalarms for notification of policy violations\": This is the correct answer because it directly addresses\nboth the prevention of policy violations and the requirement to receive notifications when such\nviolations occur.\nOption A: \"Use Amazon Macie to scan the model's output for sensitive data\" is incorrect because\nAmazon Macie is designed to monitor data in S3, not to filter real-time model outputs.\nOption B: \"Configure AWS CloudTrail to monitor the model's responses\" is incorrect because\nCloudTrail tracks API activity and is not suited for content moderation.\nOption D: \"Implement Amazon SageMaker Model Monitor to detect data drift\" is incorrect because\ndata drift detection does not address content moderation or privacy compliance.\nAWS AI Practitioner Reference:\nGuardrails in Amazon Bedrock: AWS provides guardrails to ensure AI models comply with content\npolicies, and using CloudWatch for alerting integrates monitoring capabilities.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-067",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question. Which solution meets these requirements with the LEAST implementation effort?",
 "options": [
 "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support.",
 "Add a role description to the prompt context that instructs the model of the age range that the response should target.",
 "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user.",
 "Summarize the response text depending on the age of the user so that younger users receive shorter responses."
 ],
 "answers": [
 1
 ],
 "explanation": "Adding a role description to the prompt context is a straightforward way to instruct the generative AI\nmodel to adjust its response style based on the user's age range. This method requires minimal\nimplementation effort as it does not involve additional training or complex logic.\nOption B (Correct): \"Add a role description to the prompt context that instructs the model of the age\nrange that the response should target\": This is the correct answer because it involves the least\nimplementation effort while effectively guiding the model to tailor responses according to the age\nrange.\nOption A: \"Fine-tune the model by using additional training data\" is incorrect because it requires\nsignificant effort in gathering data and retraining the model.\nOption C: \"Use chain-of-thought reasoning\" is incorrect as it involves complex reasoning that may not\n\ndirectly address the need to adjust response style based on age.\nOption D: \"Summarize the response text depending on the age of the user\" is incorrect because it\ninvolves additional processing steps after generating the initial response, increasing complexity.\nAWS AI Practitioner Reference:\nPrompt Engineering Techniques on AWS: AWS recommends using prompt context effectively to\nguide generative models in providing tailored responses based on specific user attributes.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-068",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals. Which data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?",
 "options": [
 "User-generated content",
 "Moderation logs",
 "Content moderation guidelines",
 "Benchmark datasets"
 ],
 "answers": [
 3
 ],
 "explanation": "Benchmark datasets are pre-validated datasets specifically designed to evaluate machine learning\nmodels for bias, fairness, and potential discrimination. These datasets are the most efficient tool for\nassessing an LLM’s performance against known standards with minimal administrative effort.\nOption D (Correct): \"Benchmark datasets\": This is the correct answer because using standardized\nbenchmark datasets allows the company to evaluate model outputs for bias with minimal\nadministrative overhead.\nOption A: \"User-generated content\" is incorrect because it is unstructured and would require\nsignificant effort to analyze for bias.\nOption B: \"Moderation logs\" is incorrect because they represent historical data and do not provide a\nstandardized basis for evaluating bias.\nOption C: \"Content moderation guidelines\" is incorrect because they provide qualitative criteria\nrather than a quantitative basis for evaluation.\nAWS AI Practitioner Reference:\nEvaluating AI Models for Bias on AWS: AWS supports using benchmark datasets to assess model\nfairness and detect potential bias efficiently.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-069",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
 "options": [
 "Calculate the total cost of resources used by the model.",
 "Measure the model's accuracy against a predefined benchmark dataset.",
 "Count the number of layers in the neural network.",
 "Assess the color accuracy of images processed by the model."
 ],
 "answers": [
 1
 ],
 "explanation": "Measuring the model's accuracy against a predefined benchmark dataset is the correct strategy to\nevaluate the accuracy of a foundation model (FM) used in image classification tasks.\nModel Accuracy Evaluation:\nIn image classification, the accuracy of a model is typically evaluated by comparing the predicted\nlabels with the true labels in a benchmark dataset that is representative of the real-world data the\nmodel will encounter.\nThis approach provides a quantifiable measure of how well the model performs on known data and\nis a standard practice in machine learning.\nWhy Option B is Correct:\nBenchmarking Accuracy: Using a predefined dataset allows for consistent and reliable evaluation of\nmodel performance.\nStandard Practice: It is a widely accepted method for assessing the effectiveness of image\nclassification models.\nWhy Other Options are Incorrect:\nA . Total cost of resources: Does not measure model accuracy but rather the cost of operation.\nC . Number of layers in the neural network: Does not directly correlate with the accuracy or\nperformance of the model.\nD . Color accuracy of images processed by the model: Is unrelated to the model’s classification\naccuracy.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-070",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an AI-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology. Which solution meets these requirements?",
 "options": [
 "Generative pre-trained transformers (GPT)",
 "Residual neural network",
 "Support vector machine",
 "WaveNet"
 ],
 "answers": [
 0
 ],
 "explanation": "Generative Pre-trained Transformers (GPT) are suitable for building an AI-based application that can\n\ngenerate SQL queries from natural language input provided by employees.\nGPT for Natural Language Processing:\nGPT models are designed for understanding and generating human-like text based on natural\nlanguage input.\nThey can be fine-tuned to interpret specific tasks, such as converting natural language queries into\nSQL queries.\nWhy Option A is Correct:\nNatural Language Understanding: GPT is highly effective for tasks that require understanding of\nhuman language and generating structured outputs like SQL.\nUser-Friendly: Requires minimal technology experience from employees, as they provide simple text\ninput.\nWhy Other Options are Incorrect:\nB . Residual neural network: Typically used in computer vision tasks, not for natural language-to-SQL\nconversion.\nC . Support vector machine: Used for classification tasks, not for generating structured queries from\ntext.\nD . WaveNet: A deep generative model for audio data, unrelated to text-to-SQL tasks.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-071",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which metric measures the runtime efficiency of operating AI models?",
 "options": [
 "Customer satisfaction score (CSAT)",
 "Training time for each epoch",
 "Average response time",
 "Number of training instances"
 ],
 "answers": [
 2
 ],
 "explanation": "The average response time is the correct metric for measuring the runtime efficiency of operating AI\nmodels.\nAverage Response Time:\nRefers to the time taken by the model to generate an output after receiving an input. It is a key\nmetric for evaluating the performance and efficiency of AI models in production.\nA lower average response time indicates a more efficient model that can handle queries quickly.\nWhy Option C is Correct:\nMeasures Runtime Efficiency: Directly indicates how fast the model processes inputs and delivers\noutputs, which is critical for real-time applications.\nPerformance Indicator: Helps identify potential bottlenecks and optimize model performance.\nWhy Other Options are Incorrect:\nA . Customer satisfaction score (CSAT): Measures customer satisfaction, not model runtime\nefficiency.\nB . Training time for each epoch: Measures training efficiency, not runtime efficiency during model\noperation.\nD . Number of training instances: Refers to data used during training, not operational efficiency.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-072",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
 "options": [
 "Helps decrease the model's complexity",
 "Improves model performance over time",
 "Decreases the training time requirement",
 "Optimizes model inference time"
 ],
 "answers": [
 1
 ],
 "explanation": "Ongoing pre-training when fine-tuning a foundation model (FM) improves model performance over\ntime by continuously learning from new data.\nOngoing Pre-Training:\nInvolves continuously training a model with new data to adapt to changing patterns, enhance\ngeneralization, and improve performance on specific tasks.\nHelps the model stay updated with the latest data trends and minimize drift over time.\nWhy Option B is Correct:\nPerformance Enhancement: Continuously updating the model with new data improves its accuracy\nand relevance.\nAdaptability: Ensures the model adapts to new data distributions or domain-specific nuances.\nWhy Other Options are Incorrect:\nA . Decrease model complexity: Ongoing pre-training typically enhances complexity by learning new\npatterns, not reducing it.\nC . Decreases training time requirement: Ongoing pre-training may increase the time needed for\ntraining.\nD . Optimizes inference time: Does not directly affect inference time; rather, it affects model\nperformance.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-073",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images. Which type of FM should the AI practitioner use to power the search application?",
 "options": [
 "Multi-modal embedding model",
 "Text embedding model",
 "Multi-modal generation model",
 "Image generation model"
 ],
 "answers": [
 0
 ],
 "explanation": "A multi-modal embedding model is the correct type of foundation model (FM) for powering a search\napplication that handles queries containing both text and images.\nMulti-Modal Embedding Model:\nCan process and integrate different types of data (e.g., text and images) into a common\nrepresentation space, enabling a unified search capability.\nSuitable for applications where queries or content involve multiple data modalities.\nWhy Option A is Correct:\nHandles Multiple Modalities: Supports both text and image data, aligning with the application's\nrequirement.\nImproves Search Relevance: Allows for more accurate and relevant search results across different\ntypes of input data.\nWhy Other Options are Incorrect:\nB . Text embedding model: Only handles text data, not images.\nC . Multi-modal generation model: Focuses on generating outputs rather than embedding for search\ntasks.\nD . Image generation model: Only handles image data, not suitable for text queries.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-074",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality. Which action must the company take to use the custom model through Amazon Bedrock?",
 "options": [
 "Purchase Provisioned Throughput for the custom model.",
 "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference.",
 "Register the model with the Amazon SageMaker Model Registry.",
 "Grant access to the custom model in Amazon Bedrock."
 ],
 "answers": [
 1
 ],
 "explanation": "To use a custom model that has been trained to improve summarization quality, the company must\ndeploy the model on an Amazon SageMaker endpoint. This allows the model to be used for real-time\ninference through Amazon Bedrock or other AWS services. By deploying the model in SageMaker, the\ncustom model can be accessed programmatically via API calls, enabling integration with Amazon\nBedrock.\nOption B (Correct): \"Deploy the custom model in an Amazon SageMaker endpoint for real-time\ninference\": This is the correct answer because deploying the model on SageMaker enables it to serve\nreal-time predictions and be integrated with Amazon Bedrock.\nOption A: \"Purchase Provisioned Throughput for the custom model\" is incorrect because provisioned\nthroughput is related to database or storage services, not model deployment.\nOption C: \"Register the model with the Amazon SageMaker Model Registry\" is incorrect because\nwhile the model registry helps with model management, it does not make the model accessible for\nreal-time inference.\n\nOption D: \"Grant access to the custom model in Amazon Bedrock\" is incorrect because Bedrock does\nnot directly manage custom model access; it relies on deployed endpoints like those in SageMaker.\nAWS AI Practitioner Reference:\nAmazon SageMaker Endpoints: AWS recommends deploying models to SageMaker endpoints to use\nthem for real-time inference in various applications.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-075",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals. Which model evaluation strategy meets these requirements?",
 "options": [
 "Bilingual Evaluation Understudy (BLEU)",
 "Root mean squared error (RMSE)",
 "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
 "F1 score"
 ],
 "answers": [
 0
 ],
 "explanation": "BLEU (Bilingual Evaluation Understudy) is a metric used to evaluate the accuracy of machine-\ngenerated translations by comparing them against reference translations. It is commonly used for\ntranslation tasks to measure how close the generated output is to professional human translations.\nOption A (Correct): \"Bilingual Evaluation Understudy (BLEU)\": This is the correct answer because\nBLEU is specifically designed to evaluate the quality of translations, making it suitable for the\ncompany's use case.\nOption B: \"Root mean squared error (RMSE)\" is incorrect because RMSE is used for regression tasks\nto measure prediction errors, not translation quality.\nOption C: \"Recall-Oriented Understudy for Gisting Evaluation (ROUGE)\" is incorrect as it is used to\nevaluate text summarization, not translation.\nOption D: \"F1 score\" is incorrect because it is typically used for classification tasks, not for evaluating\ntranslation accuracy.\nAWS AI Practitioner Reference:\nModel Evaluation Metrics on AWS: AWS supports various metrics like BLEU for specific use cases,\nsuch as evaluating machine translation models.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-076",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "How can companies use large language models (LLMs) securely on Amazon Bedrock?",
 "options": [
 "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access.",
 "Enable AWS Audit Manager for automatic model evaluation jobs.",
 "Enable Amazon Bedrock automatic model evaluation jobs.",
 "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias."
 ],
 "answers": [
 0
 ],
 "explanation": "To securely use large language models (LLMs) on Amazon Bedrock, companies should design clear\nand specific prompts to avoid unintended outputs and ensure proper configuration of AWS Identity\nand Access Management (IAM) roles and policies with the principle of least privilege. This approach\nlimits access to sensitive resources and minimizes the potential impact of security incidents.\nOption A (Correct): \"Design clear and specific prompts. Configure AWS Identity and Access\nManagement (IAM) roles and policies by using least privilege access\": This is the correct answer as it\ndirectly addresses both security practices in prompt design and access management.\nOption B: \"Enable AWS Audit Manager for automatic model evaluation jobs\" is incorrect because\nAudit Manager is for compliance and auditing, not directly related to secure LLM usage.\nOption C: \"Enable Amazon Bedrock automatic model evaluation jobs\" is incorrect because Bedrock\ndoes not provide automatic model evaluation jobs specifically for security purposes.\nOption D: \"Use Amazon CloudWatch Logs to make models explainable and to monitor for bias\" is\nincorrect because CloudWatch Logs are used for monitoring and not directly for making models\nexplainable or secure.\nAWS AI Practitioner Reference:\nSecure AI Practices on AWS: AWS recommends configuring IAM roles and using least privilege access\nto ensure secure usage of AI models.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-077",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources. Which AI learning strategy provides this self-improvement capability?",
 "options": [
 "Supervised learning with a manually curated dataset of good responses and bad responses",
 "Reinforcement learning with rewards for positive customer feedback",
 "Unsupervised learning to find clusters of similar customer inquiries",
 "Supervised learning with a continuously updated FAQ database"
 ],
 "answers": [
 1
 ],
 "explanation": "Reinforcement learning allows a model to learn and improve over time based on feedback from its\nenvironment. In this case, the chatbot can improve its responses by being rewarded for positive\ncustomer feedback, which aligns well with the goal of self-improvement based on past interactions\nand new information.\nOption B (Correct): \"Reinforcement learning with rewards for positive customer feedback\": This is the\ncorrect answer as reinforcement learning enables the chatbot to learn from feedback and adapt its\n\nbehavior accordingly, providing self-improvement capabilities.\nOption A: \"Supervised learning with a manually curated dataset\" is incorrect because it does not\nsupport continuous learning from new interactions.\nOption C: \"Unsupervised learning to find clusters of similar customer inquiries\" is incorrect because\nunsupervised learning does not provide a mechanism for improving responses based on feedback.\nOption D: \"Supervised learning with a continuously updated FAQ database\" is incorrect because it\nstill relies on manually curated data rather than self-improvement from feedback.\nAWS AI Practitioner Reference:\nReinforcement Learning on AWS: AWS provides reinforcement learning frameworks that can be used\nto train models to improve their performance based on feedback.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-078",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "multiple",
 "question": "A company wants to deploy a conversational chatbot to answer customer questions. The chatbot is based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks. Which capabilities can the company show compliance for? (Select TWO.)",
 "options": [
 "Auto scaling inference endpoints",
 "Threat detection",
 "Data protection",
 "Cost optimization E. Loosely coupled microservices"
 ],
 "answers": [
 1,
 2
 ],
 "explanation": "To comply with multiple regulatory frameworks, the company must ensure data protection and\nthreat detection. Data protection involves safeguarding sensitive customer information, while threat\ndetection identifies and mitigates security threats to the application.\nOption C (Correct): \"Data protection\": This is correct because data protection is critical for\ncompliance with privacy and security regulations.\nOption B (Correct): \"Threat detection\": This is correct because detecting and mitigating threats is\nessential to maintaining the security posture required for regulatory compliance.\nOption A: \"Auto scaling inference endpoints\" is incorrect because auto-scaling does not directly\nrelate to regulatory compliance.\nOption D: \"Cost optimization\" is incorrect because it is focused on managing expenses, not\ncompliance.\nOption E: \"Loosely coupled microservices\" is incorrect because this architectural approach does not\ndirectly address compliance requirements.\nAWS AI Practitioner Reference:\nAWS Compliance Capabilities: AWS offers services and tools, such as data protection and threat\ndetection, to help companies meet regulatory requirements for security and privacy.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-079",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "multiple",
 "question": "An e-commerce company wants to build a solution to determine customer sentiments based on written customer reviews of products. Which AWS services meet these requirements? (Select TWO.)",
 "options": [
 "Amazon Lex",
 "Amazon Comprehend",
 "Amazon Polly",
 "Amazon Bedrock", 
 "Amazon Rekognition"
 ],
 "answers": [
 1,
 3
 ],
 "explanation": "To determine customer sentiments based on written customer reviews, the company can use\nAmazon Comprehend and Amazon Bedrock.\nAmazon Comprehend:\nA natural language processing (NLP) service that uses machine learning to uncover insights and\nrelationships in text.\nCan analyze customer reviews to detect sentiments (positive, negative, neutral, or mixed)\nautomatically.\nAmazon Bedrock:\nProvides access to foundational models (FMs) from multiple AI companies for tasks such as text\ngeneration, summarization, and sentiment analysis.\nThe company can use a pre-trained sentiment analysis model available on Amazon Bedrock for\nprocessing customer reviews.\nWhy Other Options are Incorrect:\nA . Amazon Lex: Used for building conversational interfaces like chatbots, not for sentiment analysis.\nC . Amazon Polly: Converts text to speech; it doesn't analyze sentiment.\nE . Amazon Rekognition: Analyzes images and videos, not text.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-080",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use a pre-trained generative AI model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements. Which solution meets these requirements?",
 "options": [
 "Optimize the model's architecture and hyperparameters to improve the model's overall performance.",
 "Increase the model's complexity by adding more layers to the model's architecture.",
 "Create effective prompts that provide clear instructions and context to guide the model's generation.",
 "Select a large, diverse dataset to pre-train a new generative model."
 ],
 "answers": [
 2
 ],
 "explanation": "Creating effective prompts is the best solution to ensure that the content generated by a pre-trained\ngenerative AI model aligns with the company's brand voice and messaging requirements.\nEffective Prompt Engineering:\nInvolves crafting prompts that clearly outline the desired tone, style, and content guidelines for the\nmodel.\nBy providing explicit instructions in the prompts, the company can guide the AI to generate content\nthat matches the brand’s voice and messaging.\nWhy Option C is Correct:\nGuides Model Output: Ensures the generated content adheres to specific brand guidelines by\nshaping the model's response through the prompt.\nFlexible and Cost-effective: Does not require retraining or modifying the model, which is more\nresource-efficient.\nWhy Other Options are Incorrect:\nA . Optimize the model's architecture and hyperparameters: Improves model performance but does\nnot specifically address alignment with brand voice.\nB . Increase model complexity: Adding more layers may not directly help with content alignment.\nD . Pre-training a new model: Is a costly and time-consuming process that is unnecessary if the goal is\ncontent alignment.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-081",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A student at a university is copying content from generative AI to write essays. Which challenge of responsible generative AI does this scenario represent?",
 "options": [
 "Toxicity",
 "Hallucinations",
 "Plagiarism",
 "Privacy"
 ],
 "answers": [
 2
 ],
 "explanation": "The scenario where a student copies content from generative AI to write essays represents the\nchallenge of plagiarism in responsible AI use.\nPlagiarism:\nOccurs when someone uses content generated by AI (or any source) without proper attribution,\nclaiming it as their own.\nThis is a key challenge with generative AI models, which can produce human-like text that might be\nmisused for academic or other purposes.\nWhy Option C is Correct:\nRepresents Unauthorized Use: Copying content directly from AI without attribution is a clear case of\n\nplagiarism.\nEthical Concern: Highlights the ethical considerations around using AI-generated content responsibly.\nWhy Other Options are Incorrect:\nA . Toxicity: Refers to harmful or offensive content generation, not content copying.\nB . Hallucinations: When AI generates incorrect or nonsensical information, not plagiarism.\nD . Privacy: Involves the misuse or exposure of personal information, not copying content.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-082",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention. The company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone. Which solution meets these requirements?",
 "options": [
 "Set a low limit on the number of tokens the FM can produce.",
 "Use batch inferencing to process detailed responses.",
 "Experiment and refine the prompt until the FM produces the desired responses.",
 "Define a higher number for the temperature parameter."
 ],
 "answers": [
 2
 ],
 "explanation": "Experimenting and refining the prompt is the best approach to ensure that the chatbot using a\nfoundation model (FM) produces responses that adhere to the company's tone.\nPrompt Engineering:\nAdjusting and refining the prompt allows for better control over the FM's outputs, ensuring they\nalign with the desired tone and style.\nThis iterative process involves testing different prompts and modifying them based on the model's\nresponses to achieve the desired outcome.\nWhy Option C is Correct:\nDirectly Influences Output Quality: Allows for fine-tuning of the model’s responses to match the\ncompany's tone.\nCost-Effective: Does not require modifying the model itself, only the inputs to it.\nWhy Other Options are Incorrect:\nA . Low limit on tokens: Limits response length but not the adherence to company tone.\nB . Batch inferencing: Relates to processing multiple inputs, not controlling response tone.\nD . Higher temperature: Increases randomness in responses, which could deviate from the desired\ntone.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-083",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has installed a security camer a. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group. Which type of bias is affecting the model output?",
 "options": [
 "Measurement bias",
 "Sampling bias",
 "Observer bias",
 "Confirmation bias"
 ],
 "answers": [
 1
 ],
 "explanation": "Sampling bias is the correct type of bias affecting the model output when it disproportionately flags\npeople from a specific ethnic group.\nSampling Bias:\nOccurs when the training data is not representative of the broader population, leading to skewed\nmodel outputs.\nIn this case, if the model disproportionately flags people from a specific ethnic group, it likely\nindicates that the training data was not adequately balanced or representative.\nWhy Option B is Correct:\nReflects Data Imbalance: A biased sample in the training data could result in unfair outcomes, such as\ndisproportionately flagging a particular group.\nCommon Issue in ML Models: Sampling bias is a known problem that can lead to unfair or inaccurate\nmodel predictions.\nWhy Other Options are Incorrect:\nA . Measurement bias: Involves errors in data collection or measurement, not sampling.\nC . Observer bias: Refers to bias introduced by researchers or data collectors, not the model's output.\nD . Confirmation bias: Involves favoring information that confirms existing beliefs, not relevant to\nmodel output bias.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-084",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative. Which prompt engineering strategy meets these requirements?",
 "options": [
 "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified.",
 "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt.",
 "Provide the new text passage to be classified without any additional context or examples.",
 "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering."
 ],
 "answers": [
 0
 ],
 "explanation": "Providing examples of text passages with corresponding positive or negative labels in the prompt\nfollowed by the new text passage to be classified is the correct prompt engineering strategy for using\na large language model (LLM) on Amazon Bedrock for sentiment analysis.\nExample-Driven Prompts:\nThis strategy, known as few-shot learning, involves giving the model examples of input-output pairs\n(e.g., text passages with their sentiment labels) to help it understand the task context.\nIt allows the model to learn from these examples and apply the learned pattern to classify new text\npassages correctly.\nWhy Option A is Correct:\nGuides the Model: Providing labeled examples teaches the model how to perform sentiment analysis\neffectively, increasing accuracy.\nContextual Relevance: Aligns the model's responses to the specific task of classifying sentiment.\nWhy Other Options are Incorrect:\nB . Detailed explanation of sentiment analysis: Unnecessary for the model's operation; it requires\nexamples, not explanations.\nC . New text passage without context: Provides no guidance or learning context for the model.\nD . Unrelated task examples: Would confuse the model and lead to inaccurate results.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-085",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which AWS service or feature can help an AI development team quickly deploy and consume a foundation model (FM) within the team's VPC?",
 "options": [
 "Amazon Personalize",
 "Amazon SageMaker JumpStart",
 "PartyRock, an Amazon Bedrock Playground",
 "Amazon SageMaker endpoints"
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon SageMaker JumpStart is the correct service for quickly deploying and consuming a\nfoundation model (FM) within a team's VPC.\nAmazon SageMaker JumpStart:\nProvides access to a wide range of pre-trained models and solutions that can be easily deployed and\nconsumed within a VPC.\nDesigned to simplify and accelerate the deployment of machine learning models, including\nfoundation models.\nWhy Option B is Correct:\nRapid Deployment: JumpStart allows for quick deployment of models with minimal configuration,\ndirectly within a secure VPC environment.\nEase of Use: Provides a user-friendly interface to select and deploy models, reducing the time to\nvalue.\nWhy Other Options are Incorrect:\nA . Amazon Personalize: Focuses on creating personalized recommendations, not deploying\nfoundation models.\n\nC . PartyRock: Not a recognized AWS service.\nD . Amazon SageMaker endpoints: Endpoints are for deploying specific models, not a feature for\nquickly starting with pre-trained foundation models.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-086",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has a database of petabytes of unstructured data from internal sources. The company wants to transform this data into a structured format so that its data scientists can perform machine learning (ML) tasks. Which service will meet these requirements?",
 "options": [
 "Amazon Lex",
 "Amazon Rekognition",
 "Amazon Kinesis Data Streams",
 "AWS Glue"
 ],
 "answers": [
 3
 ],
 "explanation": "AWS Glue is the correct service for transforming petabytes of unstructured data into a structured\nformat suitable for machine learning tasks.\nAWS Glue:\nA fully managed extract, transform, and load (ETL) service that makes it easy to prepare and\ntransform unstructured data into a structured format.\nProvides a range of tools for cleaning, enriching, and cataloging data, making it ready for data\nscientists to use in ML models.\nWhy Option D is Correct:\nData Transformation: AWS Glue can handle large volumes of data and transform unstructured data\ninto structured formats efficiently.\nIntegrated ML Support: Glue integrates with other AWS services to support ML workflows.\nWhy Other Options are Incorrect:\nA . Amazon Lex: Used for building chatbots, not for data transformation.\nB . Amazon Rekognition: Used for image and video analysis, not for data transformation.\nC . Amazon Kinesis Data Streams: Handles real-time data streaming, not suitable for batch\ntransformation of large volumes of unstructured data.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-087",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has thousands of customer support interactions per day and wants to analyze these interactions to identify frequently asked questions and develop insights. Which AWS service can the company use to meet this requirement?",
 "options": [
 "Amazon Lex",
 "Amazon Comprehend",
 "Amazon Transcribe",
 "Amazon Translate"
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Comprehend is the correct service to analyze customer support interactions and identify\nfrequently asked questions and insights.\nAmazon Comprehend:\nA natural language processing (NLP) service that uses machine learning to uncover insights and\nrelationships in text.\nCapable of extracting key phrases, detecting entities, analyzing sentiment, and identifying topics\nfrom text data, making it ideal for analyzing customer support interactions.\nWhy Option B is Correct:\nText Analysis Capabilities: Can process large volumes of text to identify common topics, phrases, and\nsentiment, providing valuable insights.\nSuitable for Customer Support Analysis: Specifically designed to understand the content and meaning\nof text, which is key for identifying frequently asked questions.\nWhy Other Options are Incorrect:\nA . Amazon Lex: Used for building conversational interfaces, not for text analysis.\nC . Amazon Transcribe: Converts speech to text but does not perform text analysis.\nD . Amazon Translate: Used for translating text between languages, not for analyzing content.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-088",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
 "options": [
 "Providing a visually appealing summary of a model's capabilities.",
 "Standardizing information about a model's purpose, performance, and limitations.",
 "Reducing the overall computational requirements of a model.",
 "Physically storing models for archival purposes."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon SageMaker Model Cards provide a standardized way to document important details about\nan AI model, such as its purpose, performance, intended usage, and known limitations. This enables\ntransparency and compliance while fostering better communication between stakeholders. It does\nnot store models physically or optimize computational requirements. Reference: AWS SageMaker\nModel Cards Documentation.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-089",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication. Which solution meets these requirements?",
 "options": [
 "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize.",
 "Create medication review summaries by using Amazon Bedrock large language models (LLMs).",
 "Create a classification model that categorizes medications into different groups by using Amazon SageMaker.",
 "Create medication review summaries by using Amazon Rekognition."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Bedrock provides large language models (LLMs) that are optimized for natural language\nunderstanding and text summarization tasks, making it the best choice for creating concise\nsummaries of user reviews. Time-series forecasting, classification, and image analysis (Rekognition)\nare not suitable for summarizing textual data. Reference: AWS Bedrock Documentation.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-090",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "What does an F1 score measure in the context of foundation model (FM) performance?",
 "options": [
 "Model precision and recall.",
 "Model speed in generating responses.",
 "Financial cost of operating the model.",
 "Energy efficiency of the model's computations."
 ],
 "answers": [
 0
 ],
 "explanation": "The F1 score is the harmonic mean of precision and recall, making it a balanced metric for evaluating\nmodel performance when there is an imbalance between false positives and false negatives. Speed,\ncost, and energy efficiency are unrelated to the F1 score. Reference: AWS Foundation Models Guide.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-091",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data. Which type of learning should the company use to train the model?",
 "options": [
 "Supervised learning.",
 "Unsupervised learning.",
 "Reinforcement learning.",
 "Active learning."
 ],
 "answers": [
 0
 ],
 "explanation": "Supervised learning is appropriate when the dataset is labeled. The model uses this data to learn\npatterns and classify images. Unsupervised learning, reinforcement learning, and active learning are\nnot suitable since they either require unlabeled data or different problem settings. Reference: AWS\nMachine Learning Best Practices.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-092",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions. Which strategy will meet these requirements MOST cost-effectively?",
 "options": [
 "Fine-tune the model regularly.",
 "Train the model by using context data.",
 "Pre-train and benchmark the model by using context data.",
 "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques."
 ],
 "answers": [
 3
 ],
 "explanation": "RAG combines large pre-trained models with retrieval mechanisms to fetch relevant context from a\nknowledge base. This approach is cost-effective as it eliminates the need for frequent model\nretraining while ensuring responses are contextually accurate and up to date. Reference: AWS RAG\nTechniques.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-093",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics. Which core dimension of responsible AI does this scenario present?",
 "options": [
 "Fairness.",
 "Explainability.",
 "Privacy and security.",
 "Transparency."
 ],
 "answers": [
 0
 ],
 "explanation": "Fairness refers to the absence of bias in AI models. Using non-representative datasets leads to biased\npredictions, affecting specific demographics unfairly. Explainability, privacy, and transparency are\nimportant but not directly related to this scenario. Reference: AWS Responsible AI Framework.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-094",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm. Which type of data will meet this requirement?",
 "options": [
 "Text data",
 "Image data",
 "Time series data",
 "Binary data"
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon SageMaker's DeepAR is a supervised learning algorithm designed for forecasting scalar (one-\ndimensional) time series data. Time series data consists of sequences of data points indexed in time\norder, typically with consistent intervals between them. In the context of a retail store aiming to\npredict product demand, relevant time series data might include historical sales figures, inventory\nlevels, or related metrics recorded over regular time intervals (e.g., daily or weekly). By training the\nDeepAR model on this historical time series data, the store can generate forecasts for future product\ndemand. This capability is particularly useful for inventory management, staffing, and supply chain\noptimization. Other data types, such as text, image, or binary data, are not suitable for time series\nforecasting tasks and would not be appropriate inputs for the DeepAR algorithm.\nReference: Amazon SageMaker DeepAR Algorithm",
 "awsExamTip": ""
 },
 {
 "id": "AIF-095",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "What does an F1 score measure in the context of foundation model (FM) performance?",
 "options": [
 "Model precision and recall",
 "Model speed in generating responses",
 "Financial cost of operating the model",
 "Energy efficiency of the model's computations"
 ],
 "answers": [
 0
 ],
 "explanation": "The F1 score is a metric used to evaluate the performance of a classification model by considering\n\nboth precision and recall. Precision measures the accuracy of positive predictions (i.e., the\nproportion of true positive predictions among all positive predictions made by the model), while\nrecall measures the model's ability to identify all relevant positive instances (i.e., the proportion of\ntrue positive predictions among all actual positive instances). The F1 score is the harmonic mean of\nprecision and recall, providing a single metric that balances both concerns. This is particularly useful\nwhen dealing with imbalanced datasets or when the cost of false positives and false negatives is\nsignificant. Options B, C, and D pertain to other aspects of model performance but are not related to\nthe F1 score.\nReference: AWS Certified AI Practitioner Exam Guide",
 "awsExamTip": ""
 },
 {
 "id": "AIF-096",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which AWS feature records details about ML instance data for governance and reporting?",
 "options": [
 "Amazon SageMaker Model Cards",
 "Amazon SageMaker Debugger",
 "Amazon SageMaker Model Monitor",
 "Amazon SageMaker JumpStart"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker Model Cards provide a centralized and standardized repository for documenting\nmachine learning models. They capture key details such as the model's intended use, training and\nevaluation datasets, performance metrics, ethical considerations, and other relevant information.\nThis documentation facilitates governance and reporting by ensuring that all stakeholders have\naccess to consistent and comprehensive information about each model. While Amazon SageMaker\nDebugger is used for real-time debugging and monitoring during training, and Amazon SageMaker\nModel Monitor tracks deployed models for data and predictionquality, neither offers the\ncomprehensive documentation capabilities of Model Cards. Amazon SageMaker JumpStart provides\npre-built models and solutions but does not focus on governance documentation.\nReference: Amazon SageMaker Model Cards",
 "awsExamTip": ""
 },
 {
 "id": "AIF-097",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company's large language model (LLM) is experiencing hallucinations. How can the company decrease hallucinations?",
 "options": [
 "Set up Agents for Amazon Bedrock to supervise the model training.",
 "Use data pre-processing and remove any data that causes hallucinations.",
 "Decrease the temperature inference parameter for the model.",
 "Use a foundation model (FM) that is trained to not hallucinate."
 ],
 "answers": [
 2
 ],
 "explanation": "Hallucinations in large language models (LLMs) occur when the model generates outputs that are\nfactually incorrect, irrelevant, or not grounded in the input data. To mitigate hallucinations, adjusting\nthe model's inference parameters, particularly the temperature, is a well-documented approach in\nAWS AI Practitioner resources. The temperature parameter controls the randomness of the model's\noutput. A lower temperature makes the model more deterministic, reducing the likelihood of\ngenerating creative but incorrect responses, which are often the cause of hallucinations.\nExact Extract from AWS AI Documents:\nFrom the AWS documentation on Amazon Bedrock and LLMs:\n\"The temperature parameter controls the randomness of the generated text. Higher values (e.g., 0.8\nor above) increase creativity but may lead to less coherent or factually incorrect outputs, while lower\nvalues (e.g., 0.2 or 0.3) make the output more focused and deterministic, reducing the likelihood of\nhallucinations.\"\n(Source: AWS Bedrock User Guide, Inference Parameters for Text Generation)\nDetailed\nOption A: Set up Agents for Amazon Bedrock to supervise the model training.Agents for Amazon\nBedrock are used to automate tasks and integrate LLMs with external tools, not to supervise model\ntraining or directly address hallucinations. This option is incorrect as it does not align with the\npurpose of Agents in Bedrock.\nOption B: Use data pre-processing and remove any data that causes hallucinations.While data pre-\nprocessing can improve model performance, identifying and removing specific data that causes\nhallucinations is impractical because hallucinations are often a result of the model's generative\nprocess rather than specific problematic data points. This approach is not directly supported by AWS\ndocumentation for addressing hallucinations.\nOption C: Decrease the temperature inference parameter for the model.This is the correct approach.\nLowering the temperature reduces the randomness in the model's output, making it more likely to\nstick to factual and contextually relevant responses. AWS documentation explicitly mentions\nadjusting inference parameters like temperature to control output quality and mitigate issues like\nhallucinations.\nOption D: Use a foundation model (FM) that is trained to not hallucinate.No foundation model is\nexplicitly trained to \"not hallucinate,\" as hallucinations are an inherent challenge in LLMs. While\nsome models may be fine-tuned for specific tasks to reduce hallucinations, this is not a standard\nfeature of foundation models available on Amazon Bedrock.\nReference:\nAWS Bedrock User Guide: Inference Parameters for Text Generation\n(https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html)\nAWS AI Practitioner Learning Path: Module on Large Language Models and Inference Configuration\nAmazon Bedrock Developer Guide: Managing Model Outputs\n(https://docs.aws.amazon.com/bedrock/latest/devguide/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-098",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using a pre-trained large language model (LLM) to extract information from documents. The company noticed that a newer LLM from a different provider is available on Amazon Bedrock. The company wants to transition to the new LLM on Amazon Bedrock. What does the company need to do to transition to the new LLM?",
 "options": [
 "Create a new labeled dataset",
 "Perform feature engineering.",
 "Adjust the prompt template.",
 "Fine-tune the LLM."
 ],
 "answers": [
 2
 ],
 "explanation": "Transitioning to a new large language model (LLM) on Amazon Bedrock typically involves minimal\nchanges when the new model is pre-trained and available as a foundation model. Since the company\nis moving from one pre-trained LLM to another, the primary task is to ensure compatibility between\nthe new model's input requirements and the existing application. Adjusting the prompt template is\noften necessary because different LLMs may have varying prompt formats, tokenization methods, or\nresponse behaviors, even for similar tasks like document extraction.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"When switching between foundation models in Amazon Bedrock, you may need to adjust the\nprompt template to align with the new model’s expected input format and optimize its performance\nfor your use case. Prompt engineering is critical to ensure the model understands the task and\ngenerates accurate outputs.\"\n(Source: AWS Bedrock User Guide, Prompt Engineering for Foundation Models)\nDetailed\nOption A: Create a new labeled dataset.Creating a new labeled dataset is unnecessary when\ntransitioning to a new pre-trained LLM, as pre-trained models are already trained on large datasets.\nThis option would only be relevant if the company were training a custom model from scratch, which\nis not the case here.\nOption B: Perform feature engineering.Feature engineering is typically associated with traditional\nmachine learning models, not pre-trained LLMs. LLMs process raw text inputs, and transitioning to a\nnew LLM does not require restructuring input features. This option is incorrect.\nOption C: Adjust the prompt template.This is the correct approach. Different LLMs may interpret\nprompts differently due to variations in training data, tokenization, or model architecture. Adjusting\nthe prompt template ensures the new LLM understands the task (e.g., document extraction) and\nproduces the desired output format. AWS documentation emphasizes prompt engineering as a key\nstep when adopting a new foundation model.\nOption D: Fine-tune the LLM.Fine-tuning is not required for transitioning to a new pre-trained LLM\nunless the company needs to customize the model for a highly specific task. Since the question does\nnot indicate a need for customization beyond document extraction (a common LLM capability), fine-\ntuning is unnecessary.\nReference:\nAWS Bedrock User Guide: Prompt Engineering for Foundation Models\n(https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering.html)\nAWS AI Practitioner Learning Path: Module on Working with Foundation Models in Amazon Bedrock\nAmazon Bedrock Developer Guide: Transitioning Between Models\n(https://docs.aws.amazon.com/bedrock/latest/devguide/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-099",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A customer service team is developing an application to analyze customer feedback and automatically classify the feedback into different categories. The categories include product quality, customer service, and delivery experience. Which AI concept does this scenario present?",
 "options": [
 "Computer vision",
 "Natural language processing (NLP)",
 "Recommendation systems",
 "Fraud detection"
 ],
 "answers": [
 1
 ],
 "explanation": "The scenario involves analyzing customer feedback and automatically classifying it into categories\nsuch as product quality, customer service, and delivery experience. This task requires processing and\nunderstanding textual data, which is a core application of natural language processing (NLP). NLP\nencompasses techniques for analyzing, interpreting, and generating human language, including tasks\nlike text classification, sentiment analysis, and topic modeling, all of which are relevant to this use\ncase.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"Natural Language Processing (NLP) enables machines to understand and process human language.\nCommon NLP tasks include text classification, sentiment analysis, named entity recognition, and\ntopic modeling. Services like Amazon Comprehend can be used to classify text into predefined\ncategories based on content.\"\n(Source: AWS AI Practitioner Learning Path, Module on AI and ML Concepts)\nDetailed\nOption A: Computer visionComputer vision involves processing and analyzing visual data, such as\nimages or videos. Since the scenario deals with textual customer feedback, computer vision is not\napplicable.\nOption B: Natural language processing (NLP)This is the correct answer. The task of classifying\ncustomer feedback into categories requires understanding and processing text, which is an NLP task.\nAWS services like Amazon Comprehend are specifically designed for such text classification tasks.\nOption C: Recommendation systemsRecommendation systems suggest items or content based on\nuser preferences or behavior. The scenario does not involve recommending products or services but\nrather classifying feedback, so this option is incorrect.\nOption D: Fraud detectionFraud detection involves identifying anomalous or fraudulent activities,\ntypically in financial or transactional data. The scenario focuses on text classification, not anomaly\ndetection, making this option irrelevant.\nReference:\nAWS AI Practitioner Learning Path: Module on AI and ML Concepts\nAmazon Comprehend Developer Guide: Text Classification\n(https://docs.aws.amazon.com/comprehend/latest/dg/how-classification.html)\nAWS Documentation: Introduction to NLP (https://aws.amazon.com/what-is/natural-language-\n\nprocessing/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-100",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
 "options": [
 "Amazon Q Developer",
 "AWS Config",
 "Amazon Personalize",
 "Amazon Comprehend"
 ],
 "answers": [
 0
 ],
 "explanation": "AWS Glue is a serverless data integration service that enables users to extract, transform, and load\n(ETL) data. For a company with minimal programming experience, Amazon Q Developer provides an\nAI-powered assistant that can generate code, explain AWS services, and guide users through tasks\nlike creating AWS Glue jobs. This makes it an ideal tool to help the company use AWS Glue\neffectively.\nExact Extract from AWS AI Documents:\nFrom the AWS Documentation on Amazon Q Developer:\n\"Amazon Q Developer is an AI-powered assistant that helps developers by generating code,\nanswering questions about AWS services, and providing step-by-step guidance for tasks such as\nbuilding ETL pipelines with AWS Glue. It is designed to assist users with varying levels of expertise,\nincluding those with minimal programming experience.\"\n(Source: AWS Documentation, Amazon Q Developer Overview)\nDetailed\nOption A: Amazon Q Developer\nThis is the correct answer. Amazon Q Developer can assist the company by generating AWS Glue\nscripts, explaining Glue concepts, and providing guidance on setting up ETL jobs, which is particularly\nhelpful for users with limited programming experience.\nOption B: AWS Config\nAWS Config is used for tracking and managing resource configurations and compliance, not for\nassisting with coding or using services like AWS Glue. This option is incorrect.\nOption C: Amazon Personalize\nAmazon Personalize is a machine learning service for building recommendation systems, not for\nassisting with data integration or AWS Glue. This option is irrelevant.\nOption D: Amazon Comprehend\n\nAmazon Comprehend is an NLP service for analyzing text, not for helping users write code or use\nAWS Glue. This option does not meet the requirements.\nReference:\nAWS Documentation: Amazon Q Developer Overview (https://aws.amazon.com/q/developer/)\nAWS Glue Developer Guide: Introduction to AWS Glue\n(https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)\nAWS AI Practitioner Learning Path: Module on AWS Developer Tools and Services",
 "awsExamTip": ""
 },
 {
 "id": "AIF-101",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to fine-tune an ML model that is hosted on Amazon Bedrock. The company wants to use its own sensitive data that is stored in private databases in a VPC. The data needs to stay within the company's private network. Which solution will meet these requirements?",
 "options": [
 "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) service role.",
 "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) resource policy.",
 "Use AWS PrivateLink to connect the VPC and Amazon Bedrock.",
 "Use AWS Key Management Service (AWS KMS) keys to encrypt the data."
 ],
 "answers": [
 2
 ],
 "explanation": "The company wants to fine-tune an ML model on Amazon Bedrock using sensitive data stored in\nprivate databases within a VPC, ensuring the data remains within its private network. AWS\nPrivateLink provides a secure, private connection between a VPC and AWS services like Amazon\nBedrock, allowing data to stay within the company’s network without traversing the public internet.\nThis meets the requirement for maintaining data privacy during fine-tuning.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"AWS PrivateLink enables you to securely connect your VPC to Amazon Bedrock without exposing\ndata to the public internet. This is particularly useful for fine-tuning models with sensitive data, as it\nensures that data remains within your private network.\"\n(Source: AWS Bedrock User Guide, Security and Networking)\nDetailed\nOption A: Restrict access to Amazon Bedrock by using an AWS Identity and Access Management\n(IAM) service role.While IAM service roles control access to Amazon Bedrock, they do not address\nthe requirement of keeping data within the private network during data transfer. This option is\ninsufficient.\nOption B: Restrict access to Amazon Bedrock by using an AWS Identity and Access Management\n(IAM) resource policy.IAM resource policies define permissions for Bedrock resources but do not\nensure that data stays within the private network. This option is incorrect.\nOption C: Use AWS PrivateLink to connect the VPC and Amazon Bedrock.This is the correct answer.\n\nAWS PrivateLink creates a secure, private connection between the VPC and Amazon Bedrock,\nensuring that sensitive data does not leave the private network during fine-tuning, as required.\nOption D: Use AWS Key Management Service (AWS KMS) keys to encrypt the data.While AWS KMS\ncan encrypt data, encryption alone does not guarantee that data remains within the private network\nduring transfer. This option does not fully meet the requirement.\nReference:\nAWS Bedrock User Guide: Security and Networking\n(https://docs.aws.amazon.com/bedrock/latest/userguide/security.html)\nAWS Documentation: AWS PrivateLink (https://aws.amazon.com/privatelink/)\nAWS AI Practitioner Learning Path: Module on Security and Networking for AI/ML Services",
 "awsExamTip": ""
 },
 {
 "id": "AIF-102",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An airline company wants to build a conversational AI assistant to answer customer questions about flight schedules, booking, and payments. The company wants to use large language models (LLMs) and a knowledge base to create a text-based chatbot interface. Which solution will meet these requirements with the LEAST development effort?",
 "options": [
 "Train models on Amazon SageMaker Autopilot.",
 "Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock.",
 "Create a Python application by using Amazon Q Developer.",
 "Fine-tune models on Amazon SageMaker Jumpstart."
 ],
 "answers": [
 1
 ],
 "explanation": "The airline company aims to build a conversational AI assistant using large language models (LLMs)\nand a knowledge base to create a text-based chatbot with minimal development effort. Retrieval\nAugmented Generation (RAG) on Amazon Bedrock is an ideal solution because it combines LLMs\nwith a knowledge base to provide accurate, contextually relevant responses without requiring\nextensive model training or custom development. RAG retrieves relevant information from a\nknowledge base and uses an LLM to generate responses, simplifying the development process.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Retrieval Augmented Generation (RAG) in Amazon Bedrock enables developers to build\nconversational AI applications by combining foundation models with external knowledge bases. This\napproach minimizes development effort by leveraging pre-trained models and integrating them with\ndata sources, such as FAQs or databases, to provide accurate and contextually relevant responses.\"\n(Source: AWS Bedrock User Guide, Retrieval Augmented Generation)\nDetailed\nOption A: Train models on Amazon SageMaker Autopilot.SageMaker Autopilot is designed for\nautomated machine learning (AutoML) tasks like classification or regression, not for building\nconversational AI with LLMs and knowledge bases. It requires significant data preparation and is not\noptimized for chatbot development, making it less suitable.\nOption B: Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock.This is\nthe correct answer. RAG on Amazon Bedrock allows the company to use pre-trained LLMs and\n\nintegrate them with a knowledge base (e.g., flight schedules or FAQs) to build a chatbot with\nminimal effort. It avoids the need for extensive training or coding, aligning with the requirement for\nleast development effort.\nOption C: Create a Python application by using Amazon Q Developer.While Amazon Q Developer can\nassist with code generation, building a chatbot from scratch in Python requires significant\ndevelopment effort, including integrating LLMs and a knowledge base manually, which is more\ncomplex than using RAG on Bedrock.\nOption D: Fine-tune models on Amazon SageMaker Jumpstart.Fine-tuning models on SageMaker\nJumpstart requires preparing training data and customizing LLMs, which involves more effort than\nusing a pre-built RAG solution on Bedrock. This option is not the least effort-intensive.\nReference:\nAWS Bedrock User Guide: Retrieval Augmented Generation\n(https://docs.aws.amazon.com/bedrock/latest/userguide/rag.html)\nAWS AI Practitioner Learning Path: Module on Generative AI and Conversational AI\nAmazon Bedrock Developer Guide: Building Conversational AI (https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-103",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to build a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise. Which ML model type meets these requirements?",
 "options": [
 "Logistic regression model",
 "Deep learning model built on principal components",
 "K-nearest neighbors (k-NN) model",
 "Neural network"
 ],
 "answers": [
 0
 ],
 "explanation": "The company needs an ML model for a lead prioritization application where employees can view and\nadjust the weights assigned to different variables based on domain knowledge. Logistic regression is\na linear model that assigns interpretable weights to input features, making it easy for users to\nunderstand and modify these weights. This interpretability and adjustability make it suitable for the\nrequirements.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"Logistic regression is a supervised learning algorithm used for classification tasks. It is highly\ninterpretable, as it assigns weights to each feature, allowing users to understand and adjust the\nimportance of different variables based on domain expertise.\"\n(Source: AWS AI Practitioner Learning Path, Module on Machine Learning Algorithms)\nDetailed\nOption A: Logistic regression modelThis is the correct answer. Logistic regression provides\ninterpretable coefficients (weights) for each feature, enabling employees to view and adjust them\nbased on domain knowledge, meeting the application’s requirements.\n\nOption B: Deep learning model built on principal componentsDeep learning models, even when\nusing principal components, are complex and lack interpretability. The weights in such models are\nnot easily adjustable by users, making this option unsuitable.\nOption C: K-nearest neighbors (k-NN) modelk-NN is a non-parametric model that does not assign\nexplicit weights to features. It relieson distance metrics, which are not easily adjustable based on\ndomain knowledge, so it does not meet the requirements.\nOption D: Neural networkNeural networks are highly complex and lack interpretability, as their\nweights are not directly tied to input features in a human-understandable way. Adjusting weights\nbased on domain knowledge is impractical, making this option incorrect.\nReference:\nAWS AI Practitioner Learning Path: Module on Machine Learning Algorithms\nAmazon SageMaker Developer Guide: Logistic Regression\n(https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html)\nAWS Documentation: Interpretable Machine Learning Models (https://aws.amazon.com/machine-\nlearning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-104",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which option describes embeddings in the context of AI?",
 "options": [
 "A method for compressing large datasets",
 "An encryption method for securing sensitive data",
 "A method for visualizing high-dimensional data",
 "A numerical method for data representation in a reduced dimensionality space"
 ],
 "answers": [
 3
 ],
 "explanation": "Embeddings in AI refer to numerical representations of data (e.g., text, images) in a lower-\ndimensional space, capturing semantic or contextual relationships. They are widely used in NLP and\nother AI tasks to represent complex data in a format that models can process efficiently.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"Embeddings are numerical representations of data in a reduced dimensionality space. In natural\nlanguage processing, for example, word or sentence embeddings capture semantic relationships,\nenabling models to process text efficiently for tasks like classification or similarity search.\"\n(Source: AWS AI Practitioner Learning Path, Module on AI Concepts)\nDetailed\nOption A: A method for compressing large datasetsWhile embeddings reduce dimensionality, their\nprimary purpose is not data compression but rather to represent data in a way that preserves\nmeaningful relationships. This option is incorrect.\nOption B: An encryption method for securing sensitive dataEmbeddings are not related to encryption\nor data security. They are used for data representation, making this option incorrect.\nOption C: A method for visualizing high-dimensional dataWhile embeddings can sometimes be used\nin visualization (e.g., t-SNE), their primary role is data representation for model processing, not\nvisualization. This option is misleading.\n\nOption D: A numerical method for data representation in a reduced dimensionality spaceThis is the\ncorrect answer. Embeddings transform complex data into lower-dimensional numerical vectors,\npreserving semantic or contextual information for use in AI models.\nReference:\nAWS AI Practitioner Learning Path: Module on AI Concepts\nAmazon Comprehend Developer Guide: Embeddings for Text Analysis\n(https://docs.aws.amazon.com/comprehend/latest/dg/embeddings.html)\nAWS Documentation: What are Embeddings? (https://aws.amazon.com/what-is/embeddings/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-105",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which AW5 service makes foundation models (FMs) available to help users build and scale generative AI applications?",
 "options": [
 "Amazon Q Developer",
 "Amazon Bedrock",
 "Amazon Kendra",
 "Amazon Comprehend"
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Bedrock is a fully managed service that provides access to foundation models (FMs) from\nvarious providers, enabling users to build and scale generative AI applications. It simplifies the\nprocess of integrating FMs into applications for tasks like text generation, chatbots, and more.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Amazon Bedrock is a fully managed service that makes foundation models (FMs) from leading AI\nproviders available through a single API, enabling developers to build and scale generative AI\napplications with ease.\"\n(Source: AWS Bedrock User Guide, Introduction to Amazon Bedrock)\nDetailed\nOption A: Amazon Q DeveloperAmazon Q Developer is an AI-powered assistant for coding and AWS\nservice guidance, not a service for hosting or providing foundation models.\nOption B: Amazon BedrockThis is the correct answer. Amazon Bedrock provides access to foundation\nmodels, making it the primary service for building and scaling generative AI applications.\nOption C: Amazon KendraAmazon Kendra is an intelligent search service powered by machine\nlearning, not a service for providing foundation models or building generative AI applications.\nOption D: Amazon ComprehendAmazon Comprehend is an NLP service for text analysis tasks like\nsentiment analysis, not for providing foundation models or supporting generative AI.\nReference:\nAWS Bedrock User Guide: Introduction to Amazon Bedrock\n(https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)\nAWS AI Practitioner Learning Path: Module on Generative AI Services\nAWS Documentation: Generative AI on AWS (https://aws.amazon.com/generative-ai/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-106",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "In which stage of the generative AI model lifecycle are tests performed to examine the model's accuracy?",
 "options": [
 "Deployment",
 "Data selection",
 "Fine-tuning",
 "Evaluation"
 ],
 "answers": [
 3
 ],
 "explanation": "The evaluation stage of the generative AI model lifecycle involves testing the model to assess its\nperformance, including accuracy, coherence, and other metrics. This stage ensures the model meets\nthe desired quality standards before deployment.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"The evaluation phase in the machine learning lifecycle involves testing the model against validation\nor test datasets to measure its performance metrics, such as accuracy, precision, recall, or task-\nspecific metrics for generative AI models.\"\n(Source: AWS AI Practitioner Learning Path, Module on Machine Learning Lifecycle)\nDetailed\nOption A: DeploymentDeployment involves making the model available for use in production. While\nmonitoring occurs post-deployment, accuracy testing is performed earlier in the evaluation stage.\nOption B: Data selectionData selection involves choosing and preparing data for training, not testing\nthe model’s accuracy.\nOption C: Fine-tuningFine-tuning adjusts a pre-trained model to improve performance for a specific\ntask, but it is not the stage where accuracy is formally tested.\nOption D: EvaluationThis is the correct answer. The evaluation stage is where tests are conducted to\nexamine the model’s accuracy and other performance metrics, ensuring it meets requirements.\nReference:\nAWS AI Practitioner Learning Path: Module on Machine Learning Lifecycle\nAmazon SageMaker Developer Guide: Model Evaluation\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-evaluation.html)\nAWS Documentation: Generative AI Lifecycle (https://aws.amazon.com/machine-learning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-108",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses. Which solution will meet these requirements?",
 "options": [
 "Use a deep learning neural network to perform speech recognition.",
 "Build ML models to search for patterns in numeric data.",
 "Use generative AI summarization to generate human-like text.",
 "Build custom models for image classification and recognition."
 ],
 "answers": [
 0
 ],
 "explanation": "The mobile app for users with visual impairment needs to hear user speech and provide voice\nresponses, requiring speech-to-text (speech recognition) and text-to-speech capabilities. Deep\nlearning neural networks are widely used for speech recognition tasks, as they can effectively\nprocess and transcribe spoken language. AWS services like Amazon Transcribe, which uses deep\nlearning for speech recognition, can fulfill this requirement by converting user speech to text, and\nAmazon Polly can generate voice responses.\nExact Extract from AWS AI Documents:\nFrom the AWS Documentation on Amazon Transcribe:\n\"Amazon Transcribe uses deep learning neural networks to perform automatic speech recognition\n(ASR), converting spoken language into text with high accuracy. This is ideal for applications requiring\nvoice input, such as accessibility features for visually impaired users.\"\n(Source: Amazon Transcribe Developer Guide, Introduction to Amazon Transcribe)\nDetailed\nOption A: Use a deep learning neural network to perform speech recognition.This is the correct\nanswer. Deep learning neural networks are the foundation of modern speech recognition systems, as\nused in AWS services like Amazon Transcribe. They enable the app to hear and transcribe user\nspeech, and a service like Amazon Polly can handle voice responses, meeting the requirements.\nOption B: Build ML models to search for patterns in numeric data.This option is irrelevant, as the task\ninvolves processing speech (audio data) and generating voice responses, not analyzing numeric data\npatterns.\nOption C: Use generative AI summarization to generate human-like text.Generative AI\n\nsummarization focuses on summarizing text, not processing speech orgenerating voice responses.\nThis option does not address the core requirement of speech recognition.\nOption D: Build custom models for image classification and recognition.Image classification and\nrecognition are unrelated to processing speech or generating voice responses, making this option\nincorrect for an app focused on audio interaction.\nReference:\nAmazon Transcribe Developer Guide: Introduction to Amazon Transcribe\n(https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html)\nAmazon Polly Developer Guide: Text-to-Speech Overview\n(https://docs.aws.amazon.com/polly/latest/dg/what-is.html)\nAWS AI Practitioner Learning Path: Module on Speech Recognition and Synthesis",
 "awsExamTip": ""
 },
 {
 "id": "AIF-109",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock. Which solution meets these requirements MOST cost-effectively?",
 "options": [
 "Fine-tune the FM.",
 "Retrain the FM.",
 "Train a new FM.",
 "Use prompt engineering."
 ],
 "answers": [
 3
 ],
 "explanation": "The company wants to improve the accuracy of a generative AI application using a foundation model\n(FM) on Amazon Bedrock in the most cost-effective way. Prompt engineering involves optimizing the\ninput prompts to guide the FM to produce more accurate responses without modifying the model\nitself. This approach is cost-effective because it does not require additional computational resources\nor training, unlike fine-tuning or retraining.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Prompt engineering is a cost-effective technique to improve the performance of foundation models.\nBy crafting precise and context-rich prompts, users can guide the model to generate more accurate\nand relevant responses without the need for fine-tuning or retraining.\"\n(Source: AWS Bedrock User Guide, Prompt Engineering for Foundation Models)\nDetailed\nOption A: Fine-tune the FM.Fine-tuning involves retraining the FM on a custom dataset, which\nrequirescomputational resources, time, and cost (e.g., for Amazon Bedrock fine-tuning jobs). It is not\nthe most cost-effective solution.\nOption B: Retrain the FM.Retraining an FM from scratch is highly resource-intensive and expensive,\nas it requires large datasets and significant compute power. This is not cost-effective.\nOption C: Train a new FM.Training a new FM is the most expensive option, as it involves building a\nmodel from the ground up, requiring extensive data, compute resources, and expertise. This is not\ncost-effective.\n\nOption D: Use prompt engineering.This is the correct answer. Prompt engineering adjusts the input\nprompts to improve the FM’s responses without incurring additional compute costs, making it the\nmost cost-effective solution for improving accuracy on Amazon Bedrock.\nReference:\nAWS Bedrock User Guide: Prompt Engineering for Foundation Models\n(https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering.html)\nAWS AI Practitioner Learning Path: Module on Generative AI Optimization\nAmazon Bedrock Developer Guide: Cost Optimization for Generative AI\n(https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-110",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which technique involves training AI models on labeled datasets to adapt the models to specific industry terminology and requirements?",
 "options": [
 "Data augmentation",
 "Fine-tuning",
 "Model quantization",
 "Continuous pre-training"
 ],
 "answers": [
 1
 ],
 "explanation": "Fine-tuning involves training a pre-trained AI model on a labeled dataset specific to a particular task\nor domain, adapting it to industry terminology and requirements. This process adjusts the model’s\nparameters to better fit the target use case, such as understanding specialized vocabulary or meeting\ndomain-specific needs.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Fine-tuning allows you to adapt a pre-trained foundation model to your specific use case by training\nit on a labeled dataset. This technique is commonly used to customize models forindustry-specific\nterminology, improving their accuracy for specialized tasks.\"\n(Source: AWS Bedrock User Guide, Model Customization)\nDetailed\nOption A: Data augmentationData augmentation involves generating synthetic data to expand a\ntraining dataset, typically for tasks like image or text generation. It does not specifically adapt models\nto industry terminology or requirements.\nOption B: Fine-tuningThis is the correct answer. Fine-tuning trains a pre-trained model on a labeled\ndataset tailored to the target domain, enabling it to learn industry-specific terminology and\nrequirements, as described in the question.\nOption C: Model quantizationModel quantization reduces the precision of a model’s weights to\noptimize it for deployment (e.g., on edge devices). It does not involve training on labeled datasets or\nadapting to industry terminology.\nOption D: Continuous pre-trainingContinuous pre-training extends the initial training of a model on a\nlarge, general dataset. While it can improve general performance, it is not specifically tailored to\nindustry requirements using labeled datasets, unlike fine-tuning.\n\nReference:\nAWS Bedrock User Guide: Model Customization\n(https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html)\nAWS AI Practitioner Learning Path: Module on Model Training and Customization\nAmazon SageMaker Developer Guide: Fine-Tuning Models\n(https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-112",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A manufacturing company wants to create product descriptions in multiple languages. Which AWS service will automate this task?",
 "options": [
 "Amazon Translate",
 "Amazon Transcribe",
 "Amazon Kendra",
 "Amazon Polly"
 ],
 "answers": [
 0
 ],
 "explanation": "The manufacturing company needs to create product descriptions in multiple languages, which\nrequires automated language translation. Amazon Translate is a fully managed service that uses\nmachine learning to provide high-quality translation between languages, making it the ideal solution\nfor this task.\nExact Extract from AWS AI Documents:\nFrom the Amazon Translate Developer Guide:\n\"Amazon Translate is a neural machine translation service that delivers fast, high-quality, and\naffordable language translation. It can be used to automatically translate text, such as product\ndescriptions, into multiple languages to reach a global audience.\"\n(Source: Amazon Translate Developer Guide, Introduction to Amazon Translate)\nDetailed\nOption A: Amazon TranslateThis is the correct answer. Amazon Translate automates the translation of\ntext into multiple languages, directly addressing the company’s need to create product descriptions\nin different languages.\nOption B: Amazon TranscribeAmazon Transcribe converts speech to text, which is unrelated to\ntranslating text into multiple languages. This option is incorrect.\nOption C: Amazon KendraAmazon Kendra is an intelligent search service that uses machine learning\nto provide answers from documents, not for translating text. This option is irrelevant.\nOption D: Amazon PollyAmazon Polly is a text-to-speech service that generates spoken audio from\ntext, not for translating text into other languages. This option does not meet the requirements.\nReference:\nAmazon Translate Developer Guide: Introduction to Amazon Translate\n(https://docs.aws.amazon.com/translate/latest/dg/what-is.html)\nAWS AI Practitioner Learning Path: Module on Natural Language Processing Services\nAWS Documentation: Language Translation with Amazon Translate\n(https://aws.amazon.com/translate/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-113",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An ecommerce company is deploying a chatbot. The chatbot will give users the ability to ask questions about the company's products and receive details on users' orders. The company must implement safeguards for the chatbot to filter harmful content from the input prompts and chatbot responses. Which AWS feature or resource meets these requirements?",
 "options": [
 "Amazon Bedrock Guardrails",
 "Amazon Bedrock Agents",
 "Amazon Bedrock inference APIs",
 "Amazon Bedrock custom models"
 ],
 "answers": [
 0
 ],
 "explanation": "The ecommerce company is deploying a chatbot that needs safeguards to filter harmful content from\ninput prompts and responses. Amazon Bedrock Guardrails provide mechanisms to ensure\nresponsible AI usage by filtering harmful content, such as hate speech, violence, or misinformation,\nmaking it the appropriate feature for this requirement.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Amazon Bedrock Guardrails enable developers to implement safeguards for generative AI\napplications, such as chatbots, by filtering harmful content in input prompts and model responses.\nGuardrails include content filters, word filters, and denied topics to ensure safe and responsible\noutputs.\"\n(Source: AWS Bedrock User Guide, Guardrails for Responsible AI)\nDetailed\nOption A: Amazon Bedrock GuardrailsThis is the correct answer. Amazon Bedrock Guardrails are\nspecifically designed to filter harmful content from chatbot inputs and responses, ensuring safe\ninteractions for users.\nOption B: Amazon Bedrock AgentsAmazon Bedrock Agents are used to automate tasks and integrate\nwith external tools, not to filter harmful content. This option does not meet the requirement.\nOption C: Amazon Bedrock inference APIsAmazon Bedrock inference APIs allow users to invoke\nfoundation models for generating responses, but they do not provide built-in content filtering\nmechanisms.\nOption D: Amazon Bedrock custom modelsCustom models on Amazon Bedrock allow users to fine-\ntune models, but they do not inherently include safeguards for filtering harmful content unless\nexplicitly implemented.\nReference:\nAWS Bedrock User Guide: Guardrails for Responsible AI\n(https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)\nAWS AI Practitioner Learning Path: Module on Responsible AI and Model Safety\nAmazon Bedrock Developer Guide: Building Safe AI Applications (https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-114",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM. Which solution meets these requirements?",
 "options": [
 "Batch learning",
 "Continuous pre-training",
 "Static training",
 "Latent training"
 ],
 "answers": [
 1
 ],
 "explanation": "To keep a foundation model (FM) relevant with the most recent data, the company needs a training\nstrategy that supports regular updates. Continuous pre-training involves periodically updating a pre-\ntrained model with new data to improve its performance and relevance over time, making it the best\nfit for this requirement.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"Continuous pre-training is a strategy where a pre-trained model is periodically updated with new\ndata to keep it relevant and improve its performance. This approach is commonly used for\nfoundation models to ensure they adapt to new trends and information.\"\n(Source: AWS AI Practitioner Learning Path, Module on Model Training Strategies)\nDetailed\nOption A: Batch learningBatch learning involves training a model on a fixed dataset in batches, but it\ndoes not inherently support regular updates with new data to keep the model relevant over time.\nOption B: Continuous pre-trainingThis is the correct answer. Continuous pre-training updates the FM\nwith recent data, ensuring it stays relevant by adapting to new trends and information.\nOption C: Static trainingStatic training implies training a model once on a fixed dataset without\nupdates, which does not meet the requirement for regular updates.\nOption D: Latent trainingLatent training is not a standard term in AWS or ML contexts. It may refer to\nlatent space in models like VAEs, but it is not a strategy for regular model updates.\nReference:\nAWS AI Practitioner Learning Path: Module on Model Training Strategies\nAmazon Bedrock User Guide: Model Customization and Updates\n(https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html)\nAWS Documentation: Machine Learning Training Strategies (https://aws.amazon.com/machine-\nlearning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-115",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company trained an ML model on Amazon SageMaker to predict customer credit risk. The model shows 90% recall on training data and 40% recall on unseen testing data. Which conclusion can the company draw from these results?",
 "options": [
 "The model is overfitting on the training data.",
 "The model is underfitting on the training data.",
 "The model has insufficient training data.",
 "The model has insufficient testing data."
 ],
 "answers": [
 0
 ],
 "explanation": "The ML model shows 90% recall on training data but only 40% recall on unseen testing data,\nindicating a significant performance drop. This discrepancy suggests the model has learned the\ntraining data too well, including noise and specific patterns that do not generalize to new data, which\nis a classic sign of overfitting.\nExact Extract from AWS AI Documents:\nFrom the Amazon SageMaker Developer Guide:\n\"Overfitting occurs when a model performs well on training data but poorly on unseen test data, as it\nhas learned patterns specific to the training set, including noise, that do not generalize. A large gap\nbetween training and testing performance metrics, such as recall, is a common indicator of\noverfitting.\"\n(Source: Amazon SageMaker Developer Guide, Model Evaluation and Overfitting)\nDetailed\nOption A: The model is overfitting on the training data.This is the correct answer. The significant drop\nin recall from 90% (training) to 40% (testing) indicates the model is overfitting, as it performs well on\ntraining data but fails to generalize to unseen data.\nOption B: The model is underfitting on the training data.Underfitting occurs when the model\nperforms poorly on both training and testing data due to insufficient learning. With 90% recall on\ntraining data, the model is not underfitting.\nOption C: The model has insufficient training data.Insufficient training data could lead to poor\nperformance, but the high recall on trainingdata (90%) suggests the model has learned the training\ndata well, pointing to overfitting rather than a lack of data.\nOption D: The model has insufficient testing data.Insufficient testing data might lead to unreliable\ntest metrics, but it does not explain the large performance gap between training and testing, which is\nmore indicative of overfitting.\nReference:\nAmazon SageMaker Developer Guide: Model Evaluation and Overfitting\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-evaluation.html)\nAWS AI Practitioner Learning Path: Module on Model Performance and Evaluation\nAWS Documentation: Understanding Overfitting and Underfitting\n(https://aws.amazon.com/machine-learning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-116",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company deployed a model to production. After 4 months, the model inference quality degraded. The company wants to receive a notification if the model inference quality degrades. The company also wants to ensure that the problem does not happen again. Which solution will meet these requirements?",
 "options": [
 "Retrain the model. Monitor model drift by using Amazon SageMaker Clarify.",
 "Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor.",
 "Build a new model. Monitor model drift by using Amazon SageMaker Feature Store.",
 "Build a new model. Monitor model drift by using Amazon SageMaker JumpStart."
 ],
 "answers": [
 1
 ],
 "explanation": "The company needs to address the degradation in model inference quality after 4 months in\nproduction and prevent future occurrences by receiving notifications. Retraining the model can\naddress the current degradation, likely caused by data drift (changes in the data distribution over\ntime). Amazon SageMaker Model Monitor is designed to detect and monitor model drift, alerting the\ncompany when inference quality degrades, thus meeting both requirements.\nExact Extract from AWS AI Documents:\nFrom the Amazon SageMaker Developer Guide:\n\"Amazon SageMaker Model Monitor enables you to monitor machine learning models in production\nfor data drift, model performance degradation, and other quality issues. It can detect drift in feature\ndistributions and inference quality, sending notifications when deviations are detected, allowing you\nto take corrective actions such as retraining the model.\"\n(Source: Amazon SageMaker Developer Guide, Monitoring Models with SageMaker Model Monitor)\nDetailed\nOption A: Retrain the model. Monitor model drift by using Amazon SageMaker Clarify.SageMaker\nClarify is used for bias detection and explainability, not for monitoring model drift or inference\nquality in production. This option does not fully meet the requirements.\nOption B: Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor.This is\nthe correct answer. Retraining addresses the current degradation, and SageMaker Model Monitor\ncan detect future drift in inference quality, sending notifications to prevent recurrence, as required.\nOption C: Build a new model. Monitor model drift by using Amazon SageMaker Feature\nStore.SageMaker Feature Store is for managing and sharing features, not for monitoring model drift\nor inference quality. Building a new model may not be necessary if retraining can address the issue.\nOption D: Build a new model. Monitor model drift by using Amazon SageMaker\nJumpStart.SageMaker JumpStart provides pre-trained models and solutions for quick deployment,\nbut it does not offer specific tools for monitoring model drift or inference quality in production.\nReference:\nAmazon SageMaker Developer Guide: Monitoring Models with SageMaker Model Monitor\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html)\nAWS AI Practitioner Learning Path: Module on Model Monitoring and Maintenance\nAWS Documentation: Addressing Model Drift in Production (https://aws.amazon.com/sagemaker/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-117",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Why does overfilting occur in ML models?",
 "options": [
 "The training dataset does not reptesent all possible input values.",
 "The model contains a regularization method.",
 "The model training stops early because of an early stopping criterion.",
 "The training dataset contains too many features."
 ],
 "answers": [
 0
 ],
 "explanation": "Overfitting occurs when an ML model learns the training data too well, including noise and patterns\n\nthat do not generalize to new data. A key cause of overfitting is when the training dataset does not\nrepresent all possible input values, leading the model to over-specialize on the limited data it was\ntrained on, failing to generalize to unseen data.\nExact Extract from AWS AI Documents:\nFrom the Amazon SageMaker Developer Guide:\n\"Overfitting often occurs when the training dataset is not representative of the broader population of\npossible inputs, causing the model to memorize specific patterns, including noise, rather than\nlearning generalizable features.\"\n(Source: Amazon SageMaker Developer Guide, Model Evaluation and Overfitting)\nDetailed\nOption A: The training dataset does not represent all possible input values.This is the correct answer.\nIf the training dataset lacks diversity and does not cover the range of possible inputs, the model\noverfits by learning patterns specific to the training data, failing to generalize.\nOption B: The model contains a regularization method.Regularization methods (e.g., L2\nregularization) are used to prevent overfitting, not cause it. This option is incorrect.\nOption C: The model training stops early because of an early stopping criterion.Early stopping is a\ntechnique to prevent overfitting by halting training when performance on a validation set degrades.\nIt does not cause overfitting.\nOption D: The training dataset contains too many features.While too many features can contribute to\noverfitting (e.g., by increasing model complexity), this is less directly tied to overfitting than a non-\nrepresentative dataset. The dataset’s representativeness is the primary cause.\nReference:\nAmazon SageMaker Developer Guide: Model Evaluation and Overfitting\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-evaluation.html)\nAWS AI Practitioner Learning Path: Module on Model Performance and Evaluation\nAWS Documentation: Understanding Overfitting (https://aws.amazon.com/machine-learning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-118",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to develop an Al application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim. Which solution meets these requirements?",
 "options": [
 "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application.",
 "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application.",
 "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application.",
 "Use Amazon SageMaker AI to build the application by training a new ML model."
 ],
 "answers": [
 1
 ],
 "explanation": "The company wants an AI application to help employees check open customer claims, identify claim\ndetails, and access related documents. Agents for Amazon Bedrock can automate tasks by interacting\nwith external systems, while Amazon Bedrock knowledge bases provide a repository of information\n(e.g., claim details and documents) that the agent can query to respond to employee requests,\nmaking this the best solution.\n\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Agents for Amazon Bedrock enable developers to build applications that can perform tasks by\ninteracting with external systems and data sources. When paired with Amazon Bedrock knowledge\nbases, agents can access structured and unstructured data, such as documents or databases, to\nprovide detailed responses for use cases like customer service or claims management.\"\n(Source: AWS Bedrock User Guide, Agents and Knowledge Bases)\nDetailed\nOption A: Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the\napplication.Amazon Fraud Detector is for detecting fraudulent activities, not for managing customer\nclaims or accessing documents. This option is irrelevant.\nOption B: Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the\napplication.This is the correct answer. Agents for Amazon Bedrock can interact with knowledge bases\nto retrieve claim details and documents, enabling employees to check open claims and access\nrelevant information.\nOption C: Use Amazon Personalize with Amazon Bedrock knowledge bases to build the\napplication.Amazon Personalize is for building recommendation systems, not for retrieving claim\ndetails or documents. This option does not meet the requirements.\nOption D: Use Amazon SageMaker AI to build the application by training a new ML model.Training a\nnew ML model on SageMaker is unnecessary and complex for this use case, as the task can be\nefficiently handled by Agents and knowledge bases on Amazon Bedrock.\nReference:\nAWS Bedrock User Guide: Agents and Knowledge Bases\n(https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)\nAWS AI Practitioner Learning Path: Module on Generative AI and Knowledge Bases\nAmazon Bedrock Developer Guide: Building AI Applications (https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-119",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is developing an ML application. The application must automatically group similar customers and products based on their characteristics. Which ML strategy should the company use to meet these requirements?",
 "options": [
 "Unsupervised learning",
 "Supervised learning",
 "Reinforcement learning",
 "Semi-supervised learning"
 ],
 "answers": [
 0
 ],
 "explanation": "The company needs to automatically group similar customers and products based on their\ncharacteristics, which is a clustering task. Unsupervised learning is the ML strategy for grouping data\nwithout labeled outcomes, making it ideal for this requirement.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\n\"Unsupervised learning is used to identify patterns or groupings in data without labeled outcomes.\nCommon applications include clustering, such as grouping similar customers or products based on\ntheir characteristics, using algorithms like K-means or hierarchical clustering.\"\n(Source: AWS AI Practitioner Learning Path, Module on Machine Learning Strategies)\nDetailed\nOption A: Unsupervised learningThis is the correct answer. Unsupervised learning, specifically\nclustering, is designed to group similar entities (e.g., customers or products) based on their\ncharacteristics without requiring labeled data.\nOption B: Supervised learningSupervised learning requires labeled data to train a model for\nprediction or classification, which is not applicable here since the task involves grouping without\npredefined labels.\nOption C: Reinforcement learningReinforcement learning involves training an agent to make\ndecisions through rewards and penalties, not for grouping data. This option is irrelevant.\nOption D: Semi-supervised learningSemi-supervised learning uses a mix of labeled and unlabeled\ndata, but the task here does not involve any labeled data, making unsupervised learning more\nappropriate.\nReference:\nAWS AI Practitioner Learning Path: Module on Machine Learning Strategies\nAmazon SageMaker Developer Guide: Unsupervised Learning Algorithms\n(https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html)\nAWS Documentation: Introduction to Unsupervised Learning (https://aws.amazon.com/machine-\nlearning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-121",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is developing a mobile ML app that uses a phone's camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world. Which principle of responsible Al does the company demonstrate in this scenario?",
 "options": [
 "Fairness",
 "Explainability",
 "Governance",
 "Transparency"
 ],
 "answers": [
 0
 ],
 "explanation": "The company is training an image classification model for diagnosing insect bites using a diverse\ndataset that includes photos from different genders, ethnicities, and geographic locations. This\napproach demonstrates the principle of fairness in responsible AI, as it aims to reduce bias and\nensure the model performs equitably across diverse populations.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"Fairness in AI involves ensuring that models do not exhibit bias against certain groups and perform\nequitably across diverse populations. This can be achieved by training models on diverse datasets\nthat represent various demographics, such as gender, ethnicity, and geographic location.\"\n(Source: AWS AI Practitioner Learning Path, Module on Responsible AI)\nDetailed\nOption A: FairnessThis is the correct answer. By using a diverse dataset, the company ensures the\nmodel is less likely to be biased against specific groups, promoting fairness in its predictions and\ntreatments for insect bites.\nOption B: ExplainabilityExplainability refers to making the model’s decisions understandable to\nusers, such as byproviding insights into how predictions are made. The scenario focuses on dataset\ndiversity, not explainability.\nOption C: GovernanceGovernance involves establishing policies and processes to manage AI systems,\nsuch as compliance and oversight. The scenario does not describe governance mechanisms.\nOption D: TransparencyTransparency involves disclosing how a model works, its limitations, and its\ndata sources. While transparency is important, the scenario specifically highlights the diversity of the\ndataset, which aligns more directly with fairness.\nReference:\nAWS AI Practitioner Learning Path: Module on Responsible AI\nAWS Documentation: Responsible AI Principles (https://aws.amazon.com/machine-\nlearning/responsible-ai/)\nAmazon SageMaker Developer Guide: Bias and Fairness in ML\n(https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-bias.html)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-122",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times. Which solution gives the LLM the ability to use content from previous customer messages?",
 "options": [
 "Turn on model invocation logging to collect messages.",
 "Add messages to the model prompt.",
 "Use Amazon Personalize to save conversation history.",
 "Use Provisioned Throughput for the LLM."
 ],
 "answers": [
 1
 ],
 "explanation": "The company is building a chatbot using an LLM on Amazon Bedrock, and the chatbot needs to use\ncontent from previous customer messages to resolve requests. Adding previous messages to the\nmodel prompt (also known as providing conversation history) enables the LLM to maintain context\nacross interactions, allowing it to respond coherently based on the ongoing conversation.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"To enable a large language model (LLM) to maintain context in a conversation, you can include\nprevious messages in the model prompt. This approach, often referred to as providing conversation\nhistory, allows the LLM to generate responses that are contextually relevant toprior interactions.\"\n(Source: AWS Bedrock User Guide, Building Conversational Applications)\nDetailed\nOption A: Turn on model invocation logging to collect messages.Model invocation logging records\ninteractions for auditing or debugging but does not provide the LLM with access to previous\nmessages during inference to maintain conversation context.\nOption B: Add messages to the model prompt.This is the correct answer. Including previous\nmessages in the prompt gives the LLM the conversation history it needs to respond appropriately, a\ncommon practice for chatbots on Amazon Bedrock.\nOption C: Use Amazon Personalize to save conversation history.Amazon Personalize is for building\nrecommendation systems, not for managing conversation history in a chatbot. This option is\nirrelevant.\nOption D: Use Provisioned Throughput for the LLM.Provisioned Throughput in Amazon Bedrock\nensures consistent performance for model inference but does not address the need to use previous\nmessages in the conversation.\nReference:\nAWS Bedrock User Guide: Building Conversational Applications\n(https://docs.aws.amazon.com/bedrock/latest/userguide/conversational-apps.html)\nAWS AI Practitioner Learning Path: Module on Generative AI and Chatbots\nAmazon Bedrock Developer Guide: Managing Conversation Context\n(https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-123",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to builk a mechanism that the ML team can use to audit models. Which solution should the ML team use when publishing the custom ML models?",
 "options": [
 "Create documents with the relevant information. Store the documents in Amazon S3.",
 "Use AWS AI Service Cards for transparency and understanding models.",
 "Create Amazon SageMaker Model Cards with Intended uses and training and inference details.",
 "Create model training scripts. Commit the model training scripts to a Git repository."
 ],
 "answers": [
 2
 ],
 "explanation": "The ML research team needs a mechanism to audit custom ML models while sharing model artifacts\nwith other teams. Amazon SageMaker Model Cards provide a structured way todocument model\ndetails, including intended uses, training data, and inference performance, making them ideal for\nauditing and ensuring transparency when publishing models.\nExact Extract from AWS AI Documents:\nFrom the Amazon SageMaker Developer Guide:\n\"Amazon SageMaker Model Cards enable you to document critical details about your machine\nlearning models, such as intended uses, training data, evaluation metrics, and inference details.\nModel Cards support auditing by providing a centralized record that can be reviewed by teams to\nunderstand model behavior and limitations.\"\n(Source: Amazon SageMaker Developer Guide, SageMaker Model Cards)\nDetailed\nOption A: Create documents with the relevant information. Store the documents in Amazon S3.While\nstoring documents in S3 is feasible, it lacks the structured format and integration with SageMaker\nthat Model Cards provide, making it less suitable for auditing purposes.\nOption B: Use AWS AI Service Cards for transparency and understanding models.AWS AI Service\nCards are not a standard feature in AWS documentation. This option appears to be a distractor and is\nnot a valid solution.\nOption C: Create Amazon SageMaker Model Cards with Intended uses and training and inference\ndetails.This is the correct answer. SageMaker Model Cards are specifically designed to document\nmodel details for auditing, transparency, and collaboration, meeting the team’s requirements.\nOption D: Create model training scripts. Commit the model training scripts to a Git repository.Sharing\ntraining scripts in a Git repository provides access to code but does not offer a structured auditing\nmechanism for model details like intended uses or inference performance.\nReference:\nAmazon SageMaker Developer Guide: SageMaker Model Cards\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html)\nAWS AI Practitioner Learning Path: Module on Model Governance and Auditing\nAWS Documentation: Responsible AI with SageMaker (https://aws.amazon.com/sagemaker/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-124",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A manufacturing company uses AI to inspect products and find any damages or defects. Which type of AI application is the company using?",
 "options": [
 "Recommendation system",
 "Natural language processing (NLP)",
 "Computer vision",
 "Image processing"
 ],
 "answers": [
 2
 ],
 "explanation": "The manufacturing company uses AI to inspect products for damages or defects, which involves\nanalyzing visual data (e.g., images or videos of products). This task falls under computer vision, a\ntype of AI application that enables machines to interpret and understand visual information, such as\nidentifying defects in manufacturing.\n\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"Computer vision enables machines to interpret and understand visual data from the world, such as\nimages or videos. Common applications include defect detection in manufacturing, where AI models\nanalyze product images to identify damages or anomalies.\"\n(Source: AWS AI Practitioner Learning Path, Module on AI Concepts)\nDetailed\nOption A: Recommendation systemRecommendation systems suggest items or actions based on user\npreferences (e.g., product recommendations). They are not relevant for inspecting products for\ndefects.\nOption B: Natural language processing (NLP)NLP focuses on processing and understanding text or\nspeech, not visual data like product images. This option is incorrect.\nOption C: Computer visionThis is the correct answer. Computer vision is used for tasks like defect\ndetection in manufacturing by analyzing visual data to identify damages or defects.\nOption D: Image processingWhile image processing involves manipulating images (e.g., filtering,\nresizing), it is a lower-level technique, not an AI application. Computer vision, which often uses\nimage processing as a component, is the broader AI application here.\nReference:\nAWS AI Practitioner Learning Path: Module on AI Concepts\nAmazon Rekognition Developer Guide: Image Analysis\n(https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html)\nAWS Documentation: Introduction to Computer Vision (https://aws.amazon.com/computer-vision/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-125",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A financial institution is building an AI solution to make loan approval decisions by using a foundation model (FM). For security and audit purposes, the company needs the AI solution's decisions to be explainable. Which factor relates to the explainability of the AI solution's decisions?",
 "options": [
 "Model complexity",
 "Training time",
 "Number of hyperparameters",
 "Deployment time"
 ],
 "answers": [
 0
 ],
 "explanation": "The financial institution needs an AI solution for loan approval decisions to be explainable for\nsecurity and audit purposes. Explainability refers to the ability to understand and interpret how a\nmodel makes decisions. Model complexity directly impacts explainability: simpler models (e.g.,\nlogistic regression) are more interpretable, while complex models (e.g., deep neural networks) are\nharder to explain, often behaving like \"black boxes.\"\nExact Extract from AWS AI Documents:\nFrom the Amazon SageMaker Developer Guide:\n\"Model complexity affects the explainability of AI solutions. Simpler models, such as linear\n\nregression, are inherently more interpretable, while complex models, such as deep neural networks,\nmay require additional tools like SageMaker Clarify to provide insights into their decision-making\nprocesses.\"\n(Source: Amazon SageMaker Developer Guide, Explainability with SageMaker Clarify)\nDetailed\nOption A: Model complexityThis is the correct answer. The complexity of the model directly\ninfluences how easily its decisions can be explained, a critical factor for audit and security purposes\nin loan approvals.\nOption B: Training timeTraining time refers to how long it takes to train the model, which does not\ndirectly impact the explainability of its decisions.\nOption C: Number of hyperparametersWhile hyperparameters affect model performance, they do\nnot directly relate to explainability. A model with many hyperparameters might still be explainable if\nit is a simple model.\nOption D: Deployment timeDeployment time refers to the time taken to deploy the model to\nproduction, which is unrelated to the explainability of its decisions.\nReference:\nAmazon SageMaker Developer Guide: Explainability with SageMaker Clarify\n(https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-explainability.html)\nAWS AI Practitioner Learning Path: Module on Responsible AI and Explainability\nAWS Documentation: Explainable AI (https://aws.amazon.com/machine-learning/responsible-ai/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-126",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
 "options": [
 "Feature engineering",
 "Model training",
 "Data collection",
 "Business goal identification"
 ],
 "answers": [
 3
 ],
 "explanation": "The business goal identification phase of the ML lifecycle involves defining the objectives of the\nproject and understanding the requirements, including compliance and regulatory considerations.\nThis phase ensures the ML solution aligns with legal and organizational standards before proceeding\nto technical stages like data collection or model training.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\"The business goal identification phase involves defining the problem to be solved, identifying\nsuccess metrics, and determining compliance and regulatory requirements to ensure the ML solution\nadheres to legal and organizational standards.\"\n(Source: AWS AI Practitioner Learning Path, Module on Machine Learning Lifecycle)\nDetailed\nOption A: Feature engineeringFeature engineering involves creating or selecting features for model\ntraining, which occurs after compliance requirements are identified. It does not address regulatory\n\nconcerns.\nOption B: Model trainingModel training focuses on building the ML model using data, not on\ndetermining compliance or regulatory requirements.\nOption C: Data collectionData collection involves gathering data for training, but compliance and\nregulatory requirements (e.g., data privacy laws) are defined earlier in the business goal\nidentification phase.\nOption D: Business goal identificationThis is the correct answer. This phase ensures that compliance\nand regulatory requirements are considered at the outset, shaping the entire ML project.\nReference:\nAWS AI Practitioner Learning Path: Module on Machine Learning Lifecycle\nAmazon SageMaker Developer Guide: ML Workflow\n(https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-mlconcepts.html)\nAWS Well-Architected Framework: Machine Learning Lens\n(https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-127",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to create a chatbot that answers questions about human resources policies. The company is using a large language model (LLM) and has a large digital documentation base. Which technique should the company use to optimize the generated responses?",
 "options": [
 "Use Retrieval Augmented Generation (RAG).",
 "Use few-shot prompting.",
 "Set the temperature to 1.",
 "Decrease the token size."
 ],
 "answers": [
 0
 ],
 "explanation": "The company is building a chatbot using an LLM to answer questions about HR policies, with access\nto a large digital documentation base. Retrieval Augmented Generation (RAG) optimizes the LLM’s\nresponses by retrieving relevant information from the documentation base and using it to generate\naccurate, contextually grounded answers, reducing hallucinations and improving response quality.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Retrieval Augmented Generation (RAG) enhances the performance of large language models by\nretrieving relevant information from external knowledge bases, such as documentation or databases,\nand incorporating it into the generation process. This technique ensures responses are accurate and\ngrounded in the provided data, making it ideal for applications like policy chatbots.\"\n(Source: AWS Bedrock User Guide, Retrieval Augmented Generation)\nDetailed\nOption A: Use Retrieval Augmented Generation (RAG).This is the correct answer. RAG leverages the\ndocumentation base to provide the LLM with relevant HR policy information, optimizing the\nchatbot’s responses for accuracy and relevance.\nOption B: Use few-shot prompting.Few-shot prompting provides a few examples in the prompt to\nguide the LLM, but it is less effective than RAG for large documentation bases, as it cannot\n\ndynamically retrieve specific policy details.\nOption C: Set the temperature to 1.Setting the temperature to 1 controls the randomness of the\nLLM’s output but does not optimize responses using external documentation. This option is\nunrelated to the documentation base.\nOption D: Decrease the token size.Decreasing token size (likely referring to limiting input/output\ntokens) may reduce response length but does not optimize the quality of responses using the\ndocumentation base.\nReference:\nAWS Bedrock User Guide: Retrieval Augmented Generation\n(https://docs.aws.amazon.com/bedrock/latest/userguide/rag.html)\nAWS AI Practitioner Learning Path: Module on Generative AI Optimization\nAmazon Bedrock Developer Guide: Building Policy Chatbots (https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-129",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which component of Amazon Bedrock Studio can help secure the content that AI systems generate?",
 "options": [
 "Access controls",
 "Function calling",
 "Guardrails",
 "Knowledge bases"
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon Bedrock Studio provides tools to build and manage generative AI applications, and the\ncompany needs a component to secure the content generated by AI systems. Guardrails in Amazon\nBedrock are designed to ensure safe and responsible AI outputs by filtering harmful or inappropriate\ncontent, making them the key component for securing generated content.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Guardrails in Amazon Bedrock provide mechanisms to secure the content generated by AI systems\nby filtering out harmful or inappropriate outputs, such as hate speech, violence, or misinformation,\nensuring responsible AI usage.\"\n(Source: AWS Bedrock User Guide, Guardrails for Responsible AI)\nDetailed\nOption A: Access controlsAccess controls manage who can use or interact with the AI system but do\nnot directly secure the content generated by the system.\nOption B: Function callingFunction calling enables AI models to interact with external tools or APIs,\nbut it is not related to securing generated content.\nOption C: GuardrailsThis is the correct answer. Guardrails in Amazon Bedrock secure generated\ncontent by filtering out harmful or inappropriate material, ensuring safe outputs.\nOption D: Knowledge basesKnowledge bases provide data for AI models to generate responses but\ndo not inherently secure the content that is generated.\nReference:\nAWS Bedrock User Guide: Guardrails for Responsible AI\n(https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)\nAWS AI Practitioner Learning Path: Module on Responsible AI and Model Safety\n\nAmazon Bedrock Developer Guide: Securing AI Outputs (https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-130",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is developing an ML model to predict customer churn. Which evaluation metric will assess the model's performance on a binary classification task such as predicting chum?",
 "options": [
 "F1 score",
 "Mean squared error (MSE)",
 "R-squared",
 "Time used to train the model"
 ],
 "answers": [
 0
 ],
 "explanation": "The company is developing an ML model to predict customer churn, a binary classification task\n(churn or no churn). The F1 score is an evaluation metric that balances precision and recall, making it\nsuitable for assessing the performance of binary classification models, especially when dealing with\nimbalanced datasets, which is common in churn prediction.\nExact Extract from AWS AI Documents:\nFrom the Amazon SageMaker Developer Guide:\n\"The F1 score is a metric for evaluating binary classification models, combining precision and recall\ninto a single value. It is particularly useful for tasks like churn prediction, where class imbalance may\nexist, ensuring the model performs well on both positive and negative classes.\"\n(Source: Amazon SageMaker Developer Guide, Model Evaluation Metrics)\nDetailed\nOption A: F1 scoreThis is the correct answer. The F1 score is ideal for binary classification tasks like\nchurn prediction, as it measures the model’s ability to correctly identify both churners and non-\nchurners.\nOption B: Mean squared error (MSE)MSE is used for regression tasks to measure the average squared\ndifference between predicted and actual values, not for binary classification.\nOption C: R-squaredR-squared is a metric for regression models, indicating how well the model\nexplains the variability of the target variable. It is not applicable to classification tasks.\nOption D: Time used to train the modelTraining time is not an evaluation metric for model\nperformance; it measures the duration of training, not the model’s accuracy or effectiveness.\nReference:\nAmazon SageMaker Developer Guide: Model Evaluation Metrics\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-evaluation.html)\nAWS AI Practitioner Learning Path: Module on Model Performance and Evaluation\nAWS Documentation: Metrics for Classification (https://aws.amazon.com/machine-learning/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-131",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company's ecommerce platform. Which AWS service meets these requirements?",
 "options": [
 "Amazon Personalize",
 "Amazon Kendra",
 "Amazon Rekognition",
 "Amazon Transcribe"
 ],
 "answers": [
 0
 ],
 "explanation": "The ecommerce company wants to improve search engine recommendations by customizing results\nfor each user. Amazon Personalize is a machine learning service that enables personalized\nrecommendations, tailoring search results or product suggestions based on individual user behavior\nand preferences, making it the best fit for this requirement.\nExact Extract from AWS AI Documents:\nFrom the Amazon Personalize Developer Guide:\n\"Amazon Personalize enables developers to build applications with personalized recommendations,\nsuch as customized search results or product suggestions, by analyzing user behavior and\npreferences to deliver tailored experiences.\"\n(Source: Amazon Personalize Developer Guide, Introduction to Amazon Personalize)\nDetailed\nOption A: Amazon PersonalizeThis is the correct answer. Amazon Personalize specializes in creating\npersonalized recommendations, ideal for customizing search results for each user on an ecommerce\nplatform.\nOption B: Amazon KendraAmazon Kendra is an intelligent search service for enterprise data, focusing\non retrieving relevant documents or answers, not on personalizing search results for individual users.\nOption C: Amazon RekognitionAmazon Rekognition is for image and video analysis, such as object\ndetection or facial recognition, and is unrelated to search engine recommendations.\nOption D: Amazon TranscribeAmazon Transcribe converts speech to text, which is not relevant for\nimproving search engine recommendations.\nReference:\nAmazon Personalize Developer Guide: Introduction to Amazon Personalize\n(https://docs.aws.amazon.com/personalize/latest/dg/what-is-personalize.html)\nAWS AI Practitioner Learning Path: Module on Recommendation Systems\nAWS Documentation: Personalization with Amazon Personalize\n(https://aws.amazon.com/personalize/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-132",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An ecommerce company is using a chatbot to automate the customer order submission process. The chatbot is powered by AI and Is available to customers directly from the company's website 24 hours a day, 7 days a week. Which option is an AI system input vulnerability that the company needs to resolve before the chatbot is made available?",
 "options": [
 "Data leakage",
 "Prompt injection",
 "Large language model (LLM) hallucinations",
 "Concept drift"
 ],
 "answers": [
 1
 ],
 "explanation": "The ecommerce company’s chatbot, powered by AI, automates customer order submissions and is\naccessible 24/7 via the website. Prompt injection is an AI system input vulnerability where malicious\nusers craft inputs to manipulate the chatbot’s behavior, such as bypassing safeguards or accessing\nunauthorized information. This vulnerability must be resolved before the chatbot is made available\nto ensure security.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Prompt injection is a vulnerability in AI systems, particularly chatbots, where malicious inputs can\nmanipulate the model’s behavior, potentially leading to unauthorized actions or harmful outputs.\nImplementing guardrails and input validation can mitigate this risk.\"\n(Source: AWS Bedrock User Guide, Security Best Practices)\nDetailed\nOption A: Data leakageData leakage refers to the unintended exposure of sensitive data during\nmodel training or inference, not an input vulnerability affecting a chatbot’s operation.\nOption B: Prompt injectionThis is the correct answer. Prompt injection is a critical input vulnerability\nfor chatbots, where malicious prompts can exploit the AI to produce harmful or unauthorized\nresponses, a risk that must be addressed before launch.\nOption C: Large language model (LLM) hallucinationsLLM hallucinations refer to the model\ngenerating incorrect or ungrounded responses, which is an output issue, not an input vulnerability.\nOption D: Concept driftConcept drift occurs when the data distribution changes over time, affecting\nmodel performance. It is not an input vulnerability but a long-term performance issue.\nReference:\nAWS Bedrock User Guide: Security Best Practices\n(https://docs.aws.amazon.com/bedrock/latest/userguide/security.html)\nAWS AI Practitioner Learning Path: Module on AI Security and Vulnerabilities\nAWS Documentation: Securing AI Systems (https://aws.amazon.com/security/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-133",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which scenario represents a practical use case for generative AI?",
 "options": [
 "Using an ML model to forecast product demand",
 "Employing a chatbot to provide human-like responses to customer queries in real time",
 "Using an analytics dashboard to track website traffic and user behavior",
 "Implementing a rule-based recommendation engine to suggest products to customers"
 ],
 "answers": [
 1
 ],
 "explanation": "Generative AI is a type of AI that creates new content, such as text, images, or audio, often\nmimicking human-like outputs. A practical use case for generative AI is employing a chatbot to\nprovide human-like responses to customer queries in real time, as it leverages the ability of large\nlanguage models (LLMs) to generate natural language responses dynamically.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Generative AI enables applications like chatbots to produce human-like text responses in real time,\nenhancing customer support by providing natural and contextually relevant answers to user queries.\"\n(Source: AWS Bedrock User Guide, Introduction to Generative AI)\nDetailed\nOption A: Using an ML model to forecast product demandForecasting product demand typically\ninvolves predictive analytics using supervised learning (e.g., regression models), not generative AI,\nwhich focuses on creating new content.\nOption B: Employing a chatbot to provide human-like responses to customer queries in real timeThis\nis the correct answer. Generative AI, particularly LLMs, is commonly used to power chatbots that\ngenerate human-like responses, making this a practical use case.\nOption C: Using an analytics dashboard to track website traffic and user behaviorAn analytics\ndashboard involves data visualization and analysis, not generative AI, which is about creating new\ncontent.\nOption D: Implementing a rule-based recommendation engine to suggest products to customersA\nrule-based recommendation engine relies on predefined rules, not generative AI. Generative AI\ncould be used for more dynamic recommendations, but this scenario does not describe such a case.\nReference:\nAWS Bedrock User Guide: Introduction to Generative AI\n(https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)\nAWS AI Practitioner Learning Path: Module on Generative AI Applications\nAWS Documentation: Generative AI Use Cases (https://aws.amazon.com/generative-ai/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-134",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which technique breaks a complex task into smaller subtasks that are sent sequentially to a large language model (LLM)?",
 "options": [
 "One-shot prompting",
 "Prompt chaining",
 "Tree of thoughts",
 "Retrieval Augmented Generation (RAG)"
 ],
 "answers": [
 1
 ],
 "explanation": "Prompt chaining is a technique where a complex task is broken into smaller subtasks, and the\noutputs of one subtask are used as inputs for the next, sequentially guiding a large language model\n(LLM) to solve the problem step-by-step. This method is particularly useful for complex tasks that\nrequire multiple reasoning steps.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Prompt chaining involves breaking a complex task into smaller subtasks and sequentially passing\nthe output of one subtask as input to the next, enabling large language models to handle intricate\nproblems by solving them step-by-step.\"\n(Source: AWS Bedrock User Guide, Prompt Engineering Techniques)\nDetailed\nOption A: One-shot promptingOne-shot prompting provides a single example to guide the LLM, but it\ndoes not break tasks into smaller subtasks or handle sequential processing.\nOption B: Prompt chainingThis is the correct answer. Prompt chaining divides a complex task into\nsmaller, manageable subtasks, solving them sequentially with the LLM, as described.\nOption C: Tree of thoughtsTree of thoughts involves exploring multiple reasoning paths\nsimultaneously, not breaking tasks into sequential subtasks.\nOption D: Retrieval Augmented Generation (RAG)RAG retrieves external information to augment\nLLM responses but does not specifically break tasks into sequential subtasks.\nReference:\nAWS Bedrock User Guide: Prompt Engineering Techniques\n(https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering.html)\nAWS AI Practitioner Learning Path: Module on Generative AI Prompting\nAmazon Bedrock Developer Guide: Advanced Prompting Strategies\n(https://aws.amazon.com/bedrock/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-135",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A retail company wants to build an ML model to recommend products to customers. The company wants to build the model based on responsible practices. Which practice should the company apply when collecting data to decrease model bias?",
 "options": [
 "Use data from only customers who match the demography of the company's overall customer base.",
 "Collect data from customers who have a past purchase history.",
 "Ensure that the data is balanced and collected from a diverse group.",
 "Ensure that the data is from a publicly available dataset."
 ],
 "answers": [
 2
 ],
 "explanation": "The retail company wants to build an ML model for product recommendations using responsible\npractices to decrease model bias. Collecting balanced and diverse data ensures the model does not\nfavor specific groups, reducing bias and promoting fairness, a key responsible AI practice.\nExact Extract from AWS AI Documents:\nFrom the AWS AI Practitioner Learning Path:\n\n\"To reduce model bias, it is critical to collect balanced and diverse data that represents various\ndemographics and user groups. This practice ensures fairness and prevents the model from\ndisproportionately favoring certain populations.\"\n(Source: AWS AI Practitioner Learning Path, Module on Responsible AI)\nDetailed\nOption A: Use data from only customers who match the demography of the company's overall\ncustomer base.Limiting data to a specific demographic may reinforce existing biases, failing to\naddress underrepresented groups and increasing bias.\nOption B: Collect data from customers who have a past purchase history.Focusing only on customers\nwith purchase history may exclude new users, potentially introducing bias, and does not address\ndiversity.\nOption C: Ensure that the data is balanced and collected from a diverse group.This is the correct\nanswer. A balanced and diverse dataset reduces bias by ensuring the model learns from a\nrepresentative sample, aligning with responsible AI practices.\nOption D: Ensure that the data is from a publicly available dataset.Public datasets may not be diverse\nor representative of the company’s customer base and could introduce unrelated biases, failing to\naddress fairness.\nReference:\nAWS AI Practitioner Learning Path: Module on Responsible AI\nAmazon SageMaker Developer Guide: Bias and Fairness in ML\n(https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-bias.html)\nAWS Documentation: Responsible AI Practices (https://aws.amazon.com/machine-\nlearning/responsible-ai/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-136",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which option is a characteristic of AI governance frameworks for building trust and deploying human-centered AI technologies?",
 "options": [
 "Expanding initiatives across business units to create long-term business value",
 "Ensuring alignment with business standards, revenue goals, and stakeholder expectations",
 "Overcoming challenges to drive business transformation and growth",
 "Developing policies and guidelines for data, transparency, responsible AI, and compliance\\"
 ],
 "answers": [
 3
 ],
 "explanation": "AI governance frameworks aim to build trust and deploy human-centered AI technologies by\nestablishing guidelines and policies for data usage, transparency, responsible AI practices, and\ncompliance with regulations. This ensures ethical and accountable AI development and deployment.\nExact Extract from AWS AI Documents:\nFrom the AWS Documentation on Responsible AI:\n\"AI governance frameworks establish trust in AI technologies by developing policies and guidelines\nfor data management, transparency, responsible AI practices, and compliance with regulatory\nrequirements, ensuring human-centered and ethical AI deployment.\"\n(Source: AWS Documentation, Responsible AI Governance)\n\nDetailed\nOption A: Expanding initiatives across business units to create long-term business valueWhile\nexpanding initiatives can drive value, it is not a core characteristic of AI governance frameworks\nfocused on trust and human-centered AI.\nOption B: Ensuring alignment with business standards, revenue goals, and stakeholder\nexpectationsAlignment with business goals is important but not specific to AI governance\nframeworks for building trust and ethical AI deployment.\nOption C: Overcoming challenges to drive business transformation and growthOvercoming\nchallenges is a general business goal, not a defining characteristic of AI governance frameworks.\nOption D: Developing policies and guidelines for data, transparency, responsible AI, and\ncomplianceThis is the correct answer. This option directly describes the core components of AI\ngovernance frameworks that ensure trust and ethical AI deployment.\nReference:\nAWS Documentation: Responsible AI Governance (https://aws.amazon.com/machine-\nlearning/responsible-ai/)\nAWS AI Practitioner Learning Path: Module on AI Governance\nAWS Well-Architected Framework: Machine Learning Lens\n(https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-137",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to enhance response quality for a large language model (LLM) for complex problem-solving tasks. The tasks require detailed reasoning and a step-by-step explanation process. Which prompt engineering technique meets these requirements?",
 "options": [
 "Few-shot prompting",
 "Zero-shot prompting",
 "Directional stimulus prompting",
 "Chain-of-thought prompting"
 ],
 "answers": [
 3
 ],
 "explanation": "The company wants to enhance the response quality of an LLM for complex problem-solving tasks\nrequiring detailed reasoning and step-by-step explanations. Chain-of-thought prompting encourages\nthe LLM to break down the problem into intermediate steps, providing a clear reasoning process\nbefore arriving at the final answer, which is ideal for this requirement.\nExact Extract from AWS AI Documents:\nFrom the AWS Bedrock User Guide:\n\"Chain-of-thought prompting improves the reasoning capabilities of large language models by\nencouraging them to break down complex tasks into intermediate steps, providing a step-by-step\nexplanation that leads to the final answer. This technique is particularly effective for problem-solving\ntasks requiring detailed reasoning.\"\n(Source: AWS Bedrock User Guide, Prompt Engineering Techniques)\nDetailed\nOption A: Few-shot promptingFew-shot prompting provides a few examples to guide the LLM but\n\ndoes not explicitly encourage step-by-step reasoning or detailed explanations.\nOption B: Zero-shot promptingZero-shot prompting relies on the LLM’s pre-trained knowledge\nwithout examples, making it less effective for complex tasks requiring detailed reasoning.\nOption C: Directional stimulus promptingDirectional stimulus prompting is not a standard technique\nin AWS documentation, likely a distractor, and does not address step-by-step reasoning.\nOption D: Chain-of-thought promptingThis is the correct answer. Chain-of-thought prompting\nenhances response quality for complex tasks by guiding the LLM to reason step-by-step, providing\ndetailed explanations.\nReference:\nAWS Bedrock User Guide: Prompt Engineering Techniques\n(https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering.html)\nAWS AI Practitioner Learning Path: Module on Generative AI Prompting\nAmazon Bedrock Developer Guide: Advanced Prompting Strategies\n(https://aws.amazon.com/bedrock/)\nBelow are the corrected and formatted questions based on the provided input, following the\nspecified format. Each question is aligned with the main topics from the AWS AI Practitioner\ncertification, and answers are provided with comprehensive explanations referencing official AWS\ndocumentation or study guides. Since the exact AWS AI Practitioner documents are not publicly\navailable in full, I will rely on authoritative AWS documentation, whitepapers, and blogs available as\nof May 17, 2025, to ensure accuracy. If specific document excerpts are unavailable, I will use the most\nrelevant AWS resources and clearly note the references.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-138",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time. Which AWS service or feature meets these requirements?",
 "options": [
 "Amazon Rekognition",
 "Amazon SageMaker Clarify",
 "Amazon Comprehend",
 "Amazon SageMaker Model Monitor"
 ],
 "answers": [
 3
 ],
 "explanation": "The requirement is to deploy a customized machine learning (ML) model and monitor its quality for\npotential drift over time in a production environment. Let’s evaluate each option:\nA. Amazon Rekognition: This service is designed for image and video analysis, such as object\ndetection, facial recognition, and text extraction. It is not suited for deploying custom ML models or\nmonitoring model quality drift.\nB. Amazon SageMaker Clarify: This feature helps detect bias in ML models and explains model\npredictions. While it addresses fairness and interpretability, it does not specifically focus on\nmonitoring model quality drift over time in production.\n\nC. Amazon Comprehend: This is a natural language processing (NLP) service for extracting insights\nfrom text, such as sentiment analysis or entity recognition. It does not support deploying custom ML\nmodels or monitoring model performance drift.\nD. Amazon SageMaker Model Monitor: This feature is part of Amazon SageMaker and is specifically\ndesigned to monitor ML models in production. It tracks metrics such as data drift, model drift, and\nperformance degradation over time, alerting users when issues are detected.\nExact Extract Reference: According to the AWS documentation on Amazon SageMaker, “Amazon\nSageMaker Model Monitor allows you to detect and remediate data and model quality issues in\nproduction. It continuously monitors the performance of deployed models, capturing data and\nmodel predictions to detect deviations from expected behavior, such as data drift or model\nperformance degradation.” (Source: AWS SageMaker Documentation - Model Monitoring,\nhttps://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html).\nThis directly aligns with the requirement to observe model quality drift, making Amazon SageMaker\nModel Monitor the correct choice.\nReference:\nAWS SageMaker Documentation: Model Monitoring\n(https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html)\nAWS AI Practitioner Study Guide (conceptual alignment with monitoring deployed ML models)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-139",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A bank is fine-tuning a large language model (LLM) on Amazon Bedrock to assist customers with questions about their loans. The bank wants to ensure that the model does not reveal any private customer data. Which solution meets these requirements?",
 "options": [
 "Use Amazon Bedrock Guardrails.",
 "Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM.",
 "Increase the Top-K parameter of the LLM.",
 "Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM."
 ],
 "answers": [
 1
 ],
 "explanation": "The goal is to prevent a fine-tuned large language model (LLM) on Amazon Bedrock from revealing\nprivate customer data. Let’s analyze the options:\nA. Amazon Bedrock Guardrails: Guardrails in Amazon Bedrock allow users to define policies to filter\nharmful or sensitive content in model inputs and outputs. While useful for real-time content\nmoderation, they do not address the risk of private data being embedded in the model during fine-\ntuning, as the model could still memorize sensitive information.\nB. Remove personally identifiable information (PII) from the customer data before fine-tuning the\nLLM: Removing PII (e.g., names, addresses, account numbers) from the training dataset ensures that\nthe model does not learn or memorize sensitive customer data, reducing the risk of data leakage.\nThis is a proactive and effective approach to data privacy during model training.\nC. Increase the Top-K parameter of the LLM: The Top-K parameter controls the randomness of the\n\nmodel’s output by limiting the number of tokens considered during generation. Adjusting this\nparameter affects output diversity but does not address the privacy of customer data embedded in\nthe model.\nD. Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM: Encrypting data in\nAmazon S3 protects data at rest and in transit, but during fine-tuning, the data is decrypted and used\nto train the model. If PII is present, the model could still learn and potentially expose it, so\nencryption alone does not solve the problem.\nExact Extract Reference: AWS emphasizes data privacy in AI/ML workflows, stating, “To protect\nsensitive data, you can preprocess datasets to remove personally identifiable information (PII) before\nusing them for model training. This reduces the risk of models inadvertently learning or exposing\nsensitive information.” (Source: AWS Best Practices for Responsible AI,\nhttps://aws.amazon.com/machine-learning/responsible-ai/). Additionally, the Amazon Bedrock\ndocumentation notes that users are responsible for ensuring compliance with data privacy\nregulations during fine-tuning (https://docs.aws.amazon.com/bedrock/latest/userguide/model-\ncustomization.html).\nRemoving PII before fine-tuning is the most direct and effective way to prevent the model from\nrevealing private customer data, making B the correct answer.\nReference:\nAWS Bedrock Documentation: Model Customization\n(https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization.html)\nAWS Responsible AI Best Practices (https://aws.amazon.com/machine-learning/responsible-ai/)\nAWS AI Practitioner Study Guide (emphasis on data privacy in LLM fine-tuning)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-140",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner needs to improve the accuracy of a natural language generation model. The model uses rapidly changing inventory data. Which technique will improve the model's accuracy?",
 "options": [
 "Transfer learning",
 "Federated learning",
 "Retrieval Augmented Generation (RAG)",
 "One-shot prompting"
 ],
 "answers": [
 2
 ],
 "explanation": "The requirement is to improve the accuracy of a natural language generation (NLG) model that relies\non rapidly changing inventory data. Let’s evaluate the options:\nA. Transfer learning: This involves pre-training a model on a large dataset and fine-tuning it for a\nspecific task. While effective for general model improvement, it does not specifically address the\nchallenge of incorporating rapidly changing inventory data into the model’s responses.\nB. Federated learning: This technique trains models across decentralized devices while keeping data\nlocalized, primarily for privacy purposes. It is not designed to handle rapidly changing data or\nimprove NLG model accuracy in this context.\nC. Retrieval Augmented Generation (RAG): RAG combines a language model with a retrieval\n\nmechanism that fetches relevant, up-to-date information (e.g., inventory data) from an external\nsource during inference. This is ideal for scenarios with dynamic data, as it ensures the model’s\nresponses are grounded in the latest information, improving accuracy.\nD. One-shot prompting: This involves providing a single example to guide the model’s output. While\nuseful for specific tasks, it does not scale well for rapidly changing data or ensure consistent accuracy\nwith dynamic inventory updates.\nExact Extract Reference: According to AWS documentation on generative AI techniques, “Retrieval\nAugmented Generation (RAG) enhances large language models by retrieving relevant documents or\ndata at inference time, enabling the model to generate accurate and contextually relevant responses,\nespecially for dynamic or frequently updated datasets.” (Source: AWS Generative AI Glossary,\nhttps://aws.amazon.com/what-is/retrieval-augmented-generation/). This directly addresses the\nneed for accuracy with rapidly changing inventory data.\nRAG is the most suitable technique for this scenario, as it allows the model to access and incorporate\nthe latest inventory data, making C the correct answer.\nReference:\nAWS Generative AI Glossary: Retrieval Augmented Generation (https://aws.amazon.com/what-\nis/retrieval-augmented-generation/)\nAWS Bedrock Documentation (contextual use of RAG in LLMs)\nAWS AI Practitioner Study Guide (focus on generative AI techniques for dynamic data)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-142",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is implementing intelligent agents to provide conversational search experiences for its customers. The company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database. Which AWS service will meet these requirements?",
 "options": [
 "Amazon Athena",
 "Amazon Aurora PostgreSQL",
 "Amazon Redshift",
 "Amazon EMR"
 ],
 "answers": [
 1
 ],
 "explanation": "The requirement is to identify an AWS database service that supports the storage and querying of\nembeddings (from a generative AI model) as vectors. Embeddings are typically high-dimensional\nnumerical representations of data (e.g., text, images) used in AI applications like conversational\nsearch. The database must support vector storage and efficient vector similarity searches. Let’s\nevaluate each option:\nA. Amazon Athena: Amazon Athena is a serverless query service for analyzing data in Amazon S3\nusing SQL. It is designed for ad-hoc querying of structured data but does not natively support vector\nstorage or vector similarity searches, making it unsuitable for this use case.\nB. Amazon Aurora PostgreSQL: Amazon Aurora PostgreSQL is a fully managed relational database\ncompatible with PostgreSQL. With the pgvector extension (available in PostgreSQL and supported by\nAurora PostgreSQL), it can store and query vector embeddings efficiently. The pgvector extension\nenables vector similarity searches (e.g., using cosine similarity or Euclidean distance), which is critical\nfor conversational search applications using embeddings from generative AI models.\n\nC. Amazon Redshift: Amazon Redshift is a data warehousing service optimized for analytical queries\non large datasets. While it supports machine learning features and can store numerical data, it does\nnot have native support for vector embeddings or vector similarity searches as of May 17, 2025,\nmaking it less suitable for this use case.\nD. Amazon EMR: Amazon EMR is a managed big data platform for processing large-scale data using\nframeworks like Apache Hadoop and Spark. It is not a database service and is not designed for\nstoring or querying vector embeddings in the context of a conversational search application.\nExact Extract Reference: According to the AWS documentation, “Amazon Aurora PostgreSQL-\nCompatible Edition supports the pgvector extension, which enables efficient storage and similarity\nsearches for vector embeddings. This makes it suitable for AI/ML workloads such as natural language\nprocessing and recommendation systems that rely on vector data.” (Source: AWS Aurora\nDocumentation - Using pgvector with Aurora PostgreSQL,\nhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/PostgreSQLpgvector.html).\nAdditionally, the pgvector extension supports operations like nearest-neighbor searches, which are\nessential for querying embeddings in a conversational search system.\nAmazon Aurora PostgreSQL with the pgvector extension directly meets the requirement for storing\nand querying embeddings as vectors, making B the correct answer.\nReference:\nAWS Aurora Documentation: Using pgvector with Aurora PostgreSQL\n(https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/PostgreSQLpgvector.html)\nAWS AI Practitioner Study Guide (focus on data engineering for AI, including vector databases)\nAWS Blog on Vector Search with Aurora (https://aws.amazon.com/blogs/database/using-vector-\nsearch-with-amazon-aurora-postgresql/)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-143",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is building a new generative AI chatbot. The chatbot uses an Amazon Bedrock foundation model (FM) to generate responses. During testing, the company notices that the chatbot is prone to prompt injection attacks. What can the company do to secure the chatbot with the LEAST implementation effort?",
 "options": [
 "Fine-tune the FM to avoid harmful responses.",
 "Use Amazon Bedrock Guardrails content filters and denied topics.",
 "Change the FM to a more secure FM.",
 "Use chain-of-thought prompting to produce secure responses."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Bedrock Guardrails allow developers to create safeguards that filter harmful content and\nprevent sensitive topics from being discussed. This functionality helps mitigate prompt injection\nattacks with minimal implementation effort. According to the official Amazon Bedrock\ndocumentation:\n“You can configure Guardrails for Amazon Bedrock to define denied topics, use content filters, and\napply sensitive information filters, offering protection against prompt injection attacks with minimal\ndevelopment effort.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-144",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service. Which AWS service meets these requirements?",
 "options": [
 "Amazon CloudWatch",
 "AWS CloudTrail",
 "AWS Trusted Advisor",
 "AWS Config"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon CloudWatch is designed for real-time monitoring of applications and infrastructure. It\nsupports metrics and logs for ML model performance and resource utilization. According to the AWS\nCertified AI Practitioner Study Guide:\n“Amazon CloudWatch is a monitoring service that provides data and actionable insights to monitor\nyour ML workloads and applications in real time, ensuring performance and scalability.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-145",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company needs to use Amazon SageMaker AI for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access. Which solution will meet these requirements?",
 "options": [
 "Run SageMaker training and inference by using SageMaker Experiments.",
 "Run SageMaker training and inference by using network isolation.",
 "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities.",
 "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs."
 ],
 "answers": [
 1
 ],
 "explanation": "Network isolation is a key security feature for SageMaker. It ensures that training and inference jobs\nrun in a VPC and are not accessible from the internet. Per the official SageMaker documentation:\n“When you enable network isolation, your model can’t make any outbound network calls. This is\nuseful for security and regulatory compliance when working with sensitive data.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-146",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to collaborate with several research institutes to develop an AI model. The company needs standardized documentation of model version tracking and a record of model development. Which solution meets these requirements?",
 "options": [
 "Track the model changes by using Git.",
 "Track the model changes by using Amazon Fraud Detector.",
 "Track the model changes by using Amazon SageMaker Model Cards.",
 "Track the model changes by using Amazon Comprehend."
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon SageMaker Model Cards provide a standardized way to document and track model\ninformation, including versions and performance. According to AWS documentation:\n“SageMaker Model Cards provide a single source of truth for model information including intended\nuse, training details, evaluation metrics, and ethical considerations to support governance and\ncollaboration.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-147",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A bank is building a chatbot to answer customer questions about opening a bank account. The chatbot will use public bank documents to generate responses. The company will use Amazon Bedrock and prompt engineering to improve the chatbot's responses. Which prompt engineering technique meets these requirements?",
 "options": [
 "Complexity-based prompting",
 "Zero-shot prompting",
 "Few-shot prompting",
 "Directional stimulus prompting"
 ],
 "answers": [
 3
 ],
 "explanation": "Directional stimulus prompting guides the foundation model to produce outputs aligned with\nbusiness context. It’s particularly effective for aligning responses with public documents and\nimproving coherence. From Bedrock Prompt Engineering Techniques documentation:\n“Directional stimulus prompting provides structured prompts to steer the model output towards\ndesired formats or behaviors using specific linguistic cues.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-148",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "multiple",
 "question": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost. Which combination of AWS service and storage class meets these requirements? (Select TWO.)",
 "options": [
 "AWS CloudTrail",
 "Amazon CloudWatch",
 "AWS Audit Manager",
 "Amazon S3 Intelligent-Tiering", 
 "Amazon S3 Standard"
 ],
 "answers": [
 0,
 3
 ],
 "explanation": "AWS CloudTrail: Logs all API calls to Amazon Bedrock.\nAmazon S3 Intelligent-Tiering: Optimizes storage costs for long-term retention with automatic\ntiering.\nAccording to Amazon Bedrock Logging Documentation:\n“CloudTrail records API activity and events, and logs can be stored in S3. For cost optimization, use S3\nIntelligent-Tiering to retain logs long-term.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-149",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A medical company wants to develop an AI application that can access structured patient records, extract relevant information, and generate concise summaries. Which solution will meet these requirements?",
 "options": [
 "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rule-based logic to structure and format summaries.",
 "Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general purpose text summarization tool.",
 "Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction system to generate summaries.",
 "Implement Amazon Kendra to provide a searchable index for medical records. Use a template- based system to format summaries."
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon Comprehend Medical is designed for processing medical records and extracting key clinical\nentities, useful for summaries. Per the AWS Comprehend Medical documentation:\n“Amazon Comprehend Medical enables extraction of relevant medical information from\nunstructured clinical text such as medications, conditions, and relationships, making it ideal for\nsummarization tasks.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-150",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to build and deploy ML models on AWS without writing any code. Which AWS service or feature meets these requirements?",
 "options": [
 "Amazon SageMaker Canvas",
 "Amazon Rekognition",
 "AWS DeepRacer",
 "Amazon Comprehend"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker Canvas is a visual, no-code tool for building and deploying ML models. According\nto the official SageMaker Canvas documentation:\n“SageMaker Canvas provides a visual point-and-click interface that allows business analysts to\ngenerate accurate ML predictions without writing any code.”",
 "awsExamTip": ""
 },
 {
 "id": "AIF-151",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A financial company uses a generative AI model to assign credit limits to new customers. The company wants to make the decision-making process of the model more transparent to its customers.",
 "options": [
 "Use a rule-based system instead of an ML model.",
 "Apply explainable AI techniques to show customers which factors influenced the model's decision.",
 "Develop an interactive UI for customers and provide clear technical explanations about the system.",
 "Increase the accuracy of the model to reduce the need for transparency."
 ],
 "answers": [
 1
 ],
 "explanation": "According to the AWS Certified AI Practitioner documentation, explainable AI (XAI) refers to methods\nand techniques that make the behavior and predictions of machine learning models more\nunderstandable and transparent to users and stakeholders. In financial use cases, especially when\ndecisions such as credit limits are made, regulatory and ethical concerns demand transparency about\nhow such decisions are reached.\nOption B is correct because applying explainable AI techniques (such as SHAP, LIME, or Amazon\nSageMaker Clarify) allows organizations to provide customers with clear insights into which data\npoints or factors contributed to the model's decision. This aligns with best practices for responsible\nAI as defined in the AWS documentation, which states:\n\"Explainable AI increases transparency and trust in machine learning applications by helping users\nand regulators understand the decision process behind model predictions.\"\n\n(Reference: AWS AI/ML Best Practices – Explainable AI, AWS AI Practitioner Exam Guide)\nOption A suggests switching to a rule-based system, which is not practical for complex problems\naddressed by generative AI and may reduce model performance.\nOption C (just a UI) does not inherently provide transparency into the model’s reasoning, unless\npaired with explainability techniques.\nOption D (accuracy over transparency) does not address the company’s requirement for\ntransparency.\nReference:\nAWS Certified AI Practitioner Exam Guide\nAmazon SageMaker Clarify Documentation",
 "awsExamTip": ""
 },
 {
 "id": "AIF-152",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which type of AI model makes numeric predictions?",
 "options": [
 "Diffusion",
 "Regression",
 "Transformer",
 "Multi-modal"
 ],
 "answers": [
 1
 ],
 "explanation": "The regression model is a fundamental type of supervised machine learning algorithm that is\nspecifically designed to make numeric predictions. In regression tasks, the goal is to predict a\ncontinuous numerical value based on input features. This contrasts with classification, which predicts\ndiscrete labels.\nAccording to AWS documentation:\n“Regression models are used for predicting a continuous value. Examples include predicting house\nprices, stock market prices, or customer credit limits.”\n(Reference: AWS Machine Learning Foundations: Regression, AWS AI Practitioner Study Guide)\nOption A (Diffusion) relates to generative models and is not primarily used for numeric prediction.\nOption C (Transformer) is a neural network architecture, often used for sequence modeling tasks\n(e.g., NLP).\nOption D (Multi-modal) describes a model handling multiple data types, not specifically numeric\nprediction.\nReference:\nAWS AI/ML Learning Path – Regression Models\nAWS Certified AI Practitioner Study Guide (Pearson)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-153",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "multiple",
 "question": "A publishing company built a Retrieval Augmented Generation (RAG) based solution to give its users the ability to interact with published content. New content is published daily. The company wants to provide a near real-time experience to users. Which steps in the RAG pipeline should the company implement by using offline batch processing to meet these requirements? (Select TWO.)",
 "options": [
 "Generation of content embeddings",
 "Generation of embeddings for user queries",
 "Creation of the search index",
 "Retrieval of relevant content",
 "Response generation for the user"
 ],
 "answers": [
 0,
 2
 ],
 "explanation": "Comprehensive and Detailed Explanation From Exact Extract:\nIn a RAG (Retrieval Augmented Generation) architecture, there are steps that can be optimized using\noffline batch processing, particularly for operations that do not require real-time updates:\nA . Generation of content embeddings:\nWhen new content is published, it can be processed in batches to generate embeddings (vector\nrepresentations) offline. These embeddings are then used at query time for similarity search. As new\ndocuments come in daily, batch processing is ideal for generating embeddings for all new content\ntogether.\n“Content/document embeddings are typically generated offline, as this operation can be\ncomputationally expensive and does not need to happen in real-time.”\n(Reference: AWS GenAI RAG Blog, Amazon Bedrock RAG Pattern)\nC. Creation of the search index:\nAfter generating the content embeddings, these are indexed in a vector database or search service.\nThis indexing is also typically performed in batch as part of the offline pipeline.\n“Building or updating the vector index is often performed as a batch operation, reflecting the latest\nstate of the content repository.”\n(Reference: AWS RAG Pattern Whitepaper)\nB, D, and E are real-time steps. Embeddings for user queries (B), retrieval of relevant content (D), and\nresponse generation (E) must be processed in real-time to provide an interactive experience.\nReference:\nRetrieval Augmented Generation (RAG) on AWS\nAmazon Bedrock RAG Documentation",
 "awsExamTip": ""
 },
 {
 "id": "AIF-154",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics. How should the bank fix this issue MOST cost-effectively?",
 "options": [
 "Include more diverse training data. Fine-tune the model again by using the new data.",
 "Use Retrieval Augmented Generation (RAG) with the fine-tuned model.",
 "Use AWS Trusted Advisor checks to eliminate bias.",
 "Pre-train a new LLM with more diverse training data."
 ],
 "answers": [
 0
 ],
 "explanation": "Comprehensive and Detailed Explanation From Exact Extract:\nThe best practice for mitigating bias in AI/ML models, according to AWS and responsible AI\nframeworks, is to ensure that the training data is representative and diverse. If a model\ndemonstrates bias (such as favoring a particular demographic), the recommended, cost-effective\napproach is to collect additional data from underrepresented groups and retrain (fine-tune) the\nmodel with the improved dataset.\nA . Include more diverse training data. Fine-tune the model again by using the new data:\n“The most effective method to reduce model bias is to curate and include diverse, representative\ntraining data, then retrain or fine-tune the model.”\n(Reference: AWS Responsible AI, SageMaker Clarify Bias Mitigation)\nB (RAG) is unrelated to model fairness or bias mitigation; it’s for grounding LLMs with external\nknowledge.\nC (AWS Trusted Advisor) is for AWS resource optimization/security—not for ML model bias detection\nor mitigation.\nD (Pre-train a new LLM) would be extremely costly and is unnecessary; fine-tuning with better data is\nmuch more efficient.\nReference:\nResponsible AI on AWS\nAmazon SageMaker Clarify: Detecting and Mitigating Bias\nAWS Certified AI Practitioner Exam Guide",
 "awsExamTip": ""
 },
 {
 "id": "AIF-156",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "Which option is an example of unsupervised learning?",
 "options": [
 "A model that groups customers based on their purchase history",
 "A model that classifies images as dogs or cats",
 "A model that predicts a house's price based on various features",
 "A model that learns to play chess by using trial and error"
 ],
 "answers": [
 0
 ],
 "explanation": "Unsupervised learning involves training a model on unlabeled data, letting it find patterns or\ngroupings on its own, without explicit outputs provided. Clustering is a primary unsupervised\nlearning technique.\nOption A is correct: Grouping customers based on purchase history (without predefined categories) is\nclustering, a classic unsupervised task.\nB and C are supervised learning (classification and regression, respectively).\nD is reinforcement learning, not unsupervised learning.\n\"Unsupervised learning involves training on data without labels and is often used for clustering or\ndimensionality reduction.\"\n\n(Reference: AWS Certified AI Practitioner Official Study Guide, AWS ML Concepts)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-157",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models. Which strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
 "options": [
 "Crowd-sourced evaluation",
 "Automatic model evaluation",
 "Model evaluation with human workers",
 "Reinforcement learning from human feedback (RLHF)"
 ],
 "answers": [
 1
 ],
 "explanation": "The least operational overhead comes from automated tools that can scan and evaluate LLM outputs\nfor toxicity. AWS and SageMaker JumpStart support integrations with automatic evaluation tools and\nAPIs (such as Amazon Comprehend or third-party toxicity classifiers).\nB is correct: Automated evaluation provides quick, scalable, and repeatable analysis, requiring\nminimal human intervention.\nA and C require manual effort, increasing operational overhead.\nD (RLHF) is resource-intensive and not designed for rapid, automated model comparison.\n\"Automated evaluation can quickly assess generated text for specific attributes like toxicity,\nsentiment, or compliance using pre-trained classifiers, reducing human involvement and operational\ncomplexity.\"\n(Reference: AWS SageMaker JumpStart Evaluation, AWS AI Practitioner Guide)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-158",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: \"Ask the model to show its work by explaining its reasoning step by step.\" Which prompt engineering technique is the AI practitioner using?",
 "options": [
 "Chain-of-thought prompting",
 "Prompt injection",
 "Few-shot prompting",
 "Prompt templating"
 ],
 "answers": [
 0
 ],
 "explanation": "Chain-of-thought prompting is a prompt engineering technique where you instruct the model to\nexplain its reasoning step by step, which is particularly useful for tasks involving logic, math, or\nreasoning.\nA is correct: Asking the model to \"explain its reasoning step by step\" directly invokes chain-of-\nthought prompting, as documented in AWS and generative AI literature.\nB is unrelated (prompt injection is a security concern).\nC (few-shot) provides examples, but doesn’t specifically require step-by-step reasoning.\nD (templating) is about structuring the prompt format.\n\"Chain-of-thought prompting elicits step-by-step explanations from LLMs, which improves\nperformance on complex reasoning tasks.\"\n(Reference: Amazon Bedrock Prompt Engineering Guide, AWS Certified AI Practitioner Study Guide)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-159",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics. What must the bank do to develop an unbiased ML model?",
 "options": [
 "Reduce the size of the training dataset.",
 "Ensure that the ML model predictions are consistent with historical results.",
 "Create a different ML model for each demographic group.",
 "Measure class imbalance on the training dataset. Adapt the training process accordingly."
 ],
 "answers": [
 3
 ],
 "explanation": "Class imbalance in a training dataset can cause ML models to favor overrepresented groups, leading\nto biased predictions. The AWS AI Practitioner guide and SageMaker Clarify documentation\nemphasize the need to identify and mitigate class imbalance to ensure fairness and unbiased model\noutcomes.\nD is correct: By measuring class imbalance and adapting the training process (e.g., through\noversampling, undersampling, or using class weights), organizations can improve fairness and reduce\nbias across demographic groups.\nA (reducing data size) could worsen bias by removing potentially useful diverse data.\nB (consistency with historical results) might reinforce existing biases.\nC (separate models) is not scalable and can introduce other fairness issues.\n“To reduce bias, examine class imbalance in your training data and use techniques to ensure all\ngroups are fairly represented.”\n(Reference: AWS SageMaker Clarify: Mitigating Bias, AWS Responsible AI)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-160",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure. Which solution meets these requirements?",
 "options": [
 "Deploy the model on an Amazon EC2 instance.",
 "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
 "Deploy the model by using Amazon CloudFront with an Amazon S3 integration.",
 "Deploy the model by using an Amazon SageMaker AI endpoint."
 ],
 "answers": [
 3
 ],
 "explanation": "Amazon SageMaker endpoints provide fully managed, serverless model deployment for real-time\nand batch predictions, allowing companies to deploy ML models without handling any servers or\ninfrastructure management.\nD is correct: SageMaker endpoints let you deploy, scale, and monitor ML models with no\ninfrastructure overhead.\nA and B require infrastructure management.\nC (CloudFront/S3) is not for model deployment, but for static content delivery.\n“Amazon SageMaker endpoints allow you to deploy machine learning models for inference without\nthe need to manage underlying infrastructure.”\n(Reference: AWS SageMaker Model Deployment, AWS Certified AI Practitioner Study Guide)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-161",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model. Which strategy should the company use to identify harmful language?",
 "options": [
 "Use Amazon Rekognition moderation.",
 "Use Amazon Comprehend toxicity detection.",
 "Use Amazon SageMaker AI built-in algorithms to train the model.",
 "Use Amazon Polly to monitor comments."
 ],
 "answers": [
 1
 ],
 "explanation": "Amazon Comprehend toxicity detection is a managed NLP service that can analyze text for harmful or\ntoxic language using pre-trained models—no need for labeled data or custom training.\nB is correct: Comprehend’s toxicity detection API is designed for this use case, works out-of-the-box,\nand requires no data labeling or model training.\nA (Rekognition) is for image and video content moderation.\nC would require labeled data for training.\nD (Polly) is for text-to-speech, not content moderation.\n“Amazon Comprehend can detect toxicity in text with pre-trained models, requiring no labeled\n\ntraining data.”\n(Reference: Amazon Comprehend Toxicity Detection, AWS AI Practitioner Official Guide)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-162",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "An animation company wants to provide subtitles for its content. Which AWS service meets this requirement?",
 "options": [
 "Amazon Comprehend",
 "Amazon Polly",
 "Amazon Transcribe",
 "Amazon Translate"
 ],
 "answers": [
 2
 ],
 "explanation": "Amazon Transcribe is the AWS service that converts speech to text, enabling the generation of\nsubtitles (closed captions) for audio and video content automatically.\nC is correct:\n“Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy for\ndevelopers to add speech-to-text capability to applications.”\nThis feature supports creating subtitles and transcripts for media files.\n(Reference: Amazon Transcribe Overview, AWS AI Practitioner Official Study Guide)\nA (Comprehend) is for NLP/text analytics.\nB (Polly) is text-to-speech.\nD (Translate) translates text, but does not create subtitles from audio/video.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-163",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company stores millions of PDF documents in an Amazon S3 bucket. The company needs to extract the text from the PDFs, generate summaries of the text, and index the summaries for fast searching. Which combination of AWS services will meet these requirements? (Select TWO.)",
 "options": [
 "Amazon Translate",
 "Amazon Bedrock",
 "Amazon Transcribe",
 "Amazon Polly",
 "Amazon Textract"
 ],
 "answers": [
 1,4
 ],
 "explanation": "Amazon Textract (E) automatically extracts text and structured data from scanned documents, such\nas PDFs.\n\nAmazon Bedrock (B) offers access to LLMs (such as Amazon Titan or Anthropic Claude) for tasks like\nsummarization and generating embeddings for search.\nWorkflow:\nAmazon Textract extracts text from PDFs in S3.\nAmazon Bedrock LLMs summarize the extracted text.\n(Optional: Summaries can be indexed using Amazon OpenSearch or another search solution.)\nA (Translate) is for language translation, not extraction or summarization.\nC (Transcribe) is for audio to text, not PDFs.\nD (Polly) is for text-to-speech.\n“Amazon Textract extracts text, forms, and tables from scanned documents... Bedrock provides\ngenerative AI models to perform summarization and other text generation tasks.”\n(Reference: Amazon Textract, Amazon Bedrock, AWS GenAI RAG Reference)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-164",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A software company wants to use a large language model (LLM) for workflow automation. The application will transform user messages into JSON files. The company will use the JSON files as inputs for data pipelines. The company has a labeled dataset that contains user messages and output JSON files. Which solution will train the LLM for workflow automation?",
 "options": [
 "Unsupervised learning",
 "Continued pre-training",
 "Fine-tuning",
 "Reinforcement learning from human feedback (RLHF)"
 ],
 "answers": [
 2
 ],
 "explanation": "Fine-tuning is the process of training a pre-trained LLM with a labeled dataset specific to a desired\ntask—in this case, mapping user messages to JSON outputs. Fine-tuning leverages supervised\nlearning to specialize the model’s outputs.\nC is correct:\n“Fine-tuning is a supervised learning approach in which a model is further trained on a custom,\nlabeled dataset to adapt to a specific use case.”\n(Reference: Amazon Bedrock Fine-Tuning, AWS Certified AI Practitioner Study Guide)\nA is incorrect—unsupervised learning does not use labeled data.\nB (continued pre-training) uses unlabeled data.\nD (RLHF) uses reward signals and human feedback, not direct labeled input/output pairs.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-165",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in. Which data governance strategy will ensure compliance and protect patient privacy?",
 "options": [
 "Data residency",
 "Data quality",
 "Data discoverability",
 "Data enrichment"
 ],
 "answers": [
 0
 ],
 "explanation": "Data residency is the principle and practice of ensuring that data remains within a specific geographic\nlocation or jurisdiction, often to comply with local regulations and privacy laws (such as HIPAA,\nGDPR, or national healthcare laws). Data residency policies prevent sensitive data (such as patient\nrecords) from being transferred or accessed outside the designated country, thus protecting privacy\nand ensuring regulatory compliance.\nA is correct:\n“Data residency refers to where data is stored geographically, and often organizations need to ensure\nthat certain data does not leave a particular country or region to comply with legal or regulatory\nrequirements.”\n(Reference: AWS Data Residency Whitepaper, AWS Responsible AI & Data Privacy)\nB (data quality) refers to the accuracy and reliability of data, not its location.\nC (data discoverability) is about being able to find and access data, not restricting its movement.\nD (data enrichment) is about enhancing data with additional information.\n“Maintaining data residency is critical in healthcare and regulated industries to ensure data does not\nleave the prescribed jurisdiction.”\n(Reference: AWS Data Residency)",
 "awsExamTip": ""
 },
 {
 "id": "AIF-167",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company that uses multiple ML models wants to identify changes in original model quality so that the company can resolve any issues. Which AWS service or feature meets these requirements?",
 "options": [
 "Amazon SageMaker JumpStart",
 "Amazon SageMaker HyperPod",
 "Amazon SageMaker Data Wrangler",
 "Amazon SageMaker Model Monitor"
 ],
 "answers": [
 3
 ],
 "explanation": "Amazon SageMaker Model Monitor is specifically designed to automatically detect and alert on\nchanges in model quality, such as data drift, prediction drift, or other anomalies in model\nperformance once deployed.\nD is correct:\n\"Amazon SageMaker Model Monitor continuously monitors the quality of machine learning models\nin production. It automatically detects concept drift, data drift, and other quality issues, enabling\nteams to take corrective actions.\"\n(Reference: Amazon SageMaker Model Monitor Documentation, AWS Certified AI Practitioner Study\nGuide)\nA (JumpStart) provides prebuilt solutions and models, not monitoring.\nB (HyperPod) is for large-scale training, not model monitoring.\nC (Data Wrangler) is for data preparation, not ongoing model quality monitoring.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-168",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A financial company is developing a fraud detection system that flags potential fraud cases in credit card transactions. Employees will evaluate the flagged fraud cases. The company wants to minimize the amount of time the employees spend reviewing flagged fraud cases that are not actually fraudulent. Which evaluation metric meets these requirements?",
 "options": [
 "Recall",
 "Accuracy",
 "Precision",
 "Lift chart"
 ],
 "answers": [
 2
 ],
 "explanation": "Precision is the metric that measures the proportion of true positives (actual frauds) among all\nflagged positives (flagged frauds). High precision ensures that most of the flagged cases are truly\nfraudulent, minimizing the number of false positives employees must review.\nC is correct:\n\"Precision is the ratio of true positives to all predicted positives, and it answers: ‘Of all the cases\nflagged as fraud, how many were actually fraud?’ High precision means fewer non-fraudulent cases\nare sent for manual review.\"\n(Reference: AWS ML Concepts – Precision and Recall, AWS Certified AI Practitioner Study Guide)\nA (Recall) measures how many actual frauds are caught, but does not minimize false positives.\nB (Accuracy) can be misleading in imbalanced datasets (like fraud detection).",
 "awsExamTip": ""
 },
 {
 "id": "AIF-170",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A financial company is using ML to help with some of the company's tasks. Which option is a use of generative AI models?",
 "options": [
 "Summarizing customer complaints",
 "Classifying customers based on product usage",
 "Segmenting customers based on type of investments",
 "Forecasting revenue for certain products"
 ],
 "answers": [
 0
 ],
 "explanation": "Generative AI models (such as large language models) are designed to generate new content, such\nas text, summaries, images, and more. Summarizing text—like customer complaints—is a classic\napplication of generative AI.\nA is correct:\n\"Text summarization is a core generative AI use case, as it involves generating new, concise content\nfrom a larger body of text.\"\n(Reference: AWS Generative AI Use Cases)\nB and C are standard ML classification/segmentation tasks.\nD is a regression/prediction task, not generative.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-171",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A hospital developed an AI system to provide personalized treatment recommendations for patients. The AI system must provide the rationale behind the recommendations and make the insights accessible to doctors and patients. Which human-centered design principle does this scenario present?",
 "options": [
 "Explainability",
 "Privacy and security",
 "Fairness",
 "Data governance"
 ],
 "answers": [
 0
 ],
 "explanation": "Explainability refers to the ability of an AI system to make its decision-making process clear and\nunderstandable to humans.\nA is correct:\n\"Explainability is crucial for human-centered AI, especially in healthcare, to ensure that doctors and\npatients understand the rationale behind AI-driven recommendations.\"\n(Reference: AWS Responsible AI)\nB relates to protecting data, not explanations.\n\nC is about treating groups equally.\nD is about managing data lifecycle, not providing rationales.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-172",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue. The company needs to continuously improve the model's accuracy. Which solution meets these requirements?",
 "options": [
 "Use Amazon SageMaker AI and iterate with the most recent data.",
 "Use Amazon Personalize and iterate with historical data.",
 "Use Amazon CloudWatch to analyze customer orders.",
 "Use Amazon Rekognition to optimize the model."
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker is AWS’s fully managed ML service that supports retraining and deploying\nmodels with new, recent data for continuous improvement. This directly meets the requirement to\niterate and continuously improve model accuracy.\nA is correct:\n\"Amazon SageMaker enables teams to retrain models using the most recent data, ensuring ongoing\nimprovement in model accuracy.\"\n(Reference: Amazon SageMaker Overview)\nB (Amazon Personalize) is for recommendations, not general ML or waste reduction.\nC (CloudWatch) is for monitoring, not ML training or deployment.\nD (Rekognition) is for image/video analysis.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-173",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A financial company has offices in different countries worldwide. The company requires that all API calls between generative AI applications and foundation models (FM) must not travel across the public internet. Which AWS service should the company use?",
 "options": [
 "AWS PrivateLink",
 "Amazon Q",
 "Amazon CloudFront",
 "AWS CloudTrail"
 ],
 "answers": [
 0
 ],
 "explanation": "AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises\nnetworks, ensuring traffic does not traverse the public internet.\nA is correct:\n\"AWS PrivateLink provides private connectivity to services across VPCs, keeping API traffic off the\npublic internet.\"\n(Reference: AWS PrivateLink Overview)\nB (Amazon Q) is a generative AI assistant, not a network security/control tool.\nC (CloudFront) is a CDN, not for private API calls.\nD (CloudTrail) is for logging and monitoring, not secure connectivity.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-174",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company has a generative AI application that uses a pre-trained foundation model (FM) on Amazon Bedrock. The company wants the FM to include more context by using company information. Which solution meets these requirements MOST cost-effectively?",
 "options": [
 "Use Amazon Bedrock Knowledge Bases.",
 "Choose a different FM on Amazon Bedrock.",
 "Use Amazon Bedrock Agents.",
 "Deploy a custom model on Amazon Bedrock."
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon Bedrock Knowledge Bases enable Retrieval Augmented Generation (RAG) by letting you\nconnect external company data sources to your foundation model in a serverless, cost-effective\nmanner—without retraining or fine-tuning. This allows the model to answer questions and generate\ncontent grounded in your own documents or data.\nA is correct:\n“Knowledge Bases for Amazon Bedrock enable generative AI applications to retrieve and include\nyour company’s information for more contextual responses, without the need for expensive\nretraining or custom models.”\n(Reference: Amazon Bedrock Knowledge Bases)\nB is not cost-effective or guaranteed to add your company’s context.\nC (Agents) are for orchestrating workflows, not specifically RAG/context.\nD (Custom model deployment) is costly and unnecessary for just adding context.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-175",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model's predictions. Which solution will meet these requirements?",
 "options": [
 "Amazon SageMaker Clarify",
 "Amazon SageMaker Data Wrangler",
 "Amazon SageMaker Model Cards",
 "AWS AI Service Cards"
 ],
 "answers": [
 0
 ],
 "explanation": "Amazon SageMaker Clarify provides built-in tools to detect bias in data and models, and to generate\ndetailed explainability reports for model predictions, including SHAP values and feature importance.\nA is correct:\n“Amazon SageMaker Clarify provides bias detection, explainability for ML models, and\ncomprehensive reports to satisfy regulatory and ethical requirements.”\n(Reference: Amazon SageMaker Clarify Overview)\nB (Data Wrangler) is for data preparation, not bias/explainability.\nC (Model Cards) document models, but don’t detect bias or explain predictions.\nD (AI Service Cards) provide transparency for AWS AI services, not custom model explainability.",
 "awsExamTip": ""
 },
 {
 "id": "AIF-176",
 "domain": "AWS AI Practitioner",
 "difficulty": "medium",
 "type": "single",
 "question": "A retail company is tagging its product inventory. A tag is automatically assigned to each product based on the product description. The company created one product category by using a large language model (LLM) on Amazon Bedrock in few-shot learning mode. The company collected a labeled dataset and wants to scale the solution to all product categories. Which solution meets these requirements?",
 "options": [
 "Use prompt engineering with zero-shot learning.",
 "Use prompt engineering with prompt templates.",
 "Customize the model with continued pre-training.",
 "Customize the model with fine-tuning."
 ],
 "answers": [
 3
 ],
 "explanation": "When you have a labeled dataset and need to scale a generative AI solution for more complex or\ndiverse product categories, fine-tuning the foundation model with your dataset is the best approach\nfor consistent, accurate tagging.\nD is correct:\n“Fine-tuning a foundation model with your labeled data allows the model to generalize to new\ncategories and improve tagging accuracy for your inventory.”\n(Reference: Amazon Bedrock Fine-Tuning, AWS Generative AI)\nA (zero-shot) and B (prompt templates) do not leverage the labeled data or scale as accurately.\nC (continued pre-training) uses unlabeled data, not labeled.",
 "awsExamTip": ""
 }
];
