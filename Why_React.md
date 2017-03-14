# React.js
### why React？
React是Facebook开发的一款JS库，那么Facebook为什么要建造React呢，主要为了解决什么问题，通过这个又是如何解决的？

Facebook认为MVC无法满足他们的扩展需求，由于他们非常巨大的代码库和庞大的组织，使得MVC很快变得非常复复杂，每当需要添加一项新的功能或特性时，系统的复杂度就成级数增长，致使代码变得脆弱和不可预测，结果导致他们的MVC正在土崩瓦解。认为MVC不适合大规模应用，当系统中有很多的模型和相应的视图时，其复杂度就会迅速扩大，非常难以理解和调试，特别是模型和视图间可能存在的双向数据流动。

解决这个问题需要“以某种方式组织代码，使其更加可预测”，由此,他们推出了React。

### React

构建那些数据会随时间改变的大型应用，做这些，React有两个主要的特点：

- 简单
简单的表述任意时间点你的应用应该是什么样子的，React将会自动的管理UI界面更新当数据发生变化的时候。

- 声明式
在数据发生变化的时候，React从概念上讲与点击了F5一样，实际上它仅仅是更新了变化的一部分而已。
React是关于构造可重用组件的，实际上，使用React你做的仅仅是构建组建。通过封装，使得组件代码复用、测试以及关注点分离更加容易。

另外在React官网上，通过《Why did we build React?》[为什么我们要建造React](https://github.com/yxl2628/reactjs/blob/master/Why_did_we_build_React.md)的文档中还可以了解到以下四点：
- React不是一个MVC框架
- React不使用模板
- 响应式更新非常简单
- HTML5仅仅是个开始

### React主要的原理
##### Virtual DOM 虚拟DOM
传统的web应用，操作DOM一般是直接更新操作的，但是我们知道DOM更新通常是比较昂贵的。而React为了尽可能减少对DOM的操作，提供了一种不同的而又强大的方式来更新DOM，代替直接的DOM操作。就是Virtual DOM,一个轻量级的虚拟的DOM，就是React抽象出来的一个对象，描述dom应该什么样子的，应该如何呈现。通过这个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。

为什么通过这多一层的Virtual DOM操作就能更快呢？ 这是因为React有个diff算法，更新Virtual DOM并不保证马上影响真实的DOM，React会等到事件循环结束，然后利用这个diff算法，通过当前新的dom表述与之前的作比较，计算出最小的步骤更新真实的DOM。

![](assets/35008-0f4e9a2fb5c19485.png)

##### Components 组件

在DOM树上的节点被称为元素，在这里则不同，Virtual DOM上称为commponent。Virtual DOM的节点就是一个完整抽象的组件，它是由commponents组成。

> component 的使用在 React 里极为重要, 因为 components 的存在让计算 DOM diff 更高效。

##### State 和 Render
React是如何呈现真实的DOM，如何渲染组件，什么时候渲染，怎么同步更新的，这就需要简单了解下State和Render了。state属性包含定义组件所需要的一些数据，当数据发生变化时，将会调用Render重现渲染，这里只能通过提供的setState方法更新数据。


### [React虚拟DOM的概念](https://github.com/yxl2628/reactjs/blob/master/React_DOM.md)
> 在Web开发中，需要将数据的变化实时反映到UI上，这时就需要对DOM进行操作，但是复杂或频繁的DOM操作通常是性能瓶颈产生的原因，为此，React引入了虚拟DOM（Virtual DOM）的机制。   
1. 什么是虚拟DOM？   
2. 虚拟DOM VS 直接操作原生DOM？   
3. 虚拟DOM VS MVVM？   
4. 对React虚拟DOM的误解   
