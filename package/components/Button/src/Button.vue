<template>
  <Ripple :color="rippleColor" @click="handleClick">
    <button class="z-button-wrapper"
            :class="[
            `z-button-wrapper-${type}`,
            `z-button-wrapper-${size}`,
            { 'z-button-wrapper-disabled': disabled },
            { 'z-button-wrapper-radius': showRadius },
            plain ? `z-button-wrapper-${type}-plain` : '',
            ]"
            :disabled="disabled">
      <slot></slot>
    </button>
  </Ripple>
</template>

<script>
  import Ripple from '../../Ripple'

  /*
  * @params type          按钮类型
  * @params size          按钮尺寸
  * @params showRadius    是否显示圆角
  * @params showBorder    是否显示边框
  * @params plain         是否镂空
  * @params disabled      是否禁用
  * @params rippleColor   涟漪背景图
  * */
  export default {
    name: 'zButton',
    components: {
      Ripple,
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      size: {
        type: String,
        default: 'normal'
      },
      showRadius: {
        type: Boolean,
        default: true
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      rippleColor: String,
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../../assets/style/components/button.less";
</style>
