import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
    state: [
        // {id:'',
        // albumId:'',
        // title:'',
        // star:''
        // }
    ],
    getters: {}
    ,
    mutations: {
        changes(state, obj) {
            // if (localStorage.getItem('music')) {
            //     state = JSON.parse(localStorage.getItem('music'))
            // }
            state.push(obj)
            localStorage.setItem('music', JSON.stringify(state))
            state = JSON.parse(localStorage.getItem('music'))
            // } else {
            //     state = JSON.parse(localStorage.getItem('music'))
            //     state.push(obj)
            //     localStorage.setItem('music', JSON.stringify(state))
            // }
            // 
        }
    },
    actions: {

    }
})

export default store