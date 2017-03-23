# React Refs
React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。
使用方法
绑定一个 ref 属性到 render 的返回值上：
`<input ref="myInput" />`
在其它代码中，通过 this.refs 获取支撑实例:
```javascript
var input = this.refs.myInput;
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();
```
下面是完整示例：
```javascript
import React from 'react';

class HelloWorld extends React.Component{
  handleClick = () => {
    this.refs.myInput.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default HelloWorld;
```
指的注意的是：
1. 还有一种方法也能获取到
  ```javascript
  var inputDom = document.getElemenById('myInput');
  ReactDom.findDOMNODE(inputDom).style.color = 'green';
  ```
  但是，强烈不推荐，这种方式违背了React不直接操作dom元素的初衷，只有用Refs才是访问组建内部Dom节点的唯一可靠方法。
2. Refs会自动销毁对子组件的引用，引用会自动为你管理好！如果子组件被销毁，它的引用也会被销毁。这样你就不必担心内存问题。
3. 不要再render或者render之前对Refs进行调用，因为在未进行渲染之前，访问不到该dom节点
4. 不要滥用。引用(ref)是一种很棒的办法，用来往一个指定的子实例发送一个不适于使用响应式props和state传递的消息。你不应当在抽象数据流的时候到处使用引用。正常情况下，尽可能使用响应式数据流，仅仅在某些不使用响应式处理的场合使用引用。如果你对于React并非经验丰富，你一开始使用引用可能只是为了快速实现某些功能。如果是这种情况，建议你花一点时间仔细考虑一下状态应该保存在组件层次中的哪个部分。通常情况下，这种需求都可以通过在较高层次中保存状态来解决。这样通常你都能排除掉不合理的对引用的使用——大部分情况下正常的数据流就可以满足你的目标。
***
[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/refs)
