import React from 'react';
import ReactDOM from 'react-dom';
// import HelloWorld from './component/HelloWorld';
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

// ReactDOM.render(
//   <HelloWorld name="yang.xiaolong" />,
//   document.getElementById('root')
// );
