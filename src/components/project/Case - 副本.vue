<template>
	<div id="p_case">
		<div class="p_case">
			<ul>
				<li><a href="javascript:;"><img src="../../assets/images/case1.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case2.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case3.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case4.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case5.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case6.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case1.jpg"></a></li>
				<li><a href="javascript:;"><img src="../../assets/images/case2.jpg"></a></li>
			</ul>
		</div>
		<div id="page">
			<ul class="pagination" >
            <li v-show="current != 1" @click="current-- && goto(current)" ><a href="javascript:;">上一页</a></li>
            <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
              <a href="javascript:;" >{{index}}</a>
            </li>
            <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)"><a href="javascript:;" >下一页</a></li>
        </ul>
		</div>
	</div>
</template>
<script>
export default{
	data() {
		return{
			current:1,
      showItem:5,
      allpage:13
		}
	},
	computed:{
    pages:function(){
      var pag = [];
        if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
           //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.showItem,this.allpage);
          while(i){
              pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
            i = this.showItem;
          if( middle >  (this.allpage - this.showItem)  ){
            middle = (this.allpage - this.showItem) + 1
          }
          while(i--){
              pag.push( middle++ );
          }
        }
      return pag
     }
  },
  methods:{
    goto:function(index){
      if(index == this.current) return;
        this.current = index;
        //这里可以发送ajax请求
    }
  }
}
</script>
<style>
	.pagination {
        position: relative;

      }
      .pagination li{
        display: inline-block;
        margin:0 5px;
      }
      .pagination li a{
        padding:.5rem 1rem;
        display:inline-block;
        border:1px solid #ddd;
        background:#fff;

        color:#0E90D2;
      }
      .pagination li a:hover{
        background:#eee;
      }
      .pagination li.active a{
        background:#0E90D2;
        color:#fff;
      }
</style>