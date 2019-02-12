/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  for (let x = 0; x < len - 1; x += 1) {
    for (let y = x + 1, len = nums.length; y < len; y += 1) {
      if (nums[x] + nums[y] === target) {
        console.log(x, y);
        return [x, y];
      }
    }
  };
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 3], 6);