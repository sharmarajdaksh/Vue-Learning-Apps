<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUppercase | toLowercase }}</p>
        <hr />
        <input type="text" v-model="filterText" />
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  mixins: [fruitMixin],
  components: {
    "app-list": List
  },
  data() {
    return {
      text: "Hello there!"
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>

// A filter is basically Vue's version of Angular's pipes

// Mixins try to 'merge' their data with that of the component, without destroying/overwriting any data that is already in the component
// When a mixin has lifecycle hooks defines within itself, its hooks execute BEFORE those of the components that use the mixin
// Also, the mixin's hooks are isolated for each component where the mixin is used