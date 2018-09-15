var webpack = require('webpack');
var path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'public/js');

console.log (BUILD_DIR);
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'src/backend/app');
 
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
  	rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        enforce: "pre",
        enforce: "post",
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },
        // options for the loader
      }
    ]
  }
};
 
module.exports = config;