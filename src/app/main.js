import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import store from './store';
import App from './App.vue';
import Dashboard from './components/Dashboard.vue';
import MainLayout from './components/MainLayout.vue';

const routes = [
  {
    path: '/',
      component: MainLayout,
      children: [
        { path: '', component: Dashboard }
      ]
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
