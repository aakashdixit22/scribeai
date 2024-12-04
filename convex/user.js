import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Mutation to save the user info in the database
export const createUser = mutation({
  args: {
    userName: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists in the database
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (user.length === 0) {
      // Insert the new user into the database
      await ctx.db.insert("users", {
        email: args.email,
        userName: args.userName,
        imageUrl: args.imageUrl,
         // Add a timestamp for record tracking
      });
      return "Inserted new user";
    }
    return "User already exists";
  },
});
