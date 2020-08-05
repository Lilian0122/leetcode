/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result=[]
  subPermute(nums,[])
  return result

  function subPermute(nums,path){
    if(path.length===nums.length){
      result.push([...path])
      return
    }
    for(let i of nums){
      if(path.includes(i)){
        continue
      }
      path.push(i)
      subPermute(nums,path)
      path.pop()
    }
  }
};