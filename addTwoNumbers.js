// ADD TWO NUMBERS

/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
};

var addTwoNumbers = function(l1, l2) {
let sum = getRealNumber(l1) + getRealNumber(l2);
let sumArr = sum.toString().split('');

const result = [];

sumArr.forEach((letter) => {
  result.unshift(+letter);
});

return result;
// console.log('sumArr: ', sumArr);
// if (sumArr.length === 0) {
//  return null;
// } else {
//  let num = getRealNumber(createLinkedList(sumArr));
//  num = num.toString().split('');
//  let result = [];
//  for (var i = 0; i < num.length; i++) {
//      result.push(+num[i]);
//  }
//    return result;
// }
};

// const createLinkedList = (arr, linkedList = null) => {
// if (arr.length === 0) {
//  return linkedList;
// }

// const newLinkedList = new ListNode(arr.pop());

// if (linkedList) {
//  newLinkedList.next = linkedList;
// } 

// return createLinkedList(arr, newLinkedList);
// };


const getRealNumber = (linkedList) => {
  if (Array.isArray(linkedList)){
      linkedList.reverse();
      return +linkedList.join('');
  }
  let number = [];
  while(linkedList) {
   number.push(linkedList.val);
   linkedList = linkedList.next;
  }

  number.reverse();

  return +number.join('');
}

let list3 = new ListNode(4);
let list2 = new ListNode(6);
let list1 = new ListNode(5);
list1.next = list2;
list2.next = list3;

let list6 = new ListNode(3);
let list5 = new ListNode(4);
let list4 = new ListNode(2);
list4.next = list5;
list5.next = list6;

console.log(getRealNumber(list1)); // 465
console.log(getRealNumber(list4)); // 342

console.log(addTwoNumbers(list1, list4)); // [7,0,8] (as a linked list)
