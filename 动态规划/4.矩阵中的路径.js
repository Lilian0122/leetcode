/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let row = board.length
  let col = board[0].length
  for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
      if(board[i][j]===word[0] && subExist(i,j,board,word,0)){
        return true
      }
    }
  }
  return false

  function subExist(m,n,board,word,index){
    if(m<0 || m>=row || n<0 || n>=col || board[m][n]!==word[index]){
      return false
    }
    if(index===word.length-1){
      return true
    }
    let temp=board[m][n]
    board[m][n]='-'
    let res= subExist(m-1,n,board,word,index+1) ||
          subExist(m+1,n,board,word,index+1) ||
          subExist(m,n-1,board,word,index+1) ||
          subExist(m,n+1,board,word,index+1)
    board[m][n]=temp
    return res
  }
};