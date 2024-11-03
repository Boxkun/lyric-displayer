## 1031

1. adapt showlyric
   1. take in a parameter like "isNew" (boolean)
   2. only span in this class are applied with the animation
   3. add on to the origin instead of just displaying
   4. 带有isnew属性的不会清空上一行，但是false的会进行一个清空
   5. beats不需要管还是按照原本的逻辑

# 1101

新写好的showlyric逻辑：

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
   1. 只将动画效果作用在`isNew`为`true`的span上

> bug: 第一行歌词不显示（大概率是因为4）
> そしてクオリアを<br>持った，出场时就没有动画
> debug要避免一个问题，就是当新的内容被添加到屏幕上的时候，已经在屏幕上的歌词不要重新过一遍动画，毕竟这个动画是作用在所用的span上的

# 1102

> 思路：无论 isNew 是 true 还是 false，新添加的歌词字符都带有一个特定的类

16:00

成功实现
debug过程略
- 除了这个，为了debug学了一点jQuery，但还是决定用原生js
- 把lyricDiv.html()替换为lyricDiv.innerHTML

o1有帮助到

<img src="https://raw.githubusercontent.com/n3xta/image-hosting/main/img/202411021610361.png"/>

修改：

1. 无论isNew的值，都给新字符添加animate-me类（每次有新字符添加到lyricDiv时，都对其应用动画）
2. 动画针对所有animate-me类的元素，包括清空后添加的新内容&追加，完成后，移除

至此换行逻辑成功实现


---

调试每个小节的换行时机

---

17:00

~~至此换行逻辑成功实现~~

> bug: 在后半段歌词以0.5拍急速刷新的部分，下一句歌词进来的时候，animation还没结束，导致animate状态又被刷新的情况
> debug思路：在新歌词添加时立即移除animate-me类

<img src="https://raw.githubusercontent.com/n3xta/image-hosting/main/img/202411021733706.png"/>

---

吃了个晚饭

---

> bug：详见视频■■も■■も■■も伝えられなきゃ这一段
> 实际改变block的宽度会导致文字被推挤
> <img src="https://raw.githubusercontent.com/n3xta/image-hosting/main/vid/2024-11-02%2020-44-34.mp4"/>

> debug思路：方块一开始就占据最终的宽度，只是通过动画让其从左到右逐渐显示为可见