import React from 'react';
import GrandsonComponent from './GrandsonComponent';

class SecondChildComponent extends React.Component{
  render(){
    return (
      <div>
        <div>这个是组件二，父组件传过来的值为: <span style={{color:'red'}}>{this.props.name}</span></div>
        <h5>子组件里面依然可以嵌套组件：</h5>
        <GrandsonComponent name={this.props.name} />
      </div>

    );
  }
}

export default SecondChildComponent;
