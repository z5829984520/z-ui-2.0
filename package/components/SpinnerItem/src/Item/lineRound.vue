<template>
  <div class="z-spinner-item-line-wrapper" :style="{ width: `${size}px`, height: `${size}px` }">
    <div class="z-spinner-item-line-wrapper-inner" :style="{ borderColor: `transparent ${color} ${color}` }"></div>
  </div>
</template>

<script>
  export default {
    props: ['color', 'size']
  }
</script>

<style lang="less" type="text/less">
  @import "../../../../assets/style/components/lineRound.less";
</style>
