
var HtmlWebpackPlugin=require("html-webpack-plugin");
// var path = require('path')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
// var rootPath='./detection.picooc.com/web/fatburntestReact';
var path=require("path");//npm的路径工具
module.exports={
	//输入
	entry:{
		index:path.resolve(__dirname,'./static/js/index.js')
	},
	//输出
	output:{
		path:path.resolve(__dirname,'build/'),
		//publicPath:"https://cdn2.picooc.com/web/res/fatburn",
		//path:rootPath+"/jsv2/",
		filename:'static/js/[name].js',
		// filename:'jsv2/[name].js',
	},
	module:{
		//对文件进行转换
		loaders:[
			{
				test:/\.css$/,
				loaders:["style-loader","css-loader","less-loader"],
				exclude:"/node_modules/"
			},
			{
				test:/\.less$/,
				loaders:["style-loader","css-loader","less-loader"],
				exclude:"/node_modules/"
			}
		]

	},
	devServer:{
		historyApiFallback: true,
		hot: true,
		inline: true,
		// progress: true
	},
	resolve:{
		extensions:['.js',".css",'.jsx']//自动补全文件后缀
	},
	watch: true,
	plugins: [
		new HtmlWebpackPlugin({ /*问卷调查*/
		  template:path.resolve(__dirname,'index.html'),
		  title:'index',
		  filename:'index.html',
		  chunks:['index'],
		  chunksSortMode: function (chunk1, chunk2) {
			var order = ["index"];
			var order1 = order.indexOf(chunk1.names[0]);
			var order2 = order.indexOf(chunk2.names[0]);
			return order1 - order2;
		  }
		})//,
		// new UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	]
}









