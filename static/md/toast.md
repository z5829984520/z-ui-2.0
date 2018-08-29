## Toast

> 使用例子

```html
<div class="button-wrapper-item">
   <z-button @click="showToast('我是Toast')">默认调用</z-button>
</div>

<div class="button-wrapper-item">
   <z-button @click="showLoadingToast">显示loading</z-button>
</div>

<div class="button-wrapper-item">
   <z-button @click="showPositionToast">改变位置</z-button>
</div>
```

```js
 showToast(msg) {
   Toast(msg)
 },
 showLoadingToast() {
   Toast({
      message: '我是Toast',
      type: 'lineRound'
   })
 },
 showPositionToast() {
   Toast({
     top: '5%',
     message: '我在顶部'
   })
 }
```

> API

| 名称 | 描述 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| message | Toast文案 | String | |
| duration | 持续时间 | Number | 3000 |
| top | 距顶部距离 | String | 46% |
| type | loading类型(参照SpinnerItem组件) | String | |
| color | loading颜色 | String | #fff |
| size | loading尺寸 | Number | 16 |
