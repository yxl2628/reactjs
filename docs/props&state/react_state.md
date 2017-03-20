# React State(状态)

### state的作用
state是React中组件的一个对象.React把用户界面当做是状态机,想象它有不同的状态然后渲染这些状态,可以轻松让用户界面与数据保持一致.
React中,更新组件的state,会导致重新渲染用户界面(不要操作DOM).简单来说,就是用户界面会随着state变化而变化.
### state工作原理
常用的通知React数据变化的方法是调用setState(data,callback).这个方法会合并data到this.state,并重新渲染组件.渲染完成后,调用可选的callback回调.大部分情况不需要提供callback,因为React会负责把界面更新到最新状态.
### 哪些组件应该有state?
大部分组件的工作应该是从props里取数据并渲染出来.但是,有时需要对用户输入,服务器请求或者时间变化等作出响应,这时才需要state.组件应该尽可能的无状态化,这样能隔离state,把它放到最合理的地方(Redux做的就是这个事情?),也能减少冗余并易于解释程序运作过程.常用的模式就是创建多个只负责渲染数据的无状态(stateless)组件,在他们的上层创建一个有状态(stateful)组件并把它的状态通过props传给子级.有状态的组件封装了所有的用户交互逻辑,而这些无状态组件只负责声明式地渲染数据.
### 哪些应该作为state?
state应该包括那些可能被组件的事件处理器改变并触发用户界面更新的数据.这中数据一般很小且能被JSON序列化.当创建一个状态化的组件的时候,应该保持数据的精简,然后存入this.state.在render()中在根据state来计算需要的其他数据.因为如果在state里添加冗余数据或计算所得数据,经常需要手动保持数据同步.
### 哪些不应该作为state?
this.state应该仅包括能表示用户界面状态所需要的最少数据.因此,不应该包括:
  - 计算所得数据
  - React组件:在render()里使用props和state来创建它.
  - 基于props的重复数据:尽可能保持用props来做作为唯一的数据来源.把props保存到state中的有效的场景是需要知道它以前的值得时候,因为未来的props可能会变化.

下面的示例中创建的组件，constructor 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
```javascript
import React from 'react';
class ReactButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show:true
    }
  }
  handleClick = () =>{
    this.setState({
      show:!this.state.show
    });
  }
  render(){
    const text = this.state.show?'显示':'不显示';
    return (
      <div>
        <div>{text}</div>
        <div><button onClick={this.handleClick}>点击切换</button></div>
      </div>
    );
  }
}
export default ReactButton;
```


[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/state)
