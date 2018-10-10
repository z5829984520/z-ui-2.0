<template>
  <span class="z-tag-wrapper"
        @click="handleClick"
        :class="[
          `z-tag-wrapper-${type}`,
          `z-tag-wrapper-${size}`,
          {'z-tag-wrapper-disabled': disabled},
          {'z-tag-wrapper-border': showBorder},
          plain ? `z-tag-wrapper-${type}-plain` : '',
          ]" :style="{ borderRadius, fontSize }">
      <slot></slot>
    </span>
</template>

<script>
  export default {
    name: 'zTag',
    props: {
      type: {
        type: String,
        default: 'info'
      },
      size: {
        type: String,
        default: 'normal'
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showBorder: {
        type: Boolean,
        default: true,
      },
      borderRadius: String,
      fontSize: String
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../../assets/style/components/tag.less";
</style>
