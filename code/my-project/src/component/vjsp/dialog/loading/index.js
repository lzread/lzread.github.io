import Vue from 'vue';
import _loading from './index.vue';

let _constructor = Vue.extend(_loading);
let instance;


_constructor.prototype.close = function () {
  instance.visible = false;
}

const Loading = function (options) {

  options = options || {};

  if (typeof options === 'string') {
    options = {
      title: options
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



export default Loading;
