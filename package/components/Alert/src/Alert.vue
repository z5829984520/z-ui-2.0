<template>
  <transition name="z-alert">
    <popup-util :visible="visible">
      <section class="z-alert-wrapper" :style="{ top, zIndex }">
        <div class="z-alert-wrapper-header" v-html="title" v-if="title && !iconName"></div>
        <div class="z-alert-wrapper-icon" v-if="iconName"><icon :name="iconName" :style="iconStyle" /></div>
        <div class="z-alert-wrapper-body" v-html="message" v-if="message"></div>
        <div class="z-alert-wrapper-footer">
          <div class="z-alert-wrapper-footer-item z-alert-wrapper-footer-cancel" v-if="type === 'confirm'" @click="handleBtnClick(false)">{{ cancelBtnTxt }}</div>
          <div class="z-alert-wrapper-footer-item z-alert-wrapper-footer-ok" @click="handleBtnClick(true)">{{ okBtnTxt }}</div>
        </div>
      </section>
    </popup-util>
  </transition>
</template>

<script>
  import PopupUtil from '../../utils/PopupUtil'
  import Icon from '../../Icon'

  export default {
    name: 'zAlert',
    components: {
      PopupUtil,
      Icon
    },
    props: {
      type: {
        type: String,
        default: 'Alert'
      },
      top: {
        type: String,
        default: '36%'
      },
      title: {
        type: [String, Number],
        default: '提示'
      },
      message: {
        type: [String, Number],
        default: ''
      },
      iconName: {
        type: String,
        default: ''
      },
      iconStyle: {
        type: Object,
        default: () => {
          return {
            fontSize: '24px'
          }
        }
      },
      okBtnTxt: {
        type: String,
        default: '确认'
      },
      cancelBtnTxt: {
        type: String,
        default: '取消'
      },
      zIndex: {
        type: Number,
        default: 2500
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      handleBtnClick(boolean) {
        this.visible = false;
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../../assets/style/components/alert.less";
</style>
