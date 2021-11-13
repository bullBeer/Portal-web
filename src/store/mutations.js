import * as types from './mutation-types'
import storage from '@/utils/storage'


export default  {
  [types.SET_LOGININFO] (state, data) {
    state.userInfo = data;
    storage.localStorage.set('userInfo', data);
  },
  [types.REMOVE_LOGININFO] (state) {
    state.userInfo = null;
    storage.localStorage.remove('userInfo');
  },
}
