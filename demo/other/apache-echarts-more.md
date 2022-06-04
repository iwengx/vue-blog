# Apache Echarts 多个时的响应式

## 介绍

在 Apache ECharts 的官网 demo 文档中都是 **一个页面一个** EChart 图，同时官网也给出了[响应式方案](https://echarts.apache.org/handbook/zh/concepts/chart-size/#%E5%93%8D%E5%BA%94%E5%AE%B9%E5%99%A8%E5%A4%A7%E5%B0%8F%E7%9A%84%E5%8F%98%E5%8C%96)；但是我们日常开发中经常会遇到 **一个页面多个** Echart 图的应用场景。简单的来写可以这样：

```javascript
window.onresize = () => {
   myChart1.resize();
   myChart2.resize();
   myChart3.resize();
};
```

但是这样依然存在弊端，假设一个场景：我一个页面中的不同 EChart 图都分布在不同的组件里呢？如果在每个组件中都写：

window.onresize = () => { myChart.resize() };

这会导致只有最后一个 Echart 图的 **resize()** 生效，因为 window.onresize 会替换掉之前的函数体。

> 我的解决方案

单独创建一个公共的工具库（onresize.ts），记得在 main.ts 中引入 **import './utils/onresize';**，然后只需要在有 EChart 图的组件中引入并使用 **resizeAdd** 函数即可。其原理就是将它们都汇聚在一个数组中，再遍历数组执行**resize()**函数。

```javascript
import echarts from 'echarts';

export function resizeAdd(key: string, value: echarts.ECharts) {
   echartsDom.push({
      key,
      value,
   });
}

export function resizeDel(key: string) {
   let index = echartsDom.findIndex((item) => item.key === key);
   if (index > -1) {
      echartsDom.splice(index, 1);
   }
}

interface EchartsDomProps {
   key: string;
   value: echarts.ECharts;
}

let echartsDom: EchartsDomProps[] = [];

window.onresize = () => {
   if (echartsDom.length > 0) {
      echartsDom.forEach((item) => {
         item.value.resize();
      });
   }
};
```

<br>

> 注意

如果你发现 EChart 图在窗口拉伸时只有宽度变大变宽的情况，只需要在他的父元素中添加 **overflow: hidden** 属性即可。
