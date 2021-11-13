/**
 * 时间格式化
 * 
 * @param {Date} t 日期
 * @param {string} s 时间格式
 * @returns {string} 返回格式化的时间
 * @example
 *
 * formatTime(undefined, 'YYYY-MM-DD')
 * // => 2020-06-09 16:14:24
 */
export function formatTime(t = new Date(), s = 'YYYY-MM-DD hh:mm:ss') {
  //t new Date()
  //s YYYY-MM-DD hh:mm:ss
  const re = /YYYY|YY|MM|M|DD|D|hh|h|mm|m|ss|s/g
  return s.replace(re, function($1) {
    switch ($1) {
      case 'YYYY':
        return t.getFullYear()
      case 'YY':
        return ('' + t.getFullYear()).slice(-2)
      case 'MM':
        return ('0' + (t.getMonth() + 1)).slice(-2)
      case 'M':
        return t.getMonth() + 1
      case 'DD':
        return ('0' + t.getDate()).slice(-2)
      case 'D':
        return t.getDate()
      case 'hh':
        return ('0' + t.getHours()).slice(-2)
      case 'h':
        return t.getHours()
      case 'mm':
        return ('0' + t.getMinutes()).slice(-2)
      case 'm':
        return t.getMinutes()
      case 'ss':
        return ('0' + t.getSeconds()).slice(-2)
      case 's':
        return t.getSeconds()
    }
    return $1
  })
}

/**
 * 对象返回某些字段
 * 
 * @param {Object} obj 要处理的对象
 * @param {string[]} keys 要保留的字段
 * @returns {Object} 返回过滤后的对象
 * @example
 *
 * pick({a: 1, b: 2, c: 3}, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
 */
export function pick(obj, keys) {
  return keys.map((key) => (key in obj ? { [key]: obj[key] } : {})).reduce((obj, next) => ({ ...obj, ...next }), {})
}

/**
 * 判断是否是字符串
 * 
 * @param {string|number} ...args 要判断的字符串
 * @returns {Boolean} 返回布尔值
 * @example
 *
 * isNumber('0', '1')
 * // => ture
 */
export function isNumber(...args) {
  return args.every(n => /\d+/.test(n))
}
