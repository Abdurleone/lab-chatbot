module.exports = {
  presets: [
    "@babel/preset-env"
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs"
  ]
};

module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};