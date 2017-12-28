/**
 * js去掉空字符
 * @param str                  要处理的字符串
 * @param position             需要去掉空字符的位置--默认是both: 首尾两端； left：首； right：尾； all：所有的
 * @returns {void|string|XML}  返回处理后的字符串
 * Created by humorHan on 2017/12/26.
 */
function trim(str, position) {
    switch (position) {
        case 'both':
            return str.replace(/^\s+|\s+$/,'');
        case 'left':
            return str.replace(/^\s+/, '');
        case 'right':
            return str.replace(/\s+$/, '');
        case 'all':
            return str.replace(/\s+/g, '');
        default:
            return str.replace(/^\s+|\s+$/,'');
    }
}

/*TODO 测试数据，不需要的话可以删掉*/
var testStr = ' 12 345 ';
console.warn('为了方便看到字符串结尾处有没有空格，我们给处理后的字符串结尾处加一个。--纯属为了看到效果，如果造成误解请自行删掉这个。');
console.log('原字符串:' + testStr + '。');
var left = trim(testStr, 'left');
var right = trim(testStr, 'right');
var both = trim(testStr, 'both');
var all = trim(testStr, 'all');

console.log('去掉左侧空白符:' + left + '。');
console.log('去掉右侧空白符:' + right + '。');
console.log('去掉两侧空白符:' + both + '。');
console.log('去掉所有空白符:' + all + '。');