<template>
  <div class="container">
    <div class="list-wrapper">
      <div class="list-wrapper-item" v-for="(item, index) in list" :key="item.path" @click="linkTo(item.path)">
        <div class="list-wrapper-item-label">
          <span>{{ item.label }}</span>
          <span>{{ item.dec }}</span>
        </div>
      </div>
    </div>

    <list-router-view></list-router-view>
  </div>
</template>

<script>
  import { ListRouterView } from '../../components'
  import { list } from '../../data/list'

  export default {
    components: {
      ListRouterView
    },
    computed: {
      list() {
        return list
      }
    },
    methods: {
      linkTo(path) {
        this.$router.push(`/${path}`)
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  .container{
    width: 100%;
    .list-wrapper{
      width: 100%;
      &-item{
        width: 100%;
        position: relative;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #666;
        text-align: center;
        cursor: pointer;
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
    }
  }
</style>
