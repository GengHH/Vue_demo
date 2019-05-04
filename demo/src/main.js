import Vue from 'vue'
import VueRouter from 'vue-router'
import ElemelntUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routes from  './config/router.config'
import App from './App.vue'  //框架初始化时候自带的首页组件
import Index from './Index.vue'   //自家搭建的主页面
import './assets/css/common.css'  //全局样式重置


Vue.config.productionTip = false
Vue.use(VueRouter)   //使用elementUI组件
Vue.use(ElemelntUI)   //使用elementUI组件
const router =  new  VueRouter(routes);
console.log(router)
new Vue({
  router,
  el: '#app',
  render: h => h(Index)
})
