### 安装
我们可以使用官方提供的create-react-app来安装react
```shell
npm install -g create-react-app
create-react-app hello-world
```
通过官方提供的安装方式，我们安装好之后，会是一个hello world的事例,我们接下来就可以在这个基础上直接进行react的相关开发，而不用去考虑如何搭建开发环境了，这个官方事例使用的是 webpack, Babel and ESLint，可以通过如下命令来启动：
```shell
//开发模式
npm start
//打包发布
npm run build
//模块测试
npm run test
//语法检测
npm run eject
```
### 目录结构说明
- node_modules
> node.js模块库，开发中使用的模块，均在这个文件夹下，比如react

- public
> 公共资源库，此文件夹下存放的是一些公共资源文件，比如index.html，比如图片文件等
> 在react开发中，index.html这个入口文件一般写好后就无需修改了

- src
> 开发目录，我们的所有开发都会在这个目录下进行，一般会按照个人习惯划分目录，详细的目录划分，我们在dva实战中在讲解

- .gitignore
> github忽略文件，比如node_moudles这个文件夹，它本身是通过package.json中配置，通过npm安装生成的，并不需要我们保存和维护，所以保存这个文件夹到github上是不明智的，一般情况下，我们不想上传到github上的文件夹、文件都通过此文件进行配置

- package.json
> node.js声明文件，定义了这个项目所需要的各种模块,以及项目的配置信息(比如名称、版本、许可证等元数据)。

- README.md
> 说明文件，一般放在根目录，用来说明项目的内容以及启动方式等。
