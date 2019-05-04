import Home from '../page/home.vue'
import User from '../component/test/User.vue'
import Loading from '../component/loading/loading.vue'

const H  = {
    template:'<div>我是从home中过来的</div>'
}
const I  = {
    template:'<div>我是从info中过来的</div>'
}
const P  = {
    template:'<div>我是从pz中过来的1</div>'
}
const S  = {
    template:'<div>我是从Star or style中过来的</div>'
}
const T  = {
    template:`<div>我是从User中过来的3(字符串模板)
                <h3>哈哈</h3>
            </div>`
}

export default {
    routes: [
        {
            path: '/home',name:'home',component: Home
        },{
            path: '/style',name:'style',
            components: {
                viewTwo: S
            }
        },{
            path:'/pz',name:'pz', 
            components: {
                viewTwo: P
            }
        },{
            path:'/info',name:'info',
            components: {
                viewOne: I
            }
        },{
            path:'/star',name:'star',
            components: {
                viewOne : S
            }
        },{
            path:'/test',name:'test', component: Loading
        },{
            path:'*', component: Home
        }
    ]
}