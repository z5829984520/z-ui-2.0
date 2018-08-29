import Vue from 'vue'
import Router from 'vue-router'
import list from '../views/list/index.vue'
import doc from '../views/doc/index.vue'

import Scroll from '../views/list/pages/Scroll'
import Button from '../views/list/pages/Button'
import SpinnerItem from '../views/list/pages/SpinnerItem'
import Spinner from '../views/list/pages/Spinner'
import Toast from '../views/list/pages/Toast'
import Alert from '../views/list/pages/Alert'
import Icon from '../views/list/pages/Icon'
import Popup from '../views/list/pages/Popup'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      component: list,
      children: [
        {
          path: '/icon',
          component: Icon
        },
        {
          path: '/scroll',
          component: Scroll
        },
        {
          path: '/button',
          component: Button
        },
        {
          path: '/spinnerItem',
          component: SpinnerItem
        },
        {
          path: '/spinner',
          component: Spinner
        },
        {
          path: '/toast',
          component: Toast
        },
        {
          path: '/alert',
          component: Alert
        },
        {
          path: '/popup',
          component: Popup
        }
      ]
    },
    {
      path: '/doc/:type',
      component: doc
    }
  ]
})
