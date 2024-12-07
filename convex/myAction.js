"use client"
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";

import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";

export const ingest = action({
  args: {
    splitText:v.any(),
    fileId:v.string(),
    apiKey:v.string(),
  },
  handler: async (ctx,args) => {
    await ConvexVectorStore.fromTexts(

      args.splitText,//array
      args.fileId,//str
      new GoogleGenerativeAIEmbeddings({
        apiKey: args.apiKey,
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }

    );
    return "success";
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey: process.env.GOOGLE_API_KEY,
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      })
      , { ctx });

      const results = await vectorStore.similaritySearch(args.query, 1);

      // Function to reconstruct fileId from metadata
      const reconstructFileId = (metadata) => {
        return Object.values(metadata).join('');
      };
      
      // Filter results based on fileId in metadata
      const filteredResults = results.filter(result => reconstructFileId(result.metadata) === args.fileId);
      
      
      return JSON.stringify(filteredResults);
  },
});