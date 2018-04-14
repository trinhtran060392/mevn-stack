import * as types from '../mutaion-types'

// initial state
const state = {
  info: {}
}
// getters
const getters = {
  info: state => state.info
}

// actions
const actions = {
  setInfo ({ commit }, data) {
    commit(types.SET_PAGE_INFO, data)
  }
}
// mutations
const mutations = {
  [types.SET_PAGE_INFO] (state, data) {
    state.info = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
