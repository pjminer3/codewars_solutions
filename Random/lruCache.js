class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUcache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this._remove(node);
      this._add(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.map.has(key)) {
      const oldNode = this.map.get(key);
      this._remove(oldNode);
    }
    const newNode = new Node(key, value);
    this._add(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
      const removedNode = this.head.next;
      this._remove(removedNode);
      this.map.delete(removedNode.key);
    }
  }

  _remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  _add(node) { 
    const prev = this.tail.prev;
    const next = this.tail;
     node.prev = prev;
     node.next = next;
     prev.next = node;
     next.prev = node;
  }
}

