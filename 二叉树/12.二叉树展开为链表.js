/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

 //原地展开为单链表
var flatten = function(root) {

  subFlatten(root)

  function subFlatten(node){
    if(!node){
      return null
    }
    if(node.right){
      subFlatten(node.right)
    }
    if(node.left){
      subFlatten(node.left)
      let subNode=node.left
      while(subNode.right){
        subNode=subNode.right
      }
      subNode.right=node.right
      node.right=node.left
      node.left=null
    }
    return node
  }
    
};