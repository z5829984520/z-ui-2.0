<template>
  <div class="z-spinner-item-bounce-wrapper" :style="{ width: `${size}px`, height: `${size}px` }">
    <div class="z-spinner-item-bounce-wrapper-item"
         v-for="item in 3" :class="`z-bounce-${item}`"
         :style="{ backgroundColor: color, width: `${size / 3.2}px`, height: `${size / 3.2}px` }"
         :key="item + ''">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['color', 'size']
  }
</script>

<style lang="less" type="text/less">
  @import "../../../../assets/style/components/bounce.less";
</style>
