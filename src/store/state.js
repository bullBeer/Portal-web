// import storage from '@/utils/storage'
const userInfo = {
  account: "admin",
  avatar: "http://192.168.27.2:8888/files/user/1596192603582_5507.png",
  createBy: 1,
  createTime: "2020-06-15 09:41:36",
  email: "125301859@QQ.COM",
  extInfo: "",
  isManager: false,
  mobile: "18566298373",
  name: "张三",
  password: "17ca0bc3a6ead1fe337eb9eac1c2d99f",
  status: 0,
  storeId: 8,
  storeName: "胖子的2号店",
  updateBy: 32,
  updateTime: "2020-07-31 18:50:06",
  userId: 32
}
const state = {
  userInfo,// storage.localStorage.get('userInfo') || null, // 用户已登录数据
}
export default state;
