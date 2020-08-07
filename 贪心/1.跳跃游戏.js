/**
 * @param {number[]} nums
 * @return {boolean}
 */
//记录当前能够到达的最大索引
var canJump = function(nums) {
  let max=0
  for(let i=0;i<nums.length;i++){
    if(max<i){
      return false
    }
    max=Math.max(max,i+nums[i])
  }
  return max>=nums.length-1
};


//跳跃游戏2：使用最少的跳跃次数到达最终位置。
//答案：不断找出局部最优解
var jump = function (nums) {
  let farthestPos = 0 // 记录当前能去到的最远的位置，遍历每个点都会求能跳到的最远位置，与它比较，如果把它大就更新它
  let endOfCanReach = 0 
  let steps = 0 
  for (let i = 0; i < nums.length - 1; i++) {
    farthestPos = Math.max(farthestPos, i + nums[i])
    if (i === endOfCanReach) { 
      endOfCanReach = farthestPos // 可抵达区间的右端位置
      steps++
    }
    if (endOfCanReach >= nums.length - 1) { // 一旦新的可抵达区间触碰到nums数组的边界，则直接break，不用对区间的点遍历了
      break
    }
  }
  return steps
};