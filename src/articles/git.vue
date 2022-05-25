<template>
   <div class="master">
      <h1>Git 基本使用</h1>
      <h2>介绍</h2>
      <p>这里记录一下自己平时常用的 <strong>Git</strong> 命令。</p>
      <br />

      <h2>一、常规操作</h2>
      <div class="uml-container">
         <table>
            <tbody>
               <tr>
                  <th
                     v-for="nodeName in nodeState"
                     :style="{
                        width: `${100 / nodeState.length}%`,
                     }"
                  >
                     <span class="node-name">{{ nodeName }}</span>
                  </th>
               </tr>

               <tr v-for="child in baseNodeChildren">
                  <template v-for="(count, index) in child.forCount">
                     <td
                        v-if="child.fromIndex < child.toIndex && child.from === nodeState[index]"
                        :colspan="child.colspan"
                     >
                        <div class="code-line" :style="{ margin: `10px ${thWidth}px` }">
                           <span>{{ child.code }}</span>
                           <i class="arrow-right"></i>
                        </div>
                     </td>
                     <td
                        v-else-if="child.fromIndex > child.toIndex && child.to === nodeState[index]"
                        :colspan="child.colspan"
                     >
                        <div class="code-line" :style="{ margin: `10px ${thWidth}px` }">
                           <span>{{ child.code }}</span>
                           <i class="arrow-left"></i>
                        </div>
                     </td>
                     <td v-else-if="!child.from && child.to === nodeState[index]">
                        <div
                           class="code-line"
                           :style="{ margin: `10px ${thWidth}px 10px 0`, borderLeft: 'none' }"
                        >
                           <span>{{ child.code }}</span>
                           <i class="arrow-right"></i>
                        </div>
                     </td>
                     <td v-else></td>
                  </template>
               </tr>
            </tbody>
         </table>
      </div>
      <div>
         <h3  id="status"><a href="#status">#</a>git status</h3>
         <p>查看当前库中的文件状态</p>
      </div>
      <div>
         <h3 id="add"><a href="#add">#</a>{{ 'git add <fileName></fileName>'}}</h3>
         <p>添加单个文件到 → 暂存储区 staged</p>
         <p>git add . 添加所有修改过的文件到 staged</p>
      </div>
      <div>
         <h3 id="commit"><a href="#commit">#</a>{{ 'git commit -m <message>'}}</h3>
         <p>给暂存储区添加修改备注信息</p>
         <p><strong>注意</strong>：commit 之后的文件会变为 unModified 状态</p>
      </div>
      <div>
         <h3 id="push"><a href="#push">#</a>{{ 'git push'}}</h3>
         <p>提交暂存储区的文件到远程仓库</p>
      </div>
      <div>
         <h3 id="restore"><a href="#restore">#</a>{{ 'git restore <fileName>'}}</h3>
         <p>恢复到修改前的内容和状态（取消当前文件的修改）</p>
         <p><strong>注意</strong>：Untracked 状态下的文件是无法 restore 的（会报错）</p>
      </div>
      <div>
         <h3 id="reset-fileName"><a href="#reset-fileName">#</a>{{ 'git reset <fileName>'}}</h3>
         <p>取消某个文件的 add 操作</p>
      </div>
      <div>
         <h3 id="reset-commitID"><a href="#reset-commitID">#</a>{{ 'git reset <commitID> <--hard/soft/mixed>'}}</h3>
         <p>回退到某个 commit 版本</p>
         <ul>
            <li>--hard  不保存所有修改，所有的一切都会还原到 commitID 对应的状态</li>
            <li>--soft  保留变更且变更内容处于 Staged</li>
            <li>--mixed（默认）保留变更且变更内容处于 Modified</li>
         </ul>
         <p>提示：当 commit 一个文件之后再次修改这个文件后可以回退（soft\mixed）之后再次 commit，这样上次的 commit 就会作废。</p>
      </div>
      <br />

      <h2>二、分支操作</h2>
      <div>
         <h3 id="branch"><a href="#branch">#</a>{{ 'git branch -a'}}</h3>
         <p>查看当前库的所有分支</p>
      </div>
      <div>
         <h3 id="checkout"><a href="#checkout">#</a>{{ 'git checkout <name>'}}</h3>
         <p>{{'切换到 <name> 分支'}}</p>
      </div>
      <div>
         <h3 id="checkout-b"><a href="#checkout-b">#</a>{{ 'git checkout -b <name> <template?>' }}</h3>
         <p>{{ '创建并切换到新的分支' }}</p>
         <ul>
            <li>{{ '-b ：创建并切换到 <name> 分支' }}</li>
            <li>{{ '<template>：以哪个分支为模板，默认以当前分支为模板，如果 <template> 为远程仓库的分' }}</li>
            <li>{{ '支则需要在前面加 origin，例如：git checkout -b <name> origin <template>' }}</li>
         </ul>
      </div>
      <div>
         <h3 id="merge"><a href="#merge">#</a>{{ 'git merge <name>'}}</h3>
         <p>{{'合并<name>分支，注意：需要切换回主分支去合并子分支'}}</p>
      </div>
      <br />
   </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { nodeState, nodeChildren, NodeChild } from '../config/git/config';

