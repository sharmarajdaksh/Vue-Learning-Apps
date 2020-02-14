<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
    <p>User Age: {{localAge}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="alsoResetsName">Also reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  //   #### Props!!####
  //   This syntax is super basic and valid but won't support prop validation
  //   props: ["name"],
  //   props: {
  //     name: String
  //   }
  //
  //     OR
  //
  //   name: [String, Array] means that name may be a string OR array
  //
  //   Alternative, more thorough syntax:
  //     name: {
  //         type: String,
  //         required: true,
  //         default: 'Max'
  //     }
  //     myObject: {
  //     type: Object,
  //     default: function(){
  //         name: 'Max',
  //         age: 21
  //     }

  props: {
    name: {
      type: String,
      default: "Max"
    },
    alsoResetsName: Function,
    userAge: Number
  },
  data: function() {
    return {
      localAge: this.userAge
    };
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      // Must emit the change to parent if the change has to be notified in parent
      this.$emit("nameWasReset", "Max");
    }
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.localAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
