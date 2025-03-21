import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error("Missing environment variables");
}

export interface AppConfig {
  DISCORD_TOKEN: string
  DISCORD_CLIENT_ID: string
}

export const config: AppConfig = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
};
