import {indexProject} from '../../api/index';

const state = {
    new:[],
    hot:{},
};

const mutations = {
    set_indexProject(state,info){
        state.new = info.info.new;
        state.hot = info.info.hot;
    }
};

const actions = {
    get_indexProject({commit}){
        indexProject.get_indexProject().then(response => {
            commit({
                type:'set_indexProject',
                info:response.data
            });
        })
    }
};

export default {
    state,mutations,actions
}