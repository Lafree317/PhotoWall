# PhotoWall

React实践图片画廊应用

更改已过时的语法

展示地址:https://lafree317.github.io/PhotoWall/

一些收集的总结经验:

```
push到github静态页
* 启动本地项目: npm start 或者 npm run serve
* 启动本地dist目录项目: npm run serve:start
* 打包到dist目录: npm run copy
* 清除dist文件：npm run clean
* 生成dist目录: npm run dist
* 删除dist目录中index.html中app.js的src中第一个斜杠
* 删除cfg目录中defaut.js中publicPath中的第一个斜杠
* 将文件全部添加到git仓库: git add -A (git add dist)
* 提交代码: git commit -m 提交文件
* 推送代码大github上: git push
* 推送dist目录文件到githubPages: git subtree push --prefix=dist origin gh-pages
* 回滚: git --hard 版本号

```

