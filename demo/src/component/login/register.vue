<template>
  <div id="registerBox">
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item>
        <el-input placeholder="请输入用户名" v-model="user.username">
          <template slot="prepend">username</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入密码" v-model="user.password">
          <template slot="prepend">password</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="再次请输入密码" v-model="user.password_1">
          <template slot="prepend">password_1</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doLogin">立即注册</el-button>
        <el-button>取消</el-button>
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
      doLogin(){
          console.log("开始注册")
          this.$store.dispatch('UserReg',this.user)
      }
  },
  watch: {}
};
</script>
<style lang='' scoped>
</style>