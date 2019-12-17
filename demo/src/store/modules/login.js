import {USER_SIGNIN,USER_SIGNOUT,USER_REG} from '../type'

const isLoginIn = function(){
    var token = localStorage.getItem('user')
    console.log(token);
    //console.log(token.split('.')[1]);
    if(token && token!=='undefined'){
        //对用户信息进行解码
        var payload = JSON.stringify(window.atob(token.split('.')[1]))
        if( payload.exp > new Date() /1000){
            return JSON.parse(localStorage.getItem('user'))
        }
    }else{
        return false
    }
}


const state = {
    token: isLoginIn() || null
}

const mutations = {
    [USER_SIGNIN](state,user){
        console.log('oneLogUser',user)
        if(user && user !== 'undefined'){
            localStorage.setItem('user',JSON.stringify(user))
            state.token = user
        }else{
            localStorage.removeItem('user')
            state.token = null

        }
    },
    [USER_SIGNOUT](user){
        localStorage.removeItem('user')
        state.token = null
    },
    [USER_REG](state,user){
        console.log('oneRegUser',user)
        localStorage.setItem('user',JSON.parse(user))
        state.token = user
    }
}

export default{
    state,
    mutations
}