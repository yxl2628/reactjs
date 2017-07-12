# React 路由
真正学会 React 你会发现，它不是一个库，也不是一个框架，而是一个庞大的体系。React 不使用 HTML，而使用 JSX 。它打算抛弃 DOM，要求开发者不要使用任何 DOM 方法。它甚至还抛弃了 SQL ，自己发明了一套查询语言 GraphQL 。当然，这些你都可以不用，React 照样运行，但是就发挥不出它的最大威力。你只要用了 React，就会发现合理的选择就是，采用它的整个技术栈。
本文讲的是React 体系的一个重要部分：路由库React-Router。它是官方维护的，事实上也是唯一可选的路由库。它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。
### 基础示例
目前dva上用的是2.8.1，但是官方已经更新到了4.0.0，我们依然使用2.8.1.
4.0.0的话，可以看react官方给出的[示例](https://reacttraining.com/react-router/web/guides/quick-start) [中文地址](https://reacttraining.cn/web/guides/quick-start)。
React Router 4.x没有做到平滑升级，对原有版本的升级做出了很大的破坏，而大部分项目依然在使用2.x或者3.x，所以我们也按照2.x 3.x来学习，4.x等到普及使用之后，再做更新。

接下来讲解React Router
安装react-router，因为目前react已经升级到了4.0.0，所以默认安装会安装成4.0.0，我们需要指定版本来安装
```shell
npm install --save react-router@2.*
```
使用时，路由器Router就是React的一个组件。Router组件本身只是一个容器，真正的路由要通过Route组件定义。
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './component/App';
import About from './component/About';
import Other from './component/Other';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/other" component={Other}/>
    </Route>
  </Router>
), document.getElementById('root'));
```
上面代码中，用户访问根路由/（比如http://www.example.com/），组件APP就会加载到document.getElementById('root')。
你可能还注意到，Router组件有一个参数history，它的值hashHistory表示，路由的切换由URL的hash变化决定，即URL的#部分发生变化。举例来说，用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/。
Route组件定义了URL路径与组件的对应关系。你可以同时使用多个Route组件。
```javascript
<Router history={hashHistory}>
  <Route path="/" component={App}/>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About}/>
</Router>
```
Route组件还可以嵌套。
```javascript
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/about" component={About}/>
    <Route path="/other" component={Other}/>
  </Route>
</Router>
```
App组件中嵌套的子组件可以使用this.props.children来展示
```javascript
import React from 'react'
import { Link } from 'react-router'

const App = ({children}) => (
  <div>
    <h1>Hello React Router</h1>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/other">Other</Link></li>
    </ul>
    <div>
      {children||''}
    </div>
  </div>
)
export default App;
```
子路由也可以不写在Router组件里面，单独传入Router组件的routes属性。
```javascript
let routes = <Route path="/" component={App}>
  <Route path="/about" component={About}/>
  <Route path="/other" component={Other}/>
</Route>;

<Router routes={routes} history={browserHistory}/>
```

### 通配符
上述示例中的path属性，可以使用通配符
```javascript
<Route path="/hello/:name">
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/files/*.*">
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*">
// 匹配 /files/
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/**/*.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg
```
其规则如下：
1.  :paramName匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。
2.  ()表示URL的这个部分是可选的。
3.  *匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。
4.  ** 匹配任意字符，直到下一个/、?、#为止。匹配方式是贪婪模式。

path属性也可以使用相对路径（不以/开头），匹配时就会相对于父组件的路径，比如上面的示例。路由匹配规则是从上到下执行，一旦发现匹配，就不再匹配其余的规则了。
设置路径参数时，需要特别小心这一点。比如：
```javascript
<Router>
  <Route path="/:userName/:id" component={UserPage}/>
  <Route path="/about/me" component={About}/>
</Router>
```
上面代码中，用户访问/about/me时，不会触发第二个路由规则，因为它会匹配/:userName/:id这个规则。因此，带参数的路径一般要写在路由规则的底部。
此外，URL的查询字符串/foo?bar=baz，可以用this.props.location.query.bar获取。

### IndexRoute 组件
上面的示例代码存在一个问题：
```javascript
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/about" component={About}/>
    <Route path="/other" component={Other}/>
  </Route>
</Router>
```
这是时候，我们访问根路径，this.props.children是undefined，所以我们用了{children||''}来解决，但是这么做其实是个变通的方式，React Router有没有真正的解决办法呢，其实是有的，就是IndexRoute 组件
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
    <Route path="/about" component={About}/>
    <Route path="/other" component={Other}/>
  </Route>
</Router>
现在，用户访问/的时候，加载的组件就是Home组件了。这种组件结构就很清晰了：App只包含下级组件的共有元素，本身的展示内容则由Home组件定义。这样有利于代码分离，也有利于使用React Router提供的各种API。
> 注意，IndexRoute组件没有路径参数path。

### Redirect 组件
<Redirect>组件用于路由的跳转，即用户访问一个路由，会自动跳转到另一个路由。
```javascript
<Route path="inbox" component={Inbox}>
  {/* 从 /inbox/messages/:id 跳转到 /messages/:id */}
  ＜Redirect from="messages/:id" to="/messages/:id" />
