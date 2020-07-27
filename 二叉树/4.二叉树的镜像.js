/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {

    return subMirrorTree(root)

    function subMirrorTree(node){
        if(!node){
            return null
        }
        let subNode=node.left
        node.left=subMirrorTree(node.right)
        node.right=subMirrorTree(subNode)
        return node
    }
};