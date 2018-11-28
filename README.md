# 自建轮子 - 一个UI组件  
作者：shixiang

[![Build Status](https://travis-ci.org/MccSx/lunzhi-demo.svg?branch=master)](https://travis-ci.org/MccSx/lunzhi-demo)

## 介绍
这是自己学习Vue过程中，自己造的一个简单的ui框架
## 开始使用

1.css注意事项
  使用本框架前，请在css中设置box-sizing为border-box
  ```css
  *{box-sizing: border-box;}
  *::before{box-sizing: border-box;}
  *::after{box-sizing: border-box;}
  ```
  你还需要设置默认颜色等变量（后续会改为scss变量，目前IE不支持此样式）
  ```css
  :root{
      --button-height:32px; 
      --font-size:14px; 
      --button-bg:white; 
      --button-active-bg:#eee;
      --button-radius:4px; 
      --color:#333; 
      --border-color:#999; 
      --border-color-hover:#666;
  }
  ```
  引入svg样式
  ```css
  .icon{
      width: 1em; 
      height: 1em; 
      vertical-align: -0.15em; 
      fill: currentColor; 
      overflow: hidden;
    }
  ```
2.安装
  ```javascript
  npm i --save lunzhi
  ```
3.引入
  ```javascript
  import {Button, ButtonGroup, Icon} from 'lunzhi'
  import 'lunzhi/dist/index.css'

  exprot default {
      name: 'app'
      components: {
          'g-button': Button,
          'g-icon': Icon,
          'g-button-group': ButtonGroup
      }
  }
  ```

## 文档

## 提问

## 变更记录

## 联系方式