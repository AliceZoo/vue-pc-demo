<template>
  <div id="Project">
    <Banner2View></Banner2View>
    <div class="content">
      <h3>工程与服务</h3>
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
        name: '工程案例',
        path: '/project/case',
        id: '1'
      },
      {
        name: '建筑智能化',
        path: '/project/architecture',
        id: '2'
      },
      {
        name: '财务信息化',
        path: '/project/finance',
        id: '3'
      },
      {
        name: '农业信息化',
        path: '/project/agriculture',
        id: '4'
      },
      {
        name: '3D数码展示',
        path: '/project/digital',
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