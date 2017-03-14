import React from 'react';
import TextComponent from './TextComponent';

class UnMounted extends React.Component{
  constructor(props){
    super(props)
    this.state = {isUnMounted: true};
  }
  hanldeChange(){
    this.setState({isUnMounted:!this.state.isUnMounted})
  }
  render(){
    console.log('开始执行render()');
    return (
      <div>
        {this.state.isUnMounted?
          <div>去掉了TextComponent组件</div>:<TextComponent myNumber="这是TextComponent组件" />
        }
        <div><button onClick={this.hanldeChange.bind(this)}>点击切换</button></div>
      </div>
    );
  }
}

export default UnMounted;
