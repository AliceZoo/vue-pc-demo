<template>
	<div id="menu">
	  <div class="nav">
	  	<div class="logo fl"><img src="../assets/images/logo.png" width="140"></div>
	  	<div class="menu fr">
	  		<ul>
		    	<!-- <router-link to="/" tag="li"></router-link> -->
		    	<li v-for="item in items" @mouseenter="showToggle(item)"  @mouseleave="hideToggle(item)"> 
			        <h2>{{item.name}}</h2> 
			        <ul class="tMenu" v-show="item.isSubShow"> 
			          <li v-for="subItem in item.subItems"> 
			            <h3>{{subItem.name}}</h3> 
			          </li> 
			        </ul> 
			    </li>

		    </ul>
	  	</div>
	  </div>
	  <div class="gradient"></div>
	</div>
</template>
<script>

export default {
	data(){
		return {
			items:[ 
			{
				name:'首页',
			},
	        { 
	          name:'关于我们', 
	          isSubShow:false, 
	          subItems:[ 
	            { 
	              name:'公司简介'
	            }, 
	            { 
	              name:'公司架构'
	            }, 
	            { 
	              name:'企业文化'
	            }, 
	            { 
	              name:'公司资质'
	            } , 
	            { 
	              name:'技术实力'
	            }  
	          ] 
	        }, 
	        { 
	          name:'工程与服务', 
	          isSubShow:false, 
	          subItems:[ 
	            { 
	              name:'建筑智能化'
	            }, 
	            { 
	              name:'财务信息化'
	            }, 
	            { 
	              name:'农业信息化'
	            }, 
	            { 
	              name:'3D数码展示'
	            }, 
	            { 
	              name:'工程案例'
	            } 
	          ] 
	        }, 
	        { 
	          name:'新闻中心', 
	          isSubShow:false, 
	          subItems:[ 
	            { 
	              name:'所有新闻'
	            }, 
	            { 
	              name:'公司动态'
	            }, 
	            { 
	              name:'行业动态'
	            }
	          ] 
	        }, 
			{
				name:'联系我们',
			}
	      ]
		}
	},
	methods: {
        showToggle:function(item){
            item.isSubShow = !item.isSubShow;
        },
        hideToggle:function(item){
            item.isSubShow = !item.isSubShow;
        }
    }
}
</script>
<style scoped>
</style>




<!-- <template>
	<div id="menu">
	  <div class="nav">
	  	<div class="logo fl"><img src="../assets/images/logo.png" width="140"></div>
	  	<div class="menu fr">
	  		<ul>
	  			    	<router-link to="/" tag="li">
	  			    		<a href="javascript:;">首页</a> 
	  			    	</router-link>
	  			    	<router-link to="/about" tag="li">
	  			    		<a href="javascript:;">关于我们</a> 
	  			    	</router-link>
	  			    	<router-link to="/" tag="li">
	  			    		<a href="javascript:;">工程与服务</a> 
	  			    	</router-link>
	  			    	<router-link to="/" tag="li">
	  			    		<a href="javascript:;">新闻中心</a> 
	  			    	</router-link>
	  			    	<router-link to="/" tag="li">
	  			    		<a href="javascript:;">联系我们</a> 
	  			    	</router-link>
	  			    </ul>
	  	</div>


	  </div>
	  <div class="gradient"></div>
    <BannerView></BannerView>
	</div>
</template>
<script>	
import BannerView from './Banner.vue'
import VueRouter from 'vue-router'

export default{
  components:{
    BannerView
  },
   mounted() {
    this.aa();
  }, 
  methods:{  
     aa: function(){
     	alert()
     }
  }  
}
</script> -->