//upload file to convex storage

import { mutation, query } from "./_generated/server";
import {v} from "convex/values";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
//logic to store file in the database
export const AddfileEntry = mutation({
    args: {
        storageId: v.string(),
        fileId: v.string(),
        fileName: v.string(),
        createdBy: v.string(),
        fileUrl: v.string(),
    },
    handler: async (ctx, args) => {
        const result=await ctx.db.insert("pdfFiles", {
            storageId: args.storageId,
            fileId: args.fileId,
            fileName: args.fileName,
            createdBy: args.createdBy,
            fileUrl: args.fileUrl,
        });
        return "inserted";
    },
});

//get fileurl
export const getFileUrl = mutation({
    args: {
        storageId: v.string(),
    },
    handler: async (ctx, args) => {
        const url=await ctx.storage.getUrl(args.storageId);
        return url;
    },
})
export const GetFileRecord = query({
    args: {
        fileId: v.string(),
    },
    handler: async (ctx, args) => {
        const result = await ctx.db.query("pdfFiles")
            .filter((q) => q.eq(q.field("fileId"), args.fileId))
            .collect();
        console.log(result);   
        return result;
    },
});
