import Vue from 'vue'

import Home from '../page/home.vue'
import User from '../component/test/User.vue'
import Loading from '../component/loading/loading.vue'
import Count from '../component/global/index'
import CartApp from  '../component/cart/App.vue'

import ImagePanel from '../component/img/Image.vue'
import RegisterBox from '../component/login/login.vue'
import Reg from '../component/login/register.vue'

import Footer from '../component/footer/footer.vue'

const G  = {
    template: '<button-counter></button-counter>'
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
            path: '/home',name:'home',components: { indexView:Home }
        },{
            path: '/style',name:'style',
            components: {
                indexView : S,
                footerView: Footer
            }
        },{
            path:'/pz',name:'pz',
            components: {
                indexView : CartApp,
                footerView: Footer
            }
        },{
            path:'/info',name:'info',
            components: {
                indexView : I,
                footerView: Footer
            }
        },{
            path:'/star',name:'star',
            components: {
                indexView : ImagePanel,
                footerView : Footer
            }
        },{
            path:'/test',name:'test', components: {indexView : Loading}
        },
        {
            path:'/user/login',name:'login', 
            components: {
                loginView: RegisterBox
            }
        },
        {
            path:'/user/register',name:'reg', 
            components: {
                loginView:Reg
            }
        },
        {
            path:'*', components: { indexView : Home }
        }
    ]
}