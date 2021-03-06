import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from '@/bus'

if(process.env.NODE_ENV !== 'production') {
  require('./mock/index')
}
Vue.config.productionTip = false
Vue.prototype.$bus = Bus;
console.log(Vue.prototype.$bus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
