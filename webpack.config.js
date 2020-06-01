 const path = require("path");
 const { CleanWebpackPlugin } = require("clean-webpack-plugin")
 const HtmlWebpackPlugin = require("html-webpack-plugin");

 module.exports = {
 	mode: "development",
 	devtool: "source-map",
 	entry: "./index.js",
 	output: {
 		path: path.resolve(__dirname,"./dist"),
 		filename: "[name].js"
 	},
 	module: {
 		rules: [
 			{
 				test: /jsx?$/,
 				loader: "babel-loader"
 			}
 		]
 	},
 	plugins: [
 		new CleanWebpackPlugin(),
 		new HtmlWebpackPlugin({
 			template: "./index.html"
 		})
 	],
 	devServer: {
 		port: 3003,
 		open: true,
 		hot: true
 	}
 }