<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{localAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["userAge"],
  data: function() {
    return {
      localAge: this.userAge
    };
  },
  methods: {
    editAge() {
      this.localAge = 30;
      //   this.$emit("ageWasEdited", 30);
      eventBus.$emit("ageWasEdited", this.localAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
