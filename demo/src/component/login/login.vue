<template>
  <div id="loginBox">
    <div class="mask"></div>
    <el-form id="login-box" status-icon ref="form" :rules="rules" :model="user">
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" v-model="user.username">
          <!-- <template slot="prepend">username</template> -->
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="user.password">
          <!-- <template slot="prepend">password</template> -->
        </el-input>
      </el-form-item>
      <el-form-item prop="sidentify">
        <el-col :span="14">
          <el-input placeholder="验证码（不区分大小写）" v-model="user.sidentify"></el-input>
        </el-col>
        <el-col :span="10">
          <v-sIdentify ref="verify"></v-sIdentify>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button id="login-btn" type="primary" @click="doLogin('form')">马上登录</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SIdentify from "./sIdentify.vue";
export default {
  name: "LoginBox",
  props: [""],
  data() {
    //自定义用户名验证规则
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    //自定义验证码验证规则
    var checksidentity = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else if (
        value.toLowerCase() !== this.$refs.verify.identifyCode.toLowerCase()
      ) {
        return callback(new Error("验证码错误"));
      } else {
        callback();
      }
    };
    return {
      user: {
        username: "",
        password: "",
        sidentify: ""
      },
      rules: {
        username: [{ validator: checkUserName, trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空" }],
        sidentify: [{ validator: checksidentity }]
      }
    };
  },
  components: {
    "v-sIdentify": SIdentify
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    doLogin(formName) {
      //增加form的校验功能
      console.log("图片中的验证码：", this.$refs.verify.identifyCode);
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("开始登录");
          console.log("界面用户信息", this.user);
          this.$store.dispatch("UserLogin", this.user);
        }
      });
    }
  },
  watch: {}
};
</script>
<style scoped>
#loginBox {
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
#login-box {
  z-index: 10;
  position: relative;
  width: 400px;
  padding: 200px 20px 10px;
  margin: 0 auto;
}
#login-btn {
  width: 100%;
}
</style>