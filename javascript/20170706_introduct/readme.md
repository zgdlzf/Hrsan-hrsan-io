# javascript
## js定义
网络脚本语言
轻量级编程语言
可插入html页面的编程代码
## 用途
验证表单、检查浏览器、创建cookies
### 写入HTML输出流
document.write("<h1>This is a headling</h1>");
document.write("<p>This is a paragraph</p>");
```
  document.write()仅仅向文档输出写内容，如果文档已经完成加载，执行document.write，整个HTML页面将被覆盖。
```
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
## javascript书写位置
javascript脚本写在<script></script>标签之间，脚本可以放置<body>,<head>中，或者保存到外部文件，<script src=""></script>外部脚本不能包含<script>标签