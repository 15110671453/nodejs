



/*
  大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
为什么要这样做呢？原因有两点：
首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。
*/
// var events = require("events");
//    var fs = require('fs');

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected()
// {
//   console.log('链接成功');

//   eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection',connectHandler);

// eventEmitter.on('data_received',function(){
//   console.log('数据接收成功');

// var data = fs.readFileSync('./input.text', 'utf-8');

// console.log(data.toString());

// fs.readFile('./input.text',function(err,data){
//   if(err) return console.error(err);
//   console.log(data.toString());
// });
// });

// var  data = '';

// var readerStream = fs.createReadStream('./input.text');

// readerStream.setEncoding('UTF8');


// readerStream.on('data',function(chunk){
//   data += chunk+'流读出数据拼接';
// });


// readerStream.on('end',function(){
//   console.log(data);
// });

// readerStream.on('error',function(err){
//   console.log(err.stack);
// });


// var data1='菜鸟教程  菜鸟教程  菜鸟教程 菜鸟教程   菜鸟教程';
// var   writeStream = fs.createWriteStream('./output.text');

// writeStream.write(data1,'UTF8');

// writeStream.end();

// writeStream.on('finish',function(){
//   console.log('流写入结束');
// })
// writeStream.on('error',function(){
//   console.log('流写入错误');
// })


//  eventEmitter.emit('connection');
//    console.log('程序执行结束 数据');

// //创建长度为 10 字节的 Buffer 
// var buf = new Buffer(10);

// var buf2 = new Buffer([10,20,30,40,50,60,70]);

// var buf3 = new Buffer('www.runoob.com','utf-8');

// var len = buf.write('wwwwww.rrrr.comcomc');

// console.log('写入字节数:'+ len );
// console.log(buf.toString('utf-8'));

//  buf2.write('wwwwww.rrrr.comcomc');
//  console.log(buf2.toString('utf-8'));





var http = require('http');
var url = require('url')

function start(route) {

  function onRequest(request,response)
  {
    var pathname = url.parse(request.url).pathname;
   

    console.log('requestfor' + pathname + 'recieved');

    route(pathname);

     var fs = require('fs');

     var  data = '';

     var readerStream = fs.createReadStream('./input.text');

     readerStream.setEncoding('UTF8');


    readerStream.on('data',function(chunk){
        
        data += chunk+'流读出数据拼接';
        
        response.writeHead(200,{"Content-Type":"text/plain"});

        response.write(data);
     });


    readerStream.on('end',function(){
      
      console.log(data);
       
       response.end();

     });

     readerStream.on('error',function(err){
    
     console.log(err.stack);

     response.end();
    
     });
  

   

  }
  http.createServer(onRequest).listen(8886);

  console.log(__filename);
console.log(__dirname);
}

exports.start = start;

// console.log("server running at http://127.0.0.1://8080");



