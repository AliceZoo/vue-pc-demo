// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Swiper from 'vue-awesome-swiper'
import routes from './router.config.js'


Vue.use(Swiper);
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	scrollBehavior:() => ({    //滚动条在顶端
		y:0
	})
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})