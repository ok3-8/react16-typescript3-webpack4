![](https://github.com/ok3-8/react16-typescript3-webpack4/raw/master/src/assets/demo-show.png)

<p align="center">
  <img src="https://img.shields.io/badge/react-16.8-green.svg">
  <img src="https://img.shields.io/badge/typescript-3-284e80.svg">    
  <img src="https://img.shields.io/badge/webpack-4-ff69b4.svg">
  <img src="https://img.shields.io/badge/babel-7-e05959.svg">  
  <img src="https://img.shields.io/badge/license-MIT-ccc.svg">
  <img src="https://img.shields.io/badge/now-2019-ded76a.svg">
</p>


# (React16, TypeScript3, Webpack4, Babel7) => (	&lt;App /	&gt;)

> React16.x+TypeScript3.x+Webpack4.x+Babel7.x 搭建基础骨架

:: 2019 ::

这篇指南将会教你如何将`TypeScript3`和`React16`还有`webpack4`结合在一起使用。
如果你正在做一个全新的工程，可以先阅读这篇`React16`快速上手指南。
否则，我们假设已经在使用`Node.js`和`npm`。

## 初始化项目结构

让我们新建一个目录。 将会命名为 `myproject`，但是你可以改成任何你喜欢的名字。
```
mkdir myproject
cd myproject
```

我们会像下面的结构组织我们的工程：

```
myproject/
├─ dist/
└─ src/
   └─ components/
```

TypeScript文件会放在src文件夹里，通过TypeScript编译器编译，然后经webpack处理，最后生成一个bundle.js文件放在dist目录下。 我们自定义的组件将会放在 src/components文件夹下。

## 初始化工程

通过`npm init -y`初始化项目，生成package.json文件

## 在本地安装 webpack4，安装 webpack-cli

```
npm install webpack webpack-cli --save-dev
```

装webpack4各种常用加载器、插件和工具

```
npm i clean-webpack-plugin html-webpack-plugin --save-dev
npm i webpack-dev-server webpack-merge --save-dev
npm i file-loader url-loader style-loader css-loader babel-loader --save-dev
```

## 在本地安装 babel7 和它一些核心的包

项目安装`@babel/core` `@babel/preset-env` `@babel/preset-react`，同时安装`@babel/polyfill`
```
npm i @babel/core @babel/preset-env @babel/preset-react --save-dev
npm i @babel/polyfill --save
```

先来看一下主要的包，babel 7 对于包进行了一些简化。
- @babel/cli: 用于执行相应命令 
- @babel/core: 核心包，将 js 代码分析成 AST 
- @babel/preset-env: 包含 es6+ 的语法转换规则，如箭头函数、const 等 
- @babel/polyfill: es6 内置对象和函数的垫片，如 Promise、Array.from 等 
- @babel/plugin-transform-runtime: 防止 polyfill 污染全局变量 
- @babel/runtime: 与 @babel/plugin-transform-runtime 配套使用

## 安装 React16

```
npm i react react-dom react-router-dom --save
```

## 安装 TypeScript3

```
npm i typescript @types/node @types/react @types/react-dom -D
npm i @types/webpack awesome-typescript-loader source-map-loader -D
```

## 说明

其它配置看项目目录结构描述。

```
git clone .  

npm install  
npm run dev  
npm run build  
```

## 目录结构描述

```
├── README.md                   // README  
├── docs                        // for github page  
├── config                      // 配置  
│   ├── webpack.base.conf       // 配置控制  
│   ├── webpack.dev.conf        // 开发环境  
│   └── webpack.prod.conf       // 生产环境  
├── src                         // 应用入口  
│   ├── assets                   
│   ├── components              
│   ├── style                   
│   ├── App.tsx                 
│   ├── index.html              
│   └── index.tsx                
├── package.json                // package.json   
└── tsconfig.json               // tsconfig.json 
```



## MIT License

Copyright (c) 2019 The Art of ReactJs














