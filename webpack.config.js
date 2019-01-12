const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const HtmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html"
  // meta: {
  //   viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
  // }
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

module.exports = {
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
    extensions: [".js", ".jsx"]
  },
  plugins: [FaviconPlugin, HtmlPlugin]
};
