<template>
  <div id="app">
    <button @click="goTo('/')">Home</button>
    <button @click="goTo('/articles')">Articles</button>

    <app-router></app-router>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goTo(route) {
      this.$pushRoute(route);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
