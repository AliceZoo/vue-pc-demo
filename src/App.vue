<template>
  <div id="app">
    <NavView></NavView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import HomeView from './components/Home.vue'
import FooterView from './components/Footer.vue'

export default{
  components:{
    NavView,
    HomeView,
    FooterView
  }
}
</script>

<style>
  @import './assets/css/index.css';
</style>
