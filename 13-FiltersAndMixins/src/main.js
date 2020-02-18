import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('toLowercase', (value) => {
    return value.toLowerCase();
});

Vue.mixin({
    created() {
        console.log('Global mixin created!');
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app');

// Global mixins get added to EVERY component in the app and should be used rarely 