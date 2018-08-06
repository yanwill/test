/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Index.vue'
import Orders from '../pages/Orders/Index.vue'
import Query from '../pages/Query/Index.vue'
import UserCenter from '../pages/UserCenter/Index.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta:{//设置在home组件里 允许showFoot属性的组件显示
        showFoot:true
      }
    },
    {
      path: '/orders',
      component: Orders,
       meta:{
        showFoot:true
      }
    },
    {
      path: '/query',
      component: Query,
       meta:{
        showFoot:true
      }
    },
    {
      path: '/userCenter',
      component: UserCenter,
       meta:{
        showFoot:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'//默认地址
    }
      ]
  
})

