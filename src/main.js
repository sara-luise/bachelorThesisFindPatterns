import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { facetService } from "./services/FacetService";
import { patternService } from "./services/PatternService";
require("./services/FacetService");

Vue.config.productionTip = false;

new Vue({
  router,
  data: function () {
    return {
      facetService: new facetService(),
      patternService: new patternService(),
    };
  },
  render: (h) => h(App),
}).$mount("#app");
