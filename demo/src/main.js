import Vue from "vue";
import VueRouter from "vue-router";
import ElemelntUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import routes from "./config/router.config";
import store from "./store";
// 自定义组件
import App from "./App.vue"; //框架初始化时候自带的首页组件
import Index from "./Index.vue"; //自家搭建的主页面
import "./assets/css/common.css"; //全局样式重置
// 自定义过滤器
import { currency } from "./filter/currency";

Vue.config.silent = false; //取消 Vue 所有的日志与警告。
Vue.filter("currency", currency);
Vue.use(VueRouter); //使用elementUI组件
Vue.use(ElemelntUI); //使用elementUI组件
const router = new VueRouter({
  mode: "history",
  routes: routes.routes
}); //添加路由的配置，并指定路由的模式为history(TODO),因为vue-router默认的是hash模式
new Vue({
  router,
  store,
  el: "#app",
  render: h => h(Index)
});
