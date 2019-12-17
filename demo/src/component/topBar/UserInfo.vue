<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <i class="iconfont myVue-icon-user"></i>
      <span>上帝用户</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>订单</el-dropdown-item>
      <el-dropdown-item>收藏夹</el-dropdown-item>
      <el-dropdown-item>个人信息</el-dropdown-item>
      <el-dropdown-item disabled>认证</el-dropdown-item>
      <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "UserInfoBox",
  props: [""],
  data() {
    return {
      
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    logout(){
      this.$store.dispatch('UserLogout',null)
    }
  },

  watch: {}
};
</script>
<style>
  @import '../../assets/icon/iconfont.css';
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-dropdown>:hover .el-icon-arrow-down{
    transform: rotate(180deg);
    transition: all .2s ease-in-out;
  }
  .el-icon-arrow-down {
    /* display: none; */
    font-size: 12px;
  }
  .el-dropdown{
    position: absolute !important;
    right: 30%;
  }
  /* .el-dropdown-link{
    color:#fff;
  } */
  .el-dropdown-link>i,.el-dropdown-link>span{
    color: #409EFF;
  }
</style>