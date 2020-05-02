import Vue from 'vue'
import App from './App.vue'

import {store} from './store'
import {router} from './routes.js';

//import VueResource from 'vue-resource';
  //import Axios from 'axios';  // AXIOS
  //import $ from 'jquery';  // jQuery    <<< перенес в "index.js"

//Vue.use(VueResource);
  //Vue.use(Axios);  // AXIOS
//Vue.http.options.root = 'http://js.dmitrylavrik.ru/api/'
//Vue.http.options.root = 'backphp/'    // <<< !!! так возвращает содержимое файла "backphp/chrono.php"
//Vue.http.options.root = 'http://localhost/backphp/';
//Vue.http.options.root = 'http://localhost:8080/backphp/'
//Vue.http.options.root = 'http://alfa-w.in/backphp/'

new Vue({
  el: '#app',
  store,
  router,
  //jQuery,
  render: h => h(App)
});
