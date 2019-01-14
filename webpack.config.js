const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");

const HtmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html"
});

const FaviconPlugin = new FaviconsWebpackPlugin({
  logo: "./public/favicon.png",
  prefix: "icons-[hash]/",
  emitStats: false,
  statsFilename: "iconstats-[hash].json",
  persistentCache: true,
  inject: true,
  background: "#000000",
  title: "SEO Title App",
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: true,
    twitter: true,
    yandex: true,
    windows: false
  }
});

const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: ["@babel/polyfill", APP_DIR],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Molecules: path.resolve(__dirname, "src/components/molecules"),
      Organisms: path.resolve(__dirname, "src/components/organisms"),
      Routes: path.resolve(__dirname, "src/components/routes")
    }
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(["dist"]),
    HtmlPlugin,
    FaviconPlugin
  ],
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: 3000,
    historyApiFallback: true,
    publicPath: "/",
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    }
  }
};
