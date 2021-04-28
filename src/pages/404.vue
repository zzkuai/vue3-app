<template>
  <div class="not-found">
    <h1 class="title">404 not found</h1>
    <router-link replace class="mg-t-20" to="/"><van-button type="primary">go back home</van-button> </router-link>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
