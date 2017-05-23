# reactjs
记录一下自己学习React.js的历程

### [为什么要用React](https://github.com/yxl2628/reactjs/blob/master/Why_React.md)
> 介绍一下为什么我们要选用React,以及React的基础知识及原理

### [React前置知识](https://github.com/yxl2628/reactjs/blob/master/React_Knowledge_Map.md)
> React学习的前置知识,以及React本身的技术全家桶

- [html5](http://www.runoob.com/html/html5-intro.html)
- [css3](http://www.runoob.com/css3/css3-tutorial.html)
- [es6](http://es6.ruanyifeng.com/)
- [Node.js&NPM](http://www.runoob.com/nodejs/nodejs-tutorial.html)
- [Babel](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- [CSS Modules(Less、Sass)](http://www.bootcss.com/p/lesscss/)
- [Webpack](http://www.jianshu.com/p/42e11515c10f)

上面的是前端的基础教程，暂时链接到了外网，但是以后会慢慢更新成自己写的

### React核心知识
- [安装React](https://github.com/yxl2628/reactjs/blob/master/docs/Insallation.md)
  > 我们使用官方提供的安装方式来安装React，这种方式的好处是我们会自动集成webpack react babel eslint，减少了我们自己搭建开发环境的时间，让我们更加专注于react开发，而且后期我们会使用阿里的dva来实战开发。

- React基础
  - [JSX内置表达式](https://github.com/yxl2628/reactjs/blob/master/docs/basic/React_JSX.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/jsx)】
  - [React组件](https://github.com/yxl2628/reactjs/blob/master/docs/basic/React_Component.md)【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/component)】
  - [React多组件嵌套](https://github.com/yxl2628/reactjs/blob/master/docs/basic/React_Component.md#多嵌套组件) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/multiple_component)】
  - [生命周期](https://github.com/yxl2628/reactjs/blob/master/docs/basic/React_Lifecycle.md)【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/lifecycle)】
- React属性与事件  
  - [State属性](https://github.com/yxl2628/reactjs/blob/master/docs/props&state/react_state.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/state)】
  - [props属性](https://github.com/yxl2628/reactjs/blob/master/docs/props&state/react_props.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/props)】
  - [可复用组件](https://github.com/yxl2628/reactjs/blob/master/docs/props&state/reusable_components.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/reusable_components)】
  - [事件与数据双向绑定](https://github.com/yxl2628/reactjs/blob/master/docs/props&state/event_data_bind.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/bind)】
  - [组件Refs](https://github.com/yxl2628/reactjs/blob/master/docs/props&state/react_refs.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/refs)】
- React样式
  - [style](https://github.com/yxl2628/reactjs/blob/master/docs/style&css/react_style.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/style)】
  - [css](https://github.com/yxl2628/reactjs/blob/master/docs/style&css/react_css.md) 【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/css)】

### [React技术栈](https://github.com/yxl2628/reactjs/blob/master/React_Technology_Ttack.md)
- [router](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/React_Router.md)【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/react_router)】
- [Redux](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/React_Redux.md)【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/redux)】
- [React-Redux](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/React_Redux2.md)【[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/redux2)】
- [Redux-saga](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/Redux_saga.md)【示例代码会结合dva实战来给出】
- [DVA](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)

### dva实战
- [dva创建工程](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/dva_example.md#搭建工程)
- [mock数据](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/dva_example.md#mock数据)
- [完成User组件](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/dva_example.md#完成User组件)
- [添加layout](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/dva_example.md#添加layout)
- [处理分页](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/dva_example.md#处理分页)
 
### dva完整示例代码
> 写了一个基本上涵盖了所有dva知识的完整示例，不过如果想要读懂这个示例，上面的那个入门实战还是要学习的，下面的这个示例代码，是公司要做的新项目，我搭建的框架，基本上涵盖了国际化解决方案、完整的mock数据模拟、动态路由加载、统一错误处理等项目中会遇到的各种各样的需求。

【[查看示例代码](https://github.com/yxl2628/dva)】
