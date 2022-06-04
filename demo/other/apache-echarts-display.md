# Apache ECharts 第二次不显示

## 介绍

场景：第一次进入页面时 EChart 图正常初始化生成完毕（正常显示），但是当我路由跳转到其他页面再返回时却空白了，按 F12 打开元素栏目却发现 EChart 图的元素依在，属实中不到原因。

但经过一番操作过后发现可以通过重新渲染该元素来解决这个问题。在组件的 **onBeforeUnmount** 生命周期中摧毁 EChart 元素

```javascript
// HTML
<div id="main" v-if="isMainChartInit"></div>


// setup
let chartDom = document.getElementById('main')!;
let myChart = echarts.init(chartDom);

let isMainChartInit = ref(true)

onBeforeUnmount(() => {
   // myChart.clear()
   // chartDom.remove();
   // for (let i = 1; i < chartDom.children.length; i++) {
   //    chartDom.children[i].remove();
   //    chartDom.removeChild(chartDom.children[i]);
   // }
   isMainChartInit.value = false;
});
```

上边有许多清除元素的代码，但唯独需要使用 **v-if** 来才行...
