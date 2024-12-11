import { env } from "bun";
import { authorizer } from "@openauthjs/openauth";
import { YahooAdapter } from "./adapter";
import { subjects } from "./subjects";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory";

const app = authorizer({
  subjects,
  storage: MemoryStorage({
    persist: "./persist.json",
  }),
  providers: {
    yahoo: YahooAdapter({
      clientID: env.YAHOO_CLIENT_ID!,
      clientSecret: env.YAHOO_CLIENT_SECRET!,
      scopes: ["user:email", "user:profile"],
    }),
  },
  success: async (ctx, value) => {
    let userid;
    if (value.provider === "yahoo") {
      console.log(value.tokenset.access);
      userid = "yahoouserid";
    } else {
      userid = "fallthroughtest";
    }
    return ctx.subject("user", {
      userid,
    });
  },
});

export default app;
