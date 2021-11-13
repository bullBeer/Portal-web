const getStore = (type) => {
  const store = type === 'session' ? sessionStorage : localStorage;
  return {
    set (key, data) {
      let _data = typeof data === "object" ? JSON.stringify(data) : data;
      store.setItem(key, _data);
    },
    get (key) {
      let data = store.getItem(key), result;
      if (typeof data === "string") {
        try {
          result = JSON.parse(data);
        } catch (err) {
          result = data;
        }
        return result;
      }
      return false;
    },
    remove (key) {
      if (typeof key === 'string') {
        store.removeItem(key);
      } else if (typeof key === 'object') {
        if (key.excludes) {
          for (let i in store) {
            if (key.excludes.indexOf(i) < 0) {
              store.removeItem(i);
            }
          }
        }
        if (key.includes) {
          for (let i in store) {
            if (key.excludes.indexOf(i) >= 0) {
              store.removeItem(i);
            }
          }
        }
      }
    },
    clear () {
      store.clear();
    }
  }
}
  


export default {
  localStorage: getStore('local'), // export localStorge
  sessionStorage: getStore('session') // export sessionStorge
}