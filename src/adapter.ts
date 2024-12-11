import {
  Oauth2WrappedConfig,
  Oauth2Adapter,
} from "@openauthjs/openauth/adapter/oauth2";
import { env } from "bun";

export function YahooAdapter(config: Oauth2WrappedConfig) {
  return Oauth2Adapter({
    ...config,
    type: "yahoo",
    endpoint: {
      authorization: env.YAHOO_AUTH_URL!,
      token: env.YAHOO_TOKEN_URL!,
    },
  });
}
