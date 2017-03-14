import React from 'react';
import ReactDOM from 'react-dom';
import Mounted from './component/Mounted';
import Update from './component/Update';
import UnMounted from './component/UnMounted';
import './index.css';
/*
*Mounted阶段
*/
// ReactDOM.render(
//   <Mounted name="yang.xiaolong" />,
//   document.getElementById('root')
// );

/*
*Update阶段
*/
// ReactDOM.render(
//   <Update />,
//   document.getElementById('root')
// );

/*
*UnMounted阶段
*/
ReactDOM.render(
  <UnMounted />,
  document.getElementById('root')
);
