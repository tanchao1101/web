<template>
<header class="header">
	<div class="header-list">
		<router-link to="/page1" class="header-li">个人介绍</router-link>
		<router-link to="/page2" class="header-li">工作经验</router-link>
		<router-link to="/page3" class="header-li">项目经验</router-link>
		<router-link to="/page4" class="header-li">联系方式</router-link>
	</div>
</header>
</template>
<script>


// import page1 from "../page1/page1.vue";//引入别的vue
// import page2 from "../page2/page2.vue";//引入别的vue
// import page3 from "../page3/page3.vue";//引入别的vue
// import page4 from "../page4/page4.vue";//引入别的vue
// export default {
// 	components:{
// 		page1,
// 		page2,
// 		page3,
// 		page4
// 	}
// }
 //require("../../a.less");

</script>
<style lang="less">
@import "../../public.less";
//@color:#000;
.flex{
	display: -webkit-flex;
	display: flex;
	justify-content:space-between;
	margin: 0 auto;
}
.header{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: #fff;
	.header-list{
		width: 980px;
		background: #fff;
		.flex;
	}
	.header-li{
		color: @color;
		text-align: center;
		flex-grow:1;
	}
}
</style>