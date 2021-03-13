<template>
  <Banner :blocks="homeInfo.blocks" />
  <Entry :list="homeInfo.entry" />
  <PlayList :blocks="homeInfo.blocks" />
</template>

<script>
import { Toast } from 'vant'
import { onMounted, reactive } from 'vue'
import { getHomeInfo, getEntry } from '~api/music/home'
import Banner from './child/banner.vue'
import Entry from './child/entry.vue'
import PlayList from './child/playlist.vue'
export default {
  components: {
    Banner,
    Entry,
    PlayList,
  },
  setup() {
    const homeInfo = reactive({ blocks: [], entry: [], config: {} })

    onMounted(async () => {
      try {
        const [info, entry] = await Promise.all([getHomeInfo(), getEntry()])
        const { blocks, pageConfig } = info.data
        homeInfo.blocks = blocks
        homeInfo.config = pageConfig
        homeInfo.entry = entry.data
      } catch (err) {
        if (err.msg) Toast(err.msg)
      }
    })

    return { homeInfo }
  },
}
</script>
