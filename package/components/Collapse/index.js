import Collapse from './src/Collapse.vue'
import CollapseItem from './src/Collapse-Item'

Collapse.install = (Vue) => {
  Vue.component(Collapse.name, Collapse);
  Vue.component(CollapseItem.name, CollapseItem);
};

Collapse.Item = CollapseItem;

export default Collapse;
