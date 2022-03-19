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
         <input class="search-input" v-model="searchTerm" type="text" placeholder="搜索" />
      </div>
      <div class="list">
         <div v-for="data in filteredList" class="list-box">
            <a :href="data.path" class="list-title">{{ data.title }}</a>
            <div v-for="item in data.children" class="list-item">
               <div class="child-title">
                  <a :href="item.path">{{ item.title }}</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

type ListParamType = {
   title: string;
   path?: string;
   children: listChildrenType[];
};

type listChildrenType = {
   title: string;
   path: string;
};

const list: ListParamType[] = [
   {
      title: 'JavaScript',
      children: [
         {
            title: '函数匹配字符串',
            path: '/#/demo/js/function-matching-string.md',
         },
      ],
   },
   {
      title: 'css',
      children: [
         {
            title: '修改滚动条样式',
            path: '/#/demo/js/function-matching-string.md',
         },
         {
            title: '输入框（input）',
            path: '/#/demo/js/js2.md',
         },
      ],
   },
];

const searchTerm = ref('');

// 筛选出匹配的子项，再去除空的父项
const filteredList = computed(() => {
   return list
      .map((data) => {
         return {
            ...data,
            children: data.children.filter((child) => {
               return child.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.value.toLocaleLowerCase());
            }),
         };
      })
      .filter((data) => data.children.length > 0)
})

</script>

<style lang="scss">
.left-menu-container {
   width: 350px;
   padding: 20px;
   position: relative;

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
      }

      .list-item {
         margin: 10px;
      }
   }
}
</style>
