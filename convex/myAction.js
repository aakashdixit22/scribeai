import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

// Helper function to get API key
const getGoogleApiKey = (ctx) => {
  const apiKey = process.env.GOOGLE_API_KEY || ctx.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GOOGLE_API_KEY environment variable");
  }
  return apiKey;
};

export const ingest = action({
  args: {
    splitText: v.any(),
    fileId: v.string()
  },
  handler: async (ctx, args) => {
    try {
      await ConvexVectorStore.fromTexts(
        args.splitText,
        args.fileId,
        new GoogleGenerativeAIEmbeddings({
          apiKey: getGoogleApiKey(ctx),
          model: "text-embedding-004",
          taskType: TaskType.RETRIEVAL_DOCUMENT,
          title: "Document title",
        }),
        { ctx }
      );
      return "success";
    } catch (error) {
      console.error("Ingest error:", error);
      throw new Error(`Failed to ingest: ${error.message}`);
    }
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const vectorStore = new ConvexVectorStore(
        new GoogleGenerativeAIEmbeddings({
          apiKey: getGoogleApiKey(ctx),
          model: "text-embedding-004",
          taskType: TaskType.RETRIEVAL_DOCUMENT,
          title: "Document title",
        }),
        { ctx }
      );

      const results = await vectorStore.similaritySearch(args.query, 3);
      const filteredResults = results.filter(result => 
        Object.values(result.metadata).join('') === args.fileId
      );
      
      return JSON.stringify(filteredResults);
    } catch (error) {
      console.error("Search error:", error);
      throw new Error(`Search failed: ${error.message}`);
    }
  },
});