new Vue({
    el: '#app1',
    data: {
        title: 'Hello World!',
        link: 'https://google.com',
        finishedLink: '<a href="https://google.com">Link to google</a>'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
        increase: function (step, event) {
            // To have the custom arg as well as the default event attribute, the latter must be named $event in the html 
            this.counter += step;
        },
        updateCoordinates: function (event) {
            // event param passed automatically
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function (event) {
            // Stop the behavior at this element and stop it from reaaching higher-level elements
            event.stopPropagation();
        },
        alertMe: function () {
            alert('Alert!');
        }
    }
});
new Vue({
    el: '#app3',
    data: {
        name: 'Max'
    },
});

new Vue({
    el: '#app4',
    data: {
        counter: 0,
        secondCounter: 0,
    },
    computed: {
        // IMPORTANT: Computed properties always run asynchronously
        output: function () {
            // Will update intelligently, reduces rebuilds
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        // Name must match a data property
        // Can also be used for async tasks
        counter: function (value) {
            let vm = this; // since this.data won't be accessible inside the setTimeout
            setTimeout(function () {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function () {
            // Will get called on EVERY dom ipdate
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});

new Vue({
    el: '#app5',
    data: {
        link: 'http://google.com'
    },
    methods: {
        changeLink: function () {
            this.link = 'http://apple.com';
        }
    }
});

new Vue({
    el: '#app6',
    data: {
        attachRed: false,
        color: 'green'
    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
});

new Vue({
    el: '#app7',
    data: {
        color: 'gray',
        width: 100
    },
    computed: {
        myStyle: function () {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }
    }
});