
import Vue from 'vue';//引入vue
import VueRouter from 'vue-router';//引入vue-router,路由跳转
import VueResource from 'vue-resource';//引入vue-resource,类似ajax
import index from "./components/index_main.vue";//引入别的vue
import headerHtml from "./components/public/header.vue";//引入别的vue

import page1 from "./components/page1/page1.vue";//引入别的vue
import page2 from "./components/page2/page2.vue";//引入别的vue
import page3 from "./components/page3/page3.vue";//引入别的vue
import page4 from "./components/page4/page4.vue";//引入别的vue


// require("./a.less");
//import "./a.less";

Vue.use(VueRouter);//使用路由
Vue.use(VueResource);//使用请求，类似ajax
let data11={
	"a1":17,
	"a2":5
}



let router=new VueRouter({//路由设置
	routes:[//数组，跳转路径
	{path:'/page1',component:page1},//path，#后的路径，component跳转的模板
	{path:'/page2',component:page2},
	{path:'/page3',component:page3},
	{path:'/page4',component:page4},
	]
});
var vm =new Vue({
	el:"#index",//挂载在页面的具体元素下
	router:router,
	data: function (){//初始数据
		return {
			aa:1
		}
	},
	template:'<div><headerHtml /><index /></div>',//使用模板
	created:function (){//创建时调用，注意：使用this不能用es方法简写

	},
	methods:{},//方法集，放置需要的方法
	components:{//引入的模板
		"headerHtml":headerHtml,
		"index":index
	}
})
