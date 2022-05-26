<template>
   <div class="master">
      <h1>v-for key 的坑</h1>
      <h2>介绍</h2>
      <p>这里记录一下自己在使用 <strong>v-for</strong> 中 <strong>key</strong> 踩过的坑。</p>

      <blockquote>
         <p>基本概况</p>
      </blockquote>

      <p>
         在 Vue2 中 <strong>key</strong> 是必填的，但是 Vue3 版本之后它的只变为可选填，因为现在 Vue
         会自动生成唯一的 <strong>key</strong>
      </p>
      <p>即便会生成默认值，但在复杂的 v-for 场景中还是需要我们手动设置 key</p>
      <p>例如下方例子</p>
      <h3>一、在下面这个例子中，key 的值为 index | default 的效果</h3>
      <p>
         你可以在
         <strong>index:0 </strong>以外的输入框中输入任意字符，然后进行添加、删除操作来查看其效果
      </p>
      <p>同时记得观察 <strong>index</strong> 与 <strong>baseKey</strong> 的变化情况</p>
      <div>
         <div>
            <button @click="emptyKey++">+ 添加一行内容</button>
         </div>
         <div v-for="(input, index) in emptyKey">
            <span>index: {{ index }} - </span>
            <input type="text" style="width: 100px" />
            -
            <button @click="emptyKey--">删 除</button>
         </div>
      </div>

      <h3>二、在下面例子中设置了 key 值后的效果</h3>
      <div>
         <div>
            <button @click="addInput">+ 添加一行内容</button>
         </div>
         <div v-for="(input, index) in inputs" :key="input.baseKey">
            <span>baseKey: {{ input.baseKey }} - </span>
            <input type="text" style="width: 100px" />
            -
            <button @click="inputs.splice(index, 1)">删 除</button>
         </div>
      </div>

      <br />
      <blockquote>
         <p>原理</p>
      </blockquote>
      <strong>key</strong>属性就像虚拟节点的“身份证号”，主要用做 Vue 的虚拟 DOM
      算法的提示（在比对新旧节点组辨识 VNodes）
      <ul>
         <li>在点击 添加 按钮后，Vue 会生成一个新虚拟 DOM</li>
         <li>在旧虚拟 DOM 列表中找到于新虚拟 DOM 相同标识的 key</li>
         <ul>
            <li>存在，则进行真实 DOM 复用</li>
            <li>不存在，则生成新的真实DOM</li>
         </ul>
      </ul>
      <p>具体理论和详细细节可以去看一下《Vue.js设计于实现 - 霍春阳》P221 DOM 复用与 Key 的作用.</p>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emptyKey = ref(2);

interface InputProps {
   baseKey: number;
}

const inputKey = ref(3);

const inputs = ref<InputProps[]>([{ baseKey: 1 }, { baseKey: 2 }]);

const addInput = () => {
   inputs.value.unshift({
      baseKey: inputKey.value++,
   });
};
</script>

<style scoped></style>
