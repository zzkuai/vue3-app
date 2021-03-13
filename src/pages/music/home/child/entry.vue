<template>
  <ul v-if="entryList.length" class="entry mg-t-20 pd-x-15">
    <li v-for="(entry, index) in entryList" :key="index" class="entry-item mg-r-25" @click="openPage(entry.url)">
      <div class="entry-circle">
        <img v-lazyload class="entry-img" :data-src="`${entry.iconUrl}?param=120y120`" alt="" />
      </div>
      <span class="entry-name font-md">{{ entry.name }}</span>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { openPage } from '../use'
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const entryList = computed(() => {
      return props.list
    })
    return {
      entryList,
      openPage,
    }
  },
}
</script>

<style lang="less" scoped>
.entry {
  margin-top: 20px;
  white-space: nowrap;
  overflow-x: scroll;

  &-item {
    display: inline-block;
    width: 60px;
    min-width: 60px;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }
  }

  &-circle {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    background-color: salmon;
    border-radius: 20px;
  }

  &-img {
    width: 40px;
    height: 40px;
  }

  &-name {
    display: inline-block;
    margin-top: 5px;
  }
}
</style>
