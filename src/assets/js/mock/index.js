import Mock from 'mockjs';

import {allAssets} from './allAssets';
import {login} from './login';
import {allProject} from './allProject';
import {indexProject} from './indexParject';
import {trade} from './trade';


function addToMock(list){
    list.forEach( list => {
        Mock.mock(list.path, list.data)
    })
}

addToMock(allAssets);
addToMock(login);
addToMock(allProject);
addToMock(indexProject);
addToMock(trade);

export default Mock;