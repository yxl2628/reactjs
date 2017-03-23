# React 事件绑定
之前我们已经知道了，React有三种写法[《React创建组件的三种方式及其区别》](https://github.com/yxl2628/reactjs/blob/master/docs/advanced/React_Component.md)，这里面也粗略介绍了一下三种写法的区别，其中出去无状态组件只有返回值以外，另外两种写法都会遇到事件绑定的问题：
### React.createClass
React.createClass创建的组件，其每一个成员函数的this都有React自动绑定，任何时候使用，直接使用this.method即可，函数中的this会被正确设置。
```javascript
import React from 'react';

const ClassComponent = React.createClass({
  handleClick() {
    console.log(this);
  },
  render() {
    return (
      <div><button onClick={this.handleClick}>点击</button></div>
    );
  }
});

export default ClassComponent;
```
### React.Component
React.Component创建的组件，其成员函数不会自动绑定this，需要开发者手动绑定，否则this不能获取当前组件实例对象。
```javascript
import React from 'react';

class ComponentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(this); // null
  }
  render() {
    return (
      <div><button onClick={this.handleClick}>点击</button></div>
    );
  }
}

export default ComponentComponent;

```
当然，React.Component有三种手动绑定方法：可以在构造函数中完成绑定，也可以在调用时使用method.bind(this)来完成绑定，还可以使用arrow function来绑定。拿上例的handleClick函数来说，其绑定可以有：
```javascript
constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this); //构造函数中绑定
  }
```
```javascript
<div onClick={this.handleClick.bind(this)}></div> //使用bind来绑定
```
```javascript
<div onClick={()=>this.handleClick()}></div> //使用arrow function来绑定
```
下面是示例代码：
```javascript
import React from 'react';

class ComponentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handle2Click = this.handle2Click.bind(this); //构造函数中绑定
  }
  handleClick() {
    console.log(this); // null
  }
  handle2Click() {
    console.log(this);
  }
  handle3Click() {
    console.log(this);
  }
  handle4Click = () => {
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>React.Component方式不绑定获取不到值</button>
        <br /><br />
        <button onClick={this.handle2Click}>构造函数中绑定</button>
        <br /><br />
        <button onClick={this.handle3Click.bind(this)}>使用bind来绑定</button>
        <br /><br />
        <button onClick={this.handle4Click}>构造函数中绑定</button>
      </div>
    );
  }
}

export default ComponentComponent;
```

[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/bind)
