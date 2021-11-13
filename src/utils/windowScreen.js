/**
 * 窗口可视区域相关
*/
import {Notification } from 'element-ui'
/**
 * 判断浏览器的版本
 * @param {Function} 
 * 
 */
function myBrowser() {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1;
  if (isOpera) {//判断是否Opera浏览器
    return "Opera"
  }; 
  if (userAgent.indexOf("Firefox") > -1) {//判断是否Firefox浏览器
    return "FF";
  } 
  if (userAgent.indexOf("Chrome") > -1){//判断是否Chrome浏览器
    return "Chrome";
  }
  if (userAgent.indexOf("Safari") > -1) {//判断是否Safari浏览器
    return "Safari";
  } 
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {//判断是否IE6-9浏览器
    if (userAgent.indexOf("MSIE 6.0") > -1) { return "IE6"; }
    if (userAgent.indexOf("MSIE 7.0") > -1) { return "IE7"; }
    if (userAgent.indexOf("MSIE 8.0") > -1) { return "IE8"; }
    if (userAgent.indexOf("MSIE 9.0") > -1) { return "IE9"; }
    if (userAgent.indexOf("MSIE 10.0") > -1) { return "IE10"; }
    return "IE";
  } 
  if (userAgent.toLowerCase().indexOf("trident") > -1 && userAgent.indexOf("rv") > -1 && !isOpera) {//判断是否IE10-11浏览器
    if (userAgent.indexOf("rv:10.0") > -1) { return "IE10"; }
    if (userAgent.indexOf("rv:11.0") > -1) { return "IE11"; }
    return "IE11";
  } else {
    return userAgent;
  }
}
export default {
  // 获取窗口宽度
  getWidth() {
    return document.documentElement.clientWidth;
  },
  // 获取窗口高度
  getHeight() {
    return document.documentElement.clientHeight;
  },
  // 设置全屏
  fullScreen(ele) {
    const element = ele || document.documentElement;
    // 获取浏览器版本
    let mb = myBrowser();
    if (mb.indexOf("IE")>-1) {
      if (mb.replace("IE","")<=10) {
        Notification.error({
          title: '温馨提示',
          dangerouslyUseHTMLString: true,
          message: '<p>当前浏览器版本太低，需要在ie浏览器</p><p>安全设置里面把 ‘未标记为可安全执行</p><p>脚本的ActiveX控件初始化并执行脚本，</p><p>设置为启用</p>'
        });
        // Message.error('当前浏览器版本太低，需要在ie浏览器安全设置里面把 ‘未标记为可安全执行脚本的ActiveX控件初始化并执行脚本，设置为启用')
        if(typeof window.ActiveXObject != "undefined") {
          //这的方法 模拟f11键，使浏览器全屏
          let wscript = new ActiveXObject("WScript.Shell");
          if(wscript != null) {
              wscript.SendKeys("{F11}");
          }
        }
      }  
    }else{
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    }
  },
  // 退出全屏
  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  },
  /**
	 * 是否全屏监听
	 * @param {Function} 全屏回调函数
	 * @param {Function} 退出全屏回调函数
	 * 
	 */
  watchScreen(fullCb, exitCb) {
    window.addEventListener('resize', () => {
      const isFull = !!(document.webkitIsFullScreen || document.mozFullScreen || 
        document.msFullscreenElement || document.fullscreenElement
      );
      if (isFull) {
        fullCb();
      } else {
        exitCb();
      }
    })
  },
}