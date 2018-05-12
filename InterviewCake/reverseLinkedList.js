function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const reverseLinkedList = node => {
  // need to have 3 pointers keeping track of: previous, current, and next
  let previous = null;
  let current = node;
  let next;

  while (current) {
    next = current.next;
    current.next = previous;

    previous = current;
    current = next;
  }

  return previous;
};

const a = new LinkedListNode('a');
const b = new LinkedListNode('b');
const c = new LinkedListNode('c');
const d = new LinkedListNode('d');

a.next = b;
b.next = c;
c.next = d;

const reversedList = reverseLinkedList(a);

console.log(reversedList); // d
console.log(reversedList.next); // c
console.log(reversedList.next.next); // b
console.log(reversedList.next.next.next); // a
