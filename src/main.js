import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import htmlToPdf from '@/views/pdf/htmlToPdf'
Vue.use(htmlToPdf)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
