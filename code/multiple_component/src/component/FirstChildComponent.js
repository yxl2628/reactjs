import React from 'react';

class FirstChildComponent extends React.Component{
  render(){
    return (
      <div>这个是组件一，父组件传过来的值为: <span style={{color:'red'}}>{this.props.name}</span></div>
    );
  }
}

export default FirstChildComponent;
