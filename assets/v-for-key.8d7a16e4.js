import{d as p,r as E,f as e,m as u,F as C,g as i,n as A,p as l,o as t,t as D}from"./index.2af8fca6.js";const c={class:"master"},_=A("<h1>v-for key \u7684\u5751</h1><h2>\u4ECB\u7ECD</h2><p>\u8FD9\u91CC\u8BB0\u5F55\u4E00\u4E0B\u81EA\u5DF1\u5728\u4F7F\u7528 <strong>v-for</strong> \u4E2D <strong>key</strong> \u8E29\u8FC7\u7684\u5751\u3002</p><blockquote><p>\u57FA\u672C\u6982\u51B5</p></blockquote><p> \u5728 Vue2 \u4E2D <strong>key</strong> \u662F\u5FC5\u586B\u7684\uFF0C\u4F46\u662F Vue3 \u7248\u672C\u4E4B\u540E\u5B83\u7684\u53EA\u53D8\u4E3A\u53EF\u9009\u586B\uFF0C\u56E0\u4E3A\u73B0\u5728 Vue \u4F1A\u81EA\u52A8\u751F\u6210\u552F\u4E00\u7684 <strong>key</strong></p><p>\u5373\u4FBF\u4F1A\u751F\u6210\u9ED8\u8BA4\u503C\uFF0C\u4F46\u5728\u590D\u6742\u7684 v-for \u573A\u666F\u4E2D\u8FD8\u662F\u9700\u8981\u6211\u4EEC\u624B\u52A8\u8BBE\u7F6E key</p><p>\u4F8B\u5982\u4E0B\u65B9\u4F8B\u5B50</p><h3>\u4E00\u3001\u5728\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0Ckey \u7684\u503C\u4E3A index | default \u7684\u6548\u679C</h3><p> \u4F60\u53EF\u4EE5\u5728 <strong>index:0 </strong>\u4EE5\u5916\u7684\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u4EFB\u610F\u5B57\u7B26\uFF0C\u7136\u540E\u8FDB\u884C\u6DFB\u52A0\u3001\u5220\u9664\u64CD\u4F5C\u6765\u67E5\u770B\u5176\u6548\u679C </p><p>\u540C\u65F6\u8BB0\u5F97\u89C2\u5BDF <strong>index</strong> \u4E0E <strong>baseKey</strong> \u7684\u53D8\u5316\u60C5\u51B5</p>",10),y=u("input",{type:"text",style:{width:"100px"}},null,-1),h=l(" - "),k=u("h3",null,"\u4E8C\u3001\u5728\u4E0B\u9762\u4F8B\u5B50\u4E2D\u8BBE\u7F6E\u4E86 key \u503C\u540E\u7684\u6548\u679C",-1),v=u("input",{type:"text",style:{width:"100px"}},null,-1),g=l(" - "),b=["onClick"],f=u("br",null,null,-1),x=u("blockquote",null,[u("p",null,"\u539F\u7406")],-1),m=u("strong",null,"key",-1),K=l("\u5C5E\u6027\u5C31\u50CF\u865A\u62DF\u8282\u70B9\u7684\u201C\u8EAB\u4EFD\u8BC1\u53F7\u201D\uFF0C\u4E3B\u8981\u7528\u505A Vue \u7684\u865A\u62DF DOM \u7B97\u6CD5\u7684\u63D0\u793A\uFF08\u5728\u6BD4\u5BF9\u65B0\u65E7\u8282\u70B9\u7EC4\u8FA8\u8BC6 VNodes\uFF09 "),V=u("ul",null,[u("li",null,"\u5728\u70B9\u51FB \u6DFB\u52A0 \u6309\u94AE\u540E\uFF0CVue \u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u865A\u62DF DOM"),u("li",null,"\u5728\u65E7\u865A\u62DF DOM \u5217\u8868\u4E2D\u627E\u5230\u4E8E\u65B0\u865A\u62DF DOM \u76F8\u540C\u6807\u8BC6\u7684 key"),u("ul",null,[u("li",null,"\u5B58\u5728\uFF0C\u5219\u8FDB\u884C\u771F\u5B9E DOM \u590D\u7528"),u("li",null,"\u4E0D\u5B58\u5728\uFF0C\u5219\u751F\u6210\u65B0\u7684\u771F\u5B9EDOM")])],-1),M=u("p",null,"\u5177\u4F53\u7406\u8BBA\u548C\u8BE6\u7EC6\u7EC6\u8282\u53EF\u4EE5\u53BB\u770B\u4E00\u4E0B\u300AVue.js\u8BBE\u8BA1\u4E8E\u5B9E\u73B0 - \u970D\u6625\u9633\u300BP221 DOM \u590D\u7528\u4E0E Key \u7684\u4F5C\u7528.",-1),$=p({__name:"v-for-key",setup(O){const s=E(2),r=E(3),o=E([{baseKey:1},{baseKey:2}]),a=()=>{o.value.unshift({baseKey:r.value++})};return(N,n)=>(t(),e("div",c,[_,u("div",null,[u("div",null,[u("button",{onClick:n[0]||(n[0]=F=>s.value++)},"+ \u6DFB\u52A0\u4E00\u884C\u5185\u5BB9")]),(t(!0),e(C,null,i(s.value,(F,B)=>(t(),e("div",null,[u("span",null,"index: "+D(B)+" - ",1),y,h,u("button",{onClick:n[1]||(n[1]=d=>s.value--)},"\u5220 \u9664")]))),256))]),k,u("div",null,[u("div",null,[u("button",{onClick:a},"+ \u6DFB\u52A0\u4E00\u884C\u5185\u5BB9")]),(t(!0),e(C,null,i(o.value,(F,B)=>(t(),e("div",{key:F.baseKey},[u("span",null,"baseKey: "+D(F.baseKey)+" - ",1),v,g,u("button",{onClick:d=>o.value.splice(B,1)},"\u5220 \u9664",8,b)]))),128))]),f,x,m,K,V,M]))}});export{$ as default};
