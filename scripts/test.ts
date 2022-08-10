import hre from "hardhat";
import {MyInterface__factory} from "../typechain";

async function main() {
//impersonate Account

  const accountToInpersonate = "0x34d27210cc319ec5281bdc4dc2ad8fbcf4eaeaeb";
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [accountToInpersonate],
  });
  const signer = await hre.ethers.getSigner(accountToInpersonate)

//const [signer] =  await hre.ethers.getSigners();
//const signer =  await hre.ethers.getSigner("0x34d27210cc319ec5281bdc4dc2ad8fbcf4eaeaeb");
const unipool = MyInterface__factory.connect("0x4B9EfAE862a1755F7CEcb021856D467E86976755",signer);

//set big number
await unipool.notifyRewardAmount("0x12783992635442238262629227738349").then(function(result){
        console.log(result)
          });

//increase time
await hre.network.provider.send("evm_increaseTime", [1814400])
await hre.network.provider.send("evm_mine")

//getReward
await unipool.getReward().then(function(result){
     console.log(result)
     });
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });