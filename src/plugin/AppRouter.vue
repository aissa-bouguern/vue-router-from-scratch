<template>
  <component :is="routedComponent"></component>
</template>

<script>
import { listen } from "./history";

export default {
  name: "AppRouter",
  data() {
    return {
      current: window.location.pathname,
    };
  },
  computed: {
    routedComponent() {
      return this.$routes[this.current];
    },
  },
  created() {
    listen((route) => {
      this.current = route;
    });

    window.addEventListener("popstate", (event) => {
      this.current = window.location.pathname;
    });
  },
};
</script>

<style>
</style>