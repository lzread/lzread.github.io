import Vue from 'vue';
import _confirm from './index.vue';

let _constructor = Vue.extend(_confirm);
let instance;

const Confirm = function (options) {

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

export default Confirm;
