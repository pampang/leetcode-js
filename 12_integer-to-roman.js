/**
 * @param {number} num
 * @return {string}
 */
/**
 * IV-4/IX-9/XL-40/XC-90/XM-400/DM-900
 */
var intToRoman = function(num) {
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

  let temp = num;
  let currentIndex = 0;
  let result = '';
  while (temp > 0) {
    const { value, output } = list[currentIndex];
    if (temp >= value) {
      const remainder = Math.floor(temp / value);
      temp = temp % value;
      console.log(remainder, temp);
      result += Array(remainder).fill(output).join('');
    }
    currentIndex += 1;
  }

  return result;
};

intToRoman(1994); // MCMXCIV
intToRoman(58); // LVIII
intToRoman(9); // IX