import React from 'react';
import ReactDOM from 'react-dom';
import CreateClassComponent from './component/CreateClassComponent';
import ComponentComponent from './component/ComponentComponent';
import './index.css';

ReactDOM.render(
  <div>
    <CreateClassComponent />
    <br />
    <ComponentComponent />
  </div>,
  document.getElementById('root')
);
