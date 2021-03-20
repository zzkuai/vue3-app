/**
 * 全局指令
 */

// 图片懒加载
const LazyLoadObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting, target } = entry
      if (isIntersecting && !target.src) {
        const { src, imgSize } = target.dataset
        target.src = src + '?param=' + imgSize
        LazyLoadObserver.unobserve(target)
      }
    })
  },
  {
    threshold: 0.15,
  }
)
const LazyLoad = {
  name: 'lazyload',
  value: {
    // 绑定元素的父组件挂载时调用
    mounted(el) {
      LazyLoadObserver.observe(el)
    },
  },
}

export default function (app) {
  ;[LazyLoad].forEach((item) => {
    app.directive(item.name, item.value)
  })
}
