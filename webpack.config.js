const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const ReactRefreshTypeScript = require("react-refresh-typescript")

const isDevelopment = process.env.NODE_ENV !== "production"

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist/"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"] // Resolve file extensions so they can be omitted on imports
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    https: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(
                  Boolean
                )
              }),
              transpileOnly: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}
