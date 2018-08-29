<template>
  <div class="z-spinner-item-round-wrapper" :style="{ width: `${size}px`, height: `${size}px` }">
    <div class="z-spinner-item-round-wrapper-item"
         v-for="item in 2" :class="`z-round-item-${item}`"
         :style="{ backgroundColor: color }" :key="item + ''">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['color', 'size']
  }
</script>

<style lang="less" type="text/less">
  @import "../../../../assets/style/components/round.less";
</style>
