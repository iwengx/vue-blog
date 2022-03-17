<template>
   <div id="master" class="md-body" ref="markdownContainer"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { memoize } from "lodash";
import showdown from "showdown";
import axios from "axios";

const fetchPost = memoize((url: string) => {
   return axios.get<string>(url).then((res) => res.data);
});

export default defineComponent({
   setup() {
      const route = useRoute();
      const converter = new showdown.Converter();

      const markdownContainer = ref<HTMLDivElement>();

      watchEffect(async () => {
         let path = route.path;

         if (path === "/") {
            path = "/demo/home.md";
         }

         const markdown = await fetchPost(path);

         // 编译 markdown 并给关键字加上带有 class 的 span 标签
         const html = converter
            .makeHtml(markdown)
            .replaceAll("const", '<span class="const">const</span>')
            .replaceAll("return", '<span class="return">return</span>')
            .replaceAll("string", '<span class="string">string</span>');

         markdownContainer.value!.innerHTML = html;
      });

      return {
         markdownContainer,
      };
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

   img[alt="avatar"] {
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
