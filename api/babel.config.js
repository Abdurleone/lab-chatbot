module.exports = {
  presets: [
    "@babel/preset-env"
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "node"
};