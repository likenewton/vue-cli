import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutations'
import STATIC from '../assets/js/static.js'

Vue.use(Vuex)

const state = {
  aboutId: STATIC.aboutDisTplList[0].id,
  centerId: STATIC.centerDisTplList[0].id,
  strategyId: STATIC.strategyDisTplList[0].id,
  introductId: STATIC.introductionDisTplList[0].id
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
