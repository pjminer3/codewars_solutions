class LRUCache {
  constructor(capacity) {
    this.hash = {};
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
    this.size = 0;
  }

  put(key, value) {
    // if we're at capacity need to delete the tail
    if (this.size === this.capacity) {
      this.__removeAndReassignTail();
    }
    
    // create a new node with the value
    const newNode = new Node(key, value);
    // set the hash key = this node
    this.hash[key] = newNode;

    // if list is empty set head and tail to new node
    if (this.__emptyCache()) {
      this.__addFirstNode(newNode);
      return;
    } else {
      // add node to head
      this.__addNodeToHead(newNode);
    }
  }

  get(key) {
    // check to see if node is in cache, if not return -1
    if (this.__nodeNotInCache(key)){
      return -1;
    }

    if (this.size === 1) {
      return this.head.value;
    }

    // if it is in cache, if it's at the tail
    let currentNode = this.hash[key];

    if (currentNode === this.tail) {
      this.tail = currentNode.prev;
      this.tail.prev = this.tail.prev || currentNode;
    }

    // have nodes connect around it
    if (currentNode.prev) {
      currentNode.prev.next = currentNode.next;
    }
    if (currentNode.next) {
      currentNode.next.prev = currentNode.prev;
    }

    if (currentNode !== this.head) {
      currentNode.next = this.head;
      this.head = currentNode;
    }

    currentNode.prev = null;

    return currentNode.value;
  }

  __removeAndReassignTail() {
    this.__deleteNodeFromHash(this.tail)
    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  __deleteNodeFromHash(node) {
    this.hash[node.key] = null;
  }

  __addNodeToHead(node) {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.size++;
  }

  __emptyCache() {
    return !this.head;
  }

  __addFirstNode(node) {
    this.head = node;
    this.tail = node;
    this.size++;
  }

  __nodeNotInCache(key) {
    return !this.hash[key];
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


const cache = new LRUCache(2);

cache.put(1, 1);    
console.log(cache.get(1)); // returns 1
cache.put(2, 2);    
console.log(cache.get(1));       // returns 1
console.log(cache.get(2)); // returns 2
cache.put(3, 3);   
console.log(cache.get(2));       // returns 2
cache.put(4, 4);   
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4