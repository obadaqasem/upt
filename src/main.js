import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "vue-lang-router";
import store from "./store";
import mixin from "./assets/scripts/helper.js";

require("./assets/styles/main.scss");
require("./assets/styles/styles.scss");
require("./assets/styles/normalize/8.0.1/normalize.min.css");
require("./assets/styles/fontawesome-free-6.0.0-web/css/all.min.css");
Vue.mixin(mixin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
