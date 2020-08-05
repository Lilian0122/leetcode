/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result=[]
  subCombinationSum(candidates,target,[],0)
  return result

  function subCombinationSum(candidates,target,path,start){
      if(target===0){
        result.push([...path])
        return
      }
      for(let i=start;i<candidates.length;i++){
        if(candidates[i]<=target){
          path.push(candidates[i])
          subCombinationSum(candidates,target-candidates[i],path,i)
          path.pop()
        }else{
          continue
        }
      }
  }
};