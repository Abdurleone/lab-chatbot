export const presets = [
  ["@babel/preset-env", { targets: { node: "current" } }],
];
export const plugins = [
  "@babel/plugin-transform-modules-commonjs"
];
export const transform = {
  "^.+\\.jsx?$": "babel-jest"
};
export const testEnvironment = "node";