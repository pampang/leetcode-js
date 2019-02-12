/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * 看完答案之后的分析：
 * 1、暴力破解固然可以，但是计算量太大，属于下下策。
 * 2、我们目的，其实是要求：最短边 * 两边相距的距离 的最大值。
 * 实际上，有很多不必要的计算。我们的目的，就是去掉这些计算，以节约计算力。
 * 在这里上，我们可以使用：归纳推理（是由部分到整体,由个别到一般的推理）。
 * 两边相距的距离我们无法控制。但是最短边可以被我们控制。我们只要找到可选范围里面，最长的短边即可。
 */
var maxArea = function(height) {
  // 定义头尾的指针
  let start = 0;
  let end = height.length - 1;
  const getMax = (height, start, end) => {
    let startValue = height[start];
    let endValue = height[end];
    console.log(startValue, endValue);
    return Math.min(startValue, endValue) * (end - start);
  }

  let max = getMax(height, start, end);

  while(end - start > 1) {
    // 移动较短边
    if (height[start] > height[end]) {
      end -= 1;
    } else {
      start += 1;
    }
    const temp = getMax(height, start, end);
    max = temp > max ? temp : max;
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,2,4,3]));