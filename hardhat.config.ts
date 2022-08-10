/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import '@typechain/hardhat'
 import '@nomiclabs/hardhat-ethers'
 import '@nomiclabs/hardhat-waffle'

 import { HardhatUserConfig, task } from "hardhat/config";

 task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/<PROJECT_ID_GOES_HERE>",
        blockNumber: 14967484,
      }
    }
  }
};

