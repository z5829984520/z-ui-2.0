## Alert

> 使用例子

```html
   <div class="alert-wrapper-item">
        <z-button @click="showNormalAlert">弹出普通alert</z-button>
      </div>

      <div class="alert-wrapper-item">
        <z-button @click="showNormalIconAlert">弹出带icon alert</z-button>
      </div>

      <div class="alert-wrapper-item">
        <z-button @click="showConfirm">弹出带取消的</z-button>
      </div>

      <div class="alert-wrapper-item">
        <z-button @click="showConfirmIcon">弹出带取消的的icon</z-button>
   </div>
```

```js
      showNormalAlert() {
        Alert({
          message: '我是一个普通的alert',
          callback: () => {
          }
        })
      },
      showNormalIconAlert() {
        Alert({
          iconName: 'success',
          message: '我是一个普通的alert',
          callback: () => {
          }
        })
      },
      showConfirm() {
        Alert({
          type: 'confirm',
          message: '确认删除吗?',
          callback: (boolean) => {
            Toast(boolean ? '确认' : '取消')
          }
        })
      },
      showConfirmIcon() {
        Alert({
          type: 'confirm',
          iconName: 'warning',
          message: `确认<font color="red">删除</font/>吗?`,
          callback: (boolean) => {
            Toast(boolean ? '确认' : '取消')
          }
        })
      }
```

> API

| 名称 | 描述 | 类型 | 值 |
| :-: | :-: | :-: | :-: |
| type | 弹窗类型 | String | alert |
| message | 提示文案 | String  | |
| title | 标题文案 | String | |
| top | 距顶部距离 | String | 36% |
| iconName | icon图标(这个赋值title隐藏) | String | 对照icon组件name值 |
| iconStyle | iconStyle | Object | { fontSize: '24px' } |
| okBtnTxt | 确定按钮文案 | String | 确认 |
| cancelBtnTxt | 取消按钮文案 | String | 取消 |
| zIndex | 弹窗zIndex | Number | 2500 |
| callback | 点击弹窗回调函数 | Function | false/true |
