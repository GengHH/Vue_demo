<template>
  <div id="imageBox">
    <!-- <ul>
        <ul v-for="(img,index) in myImages" :key="index">
            <img :src= "img.path" :alt= "img.title" />
        </ul>
    </ul> -->
    <el-row :gutter="20">
        <el-col :span="6"  v-for="(img,index) in myImages" :key="index">
            <div class="grid-content bg-purple">
                <img :src= "img.path" alt= "未加载" :title="img.title"/>
            </div>
        </el-col>
    </el-row>   
    <!-- 循环动态生成element栅格排版 -->
    <!-- <el-row gutter="18">
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" class="item">
                <div style="padding: 14px;">
                </div>
            </el-card>
        </el-col>
        <el-col :span="6" v-for="(o, index) in 8" :key="o">
            <el-card :body-style="{ padding: '0px' }" class="item">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530092564397&di=6e8ea66124cce0fc24161c6b53cc84a9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01be175a07d04ba801204a0e00c05e.jpg%401280w_1l_2o_100sh.jpg" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                        <time class="time">2017-08-09</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row> -->
  </div>
</template>

<script>
import {  mapState} from 'vuex'
export default {
    name: "ImagePanel",
    data: function(){
        return {
            publicPath : "/"
        }
    },
    computed : mapState({
        myImages : state => state.allImages.allImage
    }),
    created () {
        this.$store.dispatch('allImages/getAllImages')
    }
}
</script>

<style scoped>
    #imageBox {
        width: 94%;
        margin: 0 auto 130px;
    }
    .grid-content {
        height: 300px;
    }
    img {
        width: 100%;
        height: 98%;
        margin-top: 1%;
        margin-bottom: 1%;
    }

</style>