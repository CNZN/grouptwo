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

// 轮播图
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

// 图标
import { Icon } from 'vant';
Vue.use(Icon);

// 遮罩层
import { Overlay } from 'vant';
Vue.use(Overlay);

// 返回
import { NavBar } from 'vant';
Vue.use(NavBar);

Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
