<template>
  <div id="top-box">
    <!-- <h2>{{inputProp}}</h2> -->
    <el-row id="photo">
      <el-col :span="16">
        <img src="../../assets/favicon.png" />
        <NvaBox></NvaBox>
      </el-col>
      <el-col :span="4">
        <SearchBox searchBoxMsg="hahahahah"></SearchBox>
      </el-col>
      <el-col :span="4">
        <UserInfoBox></UserInfoBox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchBox from "./Search.vue"
import UserInfoBox from "./UserInfo.vue"
import NvaBox from "./Nva.vue"

export default {
  name: "TopBar",
  components: {
    SearchBox,
    UserInfoBox,
    NvaBox
  },
  data() {
    return {
      test: "123"
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 45px;
  height: 45px;
  margin: auto 0 auto 10px;
  align-items: center;
}

#top-box {
  width: 100%;
  height: 60px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  //background-color: rgba(202, 215, 233, 1);
  box-shadow: 0px 0px 5px #66b1ff7a;
}

#photo div {
  position: relative;
  display: flex;
  align-items: center;
}
.router-link-active {
  color: #e0604f;
}
</style>
