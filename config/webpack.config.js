import webpack from 'webpack';
import path from 'path';

module.exports = {
  devtool: "eval-source-map",
  entry: {
    main: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      path.join(__dirname, '../assets/js/index.js')
    ]
  },
  devtool: 'source-map ',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname)
              }
            }
          }
        ]
      }
    ]
  },
  output: {
      path: path.resolve(__dirname, "../public"),
      filename: "[name].bundle.js",
      publicPath: '/',
      hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
      hotUpdateMainFilename: ".hot/[hash].hot-update.json"
    },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

