import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/find'
        },

        {
            path: '/find',
            name: 'Find',
            component: () =>
                import ('../view/find/Find')
        },
        {
            path: '/video',
            name: 'Video',
            component: () =>
                import ('../view/video/Video')
        },
        {
            path: '/mine',
            name: 'Mine',
            component: () =>
                import ('../view/mine/Mine.vue'),
            // // redirect: '/mine/music',
            // children: [{
            //     path: 'music',
            //     name: 'music',
            //     component: () =>
            //         import ('../view/mine/music/index.vue')
            // }]
        },
        {
            path: '/friend',
            name: 'Friend',
            component: () =>
                import ('../view/friend/Friend')
        },
        {
            path: '/account',
            name: 'Account',
            component: () =>
                import ('../view/account/Account')
        },
        {
            path: '/play',
            name: 'Play',
            component: () =>
                import ('../components/Play')
        },
        {
            path: '/mine/music',
            name: 'music',
            component: () =>
                import ('../view/mine/music/index.vue')
        }
    ],
    linkActiveClass: 'active'
})


export default router