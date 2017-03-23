# React Style
React 可以以对象的形式来定义样式，比如：
```javascript
class HelloWorld extends React.Component{
  render(){
    const styleObj = {
      fontSize:20,
      color:'red'
    }
    return (
      <div style={styleObj}>Hello World，{this.props.name}</div>
    );
  }
}
```
值得注意的是，style是使用的驼峰式命名规则，比如style中的font-size,我们写成fontSize，padding-left写成paddingLeft这样
上述代码也可以不单独定义styleObj，而是直接写到jsx上，比如：
```javascript
class HelloWorld extends React.Component{
  render(){
    return (
      <div style={{fontSize:20,color:'red'}}>Hello World，{this.props.name}</div>
    );
  }
}
```
注意{{}}，第一个{}意思是要执行js语句，第二个{}意思是style是一个对象

style还可以灵活的使用，比如：
```javascript
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
```
padding属性，是根据state值来变化的，比如这种需求将来可以用在菜单的显示隐藏上。

***
[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/style)
