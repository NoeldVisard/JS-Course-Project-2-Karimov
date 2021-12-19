import Vue from 'vue'
import Vuex from 'vuex'
import item from './modules/item'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        item, profile
    }
})