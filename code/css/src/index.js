import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './component/HelloWorld';
import CssMoudleComponent from './component/CssMoudleComponent';
import './index.css';

ReactDOM.render(
  <div>
    <HelloWorld name="yang.xiaolong" />
    <CssMoudleComponent name="react css moudles" />
  </div>
  ,document.getElementById('root')
);
