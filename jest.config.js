/** @type {import('ts-jest').JestConfigWithTsJest} */
const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

module.exports = {
  moduleNameMapper,
  preset: 'ts-jest',
  testEnvironment: 'node',

  rootDir: './',
};