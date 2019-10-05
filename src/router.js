import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入自定义组件app
import app from "./app/app.vue"
// 引入自定义组件me
import me from "./app/me.vue"
import mes from "./app/mes.vue"
// 我的-订单
import dingdan from "./app/meinfo/dingdan.vue"
// 我的-购物车
import cart from "./app/meinfo/cart.vue"
// 我的-优惠券
import yhj from "./app/meinfo/yhj.vue"
// 逛 页面组件
import guang from "./app/guang.vue"
// 设计师页面
import sjs from "./app/sjs.vue"





Vue.use(Router)

export default new Router({
  routes: [
    {path:"/sjs",component:sjs},
    {path:"/guang",component:guang},
    {path:"/yhj",component:yhj},
    {path:"/cart",component:cart},
    {path:"/dingdan",component:dingdan},
    {path:"/mes",component:mes},
    {path:"/me",component:me},
    {path:"/app",component:app},
    {
      
      path: '/',
      name: 'app',
      component: app
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
