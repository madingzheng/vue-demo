import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import ElementUI from "element-ui";
import echarts from "echarts";
import VueI18n from "vue-i18n";
import zh from "@/lang/zh.js";
import en from "@/lang/en.js";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.less";
import "./style/rest.css";

Vue.use(ElementUI);
Vue.use(VueI18n);

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: "zh",
  messages: {
    zh: zh,
    en: en
  }
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
