<template>
  <div id="regBox">
    <div class="mask"></div>
    <el-form id="reg-box" ref="form" :model="user">
      <el-form-item>
        <el-input placeholder="请输入用户名" v-model="user.username">
          <!-- <template slot="prepend">username</template> -->
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="user.password">
          <!-- <template slot="prepend">password</template> -->
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="再次请输入密码" v-model="user.password_1">
          <!-- <template slot="prepend">password_1</template> -->
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button id="reg-btn" type="primary" @click="doreg">立即注册</el-button>
        <el-button id="exit-btn" @click="exit">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "RegisterBox",
  props: [""],
  data() {
    return {
        user:{
            username:'',
            password:'',
            password_1:''
        }
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
      doreg(){
          console.log("开始注册")
          this.$store.dispatch('UserReg',this.user)
      },
      exit(){
        history.go(-1)
      }
  },
  watch: {}
};
</script>
<style scoped>
#regBox {
  height: 100%;
  widows: 100%;
  position: relative;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #66b1ff94;
  z-index: 1;
  top: 0;
  left: 0;
}
#reg-box {
  z-index: 10;
  position: relative;
  width: 400px;
  padding: 200px 20px 10px;
  margin: 0 auto;
}
#reg-btn,#exit-btn {
  width: 197px;
  margin: 0;
}
</style>