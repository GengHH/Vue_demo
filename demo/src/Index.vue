<template>
  <div id="container">
    <!-- <div>{{count}}</div> -->
    <TopBar inputProp="hahhahahhahahhahhah" />
    <div id="content">
      <!-- <span>{{this.$store.state.count}}</span> -->
      <router-view name="indexView"></router-view>
      <transition
        enter-active-class="animated bounceOutRight"
        leave-active-class="animated bounceInleft"
      >
        <router-view name="loginView"></router-view>
      </transition>
      <router-view name="footerView"></router-view>
    </div>
  </div>
</template>
<script>
import TopBar from "./component/topbar/index";
//var TopBar = require('./component/topbar/index')
//import CartApp from  './component/cart/App.vue'
import Footer from "./component/footer/footer.vue";

export default {
  name: "Index",
  components: {
    TopBar,
    Footer
  },

  data() {
    return {
      msg: "首页index",
      count: this.$store.state.count
    };
  }
};
</script>
<style lang="scss" scoped>
@import "/node_modules/animate.css/animate.min.css";
#container {
  position: relative;
  width: 100%;
  height: 100%;
}
h1 {
  text-align: center;
}
#content {
  //height: calc(100vh - 60px);
  width: 100%;
}
</style>


