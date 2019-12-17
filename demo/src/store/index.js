import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import allImages from './modules/imagePanel'
import login from './modules/login'

import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store( {
    static:debug,
    state:{
        count:1
    },
    modules:{
        login,
        cart,
        products,
        allImages
    },
    getters:{
        ...getters, //TODO
        getCount(){
            console.log("js 访问全局的store",this.$store);
            return this.state.count + 'GHH';
        }
    },
    mutations:{
        setCount(state,n){
            state.count += n;
        }
    },
    actions:{
        ...actions, //TODO
        test({commit}){
            commit('setCount',1);
        }
    }
})

export default store