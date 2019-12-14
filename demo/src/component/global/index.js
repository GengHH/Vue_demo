import Vue from 'vue'

// js 文件创建全局组件
Vue.component('button-counter', {
    data: function () {
      console.log(this.$store);
      return {
        count2: 0
      }
    },
    template: '<button v-on:click="count2++">You clicked me {{ count2 }} times.</button>'
  })
