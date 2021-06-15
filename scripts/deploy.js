const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const JetToken = await hre.ethers.getContractFactory("JetToken");
  const jetToken = await JetToken.deploy("Jets", "JETT", 100000);

  await jetToken.deployed();
  console.log("Jet Token deployed to:", jetToken.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
