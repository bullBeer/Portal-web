import * as types from './mutation-types'


// 用户登录
export function setLogin({commit}, data) {
  commit(types.SET_LOGININFO, data);
}

// 删除用户登录信息
export function removeUserInfo({commit}) {
  commit(types.REMOVE_LOGININFO);
}

