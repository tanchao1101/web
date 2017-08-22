<template>
<router-view></router-view>
</template>
<script>


import page1 from "./page1/page1.vue";//引入别的vue
import page2 from "./page2/page2.vue";//引入别的vue
import page3 from "./page3/page3.vue";//引入别的vue
import page4 from "./page4/page4.vue";//引入别的vue
export default {
	components:{
		page1,
		page2,
		page3,
		page4
	}
}
 //require("../../a.less");

</script>
<style lang="less">
@import "../public.less";
//@color:#000;

</style>