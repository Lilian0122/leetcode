/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result=[]
  result[0]=[nums[0],nums[1]]
  result[1]=[nums[1],nums[0]
  for(let i=2;i<nums.length;i++){
    let length=result[0].length
    
  }
};