/*
 * Copyright (c) 2017, Patrick Lu <patrick@quantfive.org>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "."
  ],
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "megadraft-subsection-collapsible.js",
    library: "megadraft-subsection-collapsible",
    libraryTarget: "umd"
  },
  externals: {
    "megadraft": "Megadraft",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};
