import axios from 'axios';

function get_allAssets(parameter){
    return axios.post('/json/allAssets.json',parameter)
}
function get_login(){
    return axios.post('/json/login.json')
}

export default {
    get_allAssets,
    get_login,
}