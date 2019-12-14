<template>
  <!-- 首页 -->
  <div id="carouselBox">
    <el-carousel id="my-carousel">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.path" alt="item.name" />
      </el-carousel-item>
    </el-carousel>
    <!-- <el-button typle="primary" plain>开始</el-button> -->

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <defs>
        <symbol id="arrow" viewBox="0 0 100 100">
          <path d="M12.5 45.83h64.58v8.33H12.5z" />
          <path d="M59.17 77.92l-5.84-5.84L75.43 50l-22.1-22.08 5.84-5.84L87.07 50z" />
        </symbol>
      </defs>
    </svg>
    <router-link :to="{name: 'test', params: { id: 123 }}">
      <div class="container">
        <div class="content">
          <a href="#" class="button">
            Begin
            <span>
              <svg>
                <use xlink:href="#arrow" href="#arrow" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgs: [
        { path: require("../assets/img/homeOne.jpg"), name: "第一张图片" },
        { path: require("../assets/img/homeTwo.jpg"), name: "第二张图片" },
        { path: require("../assets/img/homeThree.jpg"), name: "第三张图片" },
        { path: require("../assets/img/homeFour.jpg"), name: "第四张图片" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#carouselBox {
  height: calc(100vh - 60px);
  position: relative;
  width: 100%;
  // height: 100%;
  top: 0;
  //height: calc(100vh - 60px);
}
#carouselBox .container {
  width: 12%;
  height: 40px;
  position: absolute;
  bottom: 160px;
  right: 44%;
  z-index: 100;
}
img {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>

<style>
#my-carousel,
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Droid+Serif");

$button-color: #cedaf3;
$transition-time: 750ms;

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  //min-height: 10vh;
  //background-color: #ededed;
  font-family: "Droid Serif", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.button {
  position: relative;
  display: inline-flex;
  text-decoration: none;
  color: #8b92a0;
  background-color: lighten($button-color, 10%);
  padding-left: 2rem;
  overflow: hidden;
  z-index: 1;
  align-items: center;
  //box-shadow: 0px 3px 4px -4px rgba(0,0,0,0.75);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: 100%;
    background-color: $button-color;
    z-index: -1;
    transition: transform $transition-time;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    padding: 1rem;
    overflow: hidden;
    background-color: $button-color;
  }

  svg {
    max-width: 20px;
    width: 100%;
    height: auto;
    max-height: 18px;
    fill: white;
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }

    svg {
      animation: moveArrow $transition-time;
    }
  }
}

@keyframes moveArrow {
  0% {
    transform: translateX(0px);
  }

  49% {
    transform: translateX(50px);
  }

  50% {
    transform: translateX(-50px);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
