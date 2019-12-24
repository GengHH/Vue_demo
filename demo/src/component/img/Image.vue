<template>
  <div id="imageBox">
    <!-- <ul>
        <ul v-for="(img,index) in myImages" :key="index">
            <img :src= "img.path" :alt= "img.title" />
        </ul>
    </ul>-->
    <el-row :gutter="20">
      <el-col :span="6" v-for="(img,index) in myImages" :key="index">
        <div class="grid-content bg-purple">
          <img :src="img.path" alt="未加载" :title="img.title" />
          <div class="imgMark animated">
            <el-col :span="24" class="imgMarkHeader">123</el-col>
            <el-col :span="24" class="imgMarkBody">456</el-col>
            <el-col :span="24" class="imgMarkFooter">789</el-col>
          </div>
        </div>
        <div class="introduction">
          <div class="title">{{ img.title }}</div>
          <div class="detail">
            <el-col :span="4">
              <img class="avatar" :src="img.avatar" alt />
            </el-col>
            <el-col :span="10">
              <div>{{ img.name }}</div>
            </el-col>
            <el-col :span="10">
              <h4 class="date">{{ img.createTime }}</h4>
            </el-col>
          </div>
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
    </el-row>-->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ImagePanel",
  data: function() {
    return {
      publicPath: "/"
    };
  },
  computed: mapState({
    myImages: state => state.allImages.allImage
  }),
  created() {
    this.$store.dispatch("allImages/getAllImages");
    //this.$store.dispatch("GetImgPanel");
  },
  mounted() {
    $(".grid-content").mouseover(function() {
      $(this)
        .children(".imgMark")
        .show()
        .removeClass("fadeOutLeft faster")
        .addClass("fadeInLeft");
    });
    $(".grid-content").mouseout(function() {
      $(this)
        .children(".imgMark")
        .removeClass("fadeInLeft")
        .addClass("fadeOutLeft faster");
    });
  }
};
</script>

<style scoped>
#imageBox {
  width: 94%;
  margin: 0 auto 130px;
}
.grid-content {
  height: 300px;
  position: relative;
  overflow: hidden;
}
img {
  width: 100%;
  height: 99%;
  margin-top: 1%;
  transition: all 0.5s ease-in-out;
  /* margin-bottom: 1%; */
}
.grid-content:hover > img {
  transform: scale(1.2);
}
/* .grid-content:hover + .introduction {
  background-color: burlywood;
} */
.introduction {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-radius: 0 0 5px 5px;
  margin-bottom: 10px;
}
.imgMark {
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #0000007a;
  top: 0px;
  left: 0px;
}
.imgMarkHeader,
.imgMarkFooter {
  width: 100%;
  height: 20%;
  text-align: right;
}
.imgMarkBody {
  width: 100%;
  height: 60%;
  text-align: center;
}
.title {
  padding: 10px;
  border-bottom: 1px dotted #eee;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}
.detail {
  position: relative;
  line-height: 50px;
}
.avatar {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  /* margin-top: 10px; */
}
.date {
  float: right;
  margin-right: 10px;
  font-weight: normal;
  margin: 0;
  line-height: 50px;
  color: #ccc;
}
</style>