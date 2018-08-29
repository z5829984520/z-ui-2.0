<template>
  <transition name="z-fade">
    <div class="z-toast-wrapper" v-show="visible" :style="{ top }">
      <div class="z-toast-wrapper-container">
        <div class="z-toast-wrapper-container-spinner-item" v-if="type">
          <spinner-item :type="type" :color="color" :size="size"></spinner-item>
        </div>
        <div class="z-toast-wrapper-container-message" v-html="message" v-if="message"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import SpinnerItem from '../../SpinnerItem'

  export default {
    name: 'zToast',
    components: {
      SpinnerItem
    },
    props: {
      top: {
        type: String,
        default: '46%'
      },
      message: {
        type: [String, Number],
        default: ''
      },
      duration: {
        type: Number,
        default: 3000
      },
      type: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#fff'
      },
      size: {
        type: Number,
        default: 16
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
  @import "../../../assets/style/components/toast.less";
</style>
