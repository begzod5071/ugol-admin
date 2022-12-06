import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from '@/libs/i18n/index'
import axios from '@/libs/axios'
// import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueNumber from "vue-number-animation";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueNumber)
// BSV Plugin Registration
// Vue.use(ToastPlugin)
// Vue.use(ModalPlugin)

import '@/assets/scss/main.scss'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  axios,
  render: h => h(App),
}).$mount('#app')
