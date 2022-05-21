import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: []
  },
  getters: {
    GET_NEWSw(state) {
      return state.news
    }
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(res => {
          const result = res.data
          context.commit('SET_NEWS', result)
        })
        .catch(err => {console.log(err)})
    }
  }
})
