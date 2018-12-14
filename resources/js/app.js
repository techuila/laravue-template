
window.Vue = require('vue');
window.axios = require('axios');
Vue.config.productionTip = false;

window.axios.defaults.headers.common = {
    'X-Requested-With' : 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};  

import App from './Index';
import store from './store/store';
import router from './routes/routes';

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
