import {ico} from '../../api/index';

const state = {
    allProject: [],
};

const mutations = {
    set_allProject(state, {info}){
        state.allProject = info.data
    }
};

const actions = {
    get_allProject({commit}){
        ico.get_allProject().then(response => {
            commit({
                type: 'set_allProject',
                info: response.data
            })
        })
    },
};
export default {
    state, mutations, actions
}