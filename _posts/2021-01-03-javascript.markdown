---
layout: post
title:  "JavaScript & JQuery 入门 网课脚本"
date:   2021-01-03 01:01:01 +0800
categories: lzread update
---

## 开发工具介绍
1. vscode 编辑器；
2. chrome 浏览器方便后期开发调试；
3. postman 接口调试工具；

## 原生 JavaScript
### JavaScript 用法

在讲解用法之前，我先跟大家简单介绍一下JavaScript。

这里我们简称 JavaScript 为 JS ， JS 是 web 开发人员必须学习的 3 门语言中的一门。

1. HTML 定义了网页的内容
2. CSS 描述了网页的布局
3. JavaScript 网页的行为

JS 一直在升级，所以我们需要时刻了解 JS 的新技术。

JS 是一种轻量级的编程语言。

JS 是可插入 HTML 页面的编程代码。

JS 插入 HTML 页面后，可由所有的现代浏览器执行。

JS 使用有两种方式：
1. 页面定义 script 标签的方式；
2. 外部脚本，脚本可放置与外部文件中，可通过完整的 URL 或相对于当前网页的路径引用外部脚本

其中页面定义脚本，可以在 head 元素内，也可以在 body 元素里。

多数开发者习惯把脚本置于 body 元素的底部，因为该方式可改善显示速度，因为脚本编译会拖慢显示。

外部 JavaScript 的优势
1. 分离了 HTML 和代码
2. 使 HTML 和 JavaScript 更易于阅读和维护
3. 已缓存的 JavaScript 文件可加速页面加载



### JavaScript 变量

JS 变量是用来存储数据值的容器

下面我们看一下图，声明（创建） JavaScript 变量，是通过 var 关键字。

当然除了 var 关键字，还有常量的创建和块级作用域创建等等，后期我们使用 vue 开发的时候会见到，到时候我们再来讲解。

目前我们只使用 var。

### JavaScript 数据类型

JS 拥有多种的数据类型，包括了两大分类，分别值类型和引用类型

值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol（独一无二）。

引用数据类型：对象(Object)、数组(Array)、函数(Function)。

JS 拥有动态类型， 这意味着相同的变量可用作不同的类型。



字符串类型 可以是引号中的任意文本。您可以使用单引号或双引号

数字类型 只有一种。数字可以带小数点，也可以不带：

布尔只能有两个值：true 或 false。

对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

Undefined 这个值表示变量不含有值。

null 可以通过将变量的值设置为 null 来清空变量。


当您声明新变量时，可以使用关键词 "new" 来声明其类型：

var carname = new String;


### JavaScript 赋值运算符、比较运算符、逻辑运算符、条件（三元）运算符

JS 通过赋值运算符向来变量进行赋值。
1. = 赋值运算符向变量赋值。
2. += 赋值运算符向变量添加值。
3. -= 赋值运算符从变量中减去一个值。
4. *= 赋值运算符相乘变量。
5. /= 赋值运算符对变量相除。
6. %= 赋值运算符把余数赋值给变量。

JS 的比较运算符在逻辑语句中使用，用来判定变量或值是否相等。
```javascript
if (age < 18) text = "太年轻";
```

JS 的逻辑运算符用于判定变量或值之间的逻辑。

我们给定 x = 6 且 y = 3，下表解释了逻辑运算符：
1. 与 	(x < 10 && y > 1) 为 true
2. 或   (x == 5 || y == 5) 为 false
3. 非   !(x == y) 为 tru


JS 也包含了可基于某些条件向变量赋值的条件运算符，也就是（三元）运算符。
```javascript
var test = (age < 18) ? "太年轻":"足够成熟";
```
如果变量 age 的值小于 18，变量 test 的值将是 "太年轻"，否则变量 test 的值将是 "足够成熟"。

### JavaScript 语句标识符

JS 语句标识符可以分开理解为 JS 语句和 JS语句标识符。

其中 JS 语句是发给浏览器的命令，这些命令的作用是告诉浏览器要做的事情。

例如，下面的 JavaScript 语句向 id="demo" 的 HTML 元素输出文本 "你好吗？" ：
```javascript
document.getElementById("demo").innerHTML = "你好吗？";
```
代码中的";"分号用于分隔 JavaScript 语句，通常我们在每条可执行的语句结尾添加分号。
```javascript
document.getElementById("demo").innerHTML = "你好吗？";
document.getElementById("demo1").innerHTML = "我很好!";
```
而每一行代码是 JS 语句的序列，浏览器按照编写顺序依次执行每条语句。
```javascript
function myFunction(){ 
    document.getElementById("demo").innerHTML = "你好吗？";
    document.getElementById("demo1").innerHTML = "我很好!";
}
```
我们把两行代码组合起来，代码块以左花括号开始，以右花括号结束，这就是 JS 的代码块。

