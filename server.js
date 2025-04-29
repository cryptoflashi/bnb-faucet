const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting Hardhat Network...");

  await hre.network.provider.request({
    method: "hardhat_reset",
    params: []
  });

  console.log("✅ Hardhat JSON-RPC server is running!");
}

main();

