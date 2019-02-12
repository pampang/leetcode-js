/**
 * @param {string} s
 * @return {number}
 */

/**
 * 滑动窗口法。
 * 整个窗口里面的字符，都是唯一的。
 * 如果碰到了一个已经存在的字符，那调整当前窗口的起点。
 */
var lengthOfLongestSubstring = function(s) {
  let subStr = '';
  let maxLength = 0;
  for (let i = 0, len = s.length; i < len; i += 1) {
    const c = s[i];
    const existIndex = subStr.indexOf(c);
    subStr += c;

    // 已经存在，调整 subStr 开头的位置
    if (existIndex !== -1) {
      subStr = subStr.slice(existIndex + 1);
    }
    maxLength = Math.max(subStr.length, maxLength);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3