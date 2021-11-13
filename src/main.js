import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/'
import storage from '@/utils/storage'
import xss from 'xss'

Object.defineProperty(Vue.prototype, '$xss', {
  value: xss,
})


Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$storage = storage
Vue.prototype.eventBus = new Vue()

// 防重复点击-自定义指令
Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 1000)
      }
    })
  },
})

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
