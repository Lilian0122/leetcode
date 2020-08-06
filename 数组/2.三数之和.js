/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//双指针
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if(nums[i]===nums[i-1]){
      continue
    }
    let LL = i + 1;
    let RR = nums.length - 1;
    while (LL < RR) {
      if (nums[RR] < 0) {
        break;
      }
      let sum = nums[i] + nums[LL] + nums[RR];
      if (sum === 0) {
        result.push([nums[i], nums[LL], nums[RR]]);
        while(nums[LL]===nums[++LL]){}
      } else if (sum < 0) {
        while(nums[LL]===nums[++LL]){}       
      } else {
        while(nums[RR]===nums[--RR]){} 
      }
    }
  }
  return result
};
