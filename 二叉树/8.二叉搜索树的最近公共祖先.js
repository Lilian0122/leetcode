/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 //235
var lowestCommonAncestor = function(root, p, q) {
    let max=p.val>q.val?p.val:q.val
    let min=p.val<q.val?p.val:q.val
    if(root.val>min && root.val <max || root.val===min || root.val===max){
        return root
    }
    if(root.val<min){
        return lowestCommonAncestor(root.right,p,q)
    }
    if(root.val>max){
        return lowestCommonAncestor(root.left,p,q)
    }
};