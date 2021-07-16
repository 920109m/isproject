const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js", // 번들링 시작 지점
  output: {
    path: path.resolve(__dirname, "dist"), // 번들링 된 결과를 저장할 경로
    filename: "bundle.js" // 번들링 된 파일 명
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: '/node_modules/', use: "babel-loader" },
      { test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"}] },
      { test: /\.jfif$/, use: "file-loader" },
      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: 'file-loader'}]},
      { test: /\.(png|jpg|gif)$/, use: [{ loader:'file-loader'}]},
      
	  ]
  },
  plugins: [	//아까 설치한 플러그인
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json'

    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
  ],
  
  devServer: {
    host: "127.0.0.1", //your ip address
    port: 3000,
    disableHostCheck: true,
  },
};
