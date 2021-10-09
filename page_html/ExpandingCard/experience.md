<!--
 * @Author: Sirius-kk
 * @Date: 2021-09-27 12:54:38
 * @LastEditors: Sirius-kk
 * @LastEditTime: 2021-09-27 18:21:19
 * @FilePath: \JS\JS_superficial\page_html\ExpandingCard\experience.md
-->
## 抽屉图片显示
* 知识点
    * JS部分
    ### Function.prototype.call(): 
  `call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。
    #### 1. 语法: 
    `function.call(thisArg, arg1, arg2, ...)`
    #### 参数: 
    `thisArg` , function时运行指定的this值
    `arg1, arg2, ...` , 指定的参数列表
    #### 返回值:
    `function` 的返回值
    > 注意:
    > 1. 若call没有参数, 非严格模式下this默认指向全局对象, 严格模式指向undefined
    ### Function.prototype.apply(): 
    `apply()` 方法调用一个具有给定`this`值的函数，以及以一个数组（或类数组对象）的形式提供的参数
    #### 1. 语法: 
    `func.apply(thisArg, [argsArray])`
    #### 参数: 
    `thisArg` , function时运行指定的this值
    `argsArray` , 一个数组或者类数组对象
    #### 返回值:
    `function` 的返回值
    > 注意:
    > 1. 
    ### Function.prototype.bind(): 
    `bind()` 方法创建一个新的函数, 在bind()被调用时, 新函数的this指向为bind()的第一个参数, 而其余参数将作为新函数的参数, 供调用时适用
    #### 1. 语法: 
    `func.bind(thisArg[, arg1[, arg2[, ...]]])`
    #### 参数: 
    `thisArg` , function时运行指定的this值
    `arg1, arg2, ...` , 当目标函数被调用时，被预置入绑定函数的参数列表中的参数
    #### 返回值:
    原函数的拷贝, 被预置入绑定函数的参数列表中的参数
    > 注意:
    > 1. 如果bind()调用时, 参数列表为空, 或者thisArg是null或者undefined, 则this会指向当前执行作用域的this
    
  ```
  .addEventListener()
  html元素的属性
  ```
  * CSS部分
  ```
  flex布局及其各个属性
  background属性
  ```