<template>
   <header class="wengx-header-nav">
      <div class="nav-left">
         <!-- fold icon -->
         <svg
            width="29"
            height="29"
            viewBox="0 0 48 48"
            class="unfold-icon"
            ref="foldIconDom"
            @click="unfoldIconClickEvent"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path
               d="M8 11H40"
               stroke="#333"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M8 24H42"
               stroke="#333"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M8 37H40"
               stroke="#333"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M36.3433 29.6569L42.0001 24L36.3433 18.3431"
               stroke="#333"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </svg>
         <!-- home icon -->
         <svg
            width="29"
            height="29"
            viewBox="0 0 48 48"
            fill="none"
            @click="router.push('/')"
            class="home-icon"
            title="返回首页"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path d="M9 18V42H39V18L24 6L9 18Z" fill="none" />
            <path
               d="M9 42V18L4 22L24 6L44 22L39 18V42H9Z"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M19 29V42H29V29H19Z"
               fill="none"
               stroke="#000000"
               stroke-width="4"
               stroke-linejoin="round"
            />
            <path d="M9 42H39" stroke="#000000" stroke-width="4" stroke-linecap="round" />
         </svg>
      </div>
      <div class="nav-right">
         <!-- sun -->
         <svg
            width="29"
            height="29"
            viewBox="0 0 48 48"
            class="sun-icon"
            ref="sun"
            xmlns="http://www.w3.org/2000/svg"
            @click="changeGlobalEvent('sum')"
         >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 3V6.15V3Z" fill="#000000" />
            <path
               d="M24 3V6.15"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M38.8492 9.15076L36.6219 11.3781L38.8492 9.15076Z"
               fill="#000000"
            />
            <path
               d="M38.8492 9.15076L36.6219 11.3781"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45 24H41.85H45Z" fill="#000000" />
            <path
               d="M45 24H41.85"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M38.8492 38.8492L36.6219 36.6219L38.8492 38.8492Z"
               fill="#000000"
            />
            <path
               d="M38.8492 38.8492L36.6219 36.6219"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 45V41.85V45Z" fill="#000000" />
            <path
               d="M24 45V41.85"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M9.15076 38.8492L11.3781 36.6219L9.15076 38.8492Z"
               fill="#000000"
            />
            <path
               d="M9.15076 38.8492L11.3781 36.6219"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 24H6.15H3Z" fill="#000000" />
            <path
               d="M3 24H6.15"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M9.15076 9.15076L11.3781 11.3781L9.15076 9.15076Z"
               fill="#000000"
            />
            <path
               d="M9.15076 9.15076L11.3781 11.3781"
               stroke="#000000"
               stroke-width="4"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
               fill="none"
               stroke="#000000"
               stroke-width="4"
               stroke-linejoin="round"
            />
         </svg>
         <!-- moon -->
         <svg
            width="29"
            height="29"
            viewBox="0 0 48 48"
            class="moon-icon"
            ref="moon"
            xmlns="http://www.w3.org/2000/svg"
            @click="changeGlobalEvent('moon')"
         >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path
               d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
               fill="none"
               stroke="#000000"
               stroke-width="4"
               stroke-linejoin="round"
            />
         </svg>
         <a href="https://github.com/wengx-unx" target="_blank">
            <!-- GitHub icon -->
            <svg
               width="29"
               height="29"
               viewBox="0 0 48 48"
               class="github-icon"
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect width="48" height="48" fill="white" fill-opacity="0.01" />
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="#333"
               />
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.183 45.4715C18.9896 45.2218 18.9896 42.9972 19.183 38.798C17.1112 38.8695 15.8022 38.7257 15.256 38.3666C14.4368 37.8279 13.6166 36.1666 12.8889 34.9958C12.1612 33.825 10.546 33.6399 9.8938 33.3782C9.24158 33.1164 9.07785 32.0495 11.691 32.8564C14.3042 33.6633 14.4316 35.8606 15.256 36.3744C16.0804 36.8882 18.0512 36.6634 18.9446 36.2518C19.8379 35.8402 19.7722 34.3077 19.9315 33.7006C20.1329 33.1339 19.423 33.0082 19.4074 33.0036C18.5353 33.0036 13.9537 32.0072 12.6952 27.5705C11.4368 23.1339 13.0579 20.234 13.9227 18.9874C14.4992 18.1563 14.4482 16.3851 13.7697 13.6736C16.2333 13.3588 18.1344 14.1342 19.4732 16C19.4745 16.0107 21.2283 14.9571 24 14.9571C26.7718 14.9571 27.7551 15.8153 28.514 16C29.2728 16.1847 29.8798 12.734 34.5666 13.6736C33.5881 15.5968 32.7686 18 33.3941 18.9874C34.0195 19.9748 36.4742 23.1146 34.9664 27.5705C33.9611 30.5412 31.9851 32.3522 29.0382 33.0036C28.7002 33.1114 28.5313 33.2854 28.5313 33.5254C28.5313 33.8855 28.9881 33.9248 29.6463 35.6116C30.085 36.7361 30.1167 39.9479 29.7413 45.2469C28.7904 45.489 28.0506 45.6515 27.5219 45.7346C26.5845 45.8819 25.5667 45.9645 24.5666 45.9964C23.5666 46.0283 23.2193 46.0247 21.8368 45.896C20.9151 45.8102 20.0305 45.6687 19.183 45.4715Z"
                  fill="#333"
               />
            </svg>
            <p>WemgX-unx</p>
         </a>
      </div>
   </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
   props: {
      changeAsideWidth: {
         type: Function,
         default: () => {},
      },
   },
   setup(props) {
      const router = useRouter();

      // sun and moon icon dom
      const sun = ref<HTMLElement>(),
         moon = ref<HTMLElement>();

      let foldIconDom = ref<HTMLElement>();

      /**
       * 重新封装 旋转图标
       */
      const unfoldIconClickEvent = () => {
         if (props.changeAsideWidth()) {
            foldIconDom.value!.style.setProperty('transform', 'rotate(180deg)');
         } else {
            foldIconDom.value!.style.setProperty('transform', '');
         }
      };

      /**
       * 太阳、月亮 图标点击事件
       * 修改全局的 html 'theme-color' 属性（切换颜色主题）
       * @param elementName sun or moon
       */
      const changeGlobalEvent = (elementName: 'sum' | 'moon'): void => {
         if (elementName == 'sum') {
            sun.value!.style.display = 'none';
            moon.value!.style.display = 'block';
            document.documentElement.setAttribute('theme-color', 'QingHui');
         } else {
            sun.value!.style.display = 'block';
            moon.value!.style.display = 'none';
            document.documentElement.setAttribute('theme-color', 'light');
         }
      };

      return { sun, moon, router, foldIconDom, unfoldIconClickEvent, changeGlobalEvent };
   },
});
</script>

<style lang="scss">
.wengx-header-nav {
   height: 65px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   overflow: hidden;
   box-shadow: var(--header-box-shadow);
   background-color: var(--header-background-color);

   .nav-left {
      transform: translate(-45px, 0);
      transition: transform 0.2s ease;
   }

   .unfold-icon,
   .moon-icon,
   .sun-icon {
      margin-right: 20px;
      cursor: pointer;
      path {
         stroke: var(--text-color);
      }
   }

   .unfold-icon,
   .github-icon {
      path {
         fill: var(--text-color);
      }
   }

   .unfold-icon {
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s ease, transform 0.2s ease;
   }

   .home-icon {
      cursor: pointer;
      path {
         stroke: var(--text-color);
      }

      &:hover {
         path {
            stroke: var(--icon-active-color);
         }
      }
   }

   .moon-icon {
      display: none;
   }

   .nav-right {
      display: flex;
      a {
         text-decoration: none;
         display: flex;
         align-items: center;
         color: var(--text-color);
         p {
            margin-left: 10px;
            font-size: 18px;
         }
      }
   }
}
</style>
