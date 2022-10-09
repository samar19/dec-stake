const hre = require("hardhat");



async function main() {
 
  const DECStaking  = await hre.ethers.getContractFactory("DECStaking");
  const decs = await DECStaking.deploy();
  await decs.deployed();
  console.log("DECStaking  deployed to:", decs.address);

  let config = `
 
  export const MyTokenaddress = "${decs.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });