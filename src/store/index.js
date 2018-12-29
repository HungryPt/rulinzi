import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articlePie: {
      post: {}
    },
    value: ''
  },
  modules: {
  },
  getters
})

export default store
