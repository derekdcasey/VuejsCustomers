// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {path:'/', component: Customers},
    {path:'/about', component: About},
    {path:'/add', component: Add},
    {path:'/edit/:id', component: Edit},
    {path:'/customer/:id', component: CustomerDetails},
  ]
})

//This is the master Template
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template:`
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Customers</a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item">
      <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
      <router-link to="/about">About</router-link>
      </li>   
    </ul>

    <ul class="navbar-nav navbar-right">
    <li class="nav-item">
    <router-link to="/add">Add Customer</router-link>
    </li> 
  </ul>
  </div>
</nav>
  <router-view></router-view>
  </div>
  `
}).$mount('#app')
