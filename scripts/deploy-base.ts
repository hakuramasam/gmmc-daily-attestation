import { ethers } from "hardhat";

async function main() {
  const GMMC = "0x3D9B15274E579411555FF1F96fE9E1ABf3Df4b07";
  const OWNER = "0xf95DA8869B27C642aA8F7d106F866e777914c2E3";

  const Contract = await ethers.getContractFactory("DailyCheckInAttestation");
  const contract = await Contract.deploy(GMMC, OWNER);

  await contract.waitForDeployment();

  console.log("DailyCheckInAttestation deployed to:", await contract.getAddress());
}

main();
