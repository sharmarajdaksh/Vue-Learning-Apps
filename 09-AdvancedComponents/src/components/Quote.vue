<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr />
    <div>
      <slot name="content">Default content (if no data is being passed)</slot>
      <!-- Styling for a slot is handled in the Child -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: auto;
}

title {
  font-style: italic;
}
</style>