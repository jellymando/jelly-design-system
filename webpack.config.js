const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd"
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
  plugins: [new CleanWebpackPlugin()]
};
