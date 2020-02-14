// Registering a Vue component globally
// Vue.component('my-cmp', {
//     data: function () {
//         return {
//             // This data source is, of course, unique for all copies of the component
//             status: 'Critical'
//         }
//     },
//     template: '<p>Server Status: {{status}} (<button @click="changeStatus">Change</button>)</p>',
//     methods: {
//         changeStatus: function () {
//             this.status = 'Normal';
//         }
//     }
// });

var cmp = Vue.component('my-cmp', {
    data: function () {
        return {
            // This data source is, of course, unique for all copies of the component
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{status}} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function () {
            this.status = 'Normal';
        }
    }
});

new Vue({
    el: '#app1',
    components: {
        'my-cmp': cmp
    }
});

new Vue({
    el: '#app2',
    components: {
        'also-my-cmp': cmp
    }
});