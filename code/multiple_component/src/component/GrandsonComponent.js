import React from 'react';

class GrandsonComponent extends React.Component{
  render(){
    return (
      <div>这个是“子-子组件”，“父-父组件”传过来的值为: <span style={{color:'red'}}>{this.props.name}</span></div>
    );
  }
}

export default GrandsonComponent;
