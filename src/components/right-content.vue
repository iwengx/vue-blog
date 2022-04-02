<template>
   <div id="master" class="md-body" v-html="contentHTML"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { memoize } from 'lodash';
import showdown from 'showdown';
import axios from 'axios';

const converter = new showdown.Converter({
   emoji: true,
});

const fetchPost = memoize(async (url: string) => {
   const response = await axios.get<string>(url);
   const markdown = response.data;

   // 编译 markdown 并给 a 标题添加 target="_blank" 属性
   let html: string = converter
      .makeHtml(markdown)
      .replaceAll('<a href=', '<a target="_blank" href=');

   // 单独给 pre 标签内的代码关键字添加带有 class 的 span 标签
   let preIndex = html.indexOf('<pre>');
   if (preIndex) {
      let splitArr = html.split('<pre>');
      for (let i = 1; i < splitArr.length; i++) {
         splitArr[i] =
            splitArr[i]
               .split('</pre>')[0]
               .replaceAll('const', '<span class="const">const</span>')
               .replaceAll('function', '<span class="function">function</span>')
               .replaceAll('router', '<span class="router">router</span>')
               .replaceAll('axios', '<span class="axios">axios</span>')
               .replaceAll('return', '<span class="return">return</span>')
               .replaceAll('string', '<span class="string">string</span>') +
            '</pre>' +
            splitArr[i].split('</pre>')[1];
      }
      html = splitArr.join('<pre>');
   }

   return html;
});

export default defineComponent({
   setup() {
      const route = useRoute();
      const contentHTML = ref<string>();

      watchEffect(async () => {
         const path = route.path === '/' ? '/demo/home.md' : route.path;
         contentHTML.value = await fetchPost(path);
      });

      return {
         contentHTML,
      };
   },
});
</script>

<style lang="scss">
#master {
   color: var(--text-color);
   line-height: 30px;
   max-width: 1440px;
   margin: 0 auto;

   img {
      margin-right: 10px;
      vertical-align: middle;
   }

   img[alt='avatar'] {
      border-radius: 50%;
      width: 150px;
      height: 150px;
   }

   a {
      color: var(--text-color);
      &:hover {
         color: var(--text-color-hover);
      }
   }

   ul {
      margin-left: 20px;
   }

   blockquote {
      font-size: 1rem;
      border-left: 0.2rem solid var(--blockquote-border-color);
      margin: 1rem 0;
      padding: 0.25rem 0 0.25rem 1rem;
   }

   pre {
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: var(--pre-background-color);
      border-radius: 6px;

      code {
         color: #e0e0e0;
         font-size: 1.2em;
         font-family: Consolas;
      }

      .function,
      .const {
         color: #2889d9;
      }
      .return {
         color: #c586c0;
      }
      .string {
         color: #4ec9b0;
      }
      .router {
         color: #4fc1ff;
      }
   }
}
</style>
