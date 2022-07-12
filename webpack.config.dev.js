const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: {
    main: "./index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  externals: ["react", "react-dom"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: false
    })
  ],
  devServer: {
    open: true
  }
};
