<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'app-author'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr />
        <!-- NOTE: Component(s) are destroyed and recreated everytime by default -->
        <keep-alive>
          <!-- UNLESS: The dynamic component tag is wrapped in keep-alive -->
          <component :is="selectedComponent"></component>
        </keep-alive>
        <app-quote>
          <!-- Dynamic content, if any, must be inserted right here -->
          <h2 slot="title">The Quote</h2>
          <p slot="content">A wonderful quote!</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  components: {
    "app-quote": Quote,
    "app-author": Author,
    "app-new": New
  },
  data: function() {
    return {
      selectedComponent: "app-quote"
    };
  }
};
</script>

<style>
</style>
