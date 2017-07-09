<template>
	<div id="menu">
	  <div class="nav">
	  	<div class="logo fl"><img src="../assets/images/logo.png" width="140"></div>
	  	<div class="menu fr">
	  		<ul>
	  			<router-link v-for="nav in navList" :key="nav.id" :to="nav.path" tag="li" active-class="active">
		    		<a>{{nav.name}}</a> 
		    	</router-link>
		    </ul>
	  	</div>
	  </div>
	  <div class="gradient"></div>
    <div id='toTop'>^</div>
	</div>
</template>
<script>	
import BannerView from './Banner.vue'
import $ from 'jquery'

export default{
	data () {
    return{
    	navList:[
			{
				name: '首页',
				path: '/home',
				ig: '1'
			},
			{
				name: '关于我们',
				path: '/about',
				ig: '2'
			},
			{
				name: '工程与服务',
				path: '/project',
				ig: '3'
			},
			{
				name: '新闻中心',
				path: '/news',
				ig: '4'
			},
			{
				name: '联系我们',
				path: '/contact',
				ig: '5'
			}
		],
    }
  },
  components:{
    BannerView
  },
  mounted() {
    $(document).scroll(function(event) {
		if($(this).scrollTop()<=600){
			$("#toTop").css('opacity','0');
		}
		if($(this).scrollTop()>=600){
			$("#toTop").css('opacity','1');
		}
	});	
	$("#toTop").click(function(event) {
		$("body").animate({
			scrollTop:"0px"},
			666
			)
		});
	}
}
</script>
