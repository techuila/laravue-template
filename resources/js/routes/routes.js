window.Vue = require('vue');
import Router from 'vue-router';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});