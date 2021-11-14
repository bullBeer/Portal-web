// 首页子路由列表

// 首页子页面1
const product = () => import('@/views/home/product')
// 首页子页面2
const news = () => import('@/views/home/news')
// 首页子页面3
const aboutUs = () => import('@/views/home/aboutUs')


export default [
  {
    path: 'product',
    name: 'product',
    meta: {
      // keepAlive: true,
      title: '产品',
    },
    component: product
  },
  {
    path: 'news',
    name: 'news',
    meta: {
      keepAlive: true,
      title: '资讯',
    },
    component: news
  },
  {
    path: 'aboutUs',
    name: 'aboutUs',
    meta: {
      title: '关于我们',
    },
    component: aboutUs
  },
]