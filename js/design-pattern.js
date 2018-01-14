/**
 * Created by humorHan on 2017/12/27.
 */
/**
 * 工厂模式
 */
function CreatePerson(name, age, sex) {
    return {
        name: name,
        age: age,
        sex: sex
    }
}
/*TODO 测试，不需要的话可以删除*/
var person1 = new CreatePerson("Li", '28', '男');
console.log(person1.age);


/**
 * 单例模式
 */
function SingeInstance(name) {
    this.name = name;
    return this;
}
SingeInstance.prototype.sayHello = function () {
    console.log(this.name);
};

function getInstance(name) {
    console.log(this);
    if (!this.instance) {
        this.instance = new SingeInstance(name);
    }
    return this.instance;
}

var instance1 = getInstance('instance1');
var instance2 = getInstance('instance2');
console.log(instance1, instance2);

/*ES6 单例模式
* 静态方法不会被继承
* 静态方法不用实例化（不用new）能够用直接调用（[类名/对象名].[静态方法名]）
* */
class mySingleton {
    static getInstance() {
        if (!mySingleton.instance) {
            mySingleton.instance = new mySingleton();
        }
        return mySingleton.instance;
    }
    publicMethod() {
        console.log("The public can see me!");
    }
}
var cache = mySingleton.getInstance();


/**
 *  观察者模式/发布订阅模式
 */
var observe = {
  _events: {};

  listener: function(name, cb){
     if (!_events[name]){
        this._events[name] = [];
     }
     this._events[name].push(cb);
  },

  /**
    type: 类型
    data: 带的数据(可选)
   */
  publish: function(type, data){
     if(this._events[type] && this._events[type].length > 0){
       this._events.forEach(function(cb){
          cb(date);
       });
     }
  }
};

/*TODO 测试，不需要的话可以删掉*/
Event.on('吃饭命令', function () {
    console.log('去吃饭咯');
});

Event.emit('吃饭命令');
