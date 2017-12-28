/**
 * Created by humorHan on 2017/12/26.
 */
//先来一个经典问题--简单的记忆方法： 谁调用那this就是谁
var name = 'out';
var obj = {
    name: 'in',
    say: function () {
        console.log(this.name);
    }
};

obj.say(); //in 说明这时候的this是obj对象。怎么输出out呢？？？
var temp = obj.say;
temp();   //out  这样就可以了~
obj.say.call(null);  //或者酱紫

//再来一种形式的题目
var obj2 = {
    name: 'in',
    say: function () {
        setTimeout(function () {
            console.log(this.name);  //out  两秒以后控制权归window  那怎样输出in呢？？？
        }, 2000);
    }
};

var obj3 = {
    name: 'in',
    say: function () {
        setTimeout(function () {
            console.log(this.name);  //酱紫就可以了或者用箭头函数
        }.bind(this), 2000);
    }
};
var obj4 = {
    name: 'in',
    say: function () {
        setTimeout(() => {
            console.log(this.name);  //或者用箭头函数也可以--箭头函数函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
        }, 2000);
    }
};