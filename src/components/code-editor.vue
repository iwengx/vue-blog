<template>
   <prism-editor
      class="my-editor"
      v-model="editorCode"
      :highlight="highlighter"
      line-numbers
   ></prism-editor>
</template>

<script lang="ts" setup>
import { toRef } from 'vue';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const props = defineProps({
   code: String,
});

let editorCode = toRef(props, 'code');

const highlighter = (code: string) => {
   return prism.highlight(code, prism.languages.js, 'js');
};
</script>

<style lang="scss" scoped>
.my-editor {
   background: #2d2d2d;
   color: #ccc;
   font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
   font-size: 16px;
   line-height: 1.5;
   padding: 12px 5px;
   border-radius: 10px;
}

::v-deep(.prism-editor__textarea:focus) {
   outline: none;
}
</style>
