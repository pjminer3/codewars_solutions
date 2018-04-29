/* Delete a node from a singly-linked list a variable pointing to that node.
The input could, for example, be the variable b below:

Do it in O(1) time and space complexity
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const deleteNode = (node) => {
  const nextNode = node.next;

  if (nextNode) {
    node.value = nextNode.value;
    node.next = nextNode.next;
    return node;
  } else {
    throw new Error("Can not delete the last node with this method");
  }
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
a.next = b;
b.next = c;

deleteNode(b);

console.log(a);
console.log(a.next);

/* 
Two issues with this method:
  - Anything pointing to the original input node will still point to it even though it's 'value' and 'next' have changed
  - Anything pointing to the original 'node.next' is now pointing to a "dangling" node that is no longer part of the LinkedList

*/ 