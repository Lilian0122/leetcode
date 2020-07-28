/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result=[]
    if(!root){
        return result
    } 
    function subPathSum(node,sum,path){
        path.push(node.val)
        if(sum===node.val && !node.left && !node.right){
            result.push([...path])
        }
        if(!node.left && !node.right){
            return
        }
        if(node.left){
            subPathSum(node.left,sum-node.val,path)
            path.pop()
        }
        if(node.right){
            subPathSum(node.right,sum-node.val,path)
            path.pop()
        }
    }
    subPathSum(root,sum,[])
    return result
};