import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('limit', (value) => {
    if (!value) return ''

    return value.length > 50
        ? value.substring(0, 47) + '...'
        : value
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
