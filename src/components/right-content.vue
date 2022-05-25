<template>
   <div class="master">
      <template v-for="(item, index) in contentsHTML" :key="item">
         <template v-if="index % 2 === 0">
            <div v-html="item"></div>
         </template>
         <template v-else>
            <base-code-editor :code="item"></base-code-editor>
         </template>
      </template>
   </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { memoize } from 'lodash';
import CodeEditor from './code-editor.vue';
import showdown from 'showdown';
import axios from 'axios';

const converter = new showdown.Converter({
   emoji: true,
});

const fetchPost = memoize(async (url: string) => {
   const response = await axios.get<string>(url);
   const markdown = response.data;

   // 编译 markdown 并给 a 标题添加 target="_blank" 属性
   const html: string = converter
      .makeHtml(markdown)
      .replaceAll('<a href=', '<a target="_blank" href=');

   let splitFullArr: string[] = [];

   const preIndex = html.indexOf('<pre>');
   // 判断当前内容是否存在 pre 标签（是否存在代码）
   if (preIndex) {
      // 将内容以 <pre> 标签分割
      let splitPre = html.split('<pre>');

      // 第0项是除了 <pre> 标签以外的内容，直接添加到 splitFullArr 中
      splitFullArr.push(splitPre[0]);

      // 从第1项开始，以 </pre> 结束标签再次分割，得到代码块和内容块
      for (let i = 1; i < splitPre.length; i++) {
         splitFullArr.push(...splitPre[i].split('</pre>'));
      }
      // 此时得到的 splitFullArr 数组中，偶数是内容块，奇数是代码块

      // 去除代码块中的 <code></code> 标签
      for (let j = 1; j < splitFullArr.length; j += 2) {
         let code = splitFullArr[j];
         // 去除 <code> 标签
         code = code.substring(code.indexOf('>') + 1);
         // 去除 </code> 标签
         code = code.substring(0, code.length - 8);
         // 重新赋值回去
         splitFullArr[j] = code;
      }
   }
   // 不存在则直接返回
   else {
      splitFullArr.push(html);
   }
   return splitFullArr;
});

export default defineComponent({
   components: {
      'base-code-editor': CodeEditor,
   },
   setup() {
      const route = useRoute();
      const contentsHTML = ref<string[]>();

      watchEffect(async () => {
         const path = route.path === '/' ? '/demo/home' : route.path;
         if (path.substring(0, 5) != '/demo') return;
         contentsHTML.value = await fetchPost(path + '.md');
      });

      return {
         contentsHTML,
      };
   },
});
</script>
