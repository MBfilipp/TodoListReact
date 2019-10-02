const path = require("path");

module.exports = {
  entry: "./js/code.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "code-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};