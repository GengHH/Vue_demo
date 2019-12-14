<template>
  <el-row id="navBox">
    <el-col :span="4">
      <router-link :to="{name: 'home'}">首页</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name: 'info'}">信息</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name: 'star'}">相册</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name: 'pz'}">购物车</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name: 'style'}">样式</router-link>
    </el-col>
    <el-col :span="4">
      <router-link :to="{name: 'test', params: { id: 123 }}">测试基地</router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NvaBox",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.router-link-active {
  color: #fff;
  background-color: #409eff;
  border-radius: 15px;
  animation: cubic-bezier(0.075, 0.82, 0.165, 1);
}
#navBox {
  width: 75%;
  height: 100%;
  margin: 0 auto;
}
a {
  color: #e0604f;
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: -15px auto 0;
  /* background-color: #fff;
  border-radius: 15px; */
  position: relative;
  top: 50%;
}
</style>