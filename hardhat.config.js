require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    frxTestnet: {
      url: "https://rpc.testnet.frax.com",
      chainId: 2522,
      accounts:  [privateKey],
    },
    // bscTestnet: {
    //   url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts:  [process.env.WALLET_KEY]
    // },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};