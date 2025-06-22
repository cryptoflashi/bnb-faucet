require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "bnblocal",
  networks: {
    bnblocal: {
      url: "https://bnb-faucet.onrender.com",
      chainId: 56, // BSC mainnet Chain ID
      accounts: [
        "0x619f8673a25be4109a0338808f69f398701f6bfead134a0828713262dd08bcb8"
      ]
    },
  },
  solidity: "0.8.20",
};
