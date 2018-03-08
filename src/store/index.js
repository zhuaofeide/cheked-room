/**
 * Created by Administrator on 2018/3/8 0008.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'//    调试

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: debug, // 启动调试严格模式
  plugins: debug ? [createLogger()] : []
})
