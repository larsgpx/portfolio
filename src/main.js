import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@mdi/font/css/materialdesignicons.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  data: () => ({
    directions: ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a'],
    paddingSizes: ['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    marginSizes: [
      'auto',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
      'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10', 'n11', 'n12',
    ],
    paddingDirection: 'a',
    paddingSize: '2',
    marginDirection: 'a',
    marginSize: '2',
  }),
  computed: {
    computedPadding () {
      return `p${this.paddingDirection}-${this.paddingSize}`
    },
    computedMargin () {
      return `m${this.marginDirection}-${this.marginSize}`
    },
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
