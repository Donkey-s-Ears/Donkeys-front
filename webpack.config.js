const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const port = process.env.PORT || 3000;
const mode = process.env.NODE_NEV || 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_moudles/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  mode: mode,
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: port,
    open: true
  },
  performance: { hints: false },
  optimization: {
    splitChunks: {
      name: 'vender',
      chunks: 'initial'
    },
    minimize: true,
    emitOnErrors: true
  },
  devtool: 'cheap-module-source-map'
};
