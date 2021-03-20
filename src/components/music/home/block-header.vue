<template>
  <div class="d-flex f-jc-sp f-ai-c pd-x-15">
    <h2 v-if="title" class="font-lg">{{ title }}</h2>
    <span v-if="subTitle" class="cr-dk-03 font-md">{{ subTitle }}</span>
    <span v-if="button" class="button font-md">{{ button }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    button: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scoped>
@import '~src/assets/styles/mixin.less';

.button {
  padding: 3px 8px;
  .border-1px(rgba(0,0,0,0.1));
}
</style>
