/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if(n<2) return 0;
    if(n===2) return 1;
    if(n===3) return 2;
  let dp = new Array(n+1).fill(1)
  dp[0]=0
  dp[1]=1
  dp[2]=2
  dp[3]=3
  for(let i=4;i<n+1;i++){
    for(let j=1;j<i;j++){
      dp[i]=Math.max(dp[i],dp[j]*dp[i-j])
    }
  }
  return dp[n]
};