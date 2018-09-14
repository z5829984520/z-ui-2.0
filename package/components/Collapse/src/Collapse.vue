<template>
  <section class="z-collapse-wrapper">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'zCollapse',
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      defaultIndex: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        item: []
      }
    },
    methods: {
      getActiveItem() {
        if (this.defaultIndex.length !== 0) {
          if (this.accordion) {
            this.item[this.defaultIndex[0]].active = true
          } else {
            this.defaultIndex.forEach((index) => {
              this.item[index].active = true
            })
          }
        }
      }
    },
    watch: {
      item() {
        this.getActiveItem()
      },
      defaultIndex() {
        this.getActiveItem()
      }
    }
  }
</script>


<!--<style lang="less" type="text/less">-->
  <!--@import "../../../assets/style/components/collapse.less";-->
<!--</style>-->
