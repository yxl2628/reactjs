import React from 'react';

class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = {isClick:false}
  }
  handleClick = () => {
    this.setState({
      isClick:!this.state.isClick
    });
  }
  render(){
    const styleObj = {
      fontSize:20,
      color:'red',
      padding:this.state.isClick?'40px':'0'
    }
    return (
      <div style={styleObj} onClick={this.handleClick}>Hello World，{this.props.name}</div>
    );
  }
}

export default HelloWorld;
