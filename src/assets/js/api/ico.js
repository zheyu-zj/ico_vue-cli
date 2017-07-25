import axios from 'axios';

function get_allProject(){
    return axios.post('/json/allProject.json')
}

export default {
    get_allProject
}