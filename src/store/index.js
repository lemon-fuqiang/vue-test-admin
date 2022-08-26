import Vue from 'vue'
import Vuex from 'vuex'
import tab from './modules/tab'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    collapseMenu(state) {
     
    }
  },
  actions: {
  },
  modules: {
    tab
  }
})
