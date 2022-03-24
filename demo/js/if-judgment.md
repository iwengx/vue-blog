## if 中相同变量的判断

<br>
> :hankey: bad code

```javascript
const validate = (user: string): boolean => {
   if (user == 'wengx' || user == '-unx' || user == 'github' || user == '.io' ···) {
      return true;
   }
   return false;
}
```

<br>
> :+1: good code

将 有效值 存到一个数组中，利用数组的 includes 方法来简化代码结构

<br>

```javascript
const validate = (user: string): boolean => {
   const effectiveValue: string[] = ['wengx', '-unx', 'github', ',io'];
   if (effectiveValue.includes(user)) {
      return true;
   }
   return false;
};
```