interface BaseNodeChild extends NodeChild {
   fromIndex: number;
   toIndex: number;
   colspan?: number;
   forCount: number;
}

const baseNodeChildren: BaseNodeChild[] = nodeChildren.map((child) => {
   let colspan: number | undefined = undefined;

   let fromIndex = nodeState.findIndex((nodeName) => nodeName === child.from);
   let toIndex = nodeState.findIndex((nodeName) => nodeName === child.to);

   if (fromIndex != -1 && toIndex != -1) {
      if (fromIndex < toIndex) colspan = toIndex - fromIndex + 1;
      else if (fromIndex > toIndex) colspan = fromIndex - toIndex + 1;
   }

   return {
      ...child,
      fromIndex,
      toIndex,
      colspan,
      forCount: nodeState.length - ((colspan || nodeState.length + 1) - 1) || nodeState.length,
   };
});

// 实时监听窗口大小变化
const thWidth = ref<number>(document.querySelector('th')?.clientWidth || 0);
window.onresize = () => {
   thWidth.value = (document.querySelector('th')?.clientWidth || 0) / 2 - 2.5;
};
onBeforeUnmount(() => (window.onresize = null)); // 切换页面时停止监听
onMounted(() => {
   thWidth.value = (document.querySelector('th')?.clientWidth || 0) / 2 - 2.5;
});


</script>

<style lang="scss">
.uml-container {
   width: 100%;
   margin: 20px 0;
   overflow-x: auto;

   table {
      width: 100%;
      overflow: hidden;

      td,
      th {
         text-align: center;
      }

      th {
         position: relative;

         &::after {
            content: '';
            position: absolute;
            top: 42px;
            left: calc(50% - 1px);
            width: 2px;
            height: 1000px;
            background: linear-gradient(
               to bottom,
               transparent 0%,
               transparent 30%,
               gray 50%,
               gray 100%
            );
            background-size: 2px 20px;
            background-repeat: repeat-y;
         }
      }
   }

   .node-name {
      padding: 5px 10px;
      border-radius: 8px;
      background-color: #8bc34a;
      color: white;
      width: 120px;
      display: block;
      margin: 0 auto;
   }

   .code-line {
      position: relative;
      border-left: #3eaf7c solid 5px;
      border-right: #3eaf7c solid 5px;

      &::after {
         content: '';
         position: absolute;
         z-index: 1;
         top: calc(50% - 1px);
         left: 0;
         height: 2px;
         width: 100%;
         background-color: #3eaf7c;
      }

      span {
         position: relative;
         z-index: 2;
         background-color: #fafafa;
         font-size: 14px;
      }

      .arrow-left {
         position: absolute;
         z-index: 3;
         top: calc(50% - 10px);
         left: -10px;
         border-top: 10px solid transparent;
         border-right: 10px solid #3eaf7c;
         border-bottom: 10px solid transparent;
         border-left: 10px solid transparent;
      }

      .arrow-right {
         position: absolute;
         z-index: 3;
         top: calc(50% - 10px);
         right: -10px;
         border-top: 10px solid transparent;
         border-right: 10px solid transparent;
         border-bottom: 10px solid transparent;
         border-left: 10px solid #3eaf7c;
      }
   }
}
</style>
