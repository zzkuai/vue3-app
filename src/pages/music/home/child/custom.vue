<template>
  <section v-show="list.length" class="custom mg-t-20">
    <block-header :title="block.mainTitle" :button="block.button"></block-header>
    <base-scroll direction="horizontal" class="custom-list pd-x-15">
      <div v-for="(item, index) in list" :key="index" class="custom-item">
        <div v-for="resource in item.resources" :key="resource.id" class="custom-resource mg-t-15">
          <div class="left mg-r-10">
            <img v-lazyload class="left-img br-8" data-img-size="120y120" :data-src="resource.imageUrl" alt="" />
          </div>
          <div class="right">
            <div class="top">
              <span>{{ resource.songData.name }}</span>
              <span class="cr-dk-03"> - </span>
              <span v-for="artist in resource.artists" :key="artist.id" class="font-md cr-dk-03">{{
                artist.name
              }}</span>
            </div>
            <div class="bottom mg-t-5 font-md cr-dk-05">
              <span :class="[resource.descClass]">{{ resource.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </base-scroll>
  </section>
</template>

<script>
import { computed } from 'vue'
import { getSolidBlock } from '../tool'
import BlockHeader from '~comps/music/home/block-header.vue'
import BaseScroll from '~comps/base/base-scroll.vue'
export default {
  components: { BlockHeader, BaseScroll },
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const block = computed(() => {
      const block = getSolidBlock('HOMEPAGE_SLIDE_SONGLIST_ALIGN', props.blocks)
      return block
    })
    const list = computed(() => {
      return block.value.creatives.map((item) => {
        const { resources } = item
        return {
          resources: resources.map((resource) => {
            const { uiElement = {}, resourceId, resourceExtInfo = {} } = resource
            const { artists = [], songData = {} } = resourceExtInfo
            const { image = {}, subTitle = {} } = uiElement
            return {
              id: resourceId,
              imageUrl: image.imageUrl,
              desc: subTitle.title,
              descClass: subTitle.titleType || '',
              artists,
              songData,
            }
          }),
        }
      })
    })

    return { block, list }
  },
}
</script>

<style lang="less" scoped>
.custom {
  &-list {
    white-space: nowrap;
    overflow-x: scroll;
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &-item {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  &-resource {
    display: flex;
    align-items: center;

    .left {
      &-img {
        display: block;
        width: 50px;
        height: 50px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: calc(100% - 70px);
    }

    .top {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }

    .bottom {
      .songRcmdTag {
        font-size: 10px;
        background: seashell;
        padding: 3px 8px;
        border-radius: 10px;
      }
    }
  }
}
</style>
