webook点名器
======

使用方法：
======
编辑`conf.js`。此文件是一个标准的Javascript脚本。
在`conf.js`中需要将`window.list`变量设置为一个数组。为了方便，可以如下定义（默认`conf.js`）：
```
choose = "test1" ;
lists = {
	"test1":["test1 1","test1 2"],
	"test2":["test2 1","test2 2"]
}
window.list = lists[choose];
```

此脚本会在页面上最先加载，所以不应该在此文件中使用DOM等。