import { DTP } from "@ontomorph/dtp-sdk";

const apiKey = process.env.DTP_KEY;
const holonApiKey = process.env.HOLON_KEY;
const baseUrl = process.env.DTP_BASE_URL;

if (!apiKey) {
  throw new Error("Missing DTP_KEY environment variable");
}

if (!holonApiKey) {
  throw new Error("Missing HOLON_KEY environment variable");
}

export const dtp = new DTP({
  apiKey,
  holonApiKey,
  baseUrl,
});