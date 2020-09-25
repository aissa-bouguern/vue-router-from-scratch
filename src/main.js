import Vue from "vue";
import App from "./App.vue";
import AppRouter from "./plugin";

Vue.config.productionTip = false;

const routes = {
  "/": () => import("./components/Home"),
  "/articles": () => import("./components/Articles")
};

Vue.use(AppRouter, {
  routes
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
