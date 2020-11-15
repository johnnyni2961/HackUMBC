import Vue from 'vue'
import App from './App.vue'
import router from "./routes"
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
