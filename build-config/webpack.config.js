const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/client/start.js']
	},
	resolve: {
		alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      pages: path.resolve(__dirname, '../src/pages'),
      components: path.resolve(__dirname, '../src/components'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
    path: path.join(__dirname + '/../public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
            hotReload: true,
            hydratable: true,
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
  devtool: prod ? false: 'source-map'
};