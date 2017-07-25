import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import user from './modules/user'
import ico from './modules/ico'
import indexProject from './modules/indexProject'
import trade from './modules/trade'

export default new Vuex.Store({
    modules:{
        user,
        ico,
        indexProject,
        trade
    }
})