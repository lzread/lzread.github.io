import Vue from 'vue'
import App from './App'

import './styles/index.scss'

import VjspWeUI from "@/component/vjsp/index.js";

Vue.use(VjspWeUI)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
