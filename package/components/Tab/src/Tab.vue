<template>
  <section class="z-tab-wrapper">
    <div class="z-tab-wrapper-title" ref="nav">
      <div class="z-tab-wrapper-title-slider" :style="{ zIndex: tabZIndex }" ref="tabsWrapper">
        <div v-for="(item, index) in list"
             :key="index + ''"
             class="z-tab-wrapper-title-slider-item"
             :class="{ 'z-tab-wrapper-title-slider-active': index === value }" ref="tabs" @click="clickItem(index)">
          <!--<slot name="title" v-if="$slots.title"></slot>-->
          <span class="z-tab-wrapper-title-slider-item-cell" :style="[ index === value ? activeTextStyle : inactiveTintStyle ]">{{ item }}</span>
        </div>
      </div>
      <div class="z-tab-wrapper-title-line" :style="[{ backgroundColor: `${lineBackGroundColor}`}, ...lineStyle]"></div>
    </div>
    <div class="z-tab-wrapper-content" ref="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import { raf } from '../../utils/raf'

  /*
  * @params value               当前tab索引
  * @params tabsStyle           tab的样式
  * @params lineBackGroundColor 底部下划线颜色
  * @params activeTextStyle     激活样式
  * @params inactiveTintStyle   未激活样式
  * @params lock                是否开启左右滑动
  * */
  export default {
    name: 'zTab',
    props: {
      value: {
        type: Number,
        required: true
      },
      tabsStyle: {
        type: Object,
        default: () => {
          return {}
        }
      },
      lineBackGroundColor: {
        type: String,
        default: '#409EFF'
      },
      activeTextStyle: {
        type: Object,
        default: () => {
          return {
            color: '#409EFF'
          }
        }
      },
      inactiveTintStyle: {
        type: Object,
        default: () => {
          return {
            color: '#333'
          }
        }
      },
      lock: {
        type: Boolean,
        default: false
      },
      tabZIndex: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        list: [],
        lineStyle: {},
        startX: null,
        startY: null,
        endX: null,
        endY: null,
        currentIndex: null
      }
    },
    mounted() {
      this.onReady()
    },
    methods: {
      onReady() {
        this.setList();
        this.setStyle();
        if (this.lock) this.addEvent()
      },
      setStyle() {
        this.$nextTick(() => {
          this.setLineStyle(this.value);
          this.mathScrollX(this.value)
        })
      },
      setLineStyle(index) {
        const tab = this.$refs.tabs[index];
        const width = tab.offsetWidth;
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`
        }
      },
      setList() {
        this.$children.forEach((item, index) => {
          this.list.push(item.title)
        })
      },
      getActiveItem() {
        this.$children.forEach((item, index) => {
          item.active = (index === this.value)
        })
      },
      clickItem(index) { // 点击
        this.onChange(index)
      },
      onChange(index) { // 切换
        this.setLineStyle(index);
        this.mathScrollX(index);

        this.$emit('input', index);
        this.$emit('change', index);
      },
      mathScrollX(index) { // 获取滚动距离
        const tab = this.$refs.tabs[index];
        const nav = this.$refs.nav;
        const { scrollLeft, offsetWidth: navWidth } = nav;
        const { offsetLeft, offsetWidth: tabWidth } = tab;

        this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
      },
      scrollTo(el, from, to) { // 滚动动画
        let count = 0;
        const frames = Math.round(0.2 * 1000 / 16);
        const animate = () => {
          el.scrollLeft += (to - from) / frames;

          if (++count < frames) {
            raf(animate);
          }
        };

        animate()
      },
      addEvent() {
        const content = this.$refs.content;

        content.addEventListener('touchstart', this.handleTouchStart);
        content.addEventListener('touchmove', this.handleTouchMove);
        content.addEventListener('touchend', this.handleTouchEnd)
      },
      removeEvent() {
        const content = this.$refs.content;

        content.removeEventListener('touchstart', this.handleTouchStart);
        content.removeEventListener('touchmove', this.handleTouchMove);
        content.removeEventListener('touchend', this.handleTouchEnd)
      },
      handleTouchStart(e) {
        e.preventDefault();

        this.currentIndex = this.value;
        this.startX = e.touches[0].pageX;
        this.startY = e.touches[0].pageY;
      },
      handleTouchMove(e) {
        e.preventDefault();

        this.endX = e.touches[0].pageX;
        this.endY = e.touches[0].pageY;
      },
      handleTouchEnd(e) {
        e.preventDefault();

        if (this.startX > this.endX) {
          if (this.currentIndex === this.list.length - 1) {
            return false
          }

          this.clickItem(this.currentIndex + 1)
        } else {
          if (this.currentIndex === 0) {
            return false
          }

          this.clickItem(this.currentIndex - 1)
        }
      },
      beforeDestroy() {
        if (this.lock) this.removeEvent();
      }
    },
    watch: {
      list() {
        this.getActiveItem()
      },
      value() {
        this.getActiveItem()
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../../assets/style/components/tab.less";
</style>
