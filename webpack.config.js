var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bounce: [
			'webpack-dev-server/client?http://localhost:7268',
			 __dirname + '/app/index.js'
		]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	output: {
		filename: 'index_bundle.js',
		path: __dirname + '/dist'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new ExtractTextPlugin('/style.css', {
	    	allChunks: true
		})
	]
};