</Route>
```
现在访问/inbox/messages/5，会自动跳转到/messages/5。

### IndexRedirect 组件
IndexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件。
```javascript
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to="/about" />
    <Route path="/about" component={About}/>
    <Route path="/other" component={Other}/>
  </Route>
</Router>
```
上面代码中，用户访问根路径时，将自动重定向到子组件welcome。

### Link
Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。它基本上就是<a>元素的React 版本，可以接收Router的状态。
```javascript
const App = ({children}) => (
  <div>
    <h1>Hello React Router</h1>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/other">Other</Link></li>
    </ul>
    <div>
      {children||''}
    </div>
  </div>
)
```
如果希望当前的路由与其他路由有不同样式，这时可以使用Link组件的activeStyle属性。
```javascript
<Link to="/about" activeStyle={{color: 'red'}}>About</Link>
<Link to="/other" activeStyle={{color: 'red'}}>Other</Link>
```
上面代码中，当前页面的链接会红色显示。
另一种做法是，使用activeClassName指定当前路由的Class。
```javascript
<Link to="/about" activeClassName='active'>About</Link>
<Link to="/other" activeClassName='active'>Other</Link>
```
上面代码中，当前页面的链接的class会包含active。

在Router组件之外，导航到路由页面，可以使用浏览器的History API，像下面这样写。
```javascript
import { browserHistory } from 'react-router';
browserHistory.push('/some/path');
```

### IndexLink
如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件。
这是因为对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配。
```javascript
<IndexLink to="/" activeClassName="active">
  Home
</IndexLink>
```
上面代码中，根路由只会在精确匹配时，才具有activeClassName。
另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。
```javascript
<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
  Home
</Link>
```
实际上，IndexLink就是对Link组件的onlyActiveOnIndex属性的包装。

### histroy 属性
Router组件的history属性，用来监听浏览器地址栏的变化，并将URL解析成一个地址对象，供 React Router 匹配。
history属性，一共可以设置三种值。
- browserHistory
- hashHistory
- createMemoryHistory
如果设为hashHistory，路由将通过URL的hash部分（#）切换，URL的形式类似example.com/#/some/path。
```javascript
import { hashHistory } from 'react-router'
render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)
```

如果设为browserHistory，浏览器的路由就不再通过Hash完成了，而显示正常的路径example.com/some/path，背后调用的是浏览器的History API。
```javascript
import { hashHistory } from 'react-router'
render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
```
但是，这种情况需要对服务器改造。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。
如果开发服务器使用的是webpack-dev-server，加上--history-api-fallback参数就可以了。

createMemoryHistory主要用于服务器渲染。它创建一个内存中的history对象，不与浏览器URL互动。
```javascript
const history = createMemoryHistory(location)
```

当然，实际应用中，我们并没有这么复杂，一般情况下，使用hashHistory就足够了。

### 表单处理
Link组件用于正常的用户点击跳转，但是有时还需要表单跳转、点击按钮跳转等操作。这些情况怎么跟React Router对接呢？
下面是一个表单。
```javascript
<form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="userName"/>
  <input type="text" placeholder="repo"/>
  <button type="submit">Go</button>
</form>
```
方法就是使用browserHistory.push

```javascript
import React from 'react'
import { hashHistory } from 'react-router'

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    hashHistory.push(path);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/>
            <input type="text" placeholder="repo"/>
            <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}

export default Form;
```
注意，因为我们项目中使用的是hashHistory的方式，所以跳转也要用hashHistory.push,这种地方要记得灵活使用，如果使用browserHistory，会有什么问题，大家可以试试看。

### 路由的钩子
每个路由都有Enter和Leave钩子，用户进入或离开该路由时触发。

Enter钩子可以用来做认证。
```javascript
const isLogin = false;
const requireAuth = (nextState, replace) => {
    if (!isLogin) {
        replace('/login');
    }
}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/protected" component={Protected} onEnter={requireAuth} />
    </Route>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('root'));
```
下面是一个Leave钩子的应用，当用户离开一个路径的时候，跳出一个提示框，要求用户确认是否离开。
```javascript
import React from 'react'
import { hashHistory } from 'react-router'

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    hashHistory.push(path);
  }
  componentWillMount(){
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routeWillLeave
        )
    }

    routeWillLeave(nextLocation){
        return `是否确定离开本页面到 ${nextLocation.pathname}`;
    }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/>
            <input type="text" placeholder="repo"/>
            <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}
Form.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Form;
```
***
[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/react_router)
