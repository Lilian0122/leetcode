/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

 //430
var flatten = function(head) {
  let temp=head
  if(temp.child){
    let nextNode=temp.next
    let endNode=subFlatten(temp)
    endNode.next=nextNode
    temp=nextNode
  }
    function subFlatten(node){
      node.next=flatten(node.child)
      node.child.prev=node
      while(node.next){
        node=node.next
      }
      return node
    }
};