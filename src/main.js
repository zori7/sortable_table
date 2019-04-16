import Vue from 'vue';
import Paginate from 'vuejs-paginate';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('paginate', Paginate);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
