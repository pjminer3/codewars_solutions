class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add new nodes in front of head and reassign head
  // oldest node is the tail

  addToHead(key, value) {
    const newNode = new Node(key, value);

    // if no head then make node both head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /**
       * if there is a head:
       * make current head's prev propert point to newNode
       * make newNode's next proper point to current head
       * reassign head to new node 
       */

       this.head.prev = newNode;
       newNode.next = this.head;
       this.head = newNode;
    }

     this.size++;
     return newNode
  }

  removeTail() {
    // if there is no tail return null
    if (!this.size) {
      return null;
    }

    const removedNode = this.tail;
    /**
     * if there is a tail;
     * make tail = tail's prev
     * make tail's next = null
     */
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
    
    return removedNode;
  }

  remove(node) {
    if (node === this.tail) {
      return this.removeTail();
    } else if (node === this.head) {
      this.head = node.next;
      this.head.prev = null;
      return node;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.size--;

    return node;
  }
}


class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const dll = new DoublyLinkedList();

console.log(dll.size === 0); // 0
console.log(dll.addToHead(1, 1).key === 1); // {key: 1, value: 1, next: } 
console.log(dll.addToHead(2,2).key === 2); //  {key: 2, value: 2, ...}
console.log(dll.head.key === 2); // {key: 2}
console.log(dll.tail.key === 1); // {key: 1}
console.log(dll.addToHead(3, 3).key === 3); // {key: 3} 
console.log(dll.head.next.next.prev.key === 2); // {key: 2} 
console.log(dll.remove(dll.head.next).key === 2); // {key: 2}
console.log(dll.size === 2); // 2 
