const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    form_elements: './commons/pages/form-elements/form-elements.js',
    cards: './commons/pages/cards/cards.js',
    colors_and_types: './commons/pages/colors-and-types/colors-and-types.js',
    headers_and_footers: './commons/pages/headers-and-footers/headers-and-footers.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/form-elements.html',
      template: './commons/pages/form-elements/form-elements.pug',
      chunks: ['form_elements']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/cards.html',
      template: './commons/pages/cards/cards.pug',
      chunks: ['cards']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/colors-and-types.html',
      template: './commons/pages/colors-and-types/colors-and-types.pug',
      chunks: ['colors_and_types']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/headers-and-footers.html',
      template: './commons/pages/headers-and-footers/headers-and-footers.pug',
      chunks: ['headers_and_footers']
    }),
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
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        },
        
      },
      //img
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: "img/[contenthash].[ext]"
        }
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "img/[contenthash].[ext]",
        //       publicPath: '/dist'
        //     },
        //   },
        // ],
      },
      //fonts
      {
        test: /\.(woff(2)?|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          publicPath: '/dist'
        }
      }
    ]
  }
};