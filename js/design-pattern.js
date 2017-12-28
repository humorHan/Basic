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
    if (!this.instance) {
        this.instance = new SingeInstance(name);
    }
    return this.instance;
}

var instance1 = getInstance('instance1');
var instance2 = getInstance('instance2');
console.log(instance1, instance2);

/**
 *  观察者模式/发布订阅模式
 */
var Event = {
    _events: {},
    on: function (name, cb) {
        if (!this._events[name]) {
            this._events[name] = cb;
        }
    },
    emit: function (name) {
        this._events[name] && util.myTypeOf(this._events[name]) === '[object Function]' && this._events[name]();
    }
};

/*TODO 测试，不需要的话可以删掉*/
Event.on('吃饭命令', function () {
    console.log('去吃饭咯');
});

Event.emit('吃饭命令');