<template>
  <div class="container-">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 co-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label for>Mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" v-model="node" />
        <br />
        <br />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, i) in users" :key="i">{{u.username}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  methods: {
    submit() {
      //   this.$http.post("data.json", this.user).then(
      //     response => console.log(response),
      //     error => console.log(error)
      //   );
      this.resource.save({}, this.user);
      this.resource.saveAlt({}, this.user);
    },
    fetchData() {
      this.users = [];
      //   this.$http
      //     .get("data.json")
      //     .then(response => response.json())
      //     .then(data => {
      //       for (let key in data) {
      //         this.users.push(data[key]);
      //       }
      //     });
      this.resource
        .getData({ node: this.node })
        .then(response => response.json())
        .then(data => {
          for (let key in data) {
            this.users.push(data[key]);
          }
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alt.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
