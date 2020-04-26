import { state } from './state'
import mutations from './mutations.js'

const store = {
  namespaced: true,
  state,
  mutations,
}

export default store
