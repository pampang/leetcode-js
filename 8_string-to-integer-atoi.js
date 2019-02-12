/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 去掉首尾空格
  str = str.trim();
  // let strArr = str.split('');

  /**
   * 判断第一个字符是什么。
   * -: 记录为负数；
   * [0-9]: 继续找下一个 0-9
   * 其他字符: 报错
   */
  let negative = false;
  if (str[0] === '-') {
    negative = true;
    // 去掉第一个元素
    str = str.slice(1);
  } else if (str[0] === '+') {
    // 去掉第一个元素
    str = str.slice(1);
  }

  var pattern = /^([0-9]+)/; //先通过正则匹配这个字符串，用分组模式来获取这两个单词
  var arr = pattern.exec(str); // exec方法返回的是一个数组，包含匹配到的字符串以及分组(也称子串)里的值

  console.log(arr); //['hello world','hello','world']
  if (!arr) {
    return 0;
  }
  const final = arr[0] * (negative ? -1 : 1);

  // 整数范围
  if (final > 2147483647) {
    return 2147483647;
  }

  if (final < -2147483648) {
    return -2147483648;
  }

  return final;
};

console.log(myAtoi("   -42"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("+1"));
console.log(myAtoi("-+1"));