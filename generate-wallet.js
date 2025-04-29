const ethers = require("ethers");

const wallet = ethers.Wallet.createRandom();
console.log("Dirección pública:", wallet.address);
console.log("Clave privada:", wallet.privateKey);
