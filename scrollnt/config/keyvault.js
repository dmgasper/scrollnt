const DefaultAzureCredential = require("@azure/identity");
const SecretClient = require("@azure/keyvault-secrets");

const getSecret = async (secretName, keyVaultName) => {
  if (!secretName || !keyVaultName) {
    throw Error("getSecret: Required params missing");
  }

  const credential = new DefaultAzureCredential();
  const url = `https://${keyVaultName}.vault.azure.net`;

  try {
    const client = new SecretClient(url, credential);
    const latestSecret = await client.getSecret(secretName);

    return latestSecret.value;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};

module.exports = {
  getSecret,
};
