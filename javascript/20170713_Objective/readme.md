# Objective
js中所有事物都是对象，字符串、数值、数组、函数，允许自定义对象
## js提供了很多内建对象：String、Date、Array等等，对象是带有属性和方法的特殊数据类型
## 创建js对象
### 定义并创建对象的实例
1、person=new Objective();
person.firstname="Bill";
person.lastname="Gates";
person.age=56;
person.eyecolor="blue";
2、person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};
### 使用对象构造器构造对象
function person(firstname,lastname,age,eyecolor){
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.eyecolor=eyecolor;
}
var myFather=new person("Bill","Gates",56,"blue");
## js对象中添加属性
通过为对象赋值，向已有对象添加新属性
person.sex="男";
x=person.sex;
## 把方法添加到js对象中
在构造器中定义对象的方法
function person(firstname,lastname,age,eyecolor){
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.eyecolor=eyecolor;
  this.changeName=changeName;
  function changeName(name){
    this.lastname=name;
  }
}
## for in语句循环遍历对象的属性，针对每一个属性执行一次
# Number对象（数字对象）
数字属性
MAX VALUE
MIN VALUE
NEGATIVE INFINITIVE
POSITIVE INFINITIVE
NaN
prototype
constructor
数字方法
toExponential()
toFixed()
toPrecision()
toString()
valueOf()
x=4
x.toString()
## String对象（字符串对象）用于处理已有的字符快
常见方法
x="hello world!";
x.length()
x.toUpperCase()
indeOf(),match(),replace()
## Date对象 处理日期和时间
Date().getTime(),getFullYear,getDay()
## Array对象（数组对象）作用：使用单独的变量名来存储一系列的值
### 定义数组
1、var mycars=new Array();
mycars[0]="Saab";
mycars[1]="Volvo";
mycars[2]="BMW";
或者使用一个整数自变量来控制数组的容量
var mycars=new Array(3);
mycars[0]="Saab";
mycars[1]="Volvo";
mycars[2]="BMW";
2、
var mycars=new Array("Saab","Volvo","BMW");
## Boolean(逻辑对象)作用：将非逻辑值转换为逻辑值（true或false)
创建初始值为false的Boolean
var myBoolean=new Boolean();
var myBoolean=new Boolean(0);
var myBoolean=new Boolean(null);
var myBoolean=new Boolean("");
var myBoolean=new Boolean(false);
var myBoolean=new Boolean(NaN);
创建初始值为true的Boolean
var myBoolean=new Boolean(1);
var myBoolean=new Boolean(true);
var myBoolean=new Boolean("true");
var myBoolean=new Boolean("false");
var myBoolean=new Boolean("Bill Gates");
## Math (算数对象)执行普通的算数运算
Math.round(),Math.random(),
Math.E,
Math.PI
Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E
## RegExp(正则表达式对象)用于规定在检索文本中内容的模式
第一个参数是检索的内容，第二个参数是检索的模式
var patt1=new RegExp("e","g")；
do{
  result=patt1.exec("The best things in life are free");
  document.write(result);
}while(result!=null)
test()方法检索字符串中的指定值返回值为true或false
exec()检索字符串中指定的值，返回值是被找到的值，没有被发现则返回null
compile用于改变RegExp的规则
