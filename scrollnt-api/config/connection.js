const getSecret = require("./keyvault");
require("dotenv").config();

async function putKeyVaultSecretInEnvVar() {
  const secretName = process.env.KEY_VAULT_SECRET_NAME_DATABASE_URL;
  const keyVaultName = process.env.KEY_VAULT_NAME;

  if (!secretName || !keyVaultName)
    throw Error("getSecret: Required params missing");

  const connectionString = await getSecret(secretName, keyVaultName);
  process.env.DATABASE_URL = connectionString;
}

async function getConnectionInfo() {
  if (!process.env.DATABASE_URL) {
    await putKeyVaultSecretInEnvVar();

    if (!process.env.DATABASE_URL)
      throw new Error("No value in DATABASE_URL in env var");
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME,
  };
}

module.exports = {
  getConnectionInfo,
};
