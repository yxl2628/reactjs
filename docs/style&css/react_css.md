# React css
### 直接引用
上面讲的Style有个很大的问题，就是不符合我们html与css分离的思想，将来会导致代码混乱不利于阅读，所以我们还是要解决如何使用css
webpack（我们使用的react-create-app集成了webpack）可以使用loader中的style-loader、css-loader来进行让我们使用import的方式导入css，比如：
```css
.title{
  font-size: 20px;
  padding:20px;
  color:red;
}
```
```javascript
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
```
只需要通过import直接引入，即可使用helloworld.css
注意：因为class以及for是js的关键字，所以这里使用要用className 和 forHtml

### CSS Modules
上面的示例还是会遇到问题，我们追求的是组件化，那理论上，在A组件上，我使用了title命名样式，在B组建中，同样我也想使用title命名样式，但是组件是独立的，即我们两个组件中的title其实是不同的样式，但是如果用上面的方法，title样式，就是全局的，没办法组件内自定义。我们可以使用css modules来解决。
css modules即使css 模块化，使用方法如下：
```javascript
import React from 'react';
import styles from './helloworld.css';

class CssMoudleComponent extends React.Component{
  render(){
    return (
      <div className={styles.title}>Hello World，{this.props.name}</div>
    );
  }
}

export default CssMoudleComponent;
```
但是，我们会看到，这种使用方式是不生效的，为什么呢？
因为使用这种方式，我们需要修改你的webpack的config文件,将`loader: "style!css"`修改为`loader: "style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]"`
加上 modules 即为启用，localIdentName 是设置生成样式的命名规则。
因为我们使用的是react-create-app，react官方提供的脚手架工具，默认不支持css modules，我们也不需要深究，因为它的官方脚手架既不支持redux，也不支持react-router，所以我们实际会使用阿里官方提供的dva来开发，这里只需要知道使用方式就可以了。

[查看示例代码](https://github.com/yxl2628/reactjs/blob/master/code/css)
