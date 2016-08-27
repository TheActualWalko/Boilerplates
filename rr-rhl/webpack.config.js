var webpack = require("webpack");
var path = require("path");

module.exports = {

  devtool : "source-map",

  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:3002/",
      "webpack/hot/only-dev-server",
      "babel-polyfill",
      "./src/main.jsx",
    ],
    vendor: [
      "react",
      "redux",
      "react-redux",
      "react-dom"
    ]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath : "/dist/"
  },

  resolve : {
    extensions : ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  module : {
    preLoaders : [
      {
        test    : /\.jsx?$/,
        loader  : "babel",
        exclude : /node_modules/,
        query   : { presets : [ "react", "es2015" ] }
      }
    ],
    loaders : [
      {
        test    : /\.jsx?$/,
        loader  : "react-hot",
        exclude : /node_modules/
      }
    ],

    noParse: /\.min\.js/
  },

  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin( "vendor", "vendor.bundle.js" )
  ],

  externals: {
    fs: "{}",
    tls: "{}",
    net: "{}",
    console: true
  },

  modulesDirectories: [
    "node_modules"
  ]
};
