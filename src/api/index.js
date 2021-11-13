import http from '@/utils/http.js'



export default {
  /*
   *@param {json} options: {} || {data: json}
   */
  /* 请务必注释每个接口所属名称 */

  // 获取登录验证：图片验证码/短信验证码 
  getLoginCheckType: (options = {}) => http.post('/dictData/loginCheckType', options),
  // 获取验证码接口
  getPhoneCode: (options = {}) => http.post('/getPhoneCode', options),
  // 登录
  getLogin: (options = {}) => http.post('/login', options),
  // 获取登录验证码
  getLoginCode: (options = {}) => http.post('/getPictureCode', options),

}