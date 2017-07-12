# js语句
## javascript语句是告诉浏览器做什么
document.getElementById("demo").innerHTML="Hello World";
可以使用分号结束语句，也可不加，添加分号，可以在一行中编写多条语句
## javascript代码，是按照顺序执行，逐行解释，而传统编程是执行前对所有代码进行编译，代码块可以对语句进行组合，使用花括号进行包裹，代码组合成块的典型例子是javascript函数
## javascirpt特点 大小写敏感，忽略多余的空格，可以在文本字符串中使用反斜杠对代码进行换行，在语句之间则不可以
var name="Hello";
等效于var name = "Hello";
document.write("Hello \ World!");
# js注释 提高代码的可读性
## 单行注释 //开头
## 多行注释 /*开始  */结尾
# js变量 存储信息的容器,可以存放数值和表达式，大小写敏感，可以用字母、$和_开头，但是不提倡（$和_）
x=2;
y=3;
z=x+y;
## 变量的数据类型可以是数字、布尔类型、字符串或对象、在向变量赋值字符串时可以使用双引号或单引号,在引号内可以存在引号，但是不要匹配外面的引号
## 变量声明，创建变量通常被称为声明
变量声明后可以使用等号对变量进行赋值，可以在一条语句中声明多个变量,为赋值的变量值等于undefined
var name="Gates",age=56,job="ceo";
```
  重新声明，变量的值不会丢失
  var carname="Volvo";
  var carname;
  carname的值依然是Volvo
```
## js数据类型
字符串、数字、布尔、数组、对象、Null、Undefined
js只有一种数字类型，可以带点也可以不带
## js数组声明与赋值
1、var cars=new Array();
cars[0]="Audi";
cars[1]="BMW";
cars[2]="Volvo";
2、var cars=new Array("Audi","BMW","Volvo");
3、var casrs=["Audi","BMW","Volvo"];
## js对象，对象由花括号分隔，在括号内部，对象的属性以名称和值对的形式定义，属性之间用都好分隔
var person={
  firstname:"Bill",
  lastname:"Gates",
  id:"5566";
};
### 对象的两种寻址方式
name=person.lastname;
name=person["lastname"];
## undefined未赋值的数据类型，变量可以通过null来清空变量
## 可以在声明变量时，通过关键词new来声明其类型va
var carname=new String(Number\Boolean\Array\Ojet)
# javascript对象
在js中所有的失误都是对象：字符串、数字、数组、日期等；
对象拥有属性和方法
属性是对象相关的值
方法是能够在对象上执行的动作
var txt="Hello";
x=txt.length;
txt.indexof(l);
# js函数 
## 可以通过使用return将函数值返回给调用它的地方，在执行return语句后，函数会停止执行
### 函数内部声明的变量是局部变量，只能在函数内部使用，函数运行以后被删除；函数外部声明是全局变量，在页面关闭后被删除。**把值赋给尚未声明的变量，变量自动被作为全局变量，即使是在函数内不执行**
carname="Volvo";
# js运算符：算数运算符、赋值运算符、
# js比较和逻辑运算符
比较运算符、逻辑运算符、
# 判断、循环跳出
# 错误（语法错误、缺少功能和服务器或用户错误的输出）
try测试代码块的错误
catch处理错误
throw语句创建自定义错误
<script>
  function myFunction(){
    try{
      var x=document.getElementById("demo").value;
      if(x=="")    throw "enmpty";
      if(isNaN(x)) throw "not a number";
      if(x>10)     throw "too high";
      if(x<5)      throw "too low";
    }
    catch(err){
      var y=document.getElementById("mess");
      y.innerHTML="Error:"+err+".";
    }
  }
</script>
# 验证，数据被送往服务器前对HTML表单进行输入数据验证：
用户是否填写表单必填的项目
用户输入的邮件、日期低至是否合法
用户是否在数据域中输入了文本
<html>
<head>
<script>
function validate_required(field,alerttxt){
  with(filed){
    if(value==null||value==""){
      alert(alerttxt);
      return false;
    }else{
      return true;
    }
  }
}
function validate_form(thisform){
  with(thisform){
    if(validate_required(email,"Email must be filled out!")==false){
      email.focus();return false;
    }
  }
}
</script>
</head>
<body>
<form action="submitpage.html" onsubmit="return validate_form(this)" method="post">
<input type="submit" value="Submit">
</form>
</body>
</html>