## Button

> 使用例子

```html
  <div class="button-wrapper">
      <div class="button-wrapper-item">
        <z-button>default</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="primary">primary</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="success">success</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="warning">warning</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="danger">danger</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button size="mini">mini</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="primary" size="small">small</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="success" size="large">large</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="warning" plain>warning</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button type="danger" disabled>disabled</z-button>
      </div>

      <div class="button-wrapper-item">
        <z-button :showRadius="false">showRadius</z-button>
      </div>
  </div>
```

> API

| 名称 | 描述 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| type | 按钮类型 | String | info |
| size | 按钮尺寸 | String | normal |
| showRadius | 是否显示圆角 | Boolean | true |
| plain | 是否镂空 | Boolean | false |
| rippleColor | 点击涟漪背景图 | String | |
| disabled | 是否禁用 | Boolean | false |

> 事件

| 名称 | 描述 | 参数 |
| :-: | :-: | :-: |
| click | 按钮点击事件 | event |
