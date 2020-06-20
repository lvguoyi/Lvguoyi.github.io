import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import my from "./my"
import ksong from "./ksong"
import song from "./song"

export default new Vuex.Store({
  state: {
    foo: true,
    songUrl: {

    },
    mvList: [],
    songArr: [],
    songList: [],
    playList: []

  },
  mutations: {




  },
  actions: {




  },
  modules: {
    my,
    ksong,
    song
  }
})
