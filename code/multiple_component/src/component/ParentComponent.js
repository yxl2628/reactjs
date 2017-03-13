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
