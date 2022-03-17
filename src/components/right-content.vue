<template>
   <div id="master" class="md-body"></div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import showdown from 'showdown';
import axios from 'axios';

export default defineComponent({
   setup() {
      const route = useRoute();
      const converter = new showdown.Converter();

      const getMarkdownData = async () => {
         const path = (route.path as string) != '/' ? (route.path as string) : '/demo/home.md';
         const res = await axios.get(path);

         // 编译 markdown 并给关键字加上带有 class 的 span 标签
         const html = converter
            .makeHtml(res.data)
            .replaceAll('const', '<span class="const">const</span>')
            .replaceAll('return', '<span class="return">return</span>')
            .replaceAll('string', '<span class="string">string</span>');

         document.getElementById('master')!.innerHTML = html;
      };
      getMarkdownData();

      watch(route, getMarkdownData);
      // 78,201,176
      return {};
   },
});
</script>

<style lang="scss">
#master {
   color: var(--text-color);
   line-height: 30px;

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
         color: var(--text-color);
         font-size: 1.2em;
         font-family: Consolas;
      }

      .const {
         color: #2889d9;
      }
      .return {
         color: #c586c0;
      }
      .string {
         color: #4ec9b0;
      }
   }
}
</style>
