## 输入框（input）

<br/>

input 标签样式集合

<br/>

---

<br/>

> ### 样式 1： [online code](https://codepen.io/wengx-unx/pen/MWOXXER)

<br/>

<div class="input-box-1">
   <input type="text" title="input-1" required />
   <span>账号</span>
</div>

<style>
   .input-box-1 {
      width: 300px;
      height: 46px;
      margin-bottom: 35px;
      position: relative;
   }
   .input-box-1 input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border-radius: 4px;
      outline: none;
      color: var(--text-color);
      box-sizing: border-box;
      border: 1px solid black;
   }
   .input-box-1  span {
      position: absolute;
      left: 0;
      padding-left: 10px;
      line-height: 40px;
      font-size: 16px;
      transition: 0.5s;
      font-weight: 300;
      letter-spacing: 1px;
      color: var(--text-color);
      pointer-events: none;
   }
   .input-box-1  input:focus ~ span,
   .input-box-1  input:valid ~ span {
      transform: translateX(-10px) translateY(-32px);
      font-size: 12px;
   }
</style>
