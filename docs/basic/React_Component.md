# React 组件
如何使用组件使得我们的应用更容易来管理。
上一章使用了html引入的方式来开发，但是实际开发中，我们并不会用这么low的方式，而是使用webpack打包的方式，让代码更加优雅，更加便于维护。
接下来的章节中，我们将要统一使用这种模式来开发。

### Hello World
接下来我们是用组件来封装Hello World
``` javascript
//组件
import React from 'react';

class HelloWorld extends React.Component{
  render(){
    return (
      <div>Hello World,{this.props.name}</div>
    );
  }
}

export default HelloWorld;
```
首先import react库，然后定义了HelloWorld这个组件，并使用export暴露出去。
所有组件类都必须有自己的 render 方法，用于输出组件。

接下来就是在index.js中使用组件：
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './component/HelloWorld';
import './index.css';

ReactDOM.render(
  <HelloWorld name="yang.xiaolong" />,
  document.getElementById('root')
);
```
这里我们同时使用了react-dom，所以也引入了react-dom，HelloWorld的引入方式同react一样，只不过需要注意路径正确。
在`<HelloWorld name="yang.xiaolong" />`中把name这个属性传递给了子组件，然后在子组件中通过this.props.name获取。

注意，组件类的第一个字母必须大写，否则会报错，比如HelloWorld不能写成helloWorld。另外，组件类只能包含一个顶层标签，否则也会报错。


[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/component)

***

### 多嵌套组件
单个组件完成后，接下来就可以解决如何组合使用组件，如何套用组件了
首先定义组件，先定义两个同级的子组件：
```JavaScript
//FirstChildComponent.js
import React from 'react';

class FirstChildComponent extends React.Component{
  render(){
    return (
      <div>这个是组件一，父组件传过来的值为: <span style={{color:'red'}}>{this.props.name}</span></div>
    );
  }
}

export default FirstChildComponent;
//SecondChildComponent.js
import React from 'react';
import GrandsonComponent from './GrandsonComponent';

class SecondChildComponent extends React.Component{
  render(){
    return (
      <div>
        <div>这个是组件二，父组件传过来的值为: <span style={{color:'red'}}>{this.props.name}</span></div>
        <h5>子组件里面依然可以嵌套组件：</h5>
        <GrandsonComponent name={this.props.name} />
      </div>

    );
  }
}

export default SecondChildComponent;
```
上面代码中，我们在组件二中，又做了一层嵌套，给子组件又嵌套了一层子组件，其中的属性name，依然从顶级的父组件中传入
```JavaScript
//GrandsonComponent.js
import React from 'react';

class GrandsonComponent extends React.Component{
  render(){
    return (
      <div>这个是“子-子组件”，“父-父组件”传过来的值为: <span style={{color:'red'}}>{this.props.name}</span></div>
    );
  }
}

export default GrandsonComponent;
```
我们将这个组件嵌套进了组件二中，这样，就有了同级的组件嵌套以及多级的组件嵌套了，然后写一个父组件，将组件一、二组合进来：
```JavaScript
import React from 'react';
import FirstChildComponent from './FirstChildComponent';
import SecondChildComponent from './SecondChildComponent';

class ParentComponent extends React.Component{
  render(){
    return (
      <div>
        <h1>这是父组件的页面</h1>
        <h3>这里嵌套了第一个子组件：</h3>
        <FirstChildComponent name="父组件的值-1" />
        <h3>这里嵌套了第二个子组件：</h3>
        <SecondChildComponent name="父组件的值-2" />
      </div>
    );
  }
}

export default ParentComponent;
```
接下来就可以在index.js中使用了
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './component/ParentComponent';
import './index.css';

ReactDOM.render(
  <ParentComponent/>,
  document.getElementById('root')
);
```
[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/multiple_component)
