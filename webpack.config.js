const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        loader: "file-loader",
        query: {
          outputPath: "./assets/",
          name: "[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        loader: "file-loader",
        query: {
          outputPath: "./assets/lang/",
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/', to: '' }
      ]
    })
  ],
};
