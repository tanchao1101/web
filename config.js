var path = require('path');
var HtmlWebpackPlugin=require("html-webpack-plugin");
var rootPath=path.resolve(__dirname);
function resolve (dir) {
  return path.resolve(__dirname,dir);
}

module.exports = {
	entry: {
		index:resolve("./vue/index")
	},
	output: {
	 path: rootPath,
	 //publicPath: './build/[name].js',
	 filename: './build/[name].js'
	},
	resolve:{
		extensions:[".css",'.js','.jsx','.vue'],
		alias: {
		  'vue$': 'vue/dist/vue.esm.js'
		}
	},
   module: {
		loaders: [
		{
			test:/.css$/,
			loaders:["style-loader","css-loader"],
			exclude:"/node_modules/"
		},{
			test:/.less$/,
			loaders:["style-loader","css-loader","less-loader"],
			exclude:"/node_modules/"
		},{
			test: /\.vue$/,
			exclude: /node_modules/,
			loaders:['vue-loader']
		}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:resolve('./template/index.html'),
			title:'index',
			filename:'index.html',
			chunks:["index"],
			chunksSortMode: function (chunk1, chunk2) {
						var order = ['index'];
						var order1 = order.indexOf(chunk1.names[0]);
						var order2 = order.indexOf(chunk2.names[0]);
						return order1 - order2;  
				}
		})
	]
}
