<template>
  <section class="z-popup-wrapper">
    <popup-util :visible="visible" @click="setVisible(false)"></popup-util>

    <transition :name="isAnimateName">
      <div class="z-popup-container" :style="{ zIndex }" :class="[ `z-popup-${position}`, screen ? `z-popup-${position}-screen`: '' ]" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script>
  import PopupUtil from '../../utils/PopupUtil'

  export default {
    name: 'zPopup',
    components: {
      PopupUtil
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      animateName: {
        type: String,
        default: 'slide'
      },
      position: {
        type: String,
        default: 'bottom'
      },
      screen: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: Number,
        default: 2500
      }
    },
    data() {
      return {
        visible: this.value,
        isAnimateName: this.animateName
      }
    },
    beforeMount() {
      this.isAnimateName = `z-popup-${this.animateName}-${this.position}`
    },
    methods: {
      setVisible(boolean) {
        this.visible = boolean
      }
    },
    watch: {
      visible(val) {
        this.$emit('input', val)
      },
      value(val) {
        this.visible = val
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../../assets/style/components/popup.less";
</style>
