import Vue from 'vue'
import { VueEffector } from 'effector-vue'
import App from './App.vue'

Vue.use(VueEffector)

Vue.config.productionTip = false

export const app = new Vue({
  render: h => h(App),
}).$mount('#app')
