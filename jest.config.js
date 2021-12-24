/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");

module.exports = {
    name: "Org Chart - React",
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'jest-coverage',
    setupFiles: [
      path.resolve(__dirname, "src/tests/testSetup.ts")
    ],
    testMatch: [
        "**/tests/**/*.test.ts"
    ]
}
