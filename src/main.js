import Vue from "vue";

import '../src/assets/css/animate.css';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/flexslider.css';
import '../src/assets/css/icomoon.css';
import '../src/assets/css/style.css';

import App from "./App.vue";
import router from "./router";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");