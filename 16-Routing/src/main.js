import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    // Non-hash mode
    mode: 'history',
    // defaults to 'hash'
    scrollBehavior(
        to,
        // from, 
        // savedPosition
    ) {
        // return {x: 0, y: 700};
        if (to.hash) {
            return { selector: to.hash };
        }
    }
});

router.beforeEach((
    to,
    from,
    next
) => {
    console.log('Global beforeEach');
    next();
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
