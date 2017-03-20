import React from 'react';

class ReactButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show:true
    }
  }
  handleClick = () =>{
    this.setState({
      show:!this.state.show
    });
  }
  render(){
    const text = this.state.show?'显示':'不显示';
    return (
      <div>
        <div>{text}</div>
        <div><button onClick={this.handleClick}>点击切换</button></div>
      </div>
    );
  }
}

export default ReactButton;
