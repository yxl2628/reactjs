# React JSX
React 使用 JSX 来替代常规的 JavaScript。
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
我们不需要一定使用 JSX，但它有以下优点：
- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。

需要注意的是，如果不是通过webpack打包，而是通过html引入的话，script 必须使用`<script type="javasript/jsx"></javasript>`才能让html正确的加载到react的语法，当然，为了更好的体验，本章我们特意使用了html引入的方式来学习，而不是webpack打包，同时需要注意的是，我们并没有使用`<script type="javasript/jsx"></javasript>`,而是使用了`<script  type="text/babel"></script>`，是因为既然我们学习了ES6的语法，那么就尽可能的使用它来记住它。

### 使用JSX
JSX 看起来类似 HTML ，我们可以看下实例:
```JavaScript
ReactDOM.render(
    <div>
    <h1>React教程</h1>
    <h2>欢迎学习 React</h2>
    <p data-myattribute = "somevalue">这是属于React的Hello World!</p>
    </div>
    ,
    document.getElementById('example')
);
```
我们可以在以上代码中嵌套多个 HTML 标签，但是需要使用一个 div 元素包裹它，来保证返回值永远只有一个元素,如果向下面这样写,就会发生错误:
```JavaScript
//错误的示例
ReactDOM.render(
    <h1>React教程</h1>
    <h2>欢迎学习 React</h2>
    <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
    ,
    document.getElementById('example')
);
```
同级的元素有三个 h1、h2、p这样React无法区分哪个是顶级元素，会报错

### JavaScript 表达式
我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中。实例如下：
```JavaScript
ReactDOM.render(
    <div>
      <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);
```
在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。以下实例中如果变量 i 等于 1 浏览器将输出 true, 如果修改 i 的值，则会输出 false.
```JavaScript
ReactDOM.render(
    <div>
      <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example')
);
```

### 样式
React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
```JavaScript
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>React教程</h1>,
    document.getElementById('example')
);
```
具体详细的样式使用方法，会单独提炼出一个章节来讲解

### 注释
注释需要写在花括号中，实例如下：
```JavaScript
ReactDOM.render(
    <div>
    <h1>React教程</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```

### 数组
JSX 允许在模板中插入数组，数组会自动展开所有成员：
```JavaScript
var arr = [
  <h1>React教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```
***

> 注意:
由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。

[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/jsx)
