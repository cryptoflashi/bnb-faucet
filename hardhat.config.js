require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "bnblocal",
  networks: {
    bnblocal: {
      url: "http://127.0.0.1:8545",
      chainId: 31337, // Similar al testnet de BSC
      accounts: [
        "0x619f8673a25be4109a0338808f69f398701f6bfead134a0828713262dd08bcb8"
      ]
    },
  },
  solidity: "0.8.20",
};