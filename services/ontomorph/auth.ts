import { dtp } from "./client";

export function connectToTwin() {
  const grantToken = process.env.GRANT_TOKEN;

  if (!grantToken) {
    throw new Error("Missing GRANT_TOKEN environment variable");
  }

  return dtp.twins.connect(grantToken);
}