
import Vue from "vue";
import Vuex from "vuex";
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
import user from './modules/users'
import LocalSave from './plugins/localSvae'

Vue.use(Vuex)

export default {
  actions,
  mutations,
  getters,
  state,
  modules: {
    user
  },
  plugins: [LocalSave],
}