const index = () => import('@/views/index/')
const login = () => import('@/views/login/login')
import children from './home/children'



export default [
  {
    path: '/',
    redirect: {
      path: '/index/product',
      // 初始化路由参数
      // query: {
      //   page: 1
      // }
    }
  },
  {
    path: '/index',
    redirect: {
      path: '/index/product',
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]