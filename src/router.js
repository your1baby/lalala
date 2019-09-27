import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入自定义组件app
import app from "./app/app.vue"
// 引入自定义组件me
import me from "./app/me.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/me",component:me},
    {path:"/app",component:app},
    {
      
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
