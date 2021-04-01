import Vue from 'vue';
import _alert from './index.vue';

let _constructor = Vue.extend(_alert);
let instance;

const Alert = function (options) {

  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  instance = new _constructor({
    data: options
  });

  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  return instance;

};

export default Alert;
