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
            component: () => import('../view/video/Video'),
            redirect: '/video/recommend',
            children: [
                {
                    path: 'recommend',
                    name:'Recommend',
                    component:()=>import('../view/video/recommend/index')
                },
                {
                    path: 'music',
                    name:' Music',
                    component: () => import('../view/video/music/index'),
                },
                {
                    path: 'mv',
                    name:'Mv',
                    component:()=>import('../view/video/mv/index')
                },
                {
                    path: 'showtime',
                    name:'Showtime',
                    component:()=>import('../view/video/showtime/index')
                },
                {
                    path: 'erciyuan',
                    name:'Erciyuan',
                    component:()=>import('../view/video/erciyuan/index')
                },
            ]
            
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
        },
        {
            path: '/mvplay',
            name:'Mvplay',
            component: () => import('../view/mvplay/mvplay'),
        }
    ],
    linkActiveClass:'active'
})


export default  router