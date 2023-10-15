import { configDotenv } from "dotenv";

async function getConnectionInfo() {
  configDotenv();
  if (!process.env.DATABASE_URL)
    throw new Error("No value in DATABASE_URL in env var");

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME,
  };
}

export { getConnectionInfo };
