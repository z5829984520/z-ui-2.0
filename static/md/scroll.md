## Scroll

> 基本使用

```html
<z-scroll height="100px">
  // Todo
</z-scroll>
```

> 下拉刷新 (必须要是移动端)
```html
<z-scroll height="100vh"
            ref="scroll"
            @handlePullTop="handlePullTop"
            :isPullTop="true">
    <div v-for="(item, index) in list" :key="index + ''" class="list-wrapper-item">{{ item }}</div>
</z-scroll>

<script>
  export default {
    data() {
      return {
        list: []
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
           this.setList();
           this.$refs.scroll.onPullTopEnd()
         }, 2000)
       },
     }
   }
</script>
```

> 无限滚动

```html
<z-scroll height="100vh"
          ref="scroll"
          @handlePullBottom="handlePullBottom"
          :isPullBottom="true">
  <div v-for="(item, index) in list" :key="index + ''" class="list-wrapper-item">{{ item }}</div>
</z-scroll>

<script>
  export default {
    data() {
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
```

> API

| 名称 | 描述 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| height | 容器高度 | String | |
| isScrollY | 是否开启y轴滚动 | Boolean | true |
| showScrollbar | 是否显示滚动条 | Boolean | true |
| isPullTop | 是否开启下拉刷新 | Boolean | false |
| topDistance | 下拉刷新的拉动距离的触发值 | Number | 50 |
| pullActionPow | 下拉刷新容器向下滚动的速度 | Number | 2 |
| pullTopPullText | 开始下拉刷新文案 | String | 下拉刷新 |
| pullTopDropText | 滑动过程文案 | String | 松开加载数据 |
| pullTopLoadingText | 数据加载中文案 | String | 正在加载中... |
| pullTopEndText | 数据加载完成文案 | String | 数据更新成功 |
| isPullBottom | 是否开启无限滚动 | Boolean | false |
| bottomDistance | 无限滚动触发值 | Number | 20 |
| pullBottomLoadingText | 无限滚动加载中文案 | String | 正在加载中... |
| pullBottomEndText | 无限滚动加载成功文案 | String | |
| pullBottomLastText | 数据全部加载完毕文案 | String | 没有更多了 |
| scroll | 滚动监听 | Function | |
| onPullTopEnd | 关闭下拉刷新 | Function | |
| onPullBottomEnd | 关闭无限滚动 | Function | |
| onPullBottomLastEnd | 无限滚动数据全部加载完关闭 | Function | |
| pullTopActionChange | 下拉刷新触发过程中事件 | Function | |
| pullTopStatusChange | 下拉刷新状态变化 | Function | |
| pullBottomStatusChange | 无限滚动状态变化 | Function | |

> Slot

| 名称 | 描述 |
| :-: | :-: |
| top | 下拉刷新顶部自定义dom |
| bottom | 无限滚动底部自定义dom |


