export default {
  SET_NEWS(state, payload) {
    state.news = payload
  },
  SET_JOBS(state, payload) {
    state.jobs = payload
  },
  SET_ASK(state, payload) { 
    state.ask = payload
  },
  SET_USER_INFO(state, payload) { 
    state.userinfo = payload
  },
  SET_ITEM_INFO(state, payload) { 
    state.item = payload
  },
}