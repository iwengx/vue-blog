<template>
   <div class="wengx-home-layout">
      <Header :changeAsideWidth="unfoldIconClickEvent"></Header>
      <main class="wengx-main">
         <aside ref="asideElement" class="left-menu">
            <suspense>
               <template #default>
                  <LeftMenu></LeftMenu>
               </template>
               <template #fallback>
                  <div class="skeleton-box">
                     <div class="skeleton"></div>
                     <div class="skeleton"></div>
                     <div class="skeleton"></div>
                  </div>
               </template>
            </suspense>
         </aside>
         <article class="right-content">
            <router-view></router-view>
         </article>
      </main>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '../components/header.vue';
import LeftMenu from '../components/left-menu.vue';

let asideElement = ref<HTMLElement>();

/**
 * aside 隐藏和显示
 * @returns false关闭，true打开
 */
const unfoldIconClickEvent: Function = (): boolean => {
   if (asideElement.value!.style.width) {
      asideElement.value!.style.setProperty('width', '');
      return false;
   } else {
      asideElement.value!.style.setProperty('width', '350px', 'important');
      return true;
   }
};
</script>

<style lang="scss">
.wengx-home-layout {
   width: 100%;
   height: 100vh;
   overflow: hidden;
   display: grid;
   grid-template-rows: 65px 1fr;
   background-color: var(--content-background-color);

   .wengx-main {
      flex: 1;
      display: flex;
      overflow: hidden;

      .left-menu {
         width: 100%;
         max-width: 350px;
         border-right: var(--border-color);
         overflow: hidden;
         transition: border 0.2s ease, width 0.5s ease;

         .skeleton-box {
            margin-top: 20px;
         }

         .skeleton {
            height: 25px;
            margin: 15px;
            border-radius: 4px;
            background-color: #dfdfdf;
            background: linear-gradient(
                  100deg,
                  rgba(255, 255, 255, 0) 40%,
                  rgba(255, 255, 255, 0.5) 50%,
                  rgba(255, 255, 255, 0) 60%
               )
               #dfdfdf;
            background-size: 200% 100%;
            background-position-x: 180%;
            animation: 1.2s loading ease-in-out infinite;
         }
      }

      .right-content {
         flex: 1;
         padding: 30px 80px;
         overflow-y: auto;
      }
   }
}

@keyframes loading {
   to {
      background-position-x: -20%;
   }
}
</style>
