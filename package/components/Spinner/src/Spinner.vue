<template>
  <div v-show="visible" class="z-spinner-wrapper">
    <div class="z-spinner-wrapper-inner">
      <spinner-item :color="color" :type="type" :size="size" />
      <div class="z-spinner-wrapper-inner-content" v-html="message" v-if="message"></div>
    </div>
  </div>
</template>

<script>
  import SpinnerItem from '../../SpinnerItem'

  export default {
    name: 'zSpinner',
    components: {
      SpinnerItem
    },
    props: {
      message: {
        type: [String, Number],
        default: ''
      },
      color: {
        type: String,
        default: '#fff',
      },
      type: {
        type: String,
        default: 'lineRound'
      },
      size: {
        type: Number,
        default: 32
      }
    },
    data() {
      return {
        visible: false
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../assets/style/components/spinner.less";
</style>
