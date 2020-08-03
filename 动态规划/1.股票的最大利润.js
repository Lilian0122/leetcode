/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min=prices[0]
  let max=0
  for(let i=1;i<prices.length;i++){
    if(prices[i]<min){
      min=prices[i]
    }else{
      let sub=prices[i]-min
      if(sub>max){
        max=sub
      }
    }
  }
  return max
};