# React props
state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。
### 手动传递
大部分情况下你应该显式地向下传递 props。这样可以确保只公开你认为是安全的内部 API 的子集。比如上面的例子，我们很明确的知道，name是HelloWorld这个Component公开的props
```javascript
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactButton from './component/ReactButton';
import './index.css';
ReactDOM.render(
  <ReactButton/>,
  document.getElementById('root')
);
//HelloWorld.js
import React from 'react';
class HelloWorld extends React.Component{
  render(){
    return (
      <div>Hello World，{this.props.name}</div>
    );
  }
}
export default HelloWorld;
```
上述示例中，name 属性就是通过 this.props.name 来获取。

### 使用...来传递
有时候，如果对象属性过多，每个都要使用key=value的方式传递，会极大的造成我们的开发量，所以这里推荐使用...来简化开发
比如：
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from './component/OtherComponent';
import './index.css';
const person = {
  name:'yang.xiaolong',
  age:30,
  sex:'male',
  email:'yxl2628@qq.com'
}
ReactDOM.render(
  <OtherComponent {...person}/>,
  document.getElementById('root')
);
```
上述示例中，我们通过...来讲person全部传递给了子组件，如果不用这种方式，我们将要写很长一段代码。
```javascript
ReactDOM.render(
  <OtherComponent name={person.name} age={person.age} sex={person.sex} email={person.email}/>,
  document.getElementById('root')
);
```
我们例子中才四个属性，就要写成这样，如果更多的属性呢，如果层级更多呢，所以很有必要简化。

### 使用解构赋值模式来接收props
上面我们使用了...person来传递参数，那么在子组件中，我们需要这么获取：
```javascript
import React from 'react';
const OtherComponent = (props) =>{
  return(
    <div>
      <div><span>姓名：</span><span>{this.props.name}</span></div>
      <div><span>年龄：</span><span>{this.props.name}</span></div>
      <div><span>性别：</span><span>{this.props.name}</span></div>
      <div><span>邮箱：</span><span>{this.props.name}</span></div>
    </div>
  )
}
export default OtherComponent;
```
上述代码中，我们不断使用this.props来获取，这只是简单的一次调用，如果多次的，势必每次都需要调用this.props，上面都可以简化，没理由这里不能简化，所以就用到了解构赋值
```javascript
import React from 'react';
const OtherComponent = ({name,age,sex,email}) =>{
  return(
    <div>
      <div><span>姓名：</span><span>{name}</span></div>
      <div><span>年龄：</span><span>{age}</span></div>
      <div><span>性别：</span><span>{sex}</span></div>
      <div><span>邮箱：</span><span>{email}</span></div>
    </div>
  )
}
export default OtherComponent;
```
这么做之后，无论我们调用多少次，如何调用，都可以直接取值了，解构一次，随地可用。

[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/props)
