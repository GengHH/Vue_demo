<template>
  <div id="search-box">
    <!-- <h3>{{searchBoxMsg}}</h3> -->
    <el-row id='search-box-row'>
      <el-col :span="20">
        <el-input v-model="searchBoxValue" placeholder="请输入查询条件"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button icon="el-icon-search" @click="search" circle></el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "SearchBox",
  data() {
    return {
      searchBoxValue: ""
    };
  },
  methods: {
    search: function() {
      alert("开始查询！敬请期待");
    }
  }
};
</script>

<style style lang="scss">
#search-box {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    vertical-align: center;
    align-items: center;
}
#search-box-row{
    width: 100%;
    height:45px;
}
.el-button.is-circle{
  border-radius: 4px;
}
</style>

