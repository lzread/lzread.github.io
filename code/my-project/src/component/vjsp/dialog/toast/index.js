import Vue from 'vue';
import _toast from './index.vue';

let _constructor = Vue.extend(_toast);
let instance;


const Toast = function (options) {

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
  setTimeout(() => {
    instance.visible = false;
  }, 3000);
  return instance;

};

export default Toast;
