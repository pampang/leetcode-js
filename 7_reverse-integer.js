/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 判断是不是负数
  const negative = x < 0;

  // 拆分 x 成一位位。
  let value = Math.abs(x);
  const arr = [];
  while (value > 0) {
    arr.push(value % 10);
    value = Math.floor(value / 10);
  }

  const final = Number(arr.join('')) * (negative ? -1 : 1);
  if (final > 2147483647 || final < -2147483648) {
    return 0;
  }
  return final;
};

console.log(reverse(123456));
console.log(reverse(12000));
console.log(reverse(-12000));
console.log(reverse(1534236469));
console.log(reverse(1563847412));
