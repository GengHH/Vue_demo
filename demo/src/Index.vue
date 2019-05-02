<template>
    <div>
        <TopBar inputProp="hahhahahhahahhahhah"/>
        <div>
            <h1>你所见的，并非最好的！</h1>
        </div>
            
    </div>
</template>
<script>
import TopBar from './component/topbar/Index.vue'

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
    h1{
        text-align:center;
    }
</style>


