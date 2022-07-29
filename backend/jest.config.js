// jest.config.js
module.exports = {
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/tests/"],
    testMatch:["**/?(*.)+(spec|test).js?(x)"],
    collectCoverage: false,
  };