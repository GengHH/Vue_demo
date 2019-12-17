<template>
  <div id="loginBox">
    <div class="mask"></div>
    <el-form id="login-box" status-icon ref="form" :rules="rules" :model="user">
      <el-form-item  prop="username">
        <el-input placeholder="请输入用户名" v-model="user.username">
          <template slot="prepend">username</template>
        </el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="user.password">
          <template slot="prepend">password</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doLogin('form')">马上登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  props: [""],
  data() {
    var checkUserName = (rule,value,callback) => {
      console.log("rule",callback)
      if(!value){
        return callback(new Error('用户名不能为空'))
      }else{
        callback()
      }
    }
    return {
        user:{
            username:'',
            password:''
        },
        rules:{
          username:[{validator: checkUserName , trigger: 'blur'}],
          password:[{required: true,message:'密码不能为空'}]
        }
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
      doLogin(formName){
        //增加form的校验功能
        var a = this.$refs[formName].validate((valid) =>{
          if(valid){
            console.log("开始登录")
            console.log("界面用户信息",this.user)
            this.$store.dispatch('UserLogin',this.user)
          }
        })
      }
  },

  watch: {}
};
</script>
<style scoped>
    #loginBox{
      height: 100%;
      widows: 100%;
      position: relative;
    }
    .mask{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #66b1ff94;
      z-index: 1;
      top: 0;
      left: 0;
    }
    #login-box {
      z-index: 10;
      position: relative;
    }
</style>