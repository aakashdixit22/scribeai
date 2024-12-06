
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";

import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

export const ingest = action({
  args: {
    splitText:v.any(),
    fileId:v.string(),
  },
  handler: async (ctx,args) => {
    console.log("Received args:", args);
    await ConvexVectorStore.fromTexts(

      args.splitText,//array
      args.fileId,//str
      new GoogleGenerativeAIEmbeddings({
        apiKey:"AIzaSyC7jFxGODMT9ViP5-TvEcJdTTVvwUTC0io",
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }

    );
    return "success";
  },
});