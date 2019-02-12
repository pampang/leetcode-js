/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    /**
     * 分析：
     * 可用方法 charCodeAt
     *
     * 1/ a - z: 97 ~ 112
     * 2/ A - Z: 65 ~ 90
     */
  const final = str.split('').map((s) => {
    const sCode = s.charCodeAt();
    if (sCode >= 65 && sCode <= 90) {
      return String.fromCharCode(sCode + 32);
    }
    return s;
  }).join('');

  console.log(final);
  return final;
};

toLowerCase('Hello');
toLowerCase('here');
toLowerCase('LOVELY');