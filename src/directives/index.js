export const imageerror = {
  inserted(dom, options) {
    dom.src = dom.src || options.value
    dom.onerror = function() {
      // 当图片出现异常的时候，将图片的src属性的值为 界面指令绑定的data里面的值
      dom.src = options.value
    }
  },
  // 更新数据完毕后会执行
  componentUpdated(dom, options) {
    dom.src = dom.src || options.value
  }
}

