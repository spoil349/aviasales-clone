import Vue from 'vue'
import Vuex from 'vuex'
import tickets from './modules/tickets'

Vue.use(Vuex)
Vue.use(require('vue-moment'));

export default new Vuex.Store({
  modules: {
    tickets,
  }
})
