import {user} from '../../api/index';

const state = {
    login: {},
    allAssets: [],
};

const mutations = {
    set_login(state, {info}){
        state.login = info.data
    },
    set_allAssets(state, {info}){
        state.allAssets = info.data
    }
};

const actions = {
    get_allAssets({commit}){
        user.get_allAssets({id:state.login.id}).then(response => {
            commit({
                type: 'set_allAssets',
                info: response.data
            });
        })
    },
    get_login({commit}){
        user.get_login().then(response => {
            commit({
                type: 'set_login',
                info: response.data
            })
        })
    },
};
export default {
    state, mutations, actions
}