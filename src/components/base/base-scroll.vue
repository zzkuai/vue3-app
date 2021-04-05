<template>
  <section ref="el" @scroll="handleScroll">
    <slot />
  </section>
</template>

<script>
import { ref, onActivated } from 'vue'
import { debounce } from 'lodash-es'
export default {
  props: {
    direction: {
      type: String,
      default: 'vertical',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      },
    },
  },
  setup(props) {
    const el = ref(null)
    const scrollValue = ref(0)

    const handleScroll = debounce(function (el) {
      const target = el.target
      if (props.direction === 'vertical') {
        scrollValue.value = target.scrollTop
      } else {
        scrollValue.value = target.scrollLeft
      }
    }, 200)

    onActivated(() => {
      if (scrollValue.value > 0) {
        props.direction === 'vertical'
          ? (el.value.scrollTop = scrollValue.value)
          : (el.value.scrollLeft = scrollValue.value)
      }
    })

    return { el, handleScroll }
  },
}
</script>
