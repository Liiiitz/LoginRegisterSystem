import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from '@/components/UserLogin'
import axios from 'axios'
import Vuex from 'vuex'
import Qs from 'qs'
 
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.use(Vuex)
Vue.use(Router)

const originalPush = Router.prototype.push
      Router.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
      }
export default new Router({
  routes: [
    {
      path: '/App',
      name: 'App',
    },
    {
      path: '/UserLogin',
      name: 'UserLogin',
      component:UserLogin,
    },
  ]
  
})
