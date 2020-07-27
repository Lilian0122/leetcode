/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let flag=true
    let result=[]
    let queue=[]
    queue.push(root)
    while(queue.length!==0){
        let length=queue.length
        let arr=[]
        for(let i=0;i<length;i++){
            let node=queue.shift()
            if(!flag){
                arr.unshift(node.val)
            }else{
                arr.push(node.val)
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        result.push(arr)
        flag=!flag
    }
    return result
};