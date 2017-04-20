# dva实战
上面的所有内容学习完成后，我们就可以基于dva完成一个项目实战了。
### 搭建工程
- 安装脚手架工具

首先需要安装dva脚手架工具dva-cli：
`# npm install -g dva-cli`安装完成后，使用`# dva -v`查看版本，是否安装成功。
安装完成后，我们就可以使用dva-cli创建工程了`# dva new dva-demo`

- 配置 antd 和 babel-plugin-import

antd为阿里出品的组件库，有了它，大部分基础组件，我们就可以直接使用，而非自己开发了。
babel-plugin-import 用于按需引入 antd 的 JavaScript 和 CSS，这样打包出来的文件不至于太大。

`# npm i antd --save`
`# npm i babel-plugin-import --save-dev`

修改 .roadhogrc，在 "extraBabelPlugins" 里加上：

`["import", { "libraryName": "antd", "style": "css" }]`
