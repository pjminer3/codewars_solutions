/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 ); (capacity)

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

class LRUCache {
  constructor(capacity) {
      this.capacity = capacity;
      this.size = 0;
      this.linkedList = new LinkedList();
      this.hashTable = {};
  }
    
    put(key, value) {
        // check size of cache => if at capacity...
        if (this.__atCapacity()) {
            // remove tail from linked list
            // remove tail node from hash
            let removedNode;
            if (this.__keyIsNewSoDeleteLastNode(key)) {
                removedNode = this.linkedList.removeNode(this.linkedList.tail);
            } else {
                let node = this.hashTable[key];
                removedNode = this.linkedList.removeNode(node);
            }
            delete this.hashTable[removedNode.key];
            this.size--;
        } 
        // add new node to front of linked List
        // add new node to hash
        const newNode = this.linkedList.addToHead(key, value);
        this.hashTable[key] = newNode;
        this.size++;
    }

    __keyIsNewSoDeleteLastNode(key) {
        return !this.hashTable[key];
    }
    
    get(key) {
        if (!this.hashTable[key]) return -1;
        
        // find node
        const node = this.hashTable[key];
        
        // check if node is head (if so reassign it)
        if (this.linkedList.head === node) {
            return node.value;
        }
        
        // check if node is tail (if so reassign it)
        if (this.linkedList.tail === node) {
            this.linkedList.tail = node.prev;
            this.linkedList.tail.next = node.next;
        }
        
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        node.next = this.linkedList.head;
        node.prev = null;
        this.linkedList.head.prev = node;
        this.linkedList.head = node;
        
        return node.value;
        
    }
    
    __atCapacity() {
        return this.size === this.capacity;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    addToTail(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    
    addToHead(key, value) {
        const newNode = new Node(key, value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        return newNode;
    }
    
    removeNode(node) {
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
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

const cache = new LRUCache(2);


