require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const INFURA_API_KEY = process.env.INFURA_KEY;
const CM_API_KEY = process.env.COINMARKETCAP_API;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_KEY;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const DEFAULT_COMPILER_SETTINGS = {
  version: "0.7.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
};

module.exports = {
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/TBOBwdBdc3jncKa7ah_MzeD3PEiJ2qjy",
      },
    },
    arbitrum: {
      url: " your rpc goes here ",
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    polygon: {
      url: " your rpc goes here ",
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    polygonMumbai: {
       url: " your rpc goes here ",
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    goerli: {
       url: " your rpc goes here ",
      accounts: [SEPOLIA_PRIVATE_KEY],
    },  
  },
  etherscan: {
    apiKey: {
      goerli: "IZDY1JPGEZEYRYI1XSKZ1VVB6IC4E88Y16",
      polygonMumbai: "6KHS9BIW1G9KPV46J96QVNVAJ8PP7YX4TR",
      polygon: "6KHS9BIW1G9KPV46J96QVNVAJ8PP7YX4TR",
    },
  },
};
