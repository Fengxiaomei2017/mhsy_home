// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
// import vuex from 'vuex'
// import axios from 'axios'

// import iView from 'iview'
import '@/common/css/reset.css'
import '@/common/css/icon.css'

// import {
//   GAIBIAN_MOKUAI,
//   CHAXUN_LEIXING
// } from '@/common/js/changliang.js'
// Vue.use(vuex)
// Vue.use(iView)

// Vue.prototype.$http = axios
Vue.config.productionTip = false
// const vuexstore = new vuex.Store({
//   state: {
//     mokuai: '',
//     chaxunleixing: ''
//   },
//   mutations: {
//     [GAIBIAN_MOKUAI] (state, mokuai) {
//       state.mokuai = mokuai
//     },
//     [CHAXUN_LEIXING] (state, chaxunleixing) {
//       state.chaxunleixing = chaxunleixing
//     }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  // store: vuexstore,
  template: '<App/>',
  components: {App}
})
