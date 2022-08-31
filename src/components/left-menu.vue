<template>
   <div class="left-menu-container">
      <div>
         <!-- search-icon -->
         <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            class="search-icon"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path
               d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
               fill="none"
               stroke="#000000"
               stroke-width="4"
               stroke-linejoin="round"
            />
            <path
               d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M33.2218 33.2218L41.7071 41.7071"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </svg>
         <input
            class="search-input"
            v-model="searchTerm"
            type="text"
            placeholder="搜索"
         />
      </div>
      <div class="list">
         <div v-for="item in filteredList">
            <details open>
               <summary class="list-title">{{ item.title }}</summary>
               <ul>
                  <li
                     v-for="child in item.children"
                     :class="`list-item ${
                        currentUrl == child.path ? 'active' : ''
                     }`"
                  >
                     <router-link :to="child.path || '/404'">
                        {{ child.title }}
                     </router-link>
                  </li>
               </ul>
            </details>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

interface MenuParamsType {
   title: string;
   path?: string;
   children: MenuParamsType[];
}

const getMenu = async (): Promise<MenuParamsType[]> => {
   const res = await axios.get('/menu.json');
   return res.data.menuList;
};

export default defineComponent({
   async setup() {
      const route = useRoute();
      const meunList: MenuParamsType[] = await getMenu();
      const searchTerm = ref<string>('');
      let currentUrl = ref<string>(route.path);

      // 筛选出匹配的子项，再去除空的父项
      const filteredList = computed(() => {
         return meunList
            .map((item: MenuParamsType) => {
               return {
                  ...item,
                  children: item.children.filter((child: MenuParamsType) => {
                     return child.title
                        .toLocaleLowerCase()
                        .includes(searchTerm.value.toLocaleLowerCase());
                  }),
               };
            })
            .filter((item: MenuParamsType) => item.children.length > 0);
      });

      watch(route, () => {
         currentUrl.value = route.path;
      });

      return { filteredList, searchTerm, currentUrl };
   },
});
</script>

<style lang="scss">
.left-menu-container {
   width: 350px;
   padding: 20px;
   position: relative;

   ul {
      li {
         list-style: none;
         transition: padding-left 0.2s ease;
      }

      .active {
         padding-left: 5px;
         border-left: 3px solid #3eaf7c;
      }
   }

   .search-icon {
      position: absolute;
      top: 30px;
      left: 32px;

      path {
         stroke: var(--text-color);
      }
   }

   .search-input {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: none;
      border-radius: 5px;
      padding: 0 10px 0 45px;
      outline: none;
      font-size: 16px;
      color: var(--text-color);
      background-color: var(--search-input-background-color);
   }

   .list {
      margin: 20px 0;
      letter-spacing: 0.5px;
      color: var(--text-color);

      a {
         text-decoration: none;
         color: var(--text-color);
         &:hover {
            color: var(--text-color-hover);
         }
      }

      .list-title {
         font-size: 18px;
         font-weight: bold;
         margin-bottom: 10px;
         outline: none;
         cursor: pointer;
      }

      .list-item {
         margin: 10px;
      }
   }
}
</style>
