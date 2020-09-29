import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: "/find"
        }, {
            path: '/find',
            name: 'Find',
            component: () =>
                import ('../view/find/Find'),
            redirect: "/find/gexing",
            children: [{
                path: "gexing",
                redirect: "gexing/tuijian",
                component: () =>
                    import ("../view/find/gexing/Gexing"),
                children: [{
                        path: "fm",
                        component: () =>
                            import ("../view/find/gexing/children/Fm"),
                    },
                    {
                        path: "tuijian",
                        component: () =>
                            import ("../view/find/gexing/children/Tuijian"),
                    }
                ]
            }, {
                path: "zhubo",
                redirect: "zhubo/fufei",
                component: () =>
                    import ("../view/find/zhubo/Zhubo"),
                children: [{
                        path: "paihang",
                        component: () =>
                            import ("../view/find/zhubo/children/Paihang"),
                    },
                    {
                        path: "vip",
                        component: () =>
                            import ("../view/find/zhubo/children/Vip"),
                    }, {
                        path: "fufei",
                        component: () =>
                            import ("../view/find/zhubo/children/Fufei"),
                    }
                ]
            }]
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
                import ('../view/mine/Mine')
        },
        {
            path: '/friend',
            name: 'Friend',
            component: () =>
                // import ('../view/friend/Friend')
                import ('../view/friend/Friend'),
            redirect: '/friend/dynamic',
            children: [{
                path: 'dynamic',
                name: 'Dynamic',
                component: () =>
                    import ("../view/friend/Dynamic/dynamic.vue")
            }, {
                path: 'nearby',
                name: 'Nearby',
                component: () =>
                    import ("../view/friend/Nearby/nearby.vue")
            }]
        },
        {
            path: '/account',
            name: 'Account',
            component: () =>
                import ('../view/account/Account')
        }, {
            path: '/video',
            name: 'Video',
            component: () =>
                import ('../view/video/Video'),
            redirect: '/video/recommend',
            children: [{
                    path: 'recommend',
                    name: 'Recommend',
                    component: () =>
                        import ('../view/video/recommend/index')
                },
                {
                    path: 'music',
                    name: ' Music',
                    component: () =>
                        import ('../view/video/music/index'),
                },
                {
                    path: 'mv',
                    name: 'Mv',
                    component: () =>
                        import ('../view/video/mv/index')
                },
                {
                    path: 'showtime',
                    name: 'Showtime',
                    component: () =>
                        import ('../view/video/showtime/index')
                },
                {
                    path: 'erciyuan',
                    name: 'Erciyuan',
                    component: () =>
                        import ('../view/video/erciyuan/index')
                },
            ]

        },
        {
            path: '/play',
            name: 'Play',
            component: () =>
                import ('../components/Play')
        },
        {
            path: '/songlist',
            name: 'Songlist',
            component: () =>
                import ('../view/songlist/Songlist')
        },
        {
            path: '/top',
            name: 'Top',
            component: () =>
                import ('../view/top/Top')
        },
        {
            path: '/diantaifenlei',
            name: 'Diantaifenlei',
            component: () =>
                import ('../view/diantaifenlei/Diantaifenlei')
        }, {
            path: '/play',
            name: 'Play',
            component: () =>
                import ('../components/Play')
        },
        {
            path: '/mvplay',
            name: 'Mvplay',
            component: () =>
                import ('../view/mvplay/mvplay'),
        }, {
            path: '/fabu',
            name: 'Fabu',
            component: () =>
                import ('../view/friend/Dynamic/Fabu/fabu.vue')
        }, {
            path: '/shipin',
            name: 'Shipin',
            component: () =>
                import ('../view/friend/Dynamic/Shipin/shipin.vue')
        }, {
            path: '/personal',
            name: 'Personal',
            component: () =>
                import ('../view/friend/Dynamic/Personal/personal.vue')
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