/**
 * @param {number} x
 * @return {boolean}
 * 我现在的做法：将数字整个算出来，然后再比较
 * 但如果是更有的做法，应该是：反转一半数字。https://leetcode-cn.com/problems/palindrome-number/solution/
 *
 * 原来在解题思路上，我们应该用更有的办法去实现一个功能。
 * 在前端的日常工作中，是不会有量级的概念的，也不会对性能做任何优化的思考。只要代码写得好看一些就算了。
 * 但如果量级在千万以上，这样的优化就是一个非常有意义的操作了。
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let tempX = x;
  let reverseArray = [];
  try {
    while (tempX >= 10) {
      reverseArray.push(tempX % 10);
      tempX = Math.floor(tempX / 10);
    }
    reverseArray.push(tempX);
    console.log(reverseArray);
    const reverse = +reverseArray.join('');
    console.log(x, reverse);
    if (x === reverse) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false