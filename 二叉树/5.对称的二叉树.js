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
var isSymmetric = function(root) {
    
    return !root || subIsSymmetric(root.left,root.right)

    function subIsSymmetric(ll,rr){
        if(ll===null || rr===null){
            return ll===rr
        }
        if(ll.val!==rr.val){
            return false
        }else{
            return subIsSymmetric(ll.left,rr.right) && subIsSymmetric(ll.right,rr.left)
        }
    }
};