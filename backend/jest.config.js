// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  collectCoverage: false,
  testTimeout: 300000,
};
