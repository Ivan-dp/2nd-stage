const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'commons'),
  resolve: {
    alias: {
      commons: path.resolve(__dirname, './commons/')
    }
  }
  mode: 'development',
  entry: {
    filter_date_dropdown: '@commons/pages/form-elements/form-elements.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   filename: 'html/cards.html',
    //   template: '/pages/cards/cards.pug',
    //   chunks: ['cards']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'html/colors-and-types.html',
    //   template: '/pages/colors-and-types/colors-and-types.pug',
    //   chunks: ['cards']
    // }),
    new HtmlWebpackPlugin({
      filename: 'html/form-elements.html',
      template: '/pages/form-elements/form-elements.pug',
      chunks: ['cards']
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'html/headers-and-footers.html',
    //   template: '/pages/headers-and-footers/headers-and-footers.pug',
    //   chunks: ['cards']
    // }),
    new CleanWebpackPlugin()    
  ],
  stats: {
    children: true,
  },
  module: {
    rules: [
      // scss
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      // pug
      {
        test: /\.pug$/,
        use: ['pug-loader']
      }
    ]
  }
}