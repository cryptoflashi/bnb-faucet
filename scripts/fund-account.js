const { ethers } = require("ethers");

async function main() {
  // Conecta al nodo local manualmente
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  // Cuenta que firmará (la que configuraste en hardhat.config.js)
  const privateKey = "0x619f8673a25be4109a0338808f69f398701f6bfead134a0828713262dd08bcb8";
  const wallet = new ethers.Wallet(privateKey, provider);

  // Envía 900 millones de BNB
  const tx = await wallet.sendTransaction({
    to: "0xb7ec6aD82eb574A223d6Bc9093458Aec6DA79dF9",
    value: ethers.parseEther("900000000")
  });

  await tx.wait();
  console.log("✅ 900 millones de BNB enviados correctamente!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
