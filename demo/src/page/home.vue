<template>
  <el-carousel id="my-carousel">
    <el-carousel-item v-for="(item,index) in imgs" :key="index">
      <img :src="item.path" alt="item.name">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgs: [
        { path: require('../assets/img/homeOne.jpg'), name: '第一张图片' },
        { path: require('../assets/img/homeTwo.jpg'), name: '第二张图片' },
        { path: require('../assets/img/homeThree.jpg'), name: '第三张图片' },
        { path: require('../assets/img/homeFour.jpg'), name: '第四张图片' }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

#my-carousel {
  height: calc(100vh - 60px);
}
img {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

<style>
.el-carousel__container {
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100%;
  margin: 0 auto;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
