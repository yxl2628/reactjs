import React from 'react';
import ReactDOM from 'react-dom';
import UseableComponent from './component/UseableComponent';
import './index.css';

// ReactDOM.render(
//   <UseableComponent name="yang.xiaolong" id="1" age="30" email="yxl2628@qq.com" />,
//   document.getElementById('root')
// );

/*
*错误的用法
*/
// ReactDOM.render(
//   <UseableComponent name="yang.xiaolong" age="sss" email="yxl2628@qq.com" />,
//   document.getElementById('root')
// );

/*
*默认值
*/
ReactDOM.render(
  <UseableComponent name="yang.xiaolong"/>,
  document.getElementById('root')
);
