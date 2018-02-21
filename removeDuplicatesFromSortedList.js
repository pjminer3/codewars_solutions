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
  // set head node
  if (!head) {
    return [];
  }
  // let head = head;
  // set current node
  let curNode = head;
  // set next node
  let curNext = head.next;
  // set current value
  let curVal = curNode.val;



  // while there is a next node
  while (!!curNext) {
    // if next node's value equals current value
    if (head.next === curNext && head.val === curNext.val) {
      head.next = curNext.next;
      curNext = curNext.next;
    } else if (curNext.val === curVal) {
      // next node = next.next
      curNext = curNext.next;
    } else {
      // else 
      // current node.next = next
      curNode.next = curNext;
      // current node = next
      curNode = curNext;
      // currnt val = current node.val
      curVal = curNext.val;
      // next = next.next
      curNext = curNext.next;
    }
  }

  curNode.next = null;

  return head;
  
};

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);

node1.next = node2;
node2.next = node3;

console.log(deleteDuplicates(node1).val); // 1
console.log(deleteDuplicates(node1).next.val); // 2