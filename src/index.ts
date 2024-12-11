import { env } from "bun";
import { authorizer } from "@openauthjs/openauth";
import { YahooAdapter } from "./adapter";
import { subjects } from "./subjects";
import { MemoryStorage } from "@openauthjs/openauth/storage/memory";

const app = authorizer({
  providers: {
    yahoo: YahooAdapter({
      clientID: env.YAHOO_CLIENT_ID!,
      clientSecret: env.YAHOO_CLIENT_SECRET!,
      scopes: ["user:email", "user:profile"],
    }),
  },
  storage: MemoryStorage(),
  subjects,
  success: async (ctx, value) => {
    console.log(value);
  },
});

export default app;
