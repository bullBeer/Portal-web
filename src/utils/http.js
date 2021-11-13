// ajax.js
import axios from "axios";
import qs from "qs";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";
let baseURL;
switch (process.env.VUE_APP_MODE) {
  // 生产环境
  case "production":
    // baseURL = axios.defaults.baseURL = "//192.168.0.1/prod/api";
    baseURL = axios.defaults.baseURL = "https://api.ipts.boai1986.net/api";
    break;
  // 开发环境
  case "development":
    // baseURL = axios.defaults.baseURL = "//10.6.0.103/bms/api";
    // baseURL = axios.defaults.baseURL = "//192.168.7.3:8080/api";  // 开发
    baseURL = axios.defaults.baseURL = "//192.168.27.3:8080/api";  // 开发
    break;
  // 测试环境
  case "testing":
    baseURL = axios.defaults.baseURL = "https://api.test.boai1986.cn/api";  // 测试外网ipts.test.boai1986.cn/api
    break;
  // 仿真环境、预发布环境
  case "performance":
    baseURL = axios.defaults.baseURL = `${window.location.origin}/bms/api`;
    break;
  default:
    baseURL = axios.defaults.baseURL = "/api";
}
// jsonp请求
axios.jsonp = (url) => {
  if (!url) {
    console.error("jsonp-参数错误");
    return;
  }
  return new Promise((resolve, reject) => {
    window.callback = (result) => {
      resolve(result);
    };
    var JSONP = document.createElement("script");
    JSONP.type = "text/javascript";
    JSONP.src = `${url}&callback=callback`;
    document.getElementsByTagName("head")[0].appendChild(JSONP);
    setTimeout(() => {
      document.getElementsByTagName("head")[0].removeChild(JSONP);
    }, 500);
  });
};

/**
 * @description http请求
 * @param  {String} method 请求方法
 * @param  {String} path 请求路径
 * @param  {Object} options 请求配置
 * @param  {String} extend 请求拓展
 * @return {Function} result promise
 */
const request = (method, path, options, extend) => {
  // 接口地址切换配置
  if (typeof options.baseURL === "string") {
    axios.defaults.baseURL = options.baseURL;
  } else {
    axios.defaults.baseURL = baseURL;
  }
  return (async () => {
    try {
      let res;
      const responseType =
        {
          responseType: options.responseType,
        } || {};
      if (options.data && typeof options.data !== "object") {
        res = await axios[method](`${path}/${options.data}`); /*RESTful传参*/
      } else {
        const data = options.data || {};
        // 上传
        if (extend === "upload") {
          res = await axios[method](path, data, {
            // 上传进度
            onUploadProgress: (progressEvent) => {
              if (options.onUploadProgress) {
                // 监听回调
                options.onUploadProgress(progressEvent);
              }
            },
          });
        } else if (extend === "jsonp") {
          res = await axios[extend](
            `${axios.defaults.baseURL}${path}?${qs.stringify(data)}`
          );
        } else {
          switch (method) {
            case "get":
              res = await axios[method](path, {
                params: data,
                ...responseType,
              });
              break;
            case "post":
              res = await axios[method](path, data, responseType);
              break;
            case "put":
              res = await axios[method](path, data);
              break;
            case "delete":
              res = await axios[method](path, data);
              break;
            default:
              res = await axios[method](path, data, responseType);
          }
        }
      }
      // 下载文件append返回响应headers
      if (responseType.responseType) {
        return {
          headers: res.headers,
          blob: res.data,
        };
      }
      return extend === "jsonp" ? res : res.data;
    } catch (err) {
      console.log("接口请求错误！");
    }
  })();
};

export default {
  get(path, options) {
    return request("get", path, options);
  },
  post(path, options) {
    return request("post", path, options);
  },
  upload(path, options) {
    return request("post", path, options, "upload");
  },
  jsonp(path, options) {
    return request(null, path, options, "jsonp");
  },
  put(path, options) {
    return request("put", path, options);
  },
  delete(path, options) {
    return request("delete", path, options);
  },
};
