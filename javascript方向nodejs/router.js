
  console.log(__dirname);

  //方式一
// function route (pathname)
// {

// 	console.log('about to route a request for' + pathname);
// 	console.log(__filename);
//     console.log(__dirname);
// }

// exports.route = route;

//方式二
module.exports = function(name, age,pathname) {
    this.name = name;
    this.age = age;
    this.route = function() {
        console.log(this.name +' is '+ this.age +' years old');
         	console.log('about to route a request for' + pathname);
 	console.log(__filename);
     console.log(__dirname);
    };
};
console.log(__dirname);