<template>
  <div id="footer-box">
    <div
      id="footer-text"
      class="europa-regular f5-l lh-copy pr5-l flex-auto-ns white"
      data-reactid=".6.0.0"
    >
      We use cookies to make your browsing experience better. By using the site, you agree to our use of cookies.
      We use cookies to make your browsing experience better.
    </div>
    <div id="footer-button">
      <el-button type="primary" round>Agree & Close</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
#footer-box {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #333;
  z-index: 999;
  bottom: 0;
  left: 0;
  font: 20px;
  font-family: "Europa", "europa", Avenir, sans-serif;
}
#footer-text {
  width: 80%;
  float: left;
  padding: 2rem 2rem;
  text-align: left;
}
#footer-button {
  width: 20%;
  float: right;
  padding-left: 3rem;
  padding-top: 2rem;
  text-align: left;
}
.white {
  color: #fff;
  font-size: 1em;
  font-family: "europa";
}
</style>