/**
 * @param {number} num
 * @return {string}
 */
/**
 * IV-4/IX-9/XL-40/XC-90/XM-400/DM-900
 */
var romanToInt = function(s) {
  const list = [
    {output: 'M', value: 1000},
    {output: 'CM', value: 900},
    {output: 'D', value: 500},
    {output: 'CD', value: 400},
    {output: 'C', value: 100},
    {output: 'XC', value: 90},
    {output: 'L', value: 50},
    {output: 'XL', value: 40},
    {output: 'X', value: 10},
    {output: 'IX', value: 9},
    {output: 'V', value: 5},
    {output: 'IV', value: 4},
    {output: 'I', value: 1},
  ];

  let temp = s;
  let result = 0;
  for (let i = 0, len = list.length; i < len; i += 1) {
    const { output, value } = list[i];
    while (temp.indexOf(output) === 0) {
      temp = temp.slice(output.length);
      result += value;
    }
  }
  return result;
};

romanToInt('MCMXCIV'); // 1994
console.log(romanToInt('MMMDCCCLXXXIII')); // 3883