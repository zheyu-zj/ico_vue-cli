import axios from 'axios';

function get_trade(){
    return axios.post('/json/trade.json');
}

export default {
    get_trade
}