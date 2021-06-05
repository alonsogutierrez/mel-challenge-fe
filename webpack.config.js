const path = require('path');

module.exports = {
  entry: {
    client: './src/index.js',
    bundle: './src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'index.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
