/**
 * @param {number[]} nums
 * @return {string}
 */

//0 < nums.length <= 100

//答案：利用快排
var minNumber = function (nums) {
  nums.sort((a, b) => {
    const s1 = a + "" + b;
    const s2 = b + "" + a;

    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
  });
  return nums.join("");
};
