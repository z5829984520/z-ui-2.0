<template>
  <div class="z-scroll-wrapper"
       :class="[ { 'z-scroll-wrapper-scrollbar': !showScrollbar } ]"
       :style="{ height, 'overflow-y': isScrollY ? 'auto' : 'hidden', 'overflow-x': isScrollY ? 'hidden': 'auto' }"
       ref="listWrapper">
    <div class="z-scroll-wrapper-container" :style="{transform: `translate3d(${listX}px, ${listY}px, 0)`}" ref="listWrapperInner">
      <div class="z-scroll-wrapper-container-header" :style="{ marginTop: `-${topDistance}px`, height: `${topDistance}px` }" v-if="isPullTop">
        <slot name="top">
          <div class="z-scroll-wrapper-container-header-pull-drop" v-show="pullTopStatus === 'pull' || pullTopStatus === 'drop'">
            <Icon name="arrowLineUp" class="z-scroll-wrapper-container-header-pull-drop-icon" :style="arrowStyle" />
            {{ pullTopText }}
          </div>
          <div class="z-scroll-wrapper-container-header-loading" v-show="pullTopStatus === 'loading'">
            <spinner-item :size="16" color="#333" class="z-scroll-wrapper-container-header-loading-icon" />
            {{ pullTopText }}
          </div>
          <div class="z-scroll-wrapper-container-header-end" v-show="pullTopStatus === 'end'">
            {{ pullTopText }}
          </div>
        </slot>
      </div>
      <slot></slot>
      <div class="z-scroll-wrapper-container-footer" v-if="isPullBottom">
        <slot name="bottom">
          <div class="z-scroll-wrapper-container-footer-loading" v-show="pullBottomStatus === 'loading'">
            <spinner-item :size="16" color="#333" class="z-scroll-wrapper-container-header-loading-icon" />
            {{ pullBottomText }}
          </div>
          <div class="z-scroll-wrapper-container-footer-last" v-show="pullBottomStatus === 'last'">
            {{ pullBottomText }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  /**
  * @params height                容器高度
  * @params isScrollY             是否开启y周滚动
  * @params showScrollbar         是否显示滚动条
  * @params isPullTop             是否开启下拉刷新
  * @params topDistance           下拉刷新的拉动距离的触发值
  * @params pullActionPow         下拉刷新容器向下滚动的速度
  * @params pullTopPullText       开始下拉刷新文案
  * @params pullTopDropText       滑动过程文案
  * @params pullTopLoadingText    数据加载中文案
  * @params pullTopEndText        数据加载完成文案
  * @params isPullBottom          是否开启无限滚动
  * @params bottomDistance        无限滚动距底部多少触发
  * @params pullBottomLoadingText 无限滚动加载中文案
  * @params pullBottomEndText     无限滚动加载成功文案
  * @params pullBottomLastText    无限滚动数据全部加载完毕文案
  * */
  import {getDom} from "../../utils/dom";
  import Icon from '../../Icon'
  import SpinnerItem from '../../SpinnerItem'

  export default {
    name: 'zScroll',
    components: {
      Icon,
      SpinnerItem
    },
    props: {
      height: {
        type: String,
        required: true
      },
      isScrollY: {
        type: Boolean,
        default: true
      },
      showScrollbar: {
        type: Boolean,
        default: true
      },
      isPullTop: {
        type: Boolean,
        default: false
      },
      topDistance: {
        type: Number,
        default: 50
      },
      pullActionPow: {
        type: Number,
        default: 2
      },
      pullTopPullText: {
        type: [String, Number],
        default: '下拉刷新'
      },
      pullTopDropText: {
        type: [String, Number],
        default: '松开加载数据'
      },
      pullTopLoadingText: {
        type: [String, Number],
        default: '正在加载中...'
      },
      pullTopEndText: {
        type: [String, Number],
        default: '数据更新成功'
      },
      isPullBottom: {
        type: Boolean,
        default: false
      },
      bottomDistance: {
        type: Number,
        default: 20
      },
      pullBottomLoadingText: {
        type: [String, Number],
        default: '正在加载中...'
      },
      pullBottomEndText: {
        type: [String, Number],
        default: ''
      },
      pullBottomLastText: {
        type: [String, Number],
        default: '没有更多了'
      }
    },
    computed: {
      arrowStyle() {
        if (this.pullTopStatus === 'pull') {
          return {transform: `rotate(180deg)`}
        } else if (this.pullTopStatus === 'drop') {
          return {transform: `rotate(0deg)`}
        } else {
          return {}
        }
      }
    },
    data() {
      return {
        scrollHeight: 0,
        listX: 0,
        listY: 0,
        listHeight: null,
        startY: 0,
        currentY: 0,
        startScrollTop: 0,
        currentScrollTop: 0,
        direction: null,
        pullTopStatus: null,
        pullTopDropped: false,
        pullTopText: '',
        pullBottomStatus: null,
        pullBottomDropped: false,
        pullBottomText: '',
      }
    },
    mounted () {
      this.addScrollEvent();
      this.scrollHeight = getDom(this.$refs.listWrapper).height
    },
    beforeDestroy() {
      this.removeScrollEvent()
    },
    methods: {
      handleTouchStart(e) { // 开始
        const { clientY } = e.targetTouches[0];

        if (this.isPullTop && this.isScrollY) { // 下拉刷新 无限滚动

          this.startScrollTop = this.$refs.listWrapper.scrollTop;
          this.$refs.listWrapperInner.style.transition = 'transform 0s';
          this.startY = clientY;

          if (this.pullTopStatus !== 'loading') {
            this.pullTopStatus = 'pull';
            this.pullTopDropped = false;
          }
        }
      },
      handleTouchMove(e) { // 移动
        const { clientY } = e.targetTouches[0];
        const { top: listElTop, bottom: listElBottom } = getDom(this.$refs.listWrapper);

        if (this.startY < listElTop && this.startY > listElBottom) {
          return;
        }

        if (this.isPullTop && this.isScrollY) { // 下拉刷新 无限滚动
          this.currentY = clientY;
          let distance = (this.currentY - this.startY) / this.pullActionPow;
          this.direction = distance > 0 ? 'down' : 'up';

          if (this.direction === 'down' && this.$refs.listWrapper.scrollTop === 0 && this.pullTopStatus !== 'loading') { // 下拉
            e.preventDefault();
            e.stopPropagation();

            this.listY = distance - this.startScrollTop;

            if (this.listY < 0) {
              this.listY = 0;
            }

            this.pullTopStatus = this.listY >= this.topDistance ? 'drop' : 'pull';

            this.$emit('pullTopActionChange', this.listY)
          }
        }
      },
      handleTouchEnd(e) { // 结束
        if (this.isPullTop && this.isScrollY) {

          if (this.direction === 'down' && this.$refs.listWrapper.scrollTop === 0 && this.listY > 0) {
            this.pullTopDropped = true;

            if (this.listY < this.topDistance) {
              this.onPullTopEnd(false);
              return;
            }

            if (this.pullTopStatus === 'drop') {
              this.listY = this.topDistance;
              this.$refs.listWrapperInner.style.transition = 'transform 0.2s';
              this.pullTopStatus = 'loading';
              this.$emit('handlePullTop')
            }

            this.$emit('pullTopActionChange', this.listY);
          }

          this.direction = null;
        }
      },
      handleScroll(e) {
        this.$emit('scroll', e);

        if (this.pullBottomDropped) {
          return;
        }

        const { height: listHeight } = getDom(this.$refs.listWrapperInner);
        const { scrollTop } = e.target;

        this.currentScrollTop = scrollTop;
        this.listHeight = listHeight;

        if (this.isPullBottom && this.currentScrollTop >= this.listHeight - this.scrollHeight - (this.isPullTop ? this.topDistance : 0) - this.bottomDistance) {
          this.pullBottomDropped = true;
          this.pullBottomStatus = 'loading';
          this.$emit('handlePullBottom');
        }
      },
      onPullTopEnd(animate=true) {
        this.listY = 0;
        this.pullTopStatus = animate ? 'end' : 'pull';
        if (animate) {
          this.$refs.listWrapperInner.style.transition = 'transform 0.2s ease 0.6s'
        } else {
          this.$refs.listWrapperInner.style.transition = 'transform 0.2s'
        }

        // 若也开启了无限滚动重制一下
        if (this.isPullBottom) {
          this.onPullBottomEnd()
        }
      },
      onPullBottomEnd() {
        this.pullBottomStatus = 'end';
        this.pullBottomDropped = false;
      },
      onPullBottomLastEnd() {
        this.pullBottomStatus = 'last';
      },
      addScrollEvent() {
        this.$refs.listWrapper.addEventListener('touchstart', this.handleTouchStart);
        this.$refs.listWrapper.addEventListener('touchmove', this.handleTouchMove);
        this.$refs.listWrapper.addEventListener('touchend', this.handleTouchEnd);
        this.$refs.listWrapper.addEventListener('scroll', this.handleScroll)
      },
      removeScrollEvent() {
        this.$refs.listWrapper.removeEventListener('touchstart', this.handleTouchStart);
        this.$refs.listWrapper.removeEventListener('touchmove', this.handleTouchMove);
        this.$refs.listWrapper.removeEventListener('touchend', this.handleTouchEnd);
        this.$refs.listWrapper.removeEventListener('scroll', this.handleScroll)
      },
    },
    watch: {
      pullTopStatus(val) {
        this.$emit('pullTopStatusChange', val);

        switch (val) {
          case 'pull':
            this.pullTopText = this.pullTopPullText;
            break;
          case 'drop':
            this.pullTopText = this.pullTopDropText;
            break;
          case 'loading':
            this.pullTopText = this.pullTopLoadingText;
            break;
          case 'end':
            this.pullTopText = this.pullTopEndText;
        }
      },
      pullBottomStatus(val) {
        this.$emit('pullBottomStatusChange', val);

        switch (val) {
          case 'loading':
            this.pullBottomText = this.pullBottomLoadingText;
            break;
          case 'end':
            this.pullBottomText = this.pullBottomEndText;
            break;
          case 'last':
            this.pullBottomText = this.pullBottomLastText;
            break;
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../assets/style/components/scroll.less";
</style>
