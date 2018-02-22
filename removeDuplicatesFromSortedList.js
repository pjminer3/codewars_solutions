// THIS BEAT 100% other other JS submissions! 72 ms

/* Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
};

const deleteDuplicates = function(head) {
  let c = head;

  while (c !== null && c.next !== null) {
    if (c.val === c.next.val) {
      c.next = c.next.next;
    } else {
      c = c.next
    }
  }

  return head;
};

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);

node1.next = node2;
node2.next = node3;

console.log(deleteDuplicates(node1).val); // 1
console.log(deleteDuplicates(node1).next.val); // 2