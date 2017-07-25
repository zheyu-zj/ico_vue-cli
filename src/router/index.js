import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../assets/js/pages/index/index.vue'),
        },
        {
            path: '/ico',
            name: 'ico',
            component: () => import('../assets/js/pages/ico/index.vue'),
        },
        {
            path: '/trading',
            name: 'trading',
            component: () => import('../assets/js/pages/trading/index.vue'),
        },
        {
            path: '/coinLock',
            name: 'coinLock',
            component: () => import('../assets/js/pages/coinLock/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../assets/js/pages/login/index.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../assets/js/pages/register/index.vue'),
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('../assets/js/pages/help/index.vue'),
            children: [
                {
                    path: '',
                    name: 'introduction',
                    component: () => import('../assets/js/pages/help/children/introduction.vue')
                }, {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('../assets/js/pages/help/children/contact.vue')
                }, {
                    path: 'process',
                    name: 'process',
                    component: () => import('../assets/js/pages/help/children/Process.vue')
                }, {
                    path: 'trade',
                    name: 'trade',
                    component: () => import('../assets/js/pages/help/children/trade.vue')
                }, {
                    path: 'problem',
                    name: 'problem',
                    component: () => import('../assets/js/pages/help/children/problem.vue')
                }, {
                    path: 'terms',
                    name: 'terms',
                    component: () => import('../assets/js/pages/help/children/Terms.vue')
                }, {
                    path: 'privacy',
                    name: 'privacy',
                    component: () => import('../assets/js/pages/help/children/privacy.vue')
                }, {
                    path: 'rate',
                    name: 'rate',
                    component: () => import('../assets/js/pages/help/children/Rate.vue')
                }, {
                    path: 'statement',
                    name: 'statement',
                    component: () => import('../assets/js/pages/help/children/statement.vue')
                }, {
                    path: 'protocol',
                    name: 'protocol',
                    component: () => import('../assets/js/pages/help/children/protocol.vue')
                }
            ]
        },
        {
            path: '/ico/:id',
            name: 'icoChildren',
            component: () => import('../assets/js/pages/ico/children/index.vue'),
        }
    ]
})