import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
import user from './modules/users'

export default {
  actions,
  mutations,
  getters,
  state,
  modules: {
    user
  }
}