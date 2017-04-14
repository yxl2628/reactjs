# React Redux
React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。有两个方面，它没涉及:
1. 代码结构
2. 组件之间的通信
对于大型的复杂应用来说，这两方面恰恰是最关键的。因此，只用 React 没法写大型应用。
为了解决这个问题，2014年 Facebook 提出了 Flux 架构的概念，引发了很多的实现。2015年，Redux 出现，将 Flux 与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

如果你的UI层非常简单，没有很多互动，Redux 就是不必要的，用了反而增加复杂性。
1. 用户的使用方式非常简单
2. 用户之间没有协作
3. 不需要与服务器大量交互，也没有使用 WebSocket
4. 视图层（View）只从单一来源获取数据
上面这些情况，都不需要使用 Redux。

那么Redux的使用场景是什么呢?
1. 用户的使用方式复杂
2. 不同身份的用户有不同的使用方式（比如普通用户和管理员）
3. 多个用户之间可以协作
4. 与服务器大量交互，或者使用了WebSocket
5. View要从多个来源获取数据

如果从组件的角度考虑，那么以下的情况，你就需要使用Redux：
1. 某个组件的状态，需要共享
2. 某个状态需要在任何地方都可以拿到
3. 一个组件需要改变全局状态
4. 一个组件需要改变另一个组件的状态
如果不使用 Redux 或者其他状态管理工具，不按照一定规律处理状态的读写，代码很快就会变成一团乱麻。你需要一种机制，可以在同一个地方查询状态、改变状态、传播状态的变化。

### 设计思想
1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面。

### 基本概念
#### Store   
Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
Redux 提供createStore这个函数，用来生成 Store。
```javascript
import { createStore } from 'redux';
const store = createStore(fn);
```
上面代码中，createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。

#### state   
Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
当前时刻的 State，可以通过store.getState()拿到。
```javascript
import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
```
Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。

#### action   
State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置，社区有一个规范可以参考。
```javascript
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
```
上面代码中，Action 的名称是ADD_TODO，它携带的信息是字符串Learn Redux。
可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。

#### Action Creator   
View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
```javascript
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
```
上面代码中，addTodo函数就是一个 Action Creator。

#### store.dispatch()   
store.dispatch()是 View 发出 Action 的唯一方法。
```javascript
import { createStore } from 'redux';
const store = createStore(fn);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
```
上面代码中，store.dispatch接受一个 Action 对象作为参数，将它发送出去。
结合 Action Creator，这段代码可以改写如下
```javascript
store.dispatch(addTodo('Learn Redux'));
```

#### Reducer   
Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
```javascript
const reducer = function (state, action) {
  // ...
  return new_state;
};
```
Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
纯函数是函数式编程的概念，必须遵守以下一些约束。
  1. 不得改写参数
  2. 不能调用系统 I/O 的API
  3. 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果
由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象，请参考下面的写法。
```javascript
// State 是一个对象
function reducer(state, action) {
  return { ...state, ...newState };
}
// State 是一个数组
function reducer(state, action) {
  return [...state, newItem];
}
```
最好把 State 对象设成只读。你没法改变它，要得到新的 State，唯一办法就是生成一个新对象。这样的好处是，任何时候，与某个 View 对应的 State 总是一个不变的对象。

#### store.subscribe()   
Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
```javascript
import { createStore } from 'redux';
const store = createStore(reducer);

store.subscribe(listener);
```
显然，只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
store.subscribe方法返回一个函数，调用这个函数就可以解除监听。
```javascript
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

unsubscribe();
```

### Store 的实现
Store 提供了三个方法：
store.getState()
store.dispatch()
store.subscribe()
可以通过以下办法，得到这三个方法：
```javascript
import { createStore } from 'redux';
let { subscribe, dispatch, getState } = createStore(reducer);
```

### Reducer 的拆分
Reducer 函数负责生成 State。由于整个应用只有一个 State 对象，包含所有数据，对于大型应用来说，这个 State 必然十分庞大，导致 Reducer 函数也十分庞大。
比如：
```javascript
const chatReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT:
      return Object.assign({}, state, {
        chatLog: state.chatLog.concat(payload)
      });
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        statusMessage: payload
      });
    case CHANGE_USERNAME:
      return Object.assign({}, state, {
        userName: payload
      });
    default: return state;
  }
};
```
上面代码中，三种 Action 分别改变 State 的三个属性。
ADD_CHAT：chatLog属性
CHANGE_STATUS：statusMessage属性
CHANGE_USERNAME：userName属性
这三个属性之间没有联系，这提示我们可以把 Reducer 函数拆分。不同的函数负责处理不同属性，最终把它们合并成一个大的 Reducer 即可。
```javascript
const chatReducer = (state = defaultState, action = {}) => {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    userName: userName(state.userName, action)
  }
};
```
上面代码中，Reducer 函数被拆成了三个小函数，每一个负责生成对应的属性。
这样一拆，Reducer 就易读易写多了。而且，这种拆分与 React 应用的结构相吻合：一个 React 根组件由很多子组件构成。这就是说，子组件与子 Reducer 完全可以对应。
Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
```javascript
import { combineReducers } from 'redux';

const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})

export default todoApp;
```
上面的代码通过combineReducers方法将三个子 Reducer 合并成一个大的函数。
这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名。如果不同名，就要采用下面的写法。
总之，combineReducers()做的就是产生一个整体的 Reducer 函数。该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。
可以把所有子 Reducer 放在一个文件里面，然后统一引入。
```javascript
import { combineReducers } from 'redux'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
```

### 工作流程
![](../../assets/redux.jpg)
首先，用户发出 Action。
`store.dispatch(action);`
然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。
`let nextState = todoApp(previousState, action);`
State 一旦有变化，Store 就会调用监听函数。
`store.subscribe(listener);`
listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。

### 代码示例
下面是一个简单的计数器，唯一的作用就是把参数value的值，显示在网页上。Store 的监听函数设置为render，每次 State 的变化都会导致网页重新渲染。
```javascript
//index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './component/Counter'
import counter from './reducers'

const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
```
```javascript
//reducers/index.js
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```
```javascript
//component/Counter.js
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times{' '}<button onClick={onIncrement}>+</button>{' '}<button onClick={onDecrement}>-</button>
      </p>
    )
  }
}

export default Counter
```
