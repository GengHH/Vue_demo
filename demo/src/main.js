import Vue from 'vue'
import App from './App.vue'  //框架初始化时候自带的首页组件
import Index from './Index.vue'   //自家搭建的主页面
import ElemelntUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'

Vue.config.productionTip = false
Vue.use(ElemelntUI)   //使用elementUI组件

new Vue({
  el: '#app',
  render: h => h(Index)
})
