import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/routes.js'
import Vuex from 'vuex'
import state from './store/state.js'
import getters from "./store/getters.js";
import actions from "./store/actions.js";
import mutations from "./store/mutations.js";
import { FontAwesomeImport } from './assets/fontawsome/index.js'
FontAwesomeImport(Vue)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter({
  mode: 'history',
  routes: routes
})
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

new Vue({
  render: h => h(App),
  router,
  store,  
  
}).$mount('#app')