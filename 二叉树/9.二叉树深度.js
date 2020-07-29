/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//这样写会超出时间限制
var maxDepth = function(root) {
    let number=0
    let queue=[]
    queue.push(root)
    while(queue.length!==0){
        let length=queue.length
        while(!length){
            let node=queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            length--
        }
        number++
    }
    return number
};

//答案 递归调用
var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};