const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_DIR = path.resolve(__dirname, 'application/src');
const BUILD_DIR = path.resolve(__dirname, 'application/src/client/public');

const config = {
  devtool: 'eval-source-map',
  entry: APP_DIR + '/client/app/index.jsx',
    // [
    // 'webpack/hot/dev-server',
    // 'webpack-hot-middleware/client',

  // ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include: APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
}

module.exports = config;



// 'use strict'
// const webpack           = require('webpack');
// const path              = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// const BUILD_DIR         = path.resolve(__dirname, 'dist');
// const APP_DIR           = path.resolve(__dirname, 'src');
//
//
// const config = {
//   entry: `${APP_DIR}/index.js`,
//   output: {
//     path: BUILD_DIR,
//     filename: '/js/[name].js',
//   },
//   cache: true,
//   debug: true,
//   devtool: 'eval-source-map',
//   stats: {
//     colors: true,
//     reasons: true
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
//       },
//     }),
//     new HtmlWebpackPlugin({
//       title: 'GroupIt',
//       xhtml: true,
//       inject: false,
//       template: require('html-webpack-template'),
//       appMountId: 'root-container'
//     }),
//     new ExtractTextPlugin('/css/[name].css', {
//       allChunks: true
//     })
//   ],
//
//   module : {
//     include: path.join(__dirname, 'src'),
//     loaders: [
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
//       },
//       {
//         test: /\.svg$/,
//         loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
//       },
//       {
//         test: /\.gif$/,
//         loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
//       },
//       { test: /\.jpg$/,
//         loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
//       },
//       { test: /\.png$/,
//         loader: 'file-loader?name=/img/[name].[hash:base64:5].[ext]'
//       },
//       {
//         test: /\.(js|jsx)$/,
//         loader: 'babel'
//       },
//       {
//         test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'file-loader?name=/fonts/[name].[ext]'
//       }
//     ]
//   }
// };
//
// if (process.env &&
//   process.env.NODE_ENV &&
//   process.env.NODE_ENV === 'production') {
//   const prodPlugins = [
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: true,
//       },
//       output: {
//         comments: false,
//       },
//     }),
//     new webpack.optimize.CommonsChunkPlugin('/js/common.js'),
//   ];
//
//   config.plugins = config.plugins.concat(prodPlugins);
//
//   config.cache = false;
//   config.debug = false;
//   config.devtool = undefined;
// }
//
// module.exports = config;
