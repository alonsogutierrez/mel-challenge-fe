const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
});
const APP_SOURCE = path.join(__dirname, 'server');

module.exports = {
  mode: 'production',
  node: {
    fs: 'empty'
  },
  entry: { index: path.resolve(APP_SOURCE, 'index.js') },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed
    })
  ]
};
