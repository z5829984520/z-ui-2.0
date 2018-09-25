## Notice

> 使用例子

```html
    <div class="notice-wrapper">
      <div class="notice-wrapper-title">普通使用</div>
      <div class="notice-wrapper-main">
        <z-notice>
          我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!我是notice组件!
        </z-notice>
      </div>
    </div>
    <div class="notice-wrapper">
      <div class="notice-wrapper-title">长度不超过</div>
      <div class="notice-wrapper-main">
        <z-notice>
          我是notice组件!
        </z-notice>
      </div>
    </div>
    <div class="notice-wrapper">
      <div class="notice-wrapper-title">自定义左右</div>
      <div class="notice-wrapper-main">
        <z-notice>
          <div slot="left">
            左
          </div>
          我是notice组件!
          <div slot="right">
            右
          </div>
        </z-notice>
      </div>
    </div>
```

> API

| 名称 | 描述 | 类型 | 值 |
| :-: | :-: | :-: | :-: |
| color | 字体颜色 | String | rgb(255, 102, 0) |
| backgroundColor | 背景色 | String | rgb(255, 247, 204) |
| isScroll | 是否开启滚动 | Boolean | true |
| speed | 滚动速度 | Number | 50 |
| isShowLeft | 是否显示左侧 | Boolean | true |
| isShowRight | 是否显示右侧 | Boolean | true |
| left | 左侧自定义slot | | |
| right | 左侧自定义slot | | |
| click | 点击notice事件 | Function | event |
| change | 隐藏显示箭筒事件 | Function | Boolean |
