import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import './custom-style.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';

new Vue({
  el: '#app',
  render: h => h(App)
})
