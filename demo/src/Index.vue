<template>
    <div id="container">
        <TopBar inputProp="hahhahahhahahhahhah"/>
        <router-view></router-view>
        <transition enter-active-class="animated bounceInleft" leave-active-class="animated bounceOutRight">
            <router-view name="viewOne"></router-view>
        </transition>
        <transition enter-active-class="animated bounceOutRight" leave-active-class="animated bounceInleft">
            <router-view name="viewTwo"></router-view>
        </transition>
    </div>
</template>
<script>
import TopBar from './component/topbar/index.vue'  
export default {
    name:'Index',
    components: {
        TopBar
    },
    data(){
        return {
            "msg":"首页index"
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '/node_modules/animate.css/animate.min.css';
    #container{
        height: 100%;
    }
    h1{
        text-align:center;
    }
</style>


