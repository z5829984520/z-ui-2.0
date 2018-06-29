<template>
  <list-router-page>
    <z-scroll height="100vh"
              ref="scroll"
              @handlePullTop="handlePullTop"
              @handlePullBottom="handlePullBottom"
              :isPullTop="true"
              :isPullBottom="true">
      <div v-for="(item, index) in list" :key="index + ''" class="list-wrapper-item">{{ item }}</div>
    </z-scroll>
  </list-router-page>
</template>

<script>
  import { ListRouterPage } from '../../../components'

  export default {
    components: {
      ListRouterPage
    },
    data () {
      return {
        list: [],
        count: 0
      }
    },
    mounted () {
      this.setList();
    },
    methods: {
      setList () {
        for (let i = 0; i < 50; i++) {
          this.list.push(i)
        }
      },
      handlePullTop() {
        setTimeout(() => {
          this.list = [];
          this.count = 0;
          this.setList();
          this.$refs.scroll.onPullTopEnd()
        }, 2000)
      },
      handlePullBottom() {
        setTimeout(() => {
          this.addList();
          if (this.count <= 5) {
            this.count = this.count + 1;
            this.$refs.scroll.onPullBottomEnd()
          } else {
            this.$refs.scroll.onPullBottomLastEnd()
          }
        }, 2000)
      },
      addList() {
        for (let i = 0; i < 10; i++) {
          this.list = [...this.list, (this.list[this.list.length - 1] + 1)]
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .list-wrapper-item{
    width: 100%;
    text-align: center;
    height: 36px;
    line-height: 36px;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background-color: #e5e5e5;
    }
  }
</style>
