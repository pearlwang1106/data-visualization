// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
 
// Vue.use(Router);
 
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')