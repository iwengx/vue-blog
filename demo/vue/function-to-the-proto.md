## Vue 在原型链上挂在自定义函数

`最后编辑：2022-4-7`

<br>

> 之前 (Vue 2.x)

```javascript
import Vue from 'vue';

// 声明
Vue.prototype.callMe = (name: string) => {
   console.log(`hello ${name}`);
};

// 使用
this.callMe('wengx');
```

<br>

> 之后 (Vue 3.x)

```javascript
const app = createApp(App);

// 声明
app.config.globalProperties.callMe = (name: string) => {
   console.log(`hello ${name}`);
};

declare module '@vue/runtime-core' {
   interface ComponentCustomProperties {
      $callMe: Function;
   }
}

// 使用

// 在生命周期中可以使用 this 关键字调用
mounted() {
   this.$callMe('wengx');
},
updated() {
   this.$callMe('wengx')
},

// 在 setup 中需要使用 getCurrentInstance 方法
import { getCurrentInstance } from 'vue';
setup() {
   // 解构
   const { proxy } = getCurrentInstance() as ComponentInternalInstance;
   // 或者
   // const proxy = getCurrentInstance()?.proxy;
   proxy?.$callMe('wengx');
}

```

<br>

-  [getCurrentInstance()](https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance) 这个方法返回的就是当前组件的实例
-  [declare module '@vue/runtime-core'](https://v3.cn.vuejs.org/guide/typescript-support.html#%E4%B8%BA-globalproperties-%E6%89%A9%E5%85%85%E7%B1%BB%E5%9E%8B) 为了告诉 TypeScript 这些新 property，我们可以使用[模块扩充 (module augmentation)](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)

<br>

> #### 其他：

-  [Vue 应用配置 globalProperties](https://v3.cn.vuejs.org/api/application-config.html#globalproperties)
