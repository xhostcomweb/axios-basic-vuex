import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  axios,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
