// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'

import './assets/style/reset.css'
import {
  Ripple,
  Button,
  Scroll,
  SpinnerItem,
  Icon,
  Popup,
  Tab
} from '../package/components'

Vue.use(mavonEditor);
Vue.use(Ripple);
Vue.use(Button);
Vue.use(Scroll);
Vue.use(SpinnerItem);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tab.Item);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
