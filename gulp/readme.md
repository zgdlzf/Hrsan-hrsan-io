# gulp入门教程
## gulp使用过程
nodejs安装->全局gulp->项目安装gulp以及gulp插件->配置gulpfile.js->运行任务
### 查看nodejs版本查看npm版本
node -v
npm -v
### npm插件安装 npm install <name> [-g] [--save-dev] 
例如：npm install gulp-less --save-dev
### npm卸载插件 npm uninstall <name> [-g] [--save-dev]
### 借助rimraf删除全部插件 npm install rimraf -g ;用法：rimraf node_modules
### npm更新插件 npm update <name> [-g] [--save-dev]
### 查看npm帮助 npm help
### 当前目录已安装插件 npm list
## cnpm 因为npm插件在国外，可以选用http://npm.taobao.org这是一个完整的npmjs.org
安装：npm installl cnpm -g --registry=https://registry.npm.taobao.org
### 查看版本号
cnpm -v
cnpm与npm用法完全一致
### 全局安装gulp
cnpm install gulp -g
通过gulp -v查看是否正确安装，版本号
### 自动配置package.json文件
cnpm init
查看package.json帮助文档cnpm help package.json
### 本地安装gulp
cnpm install --save-dev
例如 cnpm install gulp-less --save-dev
### 新建gulpfile.js文件
### 运行gulp
gulp 任务名称