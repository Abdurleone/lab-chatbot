module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transpile JavaScript and JSX files
    },
    testEnvironment: "node", // Use Node.js environment for testing
    roots: ["<rootDir>/src"], // Specify the root folder where Jest looks for tests
    moduleFileExtensions: ["js", "jsx"], // Recognize JavaScript and JSX extensions
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // Match test files
    verbose: true, // Enable detailed test logs
    collectCoverage: true, // Collect test coverage
    coverageDirectory: "<rootDir>/coverage", // Output directory for coverage reports
    clearMocks: true, // Automatically reset mocks between tests
};
  
  