import Vue from 'vue'
import TemplateAlert from './src/Alert'

const constructorAlert = Vue.extend(TemplateAlert);

let instance;
const defaultOptions = {
  type: 'alert',
  top: '36%',
  title: '提示',
  message: '',
  iconName: '',
  okBtnTxt: '确认',
  cancelBtnTxt: '取消',
  zIndex: 2500,
  iconStyle: {
    fontSize: '24px'
  }
};

const Alert = (options={}) => {
  if (!instance) {
    instance = new constructorAlert({
      el: document.createElement('div')
    });

    document.body.appendChild(instance.$el);
  }

  for (let key in defaultOptions) {
    instance[key] = options[key] || defaultOptions[key]
  }

  Vue.nextTick(() => {
    instance.visible = true;
    instance.handleBtnClick = boolean => {
      if (options.callback)
        options.callback(boolean);

      instance.visible = false
    }
  })
};

export default Alert
