/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  let row=grid.length
  let col=grid[0].length
  let dp=[]
  for(let i=0;i<row;i++){
    dp[i]=new Array(col).fill(0)
  }
  dp[0][0]=grid[0][0]
  for(let i=1;i<col;i++){
    dp[0][i]=dp[0][i-1]+grid[0][i]
  }
  for(let j=1;j<row;j++){
    dp[j][0]=dp[j-1][0]+grid[j][0]
  }
  for(let i=1;i<row;i++){
    for(let j=1;j<col;j++){
      dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])+grid[i][j]
    }
  }
  return dp[row-1][col-1]
};