import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import find from "./find.js"
import guide from "./guide.js"
import advertising from "./advertising"
import livestreaming from "./livestreaming"
import my from "./my"
import ksong from "./ksong"
import menu from "./menu"
import searchList from "./searchList"
import video from "./video"

const routes = [

  {
    path: "/",
    redirect: "/advertising"
  },
  {
    path: "/search",
    component: () => import("../views/search.vue")
  },
  {
    path: "/shopping",
    component: () => import("../views/shopping.vue")
  },
  {
    path: "/play",
    component: () => import("../views/play.vue")
  },
  {
    path: "/song",
    component: () => import("../components/find/song.vue")
  },
  find,
  guide,
  advertising,
  livestreaming,
  my,
  ksong,
  menu,
  searchList,
  video
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
