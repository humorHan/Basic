/**
 * 原型继承 + 构造函数继承 + 组合继承
 * Created by humorHan on 2017/12/26.
 */

console.warn('****************************原型继承 start****************************************');
/**
 * 原型继承
 * 1.继承父类所有属性方法--包括原型上的
 * 2.共用父类引用类型的属性
 * 3.不能给父类传参
 */
function Animal1(name) {
    this.name = name;
    this.foods = ['food1'];
    this.sayName = function () {
        console.log(this.name);
    }
}
Animal1.prototype.sayHello = function () {
    console.log(this.name + '给大家问好！');
};

function Dog1() {
    /*...自己的属性方法...*/
}
Dog1.prototype = new Animal1('大黄1');
var animal1 = new Animal1('animal1');
var dog1 = new Dog1('我想把name传参给父类，可以吗');//结果肯定是不行的
dog1.sayName(); //只能输出大黄2 说明原型继承不能给父类传参
dog1.sayHello(); //正常调用 说明原型继承可以继承父类原型上的方法

var dog100 = new Dog1();
dog100.foods.push('food2');
console.log(dog1.foods, dog100.foods); //说明所有实例共用父类引用类型的属性

console.warn('*****************************构造函数继承 start***************************************');

/**
 * 构造函数继承
 * 1.会继承父类所有非原型上的属性方法
 * 2.每次创建实例都会创建一遍父类中的方法
 * 3.不会共用父类引用类型的属性
 */

function Animal2(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}
Animal2.prototype.sayHello = function () {
    console.log(this.name + '给大家问好！');
};
function Dog2(name) {
    Animal2.call(this, name);
    /*...自己的属性方法...*/
}

var animal2 = new Animal2('animal');
var dog2 = new Dog2('大黄');
dog2.sayName(); //大黄
try {
    dog2.sayHello();
} catch (e) {
    console.log(e);  //dog.sayHello is not a function 说明构造函数继承不能继承父类原型上的方法
}

console.warn('*****************************组合继承 start***************************************');

/**
 * 组合继承
 * 1.继承父类所有属性方法--包括原型上的
 * 2.共用父类引用类型的属性
 * 3.不能给父类传参
 */
function People(name) {
    this.name = name;
    this.food = ['馒头', '粥', '菜'];
}
People.prototype.sayName = function () {
    console.log(this.name);
};
function Man(name) {
    People.call(this, name);
}
Man.prototype = new People();

var man = new Man('humorHan');
man.sayName(); //humorHan 说明可以继承父类原型上的方法，且可以给父类传参数
var man100 = new Man('man100');
man100.food.push('新加一个食物吧');
console.log(man.food, man100.food);//说明不会共用父类引用类型