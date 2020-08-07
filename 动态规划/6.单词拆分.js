/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

};

//答案
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {     // i从1开始到len
    for (let j = i - 1; j >= 0; j--) { // j去划分
      const word = s.slice(j, i);      // 获取[j,i-1]子串word
      if (wordSet.has(word) && dp[j] == true) {//word是单词表的单词，且左侧子串[0,j-1]的dp[j]为真
        dp[i] = true; // 共同决定了当前长度为i的子串的dp项为真
        break;        // i长度的子串已经可以break成单词表的单词了，不需要j继续划分子串
      }
    }
  }
  return dp[s.length];
};