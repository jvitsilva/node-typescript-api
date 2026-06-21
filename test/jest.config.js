const { resolve } = require('path');
const rootConfig = require('../jest.config.js');

module.exports = {
  ...rootConfig,
  rootDir: resolve(__dirname, '..'),
  displayName: 'end2end-tests',
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
  testMatch: ['<rootDir>/test/**/*.test.ts'],
};
