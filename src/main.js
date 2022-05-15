import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { brickService } from "./services/BrickService";
import { patternService } from "./services/PatternService";

require("./services/BrickService");

Vue.config.productionTip = false;

new Vue({
  router,
  data: function () {
    return {
      brickService: new brickService(),
      patternService: new patternService(),
    };
  },
  render: (h) => h(App),
}).$mount("#app");
