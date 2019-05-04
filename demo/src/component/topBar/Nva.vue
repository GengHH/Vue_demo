<template>
    <el-row id = "navBox">
        <el-col :span="4">
            <router-link :to="{name: 'home'}">首页</router-link>
        </el-col>
        <el-col :span="4">
            <router-link :to="{name: 'info'}">信息</router-link>
        </el-col>
        <el-col :span="4">
            <router-link :to="{name: 'star'}">关注</router-link>
        </el-col>
        <el-col :span="4">
            <router-link :to="{name: 'pz'}">品牌</router-link>
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
    name:'NvaBox',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>
    .router-link-active {
        color: blueviolet;
    }
    #navBox{
        width: 75%;
        height: 100%;
        margin: 0 auto;
    }
    a{
        font-size: 14px;
    }
</style>