
console.log('ceshi ');
var server = require('./server');


console.log(__filename);
console.log(__dirname);
//方式一
// var router = require('./router');
//注意这里 router 没有传递参数 文件名 后边出错 
// server.start(router.route());

//方式二

var Router = require('./router.js');
//注意这里 router 如果不传递参数 文件名 后边会出错 参数要传递啊
var r = new Router('Ozzy', 62,'inputtext');
r.route(); // Ozzy is 62 years old

console.log('ceshi ');