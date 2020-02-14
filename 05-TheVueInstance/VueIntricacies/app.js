let data = {
    title: 'The VueJS Instance 1',
    showParagraph: false
}

Vue.component('hello', {
    // Create a new component
    template: '<h1>HELLO!</h1>'
});

// LIMITATIONS OF COMPONENTS:
//      Templates are single lined, can't be multiline
//      No idea support within the string


let vm1 = new Vue({
    el: '#app1',
    data: data, // Populating data via an external variable
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance 1 (Updated)');
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

let vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The VueJS Instance 2',
    },
    methods: {
        onChange: function () {
            // Changing one Vue instance from another Vue instance 
            vm1.title = 'Changed';
        }
    }
});

let vm3 = new Vue({
    el: '.hello',
    template: '<h1>Hello! This came from inside Vue()</h1>'
}); // Here we set up a template

vm3.$mount('#app3');
// Add the template to #app3
// Alternatively:
//      Call vm3.$mount(); The template is now created off-screen.
//      Now, you could do document.getElementById('app3).appendChild(vm3.$el);
//      This method is, of course, rare practically


setTimeout(function () {
    // Instances properties can also be accessed from outside the instance
    vm1.title = 'Changed by setTimout';
    console.log(vm1.$data.title); // See? The $data property is automatically created.
}, 3000);

// The Vue object is the middleman between the HTML DOM and our business logic

// Totally possible to have multiple Vue instances in the same page, though perhaps it is best to avoid it. 

// On the Vue objects' proxying capabilities:
// The constructor is basically final. The proxying anf watchers get created during initialization.
// You could add properties AFTER the Vue instance initialization, such as like
//          vm.newProp = 'New Prop!'
// And it does get to the object. BUT, this properties won't act like normal properties that get 
// passed during the initialization or get proxied like those.

// Console logging a Vue instance, we can see certain default properties which can be used by us.

// vm1.$el : refers to the div/target element

// vm1.$data : an object that holds our data properties.
//      vm1.$data is basically a reference to the instance's data object.

// vm1.$ref : allows you access to all elements within $el that have a ref key (see HTML)
//      much like a query selector
//      If you have, say ref="myButton", you could do, say
//          this.$ref.myButton.innerHTML = 'TEST'

// Having a ref like this:
//      <h1 ref="test">{{title}}</h1> 
// Changing the innerHTML using $ref WON'T overwrite the string interpolation.
// Why? It changes ONLY the DOM element, and not the Vue template itself.
// If an event later changes the title property, the change WILL reflect to the DOM.

// Say, you define a Vue() instance without specifying an 'el' property. 
// vm1.$mount('#app1'): does the same as setting el: '#app1'

// There is also vm1.$destroy() to destroy the element.