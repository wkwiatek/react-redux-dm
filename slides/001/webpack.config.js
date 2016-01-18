var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProdEnv = process.env.NODE_ENV === 'production';

var config = {
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.js'
	},
	resolve: {
		extensions: ['', '.es6', '.js', '.json']
	},
	module: {
		preLoaders: [
			{test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/}
		],
		loaders: [
			{test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
			{test: /\.html$/, loader: 'raw'},
			{test: /\.css$/, loader: 'css'},
			{test: /\.less$/, loader: 'css!postcss!less'}
		]
	},
	postcss: [autoprefixer({browsers: ['ie >= 9', 'last 2 versions']})]
};

if (!isProdEnv) {
	config.devtool = 'source-map';
	config.plugins = [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'NODE_ENV': '"dev"'
		})
	]
} else {
	config.plugins = [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false
		}),
		new webpack.DefinePlugin({
			'NODE_ENV': '"production"'
		}),
		new CopyWebpackPlugin([{
			from: 'src/index.html',
			to: 'index.html'
		}], {})
	];
}

module.exports = config;
