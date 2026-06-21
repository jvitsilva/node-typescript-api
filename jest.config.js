const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname),
  displayName: 'root-tests',
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};
