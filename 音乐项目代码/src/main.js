import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/kug/iconfont.css"

import Flexible from "amfe-flexible";

import VueAwesomeSwiper from 'vue-awesome-swiper'


import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// axios配置
// $cnpm i axios -S
// import axios from "axios";
// // 路径默认配置
// axios.defaults.baseURL = 'http://127.0.0.1:3000/';
// Vue.prototype.$axios = axios;


// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(Flexible);

Vue.use(Vant);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
