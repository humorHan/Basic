/**
 * 深拷贝
 * PS：JSON形式实现深拷贝暂不做介绍，自行了解去吧--JSON.parse(JSON.stringify(people));
 * @param src    源数据
 * @returns {*}  返回数据
 * Created by humorHan on 2017/12/26.
 */
function deepCopy(src) {
    var tempObj;
    var type = util.myTypeOf(src);
    switch (type) {
        case '[object Object]':
            tempObj = {};
            break;
        case '[object Array]':
            tempObj = [];
            break;
        default:
            return src;
    }
    for (var i in src) {
        if (src.hasOwnProperty(i)) {
            tempObj[i] = deepCopy(src[i]);
        }
    }
    return tempObj;
}


/* TODO 如下为测试数据 不用的话可以删除 */
var people = {
    name: '李大脚',
    age: 50,
    children: [
        {
            name: '李小强',
            age: 10
        }, {
            name: '李小龙',
            age: 12
        }
    ]
};

var test = deepCopy(people);
test.children[0].age = '修改过了年龄--20';
console.log(people, test);