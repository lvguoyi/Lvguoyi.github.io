import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入图标
import "./assets/icon/iconfont.css"

//引入Vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入Swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper);

//引入Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//引入Cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
