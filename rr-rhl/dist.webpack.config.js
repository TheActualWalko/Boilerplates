var webpack = require("webpack");
var path = require("path");

module.exports = {

  devtool : "source-map",

  entry: {
    app: [
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
    loaders : [
      {
        test    : /\.jsx?$/,
        loader  : "babel",
        exclude : /node_modules/,
        query   : { presets : [ "react", "es2015" ] }
      }
    ],

    noParse: /\.min\.js/
  },

  plugins : [
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