花括号外面的 function 是函数，稍后我会讲到函数。

下面我们讲 JS 的语句标识符。

JS 的语句标识符可以理解成 JS 的关键字，JS 语句常常通过某个关键词来标识需要执行的 JavaScript 动作。

下面的表格列出了一部分将在用到的关键词

需要注意的是 JS 关键词指的是保留的单词。保留词无法用作变量名使用。

上述的就是 JS 语句和 JS语句标识符，接下来我们讲常常用到的for循环。

### JavaScript for 循环

相信循环大家应该不陌生，无论是 JAVA 还是 C# 或者是其他的语言都是很常见的。

当然 JS 的循环也有很多种
1. for - 多次遍历代码块
2. for/in - 遍历对象属性
3. while - 当指定条件为 true 时循环一段代码块
4. do/while - 当指定条件为 true 时循环一段代码块

但 for 循环是在您希望创建循环时经常使用的工具，我们目前先来讲 for 循环，

JS for 循环的语法如图

1. 语句 1 在循环开始之前执行。
2. 语句 2 定义运行循环的条件。
3. 语句 3 会在循环每次被执行后执行。

下面我给大家写一个简单的 for 循环 
```javascript
for (i = 0; i < 5; i++) {
     text += "数字是 " + i + "<br>";
}
```
从的代码中可以了解到
1. 语句 1 在循环开始之前设置了一个变量（var i = 0）
2. 语句 2 定义运行循环的条件（i 必须小于 5）
3. 语句 3 会在代码块每次执行之后对值进行递增（i++）

到这里 for 循环就先讲到这里，大家课后可以尝试练习一下，下面要讲到的是 JS 对象。

### JavaScript 对象

在 JS 中，对象是非常重要的，当你理解了对象，就可以了解 JS 

首先 JS 对象是拥有属性和方法的数据

我们之前已经学习过了 JS 的赋值。

```javascript
var car = "bmw";
```
这段代码我把变量 car 设置值为 "bmw"。

接着看

对象他也是一个变量

```javascript
var car = {type:"bmw", color:"white"};
```
这段代码我把 bmw, white 2个值赋值给了 car,这时候 car 就变成了一个对象。

可以简单理解一下 对象也是一个变量，但对象可以包含多个值，多个值和多个变量。
 看一下创建对象的几种方式，刚刚我们用到了其中的一种。

那么我们创建了对象，我们如何访问对象中的变量，我们来看一下代码

通常我们把对象里的变量叫做属性，因为对象是属性变量的容器。

访问对象的属性有两种方式
```javascript
var car = {type:"bmw", color:"white"};

car.type; //方式1

car['type']; //方式2
```
对象可以指定一个函数，例如这种
```javascript
var car = {type:"bmw", color:"white"， price:function(){
    return "320000.00";
}};

```
刚刚提到了 JS 的函数，那么接下来我们就开始讲 JS 的函数。

### JavaScript 函数
关于 JS 的函数 可以这么理解
1. 函数是被设计为执行特定任务的代码块
2. 函数会在某代码调用它时被执行



```javascript
function myFunction(p1, p2) {
    return p1 * p2; // 该函数返回 p1 和 p2 的乘积
}
```
JS 是函数通过 function 关键词进行定义，其后是函数名和括号 ()。

函数名可包含字母、数字、下划线和美元符号（规则与变量名相同）。

圆括号可包括由逗号分隔的参数

由函数执行的代码被放置在花括号中

在函数中，参数是局部变量

函数中的代码 将在 其他代码 调用 该函数时执行

那么函数如何被调用调用，有这么几种调用方式
1. 当事件发生时（当用户点击按钮时）
2. 当 JS 代码调用时
3. 自动的（自调用）


当 JS 到达 return 语句，函数将停止执行

如果函数被某条语句调用，JS 将在调用语句之后“返回”执行代码

函数通常会计算出返回值。这个返回值会返回给调用者    

```javascript
function myFunction(p1, p2) {
    return p1 * p2; // 该函数返回 p1 和 p2 的乘积
}
myFunction(1,5);
```

