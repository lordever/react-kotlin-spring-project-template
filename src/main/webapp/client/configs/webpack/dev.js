// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const {resolve} = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "../../../dist"),
    publicPath: "/",
  },
  plugins: [new ReactRefreshPlugin()],
});
