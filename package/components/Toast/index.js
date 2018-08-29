import Vue from 'vue'
import TemplateToast from './src/Toast'

const constructorToast = Vue.extend(TemplateToast);

const defaultOptions = {
  top: '46%',
  duration: 3000,
  message: '',
  type: '',
  color: '#fff',
  size: 16
};
let instance;

const Toast = (options={}) => {

  if (!instance) {
    instance = new constructorToast({
      el: document.createElement('div')
    });

    document.body.appendChild(instance.$el);
  }


  Vue.nextTick(() => {
    let duration;

    instance.closed = false;
    clearTimeout(instance.timer);

    if (typeof options === 'string') {
      duration = defaultOptions.duration;

      instance.top = defaultOptions.top;
      instance.message = options;
      instance.type = defaultOptions.type;
      instance.color = defaultOptions.color;
      instance.size = defaultOptions.size;
    } else {
      duration = options.duration ? options.duration : defaultOptions.duration;

      instance.top = options.top ? options.top : defaultOptions.top;
      instance.message = options.message ? options.message : defaultOptions.message;
      instance.type = options.type ? options.type : defaultOptions.type;
      instance.color = options.color ? options.color : defaultOptions.color;
      instance.size = options.size ? options.size : defaultOptions.size;
    }

    instance.visible = true;

    instance.timer = setTimeout(() => {
      if (instance.closed) {
        return false;
      }

      instance.visible = false;
      instance.closed = true;
    }, duration)
  })
};

export default Toast
