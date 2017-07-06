# javascript
## js定义
网络脚本语言
轻量级编程语言
可插入html页面的编程代码
## 作用
验证表单、检查浏览器、创建cookies
### 写入HTML输出流
document.write("<h1>This is a headling</h1>");
document.write("<p>This is a paragraph</p>");
### 对事件作出反应
<button type="button" onclick="alert('hello world!')" value="点击弹出欢迎菜单">
### 改变HTML内容
x=document.getElementById("demo");
x.innerHTML="heLLO JAVASCIPT";
### Javascript改变HTML图像
### 改变HTML样式
x=document.getElementById("demo");
x.style.color="#ff0000";
### 验证输入
if isNaN(x) {
  alert("not number")
};