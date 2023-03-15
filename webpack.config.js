const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  // mode
  mode: "development",
  // entry
  entry: { main: path.resolve(__dirname, "./src/js/main.js") },
  // output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          ouptputPath: "images",
          publicPath: "images",
          emitFile: true,
          esModule: false,
        },
      },
    ],
  },
  // pluigins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"],
    }),
  ],
  // devserver
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 4000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
