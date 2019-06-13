import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCustomElement from "vue-custom-element";

Vue.config.productionTip = false;

Vue.use(VueCustomElement);

App.router = router;
Vue.customElement("vue-widget", App);
