var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/youtube.jsx",
  output: {
    path: path.join(__dirname, 'app', 'javascripts'),
    filename: 'bundle.js',
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*' ]
  }
};
