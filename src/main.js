import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import VueMaterial from "vue-material";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueMaterial);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
