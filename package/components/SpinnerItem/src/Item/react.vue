<template>
  <div class="z-spinner-item-react-wrapper" :style="{ width: `${size}px`, height: `${size}px` }">
    <div class="z-spinner-item-react-wrapper-item"
         v-for="item in 5" :class="`z-react-item-${item}`"
         :style="{ backgroundColor: color, width: `${size / 10.6}px` }"
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
  @import "../../../../assets/style/components/react.less";
</style>
