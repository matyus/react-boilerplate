const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    index: "./src/index.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React boilerplate",
      id: "root",
      template: "src/index.ejs"
    })
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader"
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },

          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },

          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [
                  require("autoprefixer")
                ]
              }
            }
          }
        ]

      }
    ]

  }

};
