/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root){
        return true
    }
    function deepTree(root){
        if(!root) return 0
        return Math.max(deepTree(root.left),deepTree(root.right))+1
    }
    if(deepTree(root.left)-deepTree(root.right)>1 || deepTree(root.right)-deepTree(root.left)>1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
};