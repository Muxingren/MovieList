import Vuex from 'vuex'
import Vue from 'vue'
import loginModule from './loginModule.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { //配置模块
    loginModule
  }
    
})

export default store