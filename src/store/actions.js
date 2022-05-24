import 
{ fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo } 
from '../api/index.js'

export default {
  
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => commit('SET_NEWS', data))
      .catch(err => { console.log(err) })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch(err => { console.log(err) })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit('SET_ASK', data))
      .catch(err => { console.log(err) })
  },
  FETCH_USER_INFO({ commit }, payload) {
    fetchUserInfo(payload)
      .then(({ data }) => commit('SET_USER_INFO', data)
      )
      .catch(err => { console.log(err) })
  },
  FETCH_ITEM_INFO({ commit }, payload) {
    fetchItemInfo(payload)
      .then(({ data }) => commit('SET_ITEM_INFO', data)
      )
      .catch(err => { console.log(err) })
  },
}