import Vue from 'vue'
import TemplateSpinner from './src/Spinner'

const defaultOptions = {
  type: 'lineRound',
  color: '#fff',
  message: '',
  size: 32
};
const constructorSpinner = Vue.extend(TemplateSpinner);
let instance;

export default {
  open(options={}) {
    if (!instance) {
      instance = new constructorSpinner({
        el: document.createElement('div')
      });

      document.body.appendChild(instance.$el);
    }

    for (const key in defaultOptions) {
      instance[key] = options[key] || defaultOptions[key]
    }

    Vue.nextTick(() => instance.visible = true)
  },
  close() {
    if (instance)
      instance.visible = false
  }
}

