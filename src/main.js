import Vue from "vue";
import App from "./App.vue";
import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)




Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
