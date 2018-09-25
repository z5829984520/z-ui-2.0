<template>
  <section class="z-notice-wrapper" @click="handleClick" v-show="visible" :style="{ backgroundColor, color }">
    <div class="z-notice-wrapper-left" v-if="isShowLeft">
      <slot name="left">
        <icon name="notice" />
      </slot>
    </div>
    <div class="z-notice-wrapper-main" ref="wrapper">
      <div class="z-notice-wrapper-main-info"
           :class="messageClassName"
           :style="messageStyle" ref="message"
           @animationend="onAnimationEnd"
           @webkitAnimationEnd="onAnimationEnd">
        <slot></slot>
      </div>
    </div>
    <div class="z-notice-wrapper-right" v-if="isShowRight" @click="handleClickClose">
      <slot name="right">
        <icon name="close" />
      </slot>
    </div>
  </section>
</template>

<script>
  import Icon from '../../Icon'

  export default {
    name: 'zNotice',
    components: {
      Icon,
    },
    props: {
      color: {
        type: String,
        default: 'rgb(255, 102, 0)'
      },
      backgroundColor: {
        type: String,
        default: 'rgb(255, 247, 204)'
      },
      isScroll: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 50
      },
      isShowLeft: {
        type: Boolean,
        default: true
      },
      isShowRight: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      messageStyle() {
        return {
          paddingLeft: this.firstPlay ? 0 : this.wrapWidth + 'px',
          animationDelay: (this.firstPlay ? this.delay : 0) + 's',
          animationDuration: this.duration + 's'
        }
      }
    },
    data() {
      return {
        visible: true,
        messageClassName: '',
        duration: 0,
        wrapWidth: 0,
        messageWidth: 0,
        firstPlay: true
      }
    },
    mounted() {
      this.initAnimate()
    },
    methods: {
      initAnimate() {
        this.messageWidth = this.$refs.message.getBoundingClientRect().width;
        this.wrapWidth = this.$refs.wrapper.getBoundingClientRect().width;

        console.log(this.messageWidth, this.wrapWidth);

        if (this.isScroll && this.messageWidth > this.wrapWidth) {
          this.duration = this.messageWidth / this.speed;
          this.messageClassName = 'z-notice-animate-play'
        }
      },
      onAnimationEnd() {
        this.firstPlay = false;
        this.$nextTick(() => {
          this.duration = (this.wrapWidth + this.messageWidth) / this.speed;
          this.messageClassName = 'z-notice-animate-infinite'
        })
      },
      setVisible(bool) {
        this.visible = bool;
      },
      handleClick(e) {
        this.$emit('click', e);
      },
      handleClickClose(e) {
        if (!this.$slots.right) {
          this.setVisible(false);
          this.$emit('handleClose', e)
        }
      }
    },
    watch: {
      visible (val) {
        this.$emit('change', val)
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../../assets/style/components/notice.less";
</style>
