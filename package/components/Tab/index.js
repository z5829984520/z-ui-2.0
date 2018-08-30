import Tab from './src/Tab.vue'
import TabItem from './src/TabItem.vue'

Tab.install = (Vue) => {
  Vue.component(Tab.name, Tab);
  Vue.component(TabItem.name, TabItem)
};

Tab.Item = TabItem;

export default Tab


