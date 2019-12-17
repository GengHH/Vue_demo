import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

const instance = axios.create()

if(localStorage.getItem('user')){
    //Axios请求带token设置
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '')
}

export default {
    localLogin : function(data){
        console.log('reqData',data)
        return Vue.axios.post('http://localhost:8083/api/login',data)
    },
    localLogout : function(data){
        return instance.post('http://localhost:8083/api/logout',data)
    },
    localReg : function(data){
        return Vue.axios.post('http://localhost:8083/api/reg',data)
    }
}
