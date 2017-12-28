/**
 * Created by humorHan on 2017/12/26.
 */
var value = 1;
function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}
bar();    //1
/*
* 1.JavaScript采用的是静态作用域，即在定义函数的时候就已经确定了作用域，而不是调用的时候。
* 2.执行函数输出值，会在函数内部找是否定义了输出的变量，没有的话就根据 定义函数的位置 查找上一层代码
* */