那么为何使用函数？简单来说
1. 您能够对代码进行复用：只要定义一次代码，就可以多次使用它。
2. 您能够多次向同一函数传递不同的参数，以产生不同的结果。

例如把华氏度转换为摄氏度
```javascript
function toC(f) {
    return (5/9) * (f-32);
}
```

刚刚将函数如何被调用的时候我们讲到了 当事件发生时（当用户点击按钮时），
可以调用函数，那么接下来我们就开始讲解 JS 的事件

### JavaScript 事件

我们先来手写一段代码，接着刚刚华氏度转换为摄氏度的函数来完善

```html
<input type="text" id="x">
<input type="text" id="v">
<button onclick="tran()">转换</button>
```

```javascript
function toC(f) {
    return (5/9) * (f-32);
}

function tran(){
    var x = document.getElementById('x');
    var v = document.getElementById('v');
    v.value = toC(x.value);
}

```

代码中 onclick 就是一个点击事件，他引用了一个函数，当点击的时候就会执行这个函数。

HTML 事件可以是浏览器或用户做的某些事情。

例如

1. HTML 网页完成加载
2. HTML 输入字段被修改
3. HTML 按钮被点击

通常，当事件发生时，用户会希望做某件事。

### JavaScript 输出

JS 可以通过不同的方式来输出数据

1. 使用 alert() 弹出警告框。
2. 使用 document.write() 方法将内容写到 HTML 文档中。
3. 使用 innerHTML 写入到 HTML 元素。
4. 使用 console.log() 写入到浏览器的控制台。

```javascript
document.getElementById("demo").innerHTML = "段落已修改。";
document.write(Date());
```

讲到这里原生 JS 的部分基本讲完了， 但这只是 JS 很少的一部分，之后的课程，我们在项目中会继续讲解。

### JavaScript 代码规范

这是 JS 代码的规范，之后发给大家的文档中有，大家看一下，就不过多讲解了。

## jQuery
### jQuery 介绍

jQuery 库可以通过一行简单的标记被添加到网页中。从 jquery.com 下载 jQuery 库

什么是 jQuery ？

jQuery是一个轻量级的"写的少，做的多"的JavaScript库。

jQuery库包含以下功能：

1. HTML 元素选取
2. HTML 元素操作
3. CSS 操作
4. HTML 事件函数
5. JavaScript 特效和动画
6. HTML DOM 遍历和修改
7. AJAX
8. 等等


### jQuery 语法

jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作


```javascript
$(this).hide() //隐藏当前元素
$("p").hide() //隐藏所有 <p> 元素
$("p.test").hide() //隐藏所有 class="test" 的 <p> 元素
$("#test").hide() //隐藏 id="test" 的元素
```


### jQuery 选择器

jQuery 是使用 CSS 选择器来选取 HTML 元素 $() 是选择器的关键字，选择器大概分这些种。


### jQuery 事件

jQuery 是为事件处理特别设计的，所以事件处理方法是 jQuery 中的核心函数。




### jQuery 内容和属性操作

获得内容我们会用到 - text()、html() 以及 val()
1. text() - 设置或返回所选元素的文本内容
2. html() - 设置或返回所选元素的内容（包括 HTML 标记）
3. val() - 设置或返回表单字段的值

设置属性我们会用到 - attr()



### jQuery 添加元素&删除元素

通过 jQuery，可以很容易地添加和删除元素/内容



### jQuery 遍历

jQuery 遍历，意为"移动"，用于根据其相对于其他元素的关系来"查找"（或选取）HTML 元素。以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。


### jQuery 操作 CSS

jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：
1. addClass() - 向被选元素添加一个或多个类
2. removeClass() - 从被选元素删除一个或多个类
3. toggleClass() - 对被选元素进行添加/删除类的切换操作
4. css() - 设置或返回样式属性

### jQuery Ajax

AJAX = 异步 JavaScript 和 XML

简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。

jQuery 提供多个与 AJAX 有关的方法。

通过 jQuery AJAX 方法，您能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON - 同时您能够把这些外部数据直接载入网页的被选元素中。



### jQuery 插件

jQuery 在网上可以找到很多开源的插件，包括日期插件、弹窗插件、动画插件等等。

讲到这里 jQuery 我们就讲完了，当然 jQuery 远不止我们讲的这些，相比原生 JS ， jQuery 库大大简化了我们操作 DOM， 关于 jQuery 我们还需要好好熟悉、以及练习。

