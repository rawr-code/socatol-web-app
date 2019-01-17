const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const Pretty = require('eslint-formatter-pretty');

const HtmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

const FaviconPlugin = new WebappWebpackPlugin({
  logo: './public/favicon.png',
  prefix: '[hash]/',
  cache: true,
  inject: true,
  favicons: {
    path: 'favicons/',
    scope: '/',
    start_url: '/',
    appName: 'SocatolWebApp',
    appDescription: 'Aplicacion administrativa',
    developerName: 'Emmanuel Villegas | Front-end Developer',
    developerURL: 'https://github.com/EmmanuelVillegas',
    lang: 'es-ES',
    background: '#fff',
    theme_color: '#333',
    appleStatusBarStyle: 'black-translucent',
    display: 'standalone',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: true,
      favicons: true,
      firefox: true,
      windows: true,
      yandex: true,
    },
  },
});

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: ['@babel/polyfill', APP_DIR],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: { formatter: Pretty },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Molecules: path.resolve(__dirname, 'src/components/molecules'),
      Organisms: path.resolve(__dirname, 'src/components/organisms'),
      Routes: path.resolve(__dirname, 'src/components/routes'),
    },
  },
  plugins: [
    new WebpackBar(),
    new CleanWebpackPlugin(['dist']),
    HtmlPlugin,
    FaviconPlugin,
  ],
  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    host: '0.0.0.0',
    port: 3000,
    public: 'localhost:3000',
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: '/',
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
      publicPath: false,
    },
  },
};
