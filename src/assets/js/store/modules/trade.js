import {trade} from '../../api/index';

const state = {
    newMessages: [],
    dataTable: []
};

const mutations = {
    set_trade(state, info){
        state.newMessages = info.info.newMessages;
        state.dataTable = info.info.dataTable;
    }
};

const actions = {
    get_trade({commit}){
        trade.get_trade().then(response => {
            commit({
                type: 'set_trade',
                info: response.data
            })
        })
    }
};

export default {
    state, mutations, actions
}