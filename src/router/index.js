import Vue from 'vue'
import Router from 'vue-router'
import routes from './list'

// 路由重复点击异常处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



Vue.use(Router)
const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router;