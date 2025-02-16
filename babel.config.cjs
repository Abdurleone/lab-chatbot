module.exports = {
  presets: [
    "@babel/preset-env", // For transpiling modern JavaScript
    "@babel/preset-react" // For React JSX support
  ],
  plugins: [
    "@babel/plugin-transform-modules-commonjs" // Ensures compatibility with CommonJS
  ],
};
