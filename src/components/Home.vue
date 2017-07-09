<template>
	<div id="Home">
        <BannerView></BannerView>
    	<indexAboutView></indexAboutView>
    	<div id="project">
    		<h3>工程与服务</h3>
    		<div class="project_list">
    			<ul>
    				<li>
    					<img src="../assets/images/bulid.gif" />
    					<span>
    						<p>以建筑物为平台，兼备信息设施系统、信息化应用系统、建筑设备管理系统、公共安全系统等，集结构、系统、服务、管理及其优化组合为一体，向人们提供安全、高效、便捷、</p>
    						<a href="javascript:;">了解详细</a>
    					</span>
    				</li>
    				<li>
    					<img src="../assets/images/Finance.gif" />
    					<span>
    						<p>随着电子信息时代的不断发展更新，集信息与电子技术特性为一身的企业网上银行，正不断印证交易成本降低、操作效率提高、内部控制提升和客户分布地域扩大等优势，为企业的贸易往来增添了更多的便利及机遇。</p>
    						<a href="javascript:;">了解详细</a>
    					</span>
    				</li>
    				<li>
    					<img src="../assets/images/Agriculture.gif" />
    					<span>
    						<p>农业信息化是指充分利用计算机技术、网络通信技术、数据库技术、多媒体技术、人工智能技术等现代信息技术，加速传统农业改造，促进农业和农村经济持续、稳定、高效发展的过程。</p>
    						<a href="javascript:;">了解详细</a>
    					</span>
    				</li>
    				<li>
    					<img src="../assets/images/3d.gif" />
    					<span>
    						<p>3D展示，是互联网产品展示的一种新型方式，该技术已用于电子商务领域，比如B2C网上商城、网店或者企业网站上的产品展示，也可用于样品邮件发送等等，其它不少行业包括医学界、教育界等众多领域也有广泛应用。</p>
    						<a href="javascript:;">了解详细</a>
    					</span>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<div id="case">
    		<div class="case_left fl">
    			<div class="left_one">
    				<img src="../assets/images/pic_1.gif" />
    				<div class="case_text">
    					<h3>如何修改文本</h3>
    					<p>在修改整个网站所有有关文本的地方，最好是点击本编辑器右上角的“HTML代码”进行修改，针对文本修改，避免退格时把样式删除！！</p>
    					<span>
    						<img src="../assets/images/pr_bg.gif" />
    						<a href="javascript:;">查看更多</a>
    					</span>
    				</div>
    			</div>
    			<div class="left_two">
    				<img src="../assets/images/pic_3.gif" />
    				<div class="case_text2">
    					<h3>如何修改文本</h3>
    					<p>在修改整个网站所有有关文本的地方，最好是点击本编辑器右上角的“HTML代码”进行修改，针对文本修改，避免退格时把样式删除！！</p>
    				</div>
    			</div>
    		</div>
    		<div class="case_right fr">
    				<img src="../assets/images/pic_2.gif" />
    				<div class="case_text3">
    					<h3>如何修改文本</h3>
    					<p>在修改整个网站所有有关文本的地方，最好是点击本编辑器右上角的“HTML代码”进行修改，针对文本修改，避免退格时把样式删除！！</p>
    				</div>
    		</div>
    	</div>
	</div>
</template>
<script>
import indexAboutView from './indexAbout.vue'
import BannerView from './Banner.vue'

export default{
  components:{
    BannerView,
    indexAboutView
  }  
}
</script>