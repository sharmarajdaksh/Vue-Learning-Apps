<template>
  <h1>New</h1>
</template>

<script>
export default {
  // deactivated() and activated() are dynamic component lifecycle hooks
  deactivated() {
    console.log("Deactivated");
  },
  activated() {
    console.log("Activated");
  }
};
</script>

<style>
</style>