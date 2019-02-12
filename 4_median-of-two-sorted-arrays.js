/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 需要把 nums1 和 nums2 合并了之后，再进行中位数的寻找。
// 那么，如何合并两个数据就成了关键了。
// nums1 和 nums2 是两个有顺序的数组，如何融合？
// 融合存在相同的情况。所以还是需要完全融合
var findMedianSortedArrays = function(nums1, nums2) {
  function getMedian(values) {
    let lowMiddle = Math.floor((values.length - 1) / 2);
    let highMiddle = Math.ceil((values.length - 1) / 2);
    return (values[lowMiddle] + values[highMiddle]) / 2;
  }

  let i1 = 0;
  let i2 = 0;
  let finalArr = nums1;
  // 融合两个数组
  while (i1 < nums1.length && i2 < nums2.length) {
    const v1 = nums1[i1];
    const v2 = nums2[i2];
    if (v1 < v2) {
      i1 += 1;
    } else if (v1 >= v2) {
      finalArr.splice(i1, 0, v2);
      i2 += 1;
    }
  }
  // 补全 nums2 中剩余的字段
  if (i1 === nums1.length) {
    finalArr.splice(i1, 0, ...nums2.slice(i2));
  }
  return getMedian(finalArr);
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([], [2, 3])); // 2.5
console.log(findMedianSortedArrays([1, 2], [1, 1])); // 1