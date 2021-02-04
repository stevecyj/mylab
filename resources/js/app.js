require('./bootstrap');

import Vue from "vue";
import VueRouter from "vue-router"; 
import App from "./views/app.vue";
import router from "./router.js"; 

Vue.use(VueRouter); 

Vue.component('app', require('./views/app.vue').default);
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount("#app");

new Vue({
    el: '#app',
    router: router,
});