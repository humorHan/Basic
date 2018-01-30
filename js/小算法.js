/**
 * Created by humorHan on 2018/1/2.
 */

/**
 * 冒泡排序
 * @param arr 需要排序的数组
 * @returns {Array} 返回排序后的数组
 */
function bubbleSort(arr) {
    /*if (util.myTypeOf(arr) !== '[object Array]' || arr.length === 0) {
     return arr;
     }*/
    for (var i = 0, len1 = arr.length; i < len1; i++) {
        for (var j = 0; j < len1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

/*TODO 测试，如不需要可以删除*/
console.log(bubbleSort([1, 20, 3, 8, 5]));


/**
 * 快速排序
 * @param arr 需要排序的数组
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var center = arr[Math.floor(arr.length / 2)];
    var left = [],
        right = [];
    for (var i = 0, len1 = arr.length; i < len1; i ++) {
        if (arr[i] < center) {
            left.push(arr[i]);
        } else if (arr[i] > center){
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([center], quickSort(right));
}

/*TODO 测试，如不需要可以删除*/
console.log(quickSort([1, 2, 10, 3, 80]));


/**
 * 统计字符串中出现次数最多的字母，生成一个对应字母和出现的次数即可
 * @param str
 * @returns {{}} 返回原字符串中各个字母和对应出现次数的对象
 */
function maxChar(str) {
    var obj = {};
    for (var i = 0, len1 = str.length; i < len1; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}

/*TODO 测试，如不需要可以删除*/
console.log(maxChar('absssww'));


/**
 * 数组去重
 * @param arr 需要去重的数组
 * @returns {Array} 返回去重后的数组
 */
function unique(arr) {
    var obj = {},
        newArr = [];
    for (var i = 0, len1 = arr.length; i < len1; i++) {
        if (!obj[arr[i]]) {
            newArr.push(arr[i]);
        }
        obj[arr[i]] = 1;
    }
    return newArr;
}

/*TODO 测试，如不需要可以删除*/
console.log(unique([1, 2, 3, 3, 4, 8, 8]));

/**
 * 阶乘(递归)--复杂度 O(n)
 * @param num  阶乘num
 * @returns {number}  返回结果
 */
function factorialize(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorialize(num - 1);
}

/*TODO 测试，如不需要可以删除*/
console.log(factorialize(5));

/**
 * 尾递归--只保留一个调用记录，复杂度 O(1) 。
 * @param num    阶乘num
 * @param total  传入的时候必须是1，运行的时候代表每一次的结果
 * @returns {*}  返回结果
 */
function factorializeEnd(num, total) {
    if (num <= 1) {
        return total;
    }
    return factorialize(num - 1, num * total);
}
/*TODO 测试，如不需要可以删除*/
console.log(factorializeEnd(5, 1)); // 120

/**
 * 斐波那契数列 0,1,2,3,5,8,13
 * @param n  多少个数字
 * @returns {Array}  返回结果数组
 */
function getFibonacci(n) {
    var arr = [],
        i = 0;
    while (i < n) {
        if (i <= 1) {
            arr.push(i);
        } else {
            arr.push(arr[i - 1] + arr[i - 2]);
        }
        i++;
    }
    return arr;
}

/*TODO 测试，如不需要可以删除*/
console.log(getFibonacci(10));

/**
 * 字符串新式判等
 * @param a            字符串1
 * @param b            字符串2
 * @returns {boolean}  是否相等
 */
function equal(a, b){
    //TODO 校验参数--这里只是列举了校验长度 其他还可能参数是否存在以及类型等
    if (a.length !== b.length){return false;}
    var obj1 = {}, obj2 = {};
    for (var i = 0;i<a.length;i++) {
        if (obj1[a[i]]){
            obj1[a[i]]++;
        } else {
            obj1[a[i]] = 1;
        }
        if (obj2[b[i]]){
            obj2[b[i]]++;
        } else {
            obj2[b[i]] = 1;
        }
    }

    for (var j in obj1){
        if (!obj2[j] || obj1[j] !== obj2[j]){
            return false;
        }
    }
    return true;
}

/*TODO 测试，如不需要可以删除*/
console.log(equal('acccb', 'accbc'));
console.log(equal('a ccb', 'ac bc'));