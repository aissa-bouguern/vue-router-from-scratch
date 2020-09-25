import AppRouter from "./AppRouter";
import { push } from "./history";
export default {
  install(Vue, options) {
    Vue.component("AppRouter", AppRouter);
    Vue.prototype.$pushRoute = push;
    Vue.prototype.$routes = options.routes;
  }
};
