const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
// this allows access to keys in the .env
require('dotenv').config({ path: '.env' });

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // this allows console log errors to show the individual line
  devtool: 'eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  // plugins go here
  plugins: [
   new CleanWebpackPlugin(['dist']),
   new Dotenv(),
   new HtmlWebpackPlugin({
    title: 'Your Page Name',
    template: './src/index.html',
    inject: 'body'
    })
  ],
  // module rules go here
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
