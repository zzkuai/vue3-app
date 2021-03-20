<template>
  <section v-if="list.length" class="playlist mg-t-20 pd-t-15">
    <block-header :title="block.subTitle" :button="block.button"></block-header>
    <ul class="playlist-list mg-t-15 pd-x-15">
      <li v-for="item in list" :key="item.id" class="playlist-item mg-r-15">
        <span class="count font-sm br-10">{{ formatCount(item.info.playCount) }}</span>
        <img v-lazyload class="img br-10" data-img-size="300y300" :data-src="item.imageUrl" alt="" />
        <span class="name mg-t-5 font-md">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue'
import { getSolidBlock } from '../tool'
import { formatCount } from '~src/utils/format'
import BlockHeader from '~comps/music/home/block-header.vue'
export default {
  components: { BlockHeader },
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

    const list = computed(() => {
      return block.value.creatives.map((item) => {
        const { creativeId, uiElement, resources } = item
        const { mainTitle, image } = uiElement
        const [resource] = resources
        return {
          id: creativeId,
          name: mainTitle.title,
          imageUrl: image.imageUrl,
          info: resource.resourceExtInfo,
        }
      })
    })

    return { block, list, formatCount }
  },
}
</script>

<style lang="less" scoped>
@import '~src/assets/styles/mixin.less';

.playlist {
  .border-top-1px(rgba(0,0,0,0.1),0);

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
