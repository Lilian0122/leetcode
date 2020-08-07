/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (n === 0) {
    return head;
  } else if (!head.next) {
    return null;
  }
  let quickNode = head;
  let slowNode = head;
  for (let i = 0; i < n; i++) {
    quickNode = quickNode.next;
    if (!quickNode) {
      return head.next;
    }
  }
  while (quickNode.next) {
    quickNode = quickNode.next;
    slowNode = slowNode.next;
  }
  slowNode.next = slowNode.next.next;
  return head;
};
