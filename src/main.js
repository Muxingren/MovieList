import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const { mockXHR } = require("../mock");
mockXHR();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
