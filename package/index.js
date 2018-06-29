import {
  Ripple,
  Icon,
  Spinner,
  SpinnerItem,
  Button,
  Scroll
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
};

const ZUI = {
  version: '1.0.0',
  install,
  Spinner,
  ...components
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default ZUI;
