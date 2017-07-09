<template>
  <div id="About">
    <Banner2View></Banner2View>
    <div class="content">
      <h3>关于我们</h3>
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
        <div class="right fr">
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
        name: '公司简介',
        path: '/about/Profile',
        id: '1'
      },
      {
        name: '公司架构',
        path: '/about/Framework',
        id: '2'
      },
      {
        name: '企业文化',
        path: '/about/Culture',
        id: '3'
      },
      {
        name: '公司资质',
        path: '/about/Qualifications',
        id: '4'
      },
      {
        name: '技术实力',
        path: '/about/Technology',
        id: '5'
      }
    ],
    }
  },
  components:{
    Banner2View
  }  
}
</script>