import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutations'
import STATUS from '../assets/js/static.js'

Vue.use(Vuex)

const state = {
  aboutId: STATUS.aboutDisTplList[0].id,
  centerId: STATUS.centerDisTplList[0].id,
  strategyId: STATUS.strategyDisTplList[0].id,
  introductId: STATUS.introductionDisTplList[0].id
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
