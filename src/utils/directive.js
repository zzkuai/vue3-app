/**
 * 全局指令
 */

// 图片懒加载
const LazyLoadObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting, target } = entry
      if (isIntersecting && !target.src) {
        target.src = target.dataset.src
        LazyLoadObserver.unobserve(target)
      }
    })
  },
  {
    threshold: 0.25,
  }
)
const LazyLoad = {
  name: 'lazyload',
  value: {
    // 指令是具有一组生命周期的钩子：
    // 在绑定元素的父组件挂载之前调用
    beforeMount() {},
    // 绑定元素的父组件挂载时调用
    mounted(el) {
      LazyLoadObserver.observe(el)
    },
    // 在包含组件的 VNode 更新之前调用
    beforeUpdate() {},
    // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
    updated() {},
    // 在绑定元素的父组件卸载之前调用
    beforeUnmount() {},
    // 卸载绑定元素的父组件时调用
    unmounted() {},
  },
}

export default function (app) {
  ;[LazyLoad].forEach((item) => {
    app.directive(item.name, item.value)
  })
}
