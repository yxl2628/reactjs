### 前置知识
##### html5   
HTML5 是 W3C 与 WHATWG 合作的结果,WHATWG 指 Web Hypertext Application Technology Working Group。

WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0。在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。

html5的一些新特性:
1. 用于绘画的 canvas 元素
2. 用于媒介回放的 video 和 audio 元素
3. 对本地离线存储的更好的支持(localStorage、sessionStorage)
4. 新的特殊内容元素，比如 article、footer、header、nav、section
5. 新的表单控件，比如 calendar、date、time、email、url、search

##### css3   
CSS即层叠样式表（Cascading StyleSheet）。 在网页制作时采用层叠样式表技术，可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。 只要对相应的代码做一些简单的修改，就可以改变同一页面的不同部分，或者页数不同的网页的外观和格式。CSS3是CSS技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范作为一个模块实在是太庞大而且比较复杂，所以，把它分解为一些小的模块，更多新的模块也被加入进来。

CSS3 模块包括：
1. 选择器
2. 框模型
3. 背景和边框
4. 文本效果
5. 2D/3D 转换
6. 动画
7. 多列布局
8. 用户界面

##### ES6
ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在2015年6月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

ES6 新特性包括(React可能会用到的部分):
1. 变量声明
  - const 和 let
  > const 和 let，分别表示常量和变量。不同于 var 的函数作用域，const 和 let 都是块级作用域。

  - 模板字符串
  > 模板字符串提供了另一种做字符串组合的方法。

  - 默认参数
  > function中允许增加默认参数了

2. 箭头函数
> 函数的快捷写法，不需要通过 function 关键字创建函数，并且还可以省略 return 关键字。同时，箭头函数还会继承当前上下文的 this 关键字。

3. 模块的 Import 和 Export
> import 用于引入模块，export 用于导出模块。

4. ES6 对象和数组
  - 析构赋值
  > 析构赋值让我们从 Object 或 Array 里取部分数据存为变量。

  - 对象字面量改进
  > 这是析构的反向操作，用于重新组织一个 Object 。

  - Spread Operator
  > Spread Operator 即 3 个点 ...，可用于组装数组、也可用于获取数组的部分项、还可收集函数参数为数组、代替 apply。

5. Promises
> Promise 用于更优雅地处理异步请求。

6. Generators
> Generator 返回的是迭代器，通过 yield 关键字实现暂停功能。

### 代码处理
##### Babel转码   
Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。这意味着，你可以现在就用ES6编写程序，而不用担心现有环境是否支持。下面是一个例子。
``` javascript
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```
上面的原始代码用了箭头函数，这个特性还没有得到广泛支持，Babel将其转为普通函数，就能在现有的JavaScript环境执行了。

##### Less或Sass      
Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
SASS是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。
例子:
``` less
@base: #f938ab;
.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}
.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}
.box {
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}
```
输出:
``` css
.box {
  color: #fe33ac;
  border-color: #fdcdea;
}
.box div {
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
```
两种语言都可以加快css的开发,其中less是JavaScript解析,sass是通过ruby解析,目前项目中用的是less,但是只是用在了开发阶段,所以并不存在放到浏览器解析,造成的性能问题。

##### Webpack   
