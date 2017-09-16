var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const outputPath = path.join(__dirname, '.webpack_build');

module.exports = {
  entry: {
    site: path.join(__dirname, '/index.js')
  },

  output: {
    path: outputPath,
    filename: '[name]-[hash].js',
    publicPath: '/'
  },

  resolve: {
    modules: [
      'node_modules'
    ],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    },
    extensions: ['.vue', '.js']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: './assets/[name]-[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new ManifestPlugin({
      fileName: 'rev-manifest.json'
    }),
    new CleanWebpackPlugin([outputPath], {
      root: __dirname
    }),
    new BrowserSyncPlugin(
      {
        host: '0.0.0.0',
        port: 3000,
        proxy: 'http://0.0.0.0:4567/'
      },
      {
        reloadDelay: 2000
      }
    )
  ]
};
