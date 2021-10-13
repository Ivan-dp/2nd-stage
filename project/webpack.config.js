const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    form_elements: './src/pages/form-elements/form-elements.js',
    cards: './src/pages/cards/cards.js',
    colors_and_types: './src/pages/colors-and-types/colors-and-types.js',
    headers_and_footers: './src/pages/headers-and-footers/headers-and-footers.js',
    index: './src/pages/index/index.js',
    search_room: './src/pages/search-room/search-room.js',
    room_details: './src/pages/room-details/room-details.js',
    registration: './src/pages/registration/registration.js',
    sign_in: './src/pages/sign-in/sign-in.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'html/form-elements.html',
      template: './src/pages/form-elements/form-elements.pug',
      chunks: ['form_elements']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/cards.html',
      template: './src/pages/cards/cards.pug',
      chunks: ['cards']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/colors-and-types.html',
      template: './src/pages/colors-and-types/colors-and-types.pug',
      chunks: ['colors_and_types']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/headers-and-footers.html',
      template: './src/pages/headers-and-footers/headers-and-footers.pug',
      chunks: ['headers_and_footers']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: './src/pages/index/index.pug',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/search-room.html',
      template: './src/pages/search-room/search-room.pug',
      chunks: ['search_room']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/room-details.html',
      template: './src/pages/room-details/room-details.pug',
      chunks: ['room_details']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/registration.html',
      template: './src/pages/registration/registration.pug',
      chunks: ['registration']
    }),
    new HtmlWebpackPlugin({
      filename: 'html/sign-in.html',
      template: './src/pages/sign-in/sign-in.pug',
      chunks: ['sign_in']
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
        exclude: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: "img/[name][ext]"
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
        test: /\.(woff(2)?|ttf|otf|eot|svg)$/,
        exclude: /img/,
        type: 'asset/inline'
        // loader: "file-loader"
        // options: {
        //   filename: "fonts/[name].[contenthash].[ext]",
        //   publicPath: '/dist'
        // }
      }
    ]
  }
};