/*
1、MAC下
使用node 在命令行中 使用完毕 退出node命令   使用 .exit
2、使用sublime的批处理build编译 运行 程序 以nodejs 为例
先配置 nodejs 环境变量 再编辑Nodejs.sublime-build Nodejs.sublime-settings两份配置文件 进行配置
3、以上可以保证程序build通过 并运行  但是 在程序中引入一些 模块 该如何解决Cannot find module问题
4、运行nodejs程序 调试过程中遇到 端口号 被占用的情况 解决
localhost:phonegap lixiaoyan$ lsof -i tcp:8886
COMMAND  PID      USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    5486 lixiaoyan   11u  IPv6 0x801e6a78c4f67951      0t0  TCP *:8886 (LISTEN)
localhost:phonegap lixiaoyan$ kill 5486
localhost:phonegap lixiaoyan$ 

5、

localhost:etc lixiaoyan$ npm root -g
/usr/local/lib/node_modules
localhost:etc lixiaoyan$ node >global.module.paths
-bash: global.module.paths: Permission denied
localhost:etc lixiaoyan$ node
> global.module.paths
[ '/private/etc/repl/node_modules',
  '/private/etc/node_modules',
  '/private/node_modules',
  '/node_modules',
  '/Users/lixiaoyan/.node_modules',
  '/Users/lixiaoyan/.node_libraries',
  '/usr/local/lib/node' ]
> exit
ReferenceError: exit is not defined
    at repl:1:1
    at REPLServer.defaultEval (repl.js:262:27)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:431:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:211:10)
    at REPLServer.Interface._line (readline.js:550:8)
    at REPLServer.Interface._ttyWrite (readline.js:827:14)
> 
(To exit, press ^C again or type .exit)
> .exit



localhost:lib lixiaoyan$ cp -r /usr/local/lib/node_modules /Users/lixiaoyan/.node_modules
localhost:lib lixiaoyan$ cd /Users/lixiaoyan/.node_modules
localhost:.node_modules lixiaoyan$ ls -la
total 0
drwxr-xr-x   4 lixiaoyan  staff   136  9 18 12:08 .
drwxr-xr-x+ 68 lixiaoyan  staff  2312  9 18 12:08 ..
drwxr-xr-x  23 lixiaoyan  staff   782  9 18 12:08 npm
drwxr-xr-x  16 lixiaoyan  staff   544  9 18 12:10 phonegap
localhost:.node_modules lixiaoyan$ cd phonegap/
localhost:phonegap lixiaoyan$ ls -la
total 96
drwxr-xr-x   16 lixiaoyan  staff    544  9 18 12:10 .
drwxr-xr-x    4 lixiaoyan  staff    136  9 18 12:08 ..
-rw-r--r--    1 lixiaoyan  staff   1206  9 18 12:08 .bithoundrc
-rw-r--r--    1 lixiaoyan  staff     69  9 18 12:08 .npmignore
-rw-r--r--    1 lixiaoyan  staff    345  9 18 12:08 .travis.yml
-rw-r--r--    1 lixiaoyan  staff    207  9 18 12:08 CONTRIBUTING.md
-rw-r--r--    1 lixiaoyan  staff    721  9 18 12:08 COPYRIGHT
-rw-r--r--    1 lixiaoyan  staff  11362  9 18 12:08 LICENSE
-rw-r--r--    1 lixiaoyan  staff    418  9 18 12:10 NOTICE
-rw-r--r--    1 lixiaoyan  staff   8155  9 18 12:10 README.md
drwxr-xr-x    3 lixiaoyan  staff    102  9 18 12:08 bin
drwxr-xr-x    3 lixiaoyan  staff    102  9 18 12:08 doc
drwxr-xr-x    9 lixiaoyan  staff    306  9 18 12:08 lib
drwxr-xr-x  356 lixiaoyan  staff  12104  9 18 12:10 node_modules
-rw-r--r--    1 lixiaoyan  staff   3381  9 18 12:10 package.json
drwxr-xr-x    9 lixiaoyan  staff    306  9 18 12:10 spec
localhost:phonegap lixiaoyan$ cd ../
localhost:.node_modules lixiaoyan$ cd npm/
localhost:npm lixiaoyan$ ls -la
total 744
drwxr-xr-x  23 lixiaoyan  staff     782  9 18 12:08 .
drwxr-xr-x   4 lixiaoyan  staff     136  9 18 12:08 ..
-rw-r--r--   1 lixiaoyan  staff    2241  9 18 12:08 .mailmap
-rw-r--r--   1 lixiaoyan  staff     506  9 18 12:08 .npmignore
-rw-r--r--   1 lixiaoyan  staff     319  9 18 12:08 .travis.yml
-rw-r--r--   1 lixiaoyan  staff   13132  9 18 12:08 AUTHORS
-rw-r--r--   1 lixiaoyan  staff  294811  9 18 12:08 CHANGELOG.md
-rw-r--r--   1 lixiaoyan  staff     503  9 18 12:08 CONTRIBUTING.md
-rw-r--r--   1 lixiaoyan  staff   11878  9 18 12:08 LICENSE
-rw-r--r--   1 lixiaoyan  staff    5367  9 18 12:08 Makefile
-rw-r--r--   1 lixiaoyan  staff    4613  9 18 12:08 README.md
drwxr-xr-x   7 lixiaoyan  staff     238  9 18 12:08 bin
-rwxr-xr-x   1 lixiaoyan  staff      48  9 18 12:08 cli.js
-rwxr-xr-x   1 lixiaoyan  staff     521  9 18 12:08 configure
drwxr-xr-x   6 lixiaoyan  staff     204  9 18 12:08 doc
drwxr-xr-x   8 lixiaoyan  staff     272  9 18 12:08 html
drwxr-xr-x  61 lixiaoyan  staff    2074  9 18 12:08 lib
-rw-r--r--   1 lixiaoyan  staff     156  9 18 12:08 make.bat
drwxr-xr-x   6 lixiaoyan  staff     204  9 18 12:08 man
drwxr-xr-x  73 lixiaoyan  staff    2482  9 18 12:08 node_modules
-rw-r--r--   1 lixiaoyan  staff    4776  9 18 12:08 package.json
drwxr-xr-x  10 lixiaoyan  staff     340  9 18 12:08 scripts
-rw-r--r--   1 lixiaoyan  staff     646  9 18 12:08 wercker.yml
localhost:npm lixiaoyan$ 

*/