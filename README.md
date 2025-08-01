# 黒塗り世界宛て基米
Derivative work of Letter to the Black World, using n3xta/lyric-displayer to generate PV.

Audio file in the repostitory and video generated and posted is licensed under CC0.

致涂黑世界的书信的衍生产物，使用 n3xta/lyric-displayer 生成了PV。

仓库内的音频文件与使用此代码生成并发布的视频使用 CC0 授权。



# Letter to the Black World, but in JavaScript

Original PV: [Letter to the Black World / Kasane Teto - フロクロ](https://www.youtube.com/watch?v=8BekVGwSX3c)
Credit: Frog96

## Deployment

Press Enter to play  
[https://n3xta.github.io/lyric-displayer/](https://n3xta.github.io/lyric-displayer/)

## showLyric Logic

1. Pass in `lyric` and check the `isNew` property
   - If `isNew` is `false`, clear all `<span>` (or `<div>`) elements on the screen
   - If `isNew` is `true`, skip clearing

2. Process `lyric` by splitting it into `<span>` elements
   - Use a regular expression to find all `<br>` and `<span>` tags. The `split` function will retain the matched tags after splitting.
     - Match `<br>`
     - `<span[^>]*>.*?<\/span>` matches all `<span>` tags
       - `<span[^>]*>` matches the opening part of the `<span>` tag with all attributes
       - `.*?` matches any content within the tag (non-greedy)
   - Use `.map(part => { ... })` to iterate over each split part
     - `if (part === '<br>')`: return `<br>` directly to keep HTML line breaks
     - `else if (part.match(/<span[^>]*>.*?<\/span>/))`: if wrapped in `<span>`, retain it as is
     - `else`: for plain text
       - Use `split('')` to break the text string into individual characters
       - Wrap each character in `<span class="${spanClass}">` to encapsulate each character in a `<span>` tag
       - `spanClass` is a variable representing the CSS class to apply
   - Finally, use `.join('')` to concatenate the result returned by `map` into a complete string

3. Decide whether to append the new content based on the value of `isNew`
   - Use `lyricDiv.html()` to get the current HTML content of the `lyricDiv` element
     - If `isNew` is `true`, append the new content `chars` to the existing content
     - If `isNew` is `false`, replace the original content with `chars`

4. Animation handling
   - Regardless of the value of `isNew`, add the `animate-me` class to new characters (apply animation each time new characters are added to `lyricDiv`)
   - The animation targets all elements with the `animate-me` class, including newly added and appended content. Once the animation completes, remove the `animate-me` class.

---

# Letter to the Black World, but in JavaScript

原 PV：[黒塗り世界宛て書簡／重音テト（Letter to the Black World / Kasane Teto）- フロクロ](https://www.youtube.com/watch?v=8BekVGwSX3c)

## Deployment

按下 Enter 播放  
[点这里](https://n3xta.github.io/lyric-displayer/)

## showLyric 逻辑

1. 传入 `lyric`，并判断 `isNew` 属性
   - 如果为 `false`，即清空屏幕上所有的 `<span>`（或 `<div>`）
   - 如果为 `true`，略过清空

2. 对 `lyric` 进行拆分并包裹在 `<span>` 中
   - 使用正则表达式找到所有的 `<br>` 和 `<span>` 标签，`split` 函数在分割后保留匹配的标签。
     - 匹配 `<br>`
     - `<span[^>]*>.*?<\/span>` 匹配所有 `<span>` 标签
       - `<span[^>]*>` 匹配 `<span>` 标签的开头部分及所有属性
       - `.*?` 匹配标签中的任意内容（非贪婪模式）
   - 使用 `.map(part => { ... })` 遍历每个分割的部分
     - `if (part === '<br>')`：直接返回 `<br>`，保留 HTML 换行
     - `else if (part.match(/<span[^>]*>.*?<\/span>/))`：如果是 `<span>` 标签包裹的内容，保留原样
     - `else`：处理纯文本
       - 使用 `split('')` 将文本字符串拆分成单个字符
       - 对每个字符加上 `<span class="${spanClass}">`，将每个字符包裹在 `<span>` 标签中
       - `spanClass` 变量代表要添加的样式类
   - 最后用 `.join('')` 将 `map` 返回的结果拼接成一个完整的字符串

3. 根据 `isNew` 的值决定内容的追加方式
   - 使用 `lyricDiv.html()` 获取 `lyricDiv` 元素的当前 HTML 内容
     - 如果为 `true`，将新内容 `chars` 追加到已有内容后
     - 如果为 `false`，直接用 `chars` 覆盖原有内容

4. 动画效果处理
   - 无论 `isNew` 的值，都给新字符添加 `animate-me` 类（每次有新字符添加到 `lyricDiv` 时，应用动画）
   - 动画应用在所有具有 `animate-me` 类的元素上，包括清空后添加的新内容和追加的内容，动画完成后移除 `animate-me` 类
