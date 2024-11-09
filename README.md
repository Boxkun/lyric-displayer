# Letter to the Black World, but in JavaScript

原pv：黒塗り世界宛て書簡／重音テト（Letter to the Black World / Kasane Teto）- フロクロ
https://www.youtube.com/watch?v=8BekVGwSX3c

## deployment

按下enter播放
https://n3xta.github.io/lyric-displayer/

## showLyric 逻辑
1. 先传入lyric，判断`isNew` property
   1. 如果为false即清空屏幕上所有的span（div）
   2. 如果为true，略过清空
2. 对lyric进行拆span处理
   1. 正则表达式：找到所有的`<br>`和`<span>`，`split`函数会在分割后保留匹配的标签
      1. 匹配`<br>`
      2. `<span[^>]*>.*?<\/span>`：匹配所有`<span>`
         1. `<span[^>]*>`匹配`<span>`标签开头部分（所有block）以及所有属性
         2. `.*?`匹配标签中的任意内容（非贪婪）
   2. `.map(part => { ... })`
      1. map函数遍历每个分割后的部分
      2. `if (part === '<br>')`
         1. 直接返回`<br>`，保留html换行
      3. `else if (part.match(/<span[^>]*>.*?<\/span>/))`
         1. 说明它是一个`<span>`标签包裹的内容
         2. 不做任何处理
      4. `else`
         1. 说明它是纯文本
            1. 使用`split('')`将该文本字符串拆分成单个字符
            2. 对每个字符加上`<span class="${spanClass}">`，这样每个字符会被包裹在`<span>`标签中
            3. `spanClass`是一个变量，代表要添加的样式类
      5. `.join('')`
         1. 最后将`map`返回的结果拼接成一个完整的字符串
3. 根据`isNew`的值决定是否将新内容追加
      1. `lyricDiv.html()`用来获取lyricDiv元素的当前HTML内容
   1. 如果为true，将新的歌词内容chars追加到已有内容的后面
   2. 如果为false，则用chars直接覆盖原有内容
4. 动画效果处理
   1. 无论isNew的值，都给新字符添加animate-me类（每次有新字符添加到lyricDiv时，都对其应用动画）
   2. 动画针对所有animate-me类的元素，包括清空后添加的新内容&追加，完成后，移除
