<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @deleteQuote="quotes.splice($event, 1)"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NewQuote from "./components/NewQuote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";

export default {
  components: {
    "app-header": Header,
    "app-new-quote": NewQuote,
    "app-quote-grid": QuoteGrid
  },
  data: function() {
    return {
      maxQuotes: 10,
      quotes: ["Just a quote to see something"]
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete some quotes first");
      }
      this.quotes.push(quote);
    }
  }
};
</script>

<style>
</style>
