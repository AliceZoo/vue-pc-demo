<template>
  <div id="Project">
    <Banner2View></Banner2View>
    <div class="content">
      <h3>新闻中心</h3>
      <div class="main">
        <div class="left fl">
          <div class="vmenu">
            <ul>
              <router-link v-for="nav in navList" :key="nav.id" :to="nav.path" tag="li" active-class="active">
                <a>{{nav.name}}</a>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="n_right fr">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner2View from './Banner2.vue'

export default{
  data () {
    return{
      navList:[
      {
        name: '公司动态',
        path: '/news/company',
        id: '1'
      },
      {
        name: '行业动态',
        path: '/news/industry',
        id: '2'
      }
    ],
    }
  },
  components:{
    Banner2View
  }  
}
</script>