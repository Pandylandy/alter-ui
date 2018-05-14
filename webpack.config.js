var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: {
    search: [
      'babel-polyfill',
      './src/search/index.js',
      'webpack/hot/only-dev-server'
    ],
    predictor: [
      'babel-polyfill',
      './src/predictor/index.js',
      'webpack/hot/only-dev-server'
    ],
    dbform: [
      'babel-polyfill',
      './src/dbform/index.js',
      'webpack/hot/only-dev-server'
    ],
    auth: [
      'babel-polyfill',
      './src/auth/index.js',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    path: path.join(__dirname, "public/dist"),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css/,
        use:  [  'style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer:{
    hot: true,
    open: true,
    contentBase: './public/',
    port: 3000,
    proxy: {
      "/api/**": { target: "https://cimm.kpfu.ru:443/" ,  secure: false }
    }
  }
};