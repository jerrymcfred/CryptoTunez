
require('@nomiclabs/hardhat-waffle');

module.exports = {
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/9tiiLamgPAG4VyTYHMJRBXBQjcjo7QXD',
      accounts: ['0x1dfb270ccec829160b2c077fc5b25f648a0d5d62d176a384a608546c8f67cc47'],
    },
  },
  solidity: '0.8.4',
};

