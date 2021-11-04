const CracoLessPlugin = require('craco-less');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.BUILD_PATH = 'dist'

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { '@primary-color': '#1DA57A' },
						javascriptEnabled: true,
					},
				},
			},
		},
		
	],
	webpack: {
		configure: (webpackConfig, { env, paths }) => { 
			
			const config = {
				
				entry: {
					index: path.resolve(paths.appSrc, './index.less') 
				},
				output: {
					path: paths.appBuild,
					filename: '[name].js',
					futureEmitAssets: true,
					publicPath: paths.publicUrlOrPath,
				},
				plugins: [
					new MiniCssExtractPlugin({
						filename: '[name].css',
					}),
					
					new CopyWebpackPlugin({
						patterns: [{
							from: path.join(paths.appSrc, './components'),
							to: path.join(paths.appBuild , `./components`),
							globOptions: { 
								ignore: ['**/*.tsx'] 
							}
						}]
					})
				],
				module: webpackConfig.module
			}
			
			return config;
		}
	},
	
};