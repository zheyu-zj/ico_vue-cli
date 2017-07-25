import axios from 'axios';

function get_indexProject(){
    return axios.post('/json/indexProject.json');
}
export default {
    get_indexProject
}