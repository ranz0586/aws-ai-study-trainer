import { aiFundamentals } from "./aiFundamentals";
import { mlLifecycle } from "./mlLifecycle";
import { genAI } from "./genAI";

import { embeddings } from "./embeddings";
import { promptEngineering } from "./promptEngineering";
import { rag } from "./rag";

import { bedrock } from "./bedrock";
import { awsServices } from "./awsServices";

import { responsibleAI } from "./responsibleAI";
import { security } from "./security";

export const questionBank = [

  ...aiFundamentals,

  ...mlLifecycle,

  ...genAI,

  ...embeddings,

  ...promptEngineering,

  ...rag,

  ...bedrock,

  ...awsServices,

  ...responsibleAI,

  ...security

];