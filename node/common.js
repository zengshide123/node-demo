// node的模块化使用的是common.js的规范

// 浏览器端js的顶层对象是window,node中的顶层对象为global

// var a = 100;
// console.log(global.a);// undefined

// 在node中,一个文件是一个模块,每个模块拥有自己的作用域,
// 作用域是隔离的,当文件中声明的变量
// 值存在当前模块中,并没有暴露到全局对象global上

// global.a = 101;
// console.log(a,global.a);

// node中模块中分为两类:node自带的核心模块、用户编写的文件模块

// 文件模块在运行时,动态加载
// reuqire()方法引入的文件采用缓存优先的原则,即第一次加载解析到内存后,第二次引入会优先使用内存中缓存的文件

// 文件引入
// "/" 绝对路径
// "./"相对路径
// "path" node内部模块或者是node_modules文件夹内的模块


// 关于扩展名的查找

// .js > .json > .node

// console.log(module);
