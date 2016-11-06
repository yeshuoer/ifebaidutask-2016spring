function Person() {
  this.name = "xiaoming";
  this.eat = function() {
    console.log('eat');
  };
}

function Student() {

}
Student.prototype = new Person();
var stu = new Student();
stu.eat();
console.log(stu.name);
stu.name='xiaogang';
console.log(stu.name);
console.log(new Person().name);
