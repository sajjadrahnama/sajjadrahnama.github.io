var webpack = require('webpack');

var config = {
  entry: {
    app: [
        './src/js/css.js',
        './src/js/move-top.js',
        './src/js/easing.js',
        './src/js/easyResponsiveTabs.js',
        './src/js/jquery.swipebox.min.js'
    ],
    vendor: './src/js/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
    {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: '$'
        },{
            loader: 'expose-loader',
            options: 'jQuery'
        }]
    },
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    },
    {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'dist/'
          }
        }
    }

  ]},
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};


module.exports = config;