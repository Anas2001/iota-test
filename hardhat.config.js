require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');

const { mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "testnet",
  networks: {
  	localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 1074,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    testnet: {
      url: "http://127.0.0.1:8545",
      chainId: 1074,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
  },
};
