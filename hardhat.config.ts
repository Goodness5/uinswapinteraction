import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {

      hardhat: {
        
        forking: {
          //@ts-ignore
          url: process.env.MAINETURL,
        }
      },
  },
  etherscan: {
    //@ts-ignore
    api_key: process.env.ETHERSCAN_API_KEY,
},


};

export default config;
