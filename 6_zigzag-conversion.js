/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/**
 * 分析（以 numRows = 4 为例）：
L     D     R
E   O E   I I
E C   I H   N
T     S     G

其实等于多个这样的组合：
L
E   O
E C
T
这样的结构：个数 = numRows * 2 - 2
占用的列数 = numRows - 1
基于这样的思路去组合结果即可。
 */
var convertWithSquareArray = function(s, numRows) {
  if (s.length <= 1) {
    return s;
  }
  // 拆分子结构成块
  const blockSize = numRows * 2 - 2;
  let temp = s;
  const blocks = [];
  while (temp.length > 0) {
    if (temp.length >= blockSize) {
      blocks.push(temp.substr(0, blockSize));
      temp = temp.slice(blockSize);
    } else {
      blocks.push(temp);
      temp = '';
    }
  }

  // 生成空的二维数组
  const columnLength = (numRows - 1) * blocks.length;
  let squareArray = [];
  for (let i = 0, len = numRows; i < len; i += 1) {
    squareArray.push(new Array(columnLength).fill(' '));
  }

  // 组合成链条
  blocks.forEach((block, x) => {
    // index 是当前渲染的块位置。用来算出偏移量
    const offset = x * (numRows - 1);
    block.split('').forEach((char, index) => {
      // 填满第一行
      if (index < numRows) {
        squareArray[index][offset] = char;
      } else {
        const columnOffset = index + 1 - numRows;
        squareArray[numRows - columnOffset - 1][offset + columnOffset] = char;
      }
    })
  });

  console.log(squareArray);

  // 组合成最终字符串
  const finalStr = squareArray.map((row) => {
    return row.filter(char => char !== ' ').join('');
  }).join('');

  return finalStr;
};

var convert = function(s, numRows) {
  // 解决 'a', 1 和 'ab', 2 的问题
  if (numRows <= 1) {
    return s;
  }
  // 拆分子结构成块
  const blockSize = numRows * 2 - 2;
  let temp = s;
  const blocks = [];
  while (temp.length > 0) {
    if (temp.length >= blockSize) {
      blocks.push(temp.substr(0, blockSize));
      temp = temp.slice(blockSize);
    } else {
      blocks.push(temp);
      temp = '';
    }
  }

  function getChar(array, index) {
    return array[index] || '';
  }

  let finalStr = '';
  let start = 0;
  let end = blockSize;
  for (let i = 0, len = numRows; i < len; i += 1) {
    if (start === end) {
      blocks.forEach((b) => finalStr += getChar(b, start));
    } else {
      blocks.forEach((b) => finalStr += (getChar(b, start) + getChar(b, end)));
      start += 1;
      end -= 1;
    }
    // console.log(finalStr);
  }
  // console.log(finalStr);
  return finalStr;
}

// convert('LEETCODEISHIRING', 3);
// convert('LEETCODEISHIRING', 4);
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("A", 1));
console.log(convert("AB", 1));
