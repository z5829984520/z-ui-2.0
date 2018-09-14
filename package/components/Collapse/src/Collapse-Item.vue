<template>
  <section class="z-collapse-item-wrapper" :class="[{'z-collapse-item-active': active}]">
    <ripple @click="handleHeaderClick">
      <slot name="header">
        <div class="z-collapse-item-wrapper-header">
          <div class="z-collapse-item-wrapper-header-info">{{ title }}</div>
          <icon class="z-collapse-item-wrapper-header-icon" name="arrowRight" />
        </div>
      </slot>
    </ripple>
    <collapse-transition>
      <div class="z-collapse-item-wrapper-body" v-show="active">
        <slot></slot>
      </div>
    </collapse-transition>
  </section>
</template>

<script>
  import Icon from '../../Icon'
  import CollapseTransition from '../../utils/CollapseTransition'
  import Ripple from '../../Ripple'

  export default {
    name: 'zCollapseItem',
    components: {
      Icon,
      Ripple,
      CollapseTransition
    },
    props: {
      title: {
        title: [String, Number],
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false
      }
    },
    beforeCreate() {
      this.$parent.item.push(this)
    },
    destroyed() {
      this.$parent.item.splice(this.$parent.item.indexOf(this), 1)
    },
    methods: {
      handleHeaderClick(e) {
        const accordion = this.$parent.accordion;

        if (accordion) {
          if (this.active) {
            this.allItemClose()
          } else {
            this.allItemClose();
            this.active = true
          }
        } else {
          this.active = !this.active
        }

        this.$emit('click', e)
      },
      allItemClose() {
        const item = this.$parent.item;
        const len = item.length;

        for (let i = 0; i < len; i++) {
          item[i].active = false
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../../assets/style/components/collapse.less";
</style>
