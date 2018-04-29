/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {

  const mergeHead = { next: null };
  let crt = mergeHead;

  // while there are any nodes left in either l1 or l2
  while (l1 || l2) {
    // if l1 is smaller than l2 OR there is no l2
    if (!l2 || l1.val < l2.val ) {
      // set crt.next = l1
      crt.next = l1;
      // set crt = crt.next
      crt = crt.next;
      // set l1 = l1.next
      l1 = l1.next;
      // else if they're equal OR l2 is smaller than l1 OR there is no l1
    } else {
      // set crt.next = l2
      crt.next = l2;
      // set crt = crt.next
      crt = crt.next;
      // set l2 = l2.next
      l2 = l2.next;
    }
  }
  return mergeHead.next;
}

// const mergeTwoLists = (l1, l2) => {
//   let values = getValues(l1).concat(getValues(l2)).sort((a, b) => {
//     return a - b;
//   });

//   if (!values.length) {
//     return [];
//   }

//   let l3 = new ListNode(values.shift());

//   for (var i = 0; i < values.length; i++) {
//     getLastNode(l3).next = new ListNode(values[i]);
//   }

//   return l3;
// };

// const getLastNode = (list) => {
//   while (list.next) {
//     list = list.next
//   }
//   return list;
// }

// const getValues = (list) => {
//   const values = [];
//   while (list) {
//     values.push(list.val);
//     list = list.next;
//   }
//   return values;
// }

// ---------------

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let l3 = mergeTwoLists(l1, l2);

console.log(l3.val); // 1
console.log(l3.next.val); //1
console.log(l3.next.next.val); //2
console.log(l3.next.next.next.val); //3
console.log(l3.next.next.next.next.val); //4
console.log(l3.next.next.next.next.next.val); //4