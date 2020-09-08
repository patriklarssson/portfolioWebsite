const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.tsx"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 8000,
		headers: { "Access-Control-Allow-Origin": "*" },
		hotOnly: true,
		historyApiFallback: true
	},
	devtool: "eval-source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Template",
			template: path.join(__dirname, 'index.html')

		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({ log: (t) => console.log(t) }),
	],
	module: {
		rules: [
			{ test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=25000" },
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
				use: "url-loader?limit=100000"
			},
			{ test: /\.(js|jsx|ts|tsx)?/, include: [path.join(__dirname, 'src')], use: { loader: 'babel-loader' } },
			{ test: /\.bundle\.js$/, use: { loader: 'bundle-loader' } },

			{ test: /\.css$/, include: APP_DIR, use: [{ loader: 'style-loader', }, { loader: 'css-loader', options: { modules: true, namedExport: true, }, }], },
		]
	},
	resolve: {
		enforceExtension: false,
		extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
		alias: {
			"~": path.resolve(__dirname, 'src/'),
		},
	}
}
