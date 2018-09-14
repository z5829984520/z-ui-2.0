## Collapse

> 使用例子

```html
    <div class="collapse-title">普通用法</div>
    <div class="collapse-info">
      <z-collapse>
        <z-collapse-item v-for="(item, index) in 3" :key="index + ''" :title="`标题${item}`">
          {{ `内容${item}` }}
        </z-collapse-item>
      </z-collapse>
    </div>

    <div class="collapse-title">默认展开几个</div>
    <div class="collapse-info">
      <z-collapse :defaultIndex="[0, 2]">
        <z-collapse-item v-for="(item, index) in 3" :key="index + ''" :title="`标题${item}`">
          {{ `内容${item}` }}
        </z-collapse-item>
      </z-collapse>
    </div>

    <div class="collapse-title">手风情模式</div>
    <div class="collapse-info">
      <z-collapse accordion>
        <z-collapse-item v-for="(item, index) in 3" :key="index + ''" :title="`标题${item}`">
          {{ `内容${item}` }}
        </z-collapse-item>
      </z-collapse>
    </div>
```

> API(collapse)

| 名称 | 描述 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| defaultIndex | 默认展开哪几个 | Array |  |
| accordion | 是否开启手风情模式 | Boolean | false |

> API(collapse-item)

| 名称 | 描述 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| title | 标题文案 | [String, Number] | | |
| slot = "header" | 自定义头部 | | |
| click | 点击事件 | | | |
