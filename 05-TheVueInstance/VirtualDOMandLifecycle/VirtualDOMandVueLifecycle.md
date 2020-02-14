# Vue JS Inside

## Surprise! There is a Virtual DOM.

Vue watches all properties in the element.

Every time there is a change, Vue compares the new value / changes with the Virtual DOM. Then, it takes the difference between the VirtualDOM and the actual DOM and updates the actual DOM with that difference.

## VueJS Instance Lifecycle

1. new Vue()
2. beforeCreate():
   Initialize data & Events
3. Created(): Instance is now created
   Compile template or el's template
4. beforeMount()
   Replace el with compiled template
   Element is mounted to DOM

When Data changes, beforeUpdate() is executed and the DOM is re-rendered, updated() is executed, and the Element is remounted to DOM.

Just before the component is destroyed, beforeDestroyed() is executed. destroyed() executes right after the element was destroyed.
