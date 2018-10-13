import "@babel/polyfill";
import Vue from "vue";

import "./plugins/vuetify";
import App from "./App";

import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;

/* ## Vue Router ## */

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

/* ## App ## */

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
