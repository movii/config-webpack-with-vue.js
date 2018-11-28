import Vue from 'vue'
import App from './App.vue'
import css from '../../css/main.css'

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')