import { DTP } from "@ontomorph/dtp-sdk";

const apiKey = process.env.DTP_KEY;

if (!apiKey) {
  throw new Error("Missing DTP_KEY environment variable");
}

export const dtp = new DTP({
  apiKey,

  // Optional
  baseUrl: process.env.DTP_BASE_URL,

  // Required only if you use dtp.holon
  holonApiKey: process.env.HOLON_KEY,
  holonApiUrl: process.env.HOLON_API_URL,
});