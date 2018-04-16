// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './firebase/firebaseInit'
import App from './App'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

window.addEventListener('load', e => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('/service-worker.js')
      console.log('Service worker registrado')
    } catch (err) {
      console.error(`Erro ao registrar Service Worker: ${err.stack}`)
    }
  }
})
