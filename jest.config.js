const config = {
  transform: {
    "^.+\\.m?[jt]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".js"],
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  clearMocks: true,
};

export default config;  