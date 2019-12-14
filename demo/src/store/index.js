import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import allImages from './modules/imagePanel'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store( {
    state:{
        count:1
    },
    modules:{
        cart,
        products,
        allImages
    },
    static:debug,

    getters:{
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
        test({commit}){
            commit('setCount',1);
        }
    }
})

export default store