<template>
  <div class="z-popup-util-wrapper" v-show="visible" :style="{ zIndex }" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number,
        default: 2000
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .z-popup-util-wrapper{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.56);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>
