import {
  Ripple,
  Icon,
  Spinner,
  SpinnerItem,
  Button,
  Scroll,
  Toast,
  Alert,
} from './components'

const components = [
  Ripple,
  Icon,
  Button,
  SpinnerItem,
  Scroll
];

const install = (Vue, opts={}) => {
  if (install.installed) {
    return;
  }

  install.installed = true;

  components.forEach((component) => {
    component.install(Vue)
  });

  Vue.$Spinner = Vue.prototype.$Spinner = Spinner;
  Vue.$Toast = Vue.prototype.$Toast = Toast;
  Vue.$Alert = Vue.prototype.$Alert = Alert;
};

const ZUI = {
  version: '1.0.0',
  install,
  Spinner,
  Toast,
  Alert,
  ...components
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default ZUI;
