<template>
	<div id="iAbout">
		<div class="About">
			<div class="about_text">
				<h3>关于我们</h3>
				<p>深圳市朗尼科智能股份有限公司(ShenZhen LONIX Intellitech Co., Ltd)创立于1992年，是家以智慧政务信息化平台建设、智慧农业信息化平台建设、智慧城市综合解决方案为核心业务，集研发、生产和销售于一体的国家级高新技术企业。</p>
				<a class="fr" href="javascript:;">了解我们</a>
			</div>
			<div class="new">
				<h2 class="fl ">新闻动态</h2>
			    <div class="shell">
			        <ul class="notice-list" id="notice_list" :style="{width:ulHeight}">
			          <li v-for="item in newList">
					  			<a href="javascript:">{{item.name}}</a>
					  		</li>
			        </ul>
			    </div>
			</div>
	</div>
	</div>
</template>

<script>
export default {
  data () {
    return{
    	newList:[
				{name: '杭州纵火保姆身陷至少6起借贷案 涉诉本金35.5万'},
				{name: '家长给孩子暑期报班花数万 孩子称放假比上学累'},
				{name: '16岁女儿在教室遭同学奸杀 母亲：我就希望他死！'},
				{name: '盲人考生超一本线88分！梦想给盲人孩子当老师'},
				{name: '云南缉毒现场：10多人边开枪边朝警察冲'},
				{name: '最强学霸寝室 3人保研1人哈佛直博'}
			],
			ulHeight: "0px"
    }
  },
  mounted: function() {
    this.$nextTick(function() {
        this.createUlHeight();
        this.ulGunDong();
    });
	},
  methods:{
    createUlHeight: function() {
		  var all_li = document.getElementById("notice_list").getElementsByTagName("li").length + 1;
			this.ulHeight = all_li * 29 + "px";
		},
		ulGunDong: function() {
      var ul = document.getElementById("notice_list");
      var li = ul.getElementsByTagName("li");
      var speed = -1;
      var timer = null;

      var new_li = li[0].cloneNode(true)
      ul.appendChild(new_li);

      timer = setInterval(function() {
        ul.style.top = ul.offsetTop + speed + 'px';
        if (ul.style.top == -(li.length-1) * 29+'px') {
        	ul.style.top = '0';
    		}
      },40);

      ul.onmouseover = function() {
          clearInterval(timer);
      };

      ul.onmouseout = function() {
          timer = setInterval(function() {
          ul.style.top = ul.offsetTop + speed + 'px';
          if (ul.style.top == -(li.length-1) * 29+'px') {
          	ul.style.top = '0';
      		}
        },40);
      };
		}
  }
}


</script>