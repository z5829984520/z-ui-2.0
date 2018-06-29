## SpinnerItem

> 使用例子

```html
    <div class="spinner-item-wrapper">
      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#ccc"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#666" type="react"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#e5e5e5" type="round"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#333" type="bounce"></z-spinner-item>
      </div>

      <div class="spinner-item-wrapper-item">
        <z-spinner-item color="#ccc" :size="64"></z-spinner-item>
      </div>
    </div>
```

> API

| 名称 | 描述 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| type | loading类型 | String | lineRound |
| color | loading颜色 | String | #fff |
| size | loading尺寸 | Number | 32 |
