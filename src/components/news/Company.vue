<template>
	<div id="newsList">
		<div id="news">
			<ul>
				<li v-for="news in newList" :key="news.id">
				 	<span>{{news.time}}</span>
				 	<router-link :to="'/news/company/inside/'+news.id">
				 		{{news.title}}
				 	</router-link>
				</li>
			</ul>
		</div>
		<div id="page">
			<ul class="pagination" >
	      <li><a href="javascript:;">上一页</a></li>
	      <li>
	        <a href="javascript:;" >1</a>
	      </li>
	      <li><a href="javascript:;" >下一页</a></li>
	  	</ul>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			newList: [
				{
					title: '选购帽子的四个小技巧',
					time: '2017-07-03',
					id: '1'
				},
				{
					title: '怎样的帽子才是好的',
					time: '2017-07-04',
					id: '2'
				},
				{
					title: '什么帽子的品牌最好',
					time: '2017-07-05',
					id: '3'
				},
				{
					title: '怎么去挑选帽子的品牌',
					time: '2017-07-05',
					id: '4'
				},
				{
					title: '习怎样的帽子更好',
					time: '2017-07-06',
					id: '5'
				},
				{
					title: '什么样的帽子性价比高',
					time: '2017-07-07',
					id: '6'
				}
			]
		}
	}
}

</script>