import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'lightgreen';

        // Binding is the value that is passed with the v-highlight
        // el.style.backgroundColor = binding.value;
        console.log(vnode);

        let delay = 0;
        if (binding.modifiers.delayed) {
            delay = 3000;
        }


        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')

// Directive lifecycle hooks:
//  bind(el, binding, vnode)
//  inserted(el, binding, vnode)
//  update(el, binding, vnode, oldVnode)
//  componentUpdated(el, binding, vnode, oldVnode)
//  unbind(el, binding, vnode)