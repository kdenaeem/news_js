import Vue from 'vue'
import App from './App.vue'
import nodes from './components/nodes.vue'
Vue.config.productionTip = false
Vue.component('nodes', nodes)

new Vue({
  render: h => h(App),
}).$mount('#app')
