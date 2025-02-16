const jestConfig = {
    transform: {
      "^.+\\.m?[jt]sx?$": "babel-jest", // Transpile with Babel
    },
    extensionsToTreatAsEsm: [".js"], // Treat .js as ESM
    testEnvironment: "node", // Use Node.js environment
    roots: ["<rootDir>/src"], // Test files are in the 'src' directory
    moduleFileExtensions: ["js", "jsx"], // File extensions Jest should recognize
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)", // Match tests in __tests__ folder
      "**/?(*.)+(spec|test).[tj]s?(x)", // Match *.{spec,test}.{js,jsx}
    ],
    verbose: true, // Enable detailed test logs
    collectCoverage: true, // Enable coverage collection
    coverageDirectory: "<rootDir>/coverage", // Save coverage reports here
    clearMocks: true, // Clear mocks automatically after tests
  };

export default jestConfig;