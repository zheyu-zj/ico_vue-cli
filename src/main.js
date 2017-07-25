import Vue from 'vue';
import router from './router';
import store from './assets/js/store/index';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// import {
//     Menu,
//     Submenu,
//     MenuItem,
//     MenuItemGroup,
//     Pagination
// } from 'element-ui'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Pagination);
Vue.use(ElementUi);

import Mock from './assets/js/mock/index';

import App from './App';

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: {App}

});