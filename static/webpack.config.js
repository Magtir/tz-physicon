const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'main': [
      './src/base/styles.scss',
      './src/polyfills.ts',
      './src/main.ts',
    ]
  },
  mode: "development",
  // mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),     // путь к каталогу выходных файлов - папка dist
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    compress: true,
    port: 9001,
    watchContentBase: true,
    progress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {configFileName: path.resolve(__dirname, 'tsconfig.json')}
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {loader: 'to-string-loader'},
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
              sourceMap: true
            }
          },
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\|\/)core/,
      path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // new UglifyJSPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    }),
  ]
};
