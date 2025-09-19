import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    // If user already exists, return the user
    const user = await ctx.db
      .query("UserTable")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    // If user does not exist, create a new user
    if (user?.length === 0) {
      const data = {
        email: args.email,
        name: args.name,
        imageUrl: args?.imageUrl,
      };

      const result = await ctx.db.insert("UserTable", {
        ...data,
      });

      console.log("New user created:", { result });

      return {
        // _id: result._id,
        ...data,
        result,
      };
    }

    return user[0];
  },
});
