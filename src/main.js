import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import vuetify from './plugins/vuetify'

import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
