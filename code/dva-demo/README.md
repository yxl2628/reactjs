# React 实战
 
运行 开发模式
### `npm start`
运行 自动化测试
### `npm test`
运行 打包编译部署
### `npm run build`
运行 代码检查
### `npm run eject`

### 目录结构

├── /dist/	# 生产环境。打包输出的部署文件夹，上线部署时使用此文件夹   
├── /mock/           # 数据mock的接口文件   
├── /node_modules/	 # 第三方类库和工具   
├── /public/         # 公共的文件（此文件夹里的文件不会经过打包工具处理，会原样拷贝过去）   
│ ├── /assets/			
│ └──index.html			
├── /src/            # 项目源码目录   
│ ├── /assets/	     # 公共的文件（如图片，js等此文件夹里的文件会经过webpack打包处理）   
│ ├── /components/   # 项目组件   
│ ├── /routes/       # 路由组件（页面维度）   
│ ├── /models/       # 数据模型   
│ ├── /services/     # 数据接口   
│ ├── /utils/        # 工具函数   
│ ├── route.js       # 路由配置   
│ ├── index.js       # 入口文件   
│ └── index.css      # 公共样式       
├── /themes/ 		     # 自定义样式   
├── .editorconfig    # 该文件的内容定义该项目的编码规范   
├── .eslintrc		     # js、jsx、es6(es2015)等代码的检测   
├── .roadhogrc		   # 配置文件 如程序入口、css模块、   
├── .roadhogrc.mock.js  # 配置mock相关功能 支持require动态分析，支持ES6   
├── theme.config.js     # 主题配置   
├── package.json     # 项目信息   
└── README.md        # 说明文件
