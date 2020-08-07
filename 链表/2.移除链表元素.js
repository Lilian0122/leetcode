/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if(!head){
    return head
  }
  while(head.val===val){
    if(head.next){
      head=head.next
    }else{
      return null
    }  
  }
  let node=head
  while(node){
    if(node.next && node.next.val===val){
      node.next=node.next.next
    }else{
      node=node.next
    }
  }
  return head
};