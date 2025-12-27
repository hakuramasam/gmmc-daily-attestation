
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    base: {
      url: process.env.BASE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 8453
    }
  },
  etherscan: {
    apiKey: { base: process.env.BASESCAN_API_KEY! }
  }
};
export default config;
