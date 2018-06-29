<template>
  <div class="list-router-page-container" :style="{ backgroundColor }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: '#fff'
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .list-router-page-container{
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
