import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/find',
            name:'Find',
            component:()=>import('../view/find/Find')
        },
        {
            path:'/video',
            name:'Video',
            component:()=>import('../view/video/Video')
        },
        {
            path:'/mine',
            name:'Mine',
            component:()=>import('../view/mine/Mine')
        },
        {
            path:'/friend',
            name:'Friend',
            component:()=>import('../view/friend/Friend')
        },
        {
            path:'/account',
            name:'Account',
            component:()=>import('../view/account/Account')
        },
        {
            path:'/play',
            name:'Play',
            component:()=>import('../components/Play')
        }
    ],
    linkActiveClass:'active'
})


export default  router