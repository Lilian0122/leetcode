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

 //leetcode 236
var lowestCommonAncestor = function(root, p, q) {
    let result=[]
    function subFindPath(node,path){
        path.push(node)
        if(node.val===p.val || node.val===q.val){
            result.push([...path])
        }
        if(node.left){
            subFindPath(node.left,path)
            path.pop()
        }
        if(node.right){
            subFindPath(node.right,path)
            path.pop()
        }
    }
    subFindPath(root,[])
    let length=Math.min(result[0].length,result[1].length)
    for(let i=0;i<length;i++){
        if(i===length-1 && result[0][i].val===result[1][i].val){
            return result[0][i]
        }
        if(result[0][i].val!==result[1][i].val){
            return result[0][i-1]
        }
    }
};


//答案解法
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q){
        return root;
    }
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    //如果左右子树都能找到返回root
    if(left != null && right != null){
        return root;
    }
    //如果其中一个为null，则p、q都在另一支子树上
    return left != null ? left : right;
};
