import React from 'react';

class HelloWorld extends React.Component{
  render(){
    return (
      <div>Hello World，{this.props.name}</div>
    );
  }
}

export default HelloWorld;
