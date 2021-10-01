const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const port = 3000;
const mode = process.env.NODE_NEV || 'development';

module.exports = {
  entry: ['./src/index.js', 'webpack-dev-server/client?http://0.0.0.0:3001', 'webpack/hot/only-dev-server'],

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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new Dotenv()
    // new webpack.HotModuleReplacementPlugin()
  ],
  mode: mode,
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: port,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
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
