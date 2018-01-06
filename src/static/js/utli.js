// 把时间转换成 yyyy-mm-dd
export const formatDate = (date = new Date()) => {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return year + '-' + month.toString().padStart(2, 0) + '-' + day.toString().padStart(2, 0)
}

export const formatTime = (date = new Date()) => {
  date = new Date(date)
  const hour = date.getHours()
  const minute = date.getMinutes()

  return formatDate(date) + ' ' + hour.toString().padStart(2, 0) + ':' + minute.toString().padStart(2, 0)
}

/*
* 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
* @param fn {function}  需要调用的函数
* @param delay  {number}    延迟时间，单位毫秒
* @param immediate  {bool} 给 immediate参数传递 true 时，绑定的函数 delay 后执行。
* @return {function}实际调用函数
*/
export const Throttle = function (fn, delay, immediate = false, debounce) {
  let curr = +new Date()// 当前时间
  let last_call = 0
  let last_exec = 0
  let timer = null
  let diff // 时间差
  let context // 上下文
  let args
  let exec = function () {
    last_exec = curr
    fn.apply(context, args)
  }

  return function () {
    curr = +new Date()
    context = this
    args = arguments
    diff = curr - (debounce ? last_call : last_exec) - delay
    clearTimeout(timer)
    if (debounce) {
      if (immediate) {
        timer = setTimeout(exec, delay)
      } else if (diff >= 0) {
        exec()
      }
    } else {
      if (diff >= 0) {
        exec()
      } else if (immediate) {
        timer = setTimeout(exec, -diff)
      }
    }
    last_call = curr
  }
}

/*
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
* @param fn {function}  要调用的函数
* @param delay   {number}    空闲时间
* @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
* @return {function}实际调用函数
*/

export const Debounce = (fn, delay, immediate) => Throttle(fn, delay, immediate, true)
