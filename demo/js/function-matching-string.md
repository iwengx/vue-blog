## 函数匹配字符串

<br>
> :hankey: bad code

```javascript
const findString = (key: string): string => {
   switch(key) {
      case "1": return 'this is one'
      case "2": return 'this is two'
      case "3": return 'this is three'
      ....
      default: return 'undefined'
   }
}

```

<br>
> :+1: good code

```javascript
const findString = (key: string): string => ({
   '1': 'this is one',
   '2': 'this is two',
   '3': 'this is three',
   ...
}[key] || 'undefined')

```

你还有新的想法吗？

快来告诉我吧~
