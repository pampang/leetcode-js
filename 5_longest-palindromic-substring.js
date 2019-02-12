/**
 * 分析：一共有两个形式的回文：aba 和 abba。
 * 针对 aba，直接匹配即可。
 * 针对 abba，我们可以通过在两个字符中间插入一个索引位达到效果，例如 axbba、abxba。这样就形成了类似 aba 的回文。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
      return s;
    }
    let arr = s.split('');
    let longestStr = s[0];

    // console.log('====================================');
    // console.log('查看 aba');
    // console.log('====================================');
    // 查看 aba 格式
    // 去掉头尾
    for (let i = 1, len = arr.length - 1; i < len; i += 1) {
      // 找到最大匹配次数。往左算还剩多少个，往右算还剩多少个。去最小值
      const maxMatchTimes = Math.min(i, arr.length - 1 - i);
      // console.log('maxMatchTimes: ', maxMatchTimes);
      let currentLogestStr = arr[i];
      // console.log('currentLogestStr: ', currentLogestStr);
      for (let x = 1; x <= maxMatchTimes; x += 1) {
        const leftChar = arr[i - x];
        // console.log('leftChar: ', leftChar);
        const rightChar = arr[i + x];
        // console.log('rightChar: ', rightChar);
        if (leftChar === rightChar) {
          currentLogestStr = leftChar + currentLogestStr + rightChar;
        } else {
          //  console.log(`索引${i}停止在第${x}位, 最大长度${currentLogestStr}`);
           break;
        }
      }

      if (currentLogestStr.length > longestStr.length) {
        longestStr = currentLogestStr;
        // console.log(`${currentLogestStr}成为最长回文字符串`);
      }
    }

    // console.log('====================================');
    // console.log('查看 abba');
    // console.log('====================================');
    // 查看 abba 格式
    // axbxcxd -> 一共有 arr.length - 1 次匹配机会
    // 去掉头尾
    for (let i = 0, len = arr.length - 1; i < len; i += 1) {
      // 找到最大匹配次数。往左算还剩多少个，往右算还剩多少个。去最小值
      const maxMatchTimes = Math.min(i + 1, arr.length - 1 - i);
      // console.log('maxMatchTimes: ', maxMatchTimes);
      let currentLogestStr = '';
      for (let x = 1; x <= maxMatchTimes; x += 1) {
        const leftChar = arr[i - x + 1];
        // console.log('leftChar: ', leftChar);
        const rightChar = arr[i + x];
        // console.log('rightChar: ', rightChar);
        if (leftChar === rightChar) {
          currentLogestStr = leftChar + currentLogestStr + rightChar;
        } else {
          //  console.log(`索引${i}停止在第${x}位, 最大字符串${currentLogestStr}`);
           break;
        }
      }

      if (currentLogestStr.length > longestStr.length) {
        longestStr = currentLogestStr;
        // console.log(`${currentLogestStr}成为最长回文字符串`);
      }
    }

    return longestStr;
};

// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('ac'));
// console.log(longestPalindrome('aba'));
// console.log(longestPalindrome('abba'));
// console.log(longestPalindrome("bsnetpqmwhqjunkooftuosgkmkxpmvuehtlpwpktltwlvpdaycnhewdbdrhluyjldecezujgxixehsmjjuyerpllrvzqskizkulqzowzfvqcdsllvgupndbaiuzihcxklvxbodpnrymwobhlvllybdlfabfvnizjpriapuzszdhohfgezayokrivbgbgingspoxsridokhwekawchjdcpylvefubulvxneuizglrjktfcdirwnpqztdpsicslzaeiaibrepifxpxfkczwoumkkuaqkbjhxvasxflmrctponwwenvmtdaqaavubyrzbqjbjxpejmucwunanxwpomqyondyjuzxmzpevxqmbkrwcpdiiph"));