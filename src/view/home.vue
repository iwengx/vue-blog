<template>
   <div class="wengx-home-layout">
      <wengx-header :changeAsideWidth="unfoldIconClickEvent"></wengx-header>
      <main class="wengx-main">
         <aside ref="asideElement" class="left-menu">
            <wengx-left-menu></wengx-left-menu>
         </aside>
         <article class="right-content">
            <wengx-right-content></wengx-right-content>
         </article>
      </main>
   </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '../components/header.vue';
import LeftMenu from '../components/left-menu.vue';
import RightContent from '../components/right-content.vue';

export default defineComponent({
   components: {
      'wengx-header': Header,
      'wengx-left-menu': LeftMenu,
      'wengx-right-content': RightContent,
   },
   setup() {
      let asideElement = ref<HTMLElement | null>(null);

      /**
       * aside 隐藏和显示
       * @returns false关闭，true打开
       */
      const unfoldIconClickEvent = (): boolean => {
         if (asideElement.value) {
            if (asideElement.value.style.width) {
               asideElement.value.style.setProperty('width', '');
               return false;
            } else {
               asideElement.value.style.setProperty('width', '350px', 'important');
               return true;
            }
         }
         return false;
      };

      return { asideElement, unfoldIconClickEvent };
   },
});
</script>

<style lang="scss">
.wengx-home-layout {
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-rows: 65px 1fr;
   background-color: var(--content-background-color);

   .wengx-main {
      flex: 1;
      display: flex;
      .left-menu {
         width: 100%;
         max-width: 350px;
         border-right: var(--border-color);
         overflow: hidden;
         transition: border 0.2s ease, width 0.5s ease;
      }

      .right-content {
         flex: 1;
         max-width: 1440px;
         margin: 0 auto;
         padding: 30px;
      }
   }
}
</style>
