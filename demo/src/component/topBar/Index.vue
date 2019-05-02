<template>
  <div id="top-box">
    <!-- <h2>{{inputProp}}</h2> -->
    <el-row id="photo">
      <el-col :span="12">
        <img src="../../assets/logo.png">
      </el-col>
      <el-col :span="6">
        <SearchBox searchBoxMsg="hahahahah"></SearchBox>
      </el-col>
      <el-col :span="6">
        <UserInfoBox></UserInfoBox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchBox from "./Search.vue"
import UserInfoBox from "./UserInfo.vue"
  export default {
    name: "TopBar",
    components: {
      SearchBox,
      UserInfoBox
    },
    data() {
      return {
        test: "123"
      };
    }
  };
</script>

<style lang="scss">
  img {
      width: 45px;
      height: 45px;
      // margin: auto 0 auto 10px;
      align-items: center;
  }
  #top-box {
    widows: 100%;
    height: 60px;
    background-color: #409EFF;
  }

  #photo div{
    position: relative;
    display: flex;
    align-items: center;
  }
</style>
