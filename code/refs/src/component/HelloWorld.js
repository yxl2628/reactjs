import React from 'react';

class HelloWorld extends React.Component{
  handleClick = () => {
    this.refs.myInput.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default HelloWorld;
