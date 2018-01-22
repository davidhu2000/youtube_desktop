const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  const isProduction = plugin => (
    env.prod ? plugin : undefined
  );
  const removeEmpty = array => array.filter(p => Boolean(p));

  return {
    context: __dirname,
    entry: {
      app: path.join(__dirname, './src/youtube.jsx'),
      vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
      path: path.join(__dirname, 'app', 'javascripts'),
      publicPath: path.join('app', 'javascripts/'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: [/\.jsx?$/, /\.js?$/],
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
            cacheDirectory: true
          }
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '*'],
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules')
      ]
    },
    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].js'
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'template.html'),
        filename: '../../index.html',
        inject: 'body'
      }),
      isProduction(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })),
      isProduction(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
          unused: true,
          dead_code: true
        },
        output: {
          comments: false
        },
        sourceMap: false
      }))
    ])
  };
};
