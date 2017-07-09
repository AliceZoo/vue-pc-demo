<template>
<div id="banner">
	<swiper :options="swiperOption" ref="mySwiperA">
      <swiper-slide><img src="../assets/images/banner_1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner_1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner_1.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default{
  data(){
    return {
      swiperOption: {
        speed:800,
        loop :true,
        autoplay: 2000,
        notNextTick: true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true, 
        observeParents:true,
      }
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiperA.swiper
      }
  }
}
</script>