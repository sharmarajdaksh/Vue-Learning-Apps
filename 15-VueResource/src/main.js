import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.options.root = "https://vuejs-http-d1cfa.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    next(response => {
        // Do something to your response
        console.log("Intercepted response!", response);
    });
});

new Vue({
    render: h => h(App),
}).$mount('#app')
