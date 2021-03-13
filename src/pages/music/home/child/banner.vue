<template>
  <van-swipe v-if="banners.length" :autoplay="3000" class="banner" lazy-render indicator-color="white">
    <van-swipe-item v-for="(banner, index) in banners" :key="index">
      <div class="banner-item" @click="openPage(banner.url)">
        <img class="banner-img" :src="banner.pic" alt="" />
        <span :style="{ backgroundColor: banner.titleColor }" class="banner-tag font-sm">{{ banner.typeTitle }}</span>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { computed } from 'vue'
import { getBlock, openPage } from '../use'
export default {
  props: {
    blocks: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const banners = computed(() => {
      const block = getBlock('BANNER', props.blocks)
      if (!block) return []
      return block.extInfo.banners
    })
    return {
      banners,
      openPage,
    }
  },
}
</script>

<style lang="less" scoped>
.banner {
  &-item {
    padding: 0 15px;
  }

  &-img {
    border-radius: 10px;
    display: block;
    width: 100%;
  }

  &-tag {
    position: absolute;
    z-index: 10;
    color: white;
    right: 15px;
    bottom: 0;
    padding: 2px 6px;
    border-radius: 10px 0 10px 0;
  }
}
</style>
