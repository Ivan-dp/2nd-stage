const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    filterDateDropdown: './pug/UIKit/form-elements/text-fields/filter-date-dropdown/filter-date-dropdown.js',
    dropdown:'./pug/UIKit/form-elements/text-fields/dropdown/dropdown.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/UIKit.html',
      template: './pug/UIKit/UIKit.pug', // шаблон
      chunks: ['UIKit'],
    }),
  ]
};