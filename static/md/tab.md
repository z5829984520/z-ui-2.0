## Tab

> 使用例子

```html
 <div class="tab-wrapper">
      <div class="tab-wrapper-main">
        <h3>普通内容切换</h3>
        <z-tab v-model="activeIndex1">
          <z-tab-item v-for="(item, index) in 4" :key="index" :title="`标题${item}`">
            <div class="tab-wrapper-main-content">
              {{ `内容${item}` }}
            </div>
          </z-tab-item>
        </z-tab>
      </div>

      <div class="tab-wrapper-main">
        <h3>超过屏幕宽度</h3>
        <z-tab v-model="activeIndex2">
          <z-tab-item v-for="(item, index) in 12" :key="index" :title="`标题${item}`">
            <div class="tab-wrapper-main-content">
              {{ `内容${item}` }}
            </div>
          </z-tab-item>
        </z-tab>
      </div>

      <div class="tab-wrapper-main">
        <h3>可左右touch切换(移动端测试)</h3>
        <z-tab v-model="activeIndex3" lock>
          <z-tab-item v-for="(item, index) in 20" :key="index" :title="`标题${item}`">
            <div class="tab-wrapper-main-content">
              {{ `内容${item}` }}
            </div>
          </z-tab-item>
        </z-tab>
      </div>
 </div>
```

```js
  export default {
    data() {
      return {
        activeIndex1: 2,
        activeIndex2: 3,
        activeIndex3: 1,
      }
    }
  }
```

> API

| 名称 | 描述 | 类型 | 值 |
| :-: | :-: | :-: | :-: |
| value | 当前索引 | Number | |
| tabsStyle | tab样式 | Object | |
| lineBackGroundColor | 下标线背景色 | String | #409EFF |
| activeTextStyle | 激活tab字体样式 | Object |  { color: '#409EFF' } |
| inactiveTintStyle | 未激活的tab字体样式 | Object | { color: '#333' } |
| lock | 是否开启touch切换 | Boolean | false |
| onChange | 切换事件 | Function | 当前索引值 |
