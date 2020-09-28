import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from './route/index'
import request from './utils/request'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(MintUI)
Vue.use(ElementUI);

Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
