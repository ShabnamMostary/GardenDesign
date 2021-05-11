const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: "./client.jsx",
  mode: "development",
  watch: true,
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "public", "javascript"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        use: ["babel-loader"],
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify("http://localhost:1337/api"),
      Base_URL: JSON.stringify("http://localhost:1337/"),
      'process.env.REACT_APP_AUTH0_DOMAIN' : JSON.stringify(process.env.REACT_APP_AUTH0_DOMAIN),
      'process.env.REACT_APP_AUTH0_CLIENT_ID' : JSON.stringify(process.env.REACT_APP_AUTH0_CLIENT_ID),
    }),
  ],
};