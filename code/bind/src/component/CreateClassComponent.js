import React from 'react';

const ClassComponent = React.createClass({
  handleClick() {
    console.log(this);
  },
  render() {
    return (
      <div><button onClick={this.handleClick}>React.createClass默认会绑定，无须处理</button></div>
    );
  }
});

export default ClassComponent;
