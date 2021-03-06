import Vue from 'vue'
import App from './App.vue'
import css from 'SCSS_ROOT/main.scss'

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')