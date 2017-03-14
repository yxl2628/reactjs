import React from 'react';

class Mounted extends React.Component{
  constructor(props) {
      super(props);
      this.state = {date: new Date().getTime()};
  }
  componentDidMount(){
    console.log('componentDidMount()');
  }
  componentWillMount(){
    console.log('componentWillMount()');
  }
  render(){
    console.log('开始执行render()');
    return (
      <div>Hello World，props:{this.props.name},state:{this.state.date}</div>
    );
  }
}

export default Mounted;
