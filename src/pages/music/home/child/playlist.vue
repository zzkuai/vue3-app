<template>
  <section v-if="block.list.length" class="playlist mg-t-20 pd-t-15">
    <div class="playlist-header d-flex f-jc-sp f-ai-c pd-x-15">
      <h2 class="title font-lg">{{ block.subTitle }}</h2>
      <span class="more font-md">{{ block.button }} ></span>
    </div>
    <ul class="playlist-list mg-t-15 pd-x-15">
      <li v-for="item in block.list" :key="item.id" class="playlist-item mg-r-15">
        <span class="count font-sm br-10">{{ formatCount(item.info.playCount) }}</span>
        <img v-lazyload class="img br-10" :data-src="`${item.image}?param=300y300`" alt="" />
        <span class="name mg-t-5 font-md">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue'
import { getSolidBlock } from '../use'
import { formatCount } from '~src/utils/format'
export default {
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const block = computed(() => {
      const block = getSolidBlock('HOMEPAGE_SLIDE_PLAYLIST', props.blocks)
      return block
    })

    return { block, formatCount }
  },
}
</script>

<style lang="less" scoped>
@import '~src/assets/styles/mixin.less';

.playlist {
  .border-top-1px(rgba(0,0,0,0.1),0);

  .more {
    padding: 3px 6px;
    .border-1px(rgba(0,0,0,0.1));
  }

  &-list {
    white-space: nowrap;
    overflow-x: scroll;
  }

  &-item {
    position: relative;
    display: inline-block;
    width: 100px;
    vertical-align: top;

    &:last-child {
      margin-right: 0;
    }

    .img {
      display: block;
      width: 100%;
      height: 100px;
    }

    .name {
      display: block;
      line-height: 1.5;
      .ellipsis();
    }

    .count {
      top: 4px;
      right: 4px;
      position: absolute;
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 1px 4px;
    }
  }
}
</style>
