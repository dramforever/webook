﻿webook点名器
======

使用方法：
------
编辑`conf.js`。此文件是一个标准的Javascript脚本。
在`conf.js`中需要将`window.lists`变量设置为一个对象，以便在页面中选择。示例（默认`conf.js`）：
```
window.lists = {
	"test1":["test1 1","test1 2"],
	"test2":["test2 1","test2 2"]
}
```

此脚本会在页面上最先加载，所以不应该在此文件中使用DOM等。

然后，点开index.html。您可能需要在弹出的安全提示中选择允许。

提示：
------
1. 按esc可以快速刷新。