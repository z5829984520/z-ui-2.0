<template>
  <div class="doc-wrapper">
    <section class="doc-wrapper-slider">
      <div class="doc-wrapper-slider-inner">
        <h3>组件列表</h3>
        <div class="doc-wrapper-slider-inner-item" v-for="(item, index) in list" :key="item.path" @click="linkTo(item.path)">
          <div class="doc-wrapper-slider-inner-item-label" :class="{ 'doc-wrapper-slider-inner-item-active' : item.path === src }">
            <span>{{ item.label }}</span><span>·</span><span>{{ item.dec }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="doc-wrapper-container">
      <div class="doc-wrapper-container-inner">
        <section class="doc-wrapper-container-inner-doc">
          <mavon-editor v-model="content"
                        style="height: 100%"
                        ref="md"
                        :ishljs="true"
                        :subfield="false"
                        defaultOpen="preview"
                        :toolbarsFlag="false"
                        :editable="false">
          </mavon-editor>
        </section>

        <section class="doc-wrapper-container-inner-mobile">
          <div class="doc-wrapper-container-inner-mobile-main">
            <div class="doc-wrapper-container-inner-mobile-main-inner">
              <iframe frameborder="0" :width="width" :height="height" :src="`${doMain}${src}`"></iframe>
            </div>
          </div>
        </section>
      </div>
    </section>

  </div>
</template>

<script>
  import { list } from '../../data/list'
  import {mdService} from "../../service";

  export default {
    computed: {
      list () {
        return list
      },
      params () {
        return this.$route.params
      }
    },
    data() {
      return {
        doMain: '',
        src: '',
        content: '',
        width: 375,
        height: 667,
      }
    },
    mounted() {
      this.doMain = `${location.origin}/#/`;
      this.setType()
    },
    methods: {
      async setMd(path) {
        const { data } = await mdService.getMd(path);
        this.content = data;
      },
      setType() {
        const { type } = this.params;
        this.setMd(type);
        this.src = type
      },
      linkTo(path) {
        this.$router.push(`/doc/${path}`);
        this.setMd(path);
        this.setType()
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .doc-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    &-slider{
      width: 200px;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      &-inner{
        width: 100%;
        height: 100%;
        position: relative;
        &:after{
          content: '';
          width: 1px;
          height: 100%;
          position: absolute;
          right: 0;
          top: 0;
          background-color: #333;
          transform: scaleX(0.5);
        }
        h3{
          text-align: center;
          border-bottom: 1px solid #ccc;
          padding: 6px 0;
          color: #333;
        }
        &-item{
          width: 100%;
          padding: 6px;
          text-align: center;
          font-size: 16px;
          color: #666;
          cursor: pointer;
          &-active{
            color: #333;
            font-weight: 700;
          }
        }
      }
    }
    &-container{
      position: absolute;
      left: 200px;
      top: 0;
      right: 0;
      bottom: 0;
      &-inner{
        width: 100%;
        height: 100%;
        position: relative;
        text-align: right;
        padding-right: 400px;
        &-doc{
          width: 100%;
          height: 100%;
        }
        &-mobile{
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 100%;
          &-main{
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            &:after{
              content: '';
              width: 1px;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              background-color: #333;
              transform: scaleX(0.5);
            }
            &-inner{
              width: 377px;
              height: 669px;
              border: 1px solid #ccc;
              position: absolute;
              border-radius: 2px;
              left: 50%;
              top: 50%;
              margin-left: -188.5px;
              margin-top: -334.5px;
            }
          }
        }
      }
    }
  }
</style>
