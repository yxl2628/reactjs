import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './component/App';
import Home from './component/Home';
import About from './component/About';
import Other from './component/Other';
import Form from './component/Form';
import Repos from './component/Repos';
import Protected from './component/Protected';
import Login from './component/Login';

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
      <Route path="/about" component={About}/>
      <Route path="/other" component={Other}/>
      <Route path="/form" component={Form}/>
      <Route path="/protected" component={Protected} onEnter={requireAuth} />
    </Route>
    <Route path="/repos/:userName/:repo" component={Repos}/>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('root'));
