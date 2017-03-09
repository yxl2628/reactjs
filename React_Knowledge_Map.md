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

##### CSS Modules(Less、Sass)      
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
- 什么是Webpack

  WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

- WebPack和Grunt以及Gulp相比有什么特性

  实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack可以替代Gulp/Grunt类的工具。

  Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。

  ![](assets/1031000-d0693c06bb3a00e3.png)

  Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件。

  ![](assets/1031000-160bc667d3b6093a.png)

  如果实在要把二者进行比较，Webpack的处理速度更快更直接，能打包更多不同类型的文件。

  - 为什要使用WebPack
  现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

    - 模块化，让我们可以把复杂的程序细化为小的文件;
    - 类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能能装换为JavaScript文件使浏览器可以识别；
  Scss，less等CSS预处理器
    - ...

  这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

### React相关

##### Flux

Flux 是一种应用架构，或者说是一种思想，它跟 React 本身没什么关系，它可以用在 React 上，也可以用在别的框架上。前面说到 Flux 在 React 中主要用来统一管理引起 state 变化的情况。Flux 维护着一个或者多个叫做 Store 的变量，就像 MVC 里面的 Model，里面存放着应用用到的所有数据，当一个事件触发时 ，Flux 对事件进行处理，对 Store 进行更新，当 Store 发生变化时，通常是由应用的根组件（也叫 controller view）去获取最新的 store，然后更新 state，之后利用 React 单向数据流的特点一层层将新的 state 向下传递实现 view 的更新。这里的 controller view 可以有多个也可以不是根组件，但是这样数据流维护起来就比较麻烦。

Flux 的思维模型如下：

![](assets/BFf2MnF.png)

Flux 主要包括四个部分， Dispatcher 、 Store 、 View 、 Action ，其中 Dispatcher 是 Flux 的核心枢纽，它相当于是一个事件分发器，将那些分散在各个组件里面的逻辑代码收集起来，统一在 Dispatcher 中进行处理。完整的 Flux 处理流程是这样的：用户通过与 view 交互或者外部产生一个 Action，Dispatcher 接收到 Action 并执行那些已经注册的回调，向所有 Store 分发 Action。通过注册的回调，Store 响应那些与他们所保存的状态有关的 Action。然后 Store 会触发一个 change 事件，来提醒 controller-views 数据已经发生了改变。Controller-views 监听这些事件并重新从 Store 中获取数据。这些 controller-views 调用他们自己的 setState() 方法，重新渲染自身以及组件树上的所有后代组件。使用 Flux 有个好处就是我只需要用 action 对象向 Dispatcher 描述当前的事件就可以执行对应的逻辑，因为 Dispatcher 是所有 Action 的处理中心，即使没有对应的事件发生，我们也可以“伪造”一个出来，非常利于测试。

##### Redux

Redux 的作用跟 Flux 是一样的，它可以看作是 Flux 的一种实现，但是又有点不同，具体的不同总结起来就是：

1. Redux 只有一个 store Flux 里面会有多个 store 存储应用数据，并在 store 里面执行更新逻辑，当 store 变化的时候再通知 controller-view 更新自己的数据，Redux 将各个 store 整合成一个完整的 store，并且可以根据这个 store 推导出应用完整的 state。同时 Redux 中更新的逻辑也不在 store 中执行而是放在 reducer 中。
2. 没有 Dispatcher Redux 中没有 Dispatcher 的概念，它使用 reducer 来进行事件的处理，reducer 是一个纯函数，这个函数被表述为 (previousState, action) => newState ，它根据应用的状态和当前的 action 推导出新的 state。Redux 中有多个 reducer，每个 reducer 负责维护应用整体 state 树中的某一部分，多个 reducer 可以通过 combineReducers 方法合成一个根reducer，这个根reducer负责维护完整的 state，当一个 action 被发出，store 会调用 dispatch 方法向某个特定的 reducer 传递该 action，reducer 收到 action 之后执行对应的更新逻辑然后返回一个新的 state，state 的更新最终会传递到根reducer处，返回一个全新的完整的 state，然后传递给 view。

Redux 和 Flux 之间最大的区别就是对 store/reducer 的抽象，Flux 中 store 是各自为战的，每个 store 只对对应的 controller-view 负责，每次更新都只通知对应的 controller-view；而 Redux 中各子 reducer 都是由根reducer统一管理的，每个子reducer的变化都要经过根reducer的整合。用图表示的话可以像这样：

Flux 中的 store 是这样的：

![](assets/JvmiEn.png)

Redux 中的 store（或者叫 reducer）是这样的：

![](assets/RB3Mni.png)

##### React Router
在 web 应用开发中，路由系统是不可或缺的一部分。在浏览器当前的 URL 发生变化时，路由系统会做出一些响应，用来保证用户界面与 URL 的同步。随着单页应用时代的到来，为之服务的前端路由系统也相继出现了。React Router是React官方维护的路由，事实上也是唯一可选的路由库。它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。

##### 脚手架工具 dva
使用 redux ,并认可这种数据流的控制可以让应用更可控，以及让逻辑更清晰。但随之而来通常会有这样的疑问：概念太多，并且 reducer, saga, action 都是分离的（分文件）。
这带来的问题是：

- 编辑成本高，需要在 reducer, saga, action 之间来回切换
- 不便于组织业务模型 (或者叫 domain model) 。比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件。
- saga 书写太复杂，每监听一个 action 都需要走 fork -> watcher -> worker 的流程
- entry 书写麻烦
- ...

而 dva 正是用于解决这些问题。

dva 是基于现有应用架构 (redux + react-router + redux-saga 等)的一层轻量封装，没有引入任何新概念，全部代码不到 100 行。( Inspired by elm and choo. )

dva 是 framework，不是 library，类似 emberjs，会很明确地告诉你每个部件应该怎么写，这对于团队而言，会更可控。另外，除了 react 和 react-dom 是 peerDependencies 以外，dva 封装了所有其他依赖。
