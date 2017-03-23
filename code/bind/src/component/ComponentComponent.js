import React from 'react';

class ComponentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handle2Click = this.handle2Click.bind(this); //构造函数中绑定
  }
  handleClick() {
    console.log(this); // null
  }
  handle2Click() {
    console.log(this);
  }
  handle3Click() {
    console.log(this);
  }
  handle4Click = () => {
    console.log(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>React.Component方式不绑定获取不到值</button>
        <br /><br />
        <button onClick={this.handle2Click}>构造函数中绑定</button>
        <br /><br />
        <button onClick={this.handle3Click.bind(this)}>使用bind来绑定</button>
        <br /><br />
        <button onClick={this.handle4Click}>构造函数中绑定</button>
      </div>
    );
  }
}

export default ComponentComponent;
