1. adapt showlyric
   1. take in a parameter like "isNew" (boolean)
   2. only span in this class are applied with the animation
   3. add on to the origin instead of just displaying
   4. 带有isnew属性的不会清空上一行，但是false的会进行一个清空
   5. beats不需要管还是按照原本的逻辑

```
      let chars = lyric.split(/(<br>|<span[^>]*>.*?<\/span>)/).map(part => {
        if (part === '<br>') {
            return part;
        } else if (part.match(/<span[^>]*>.*?<\/span>/)) {
            return part;
        } else {
            return part.split('').map(char => {
                return `<span>${char}</span>`;
            }).join('');
        }
    }).join('');
```

