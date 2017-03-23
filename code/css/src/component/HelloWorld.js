import React from 'react';
import './helloworld.css';

class HelloWorld extends React.Component{
  render(){
    return (
      <div className="title">Hello World，{this.props.name}</div>
    );
  }
}

export default HelloWorld;
