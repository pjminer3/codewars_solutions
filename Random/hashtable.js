// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}



class Hashtable {
  constructor(limit) {
    this._limit = limit;
    this._storage = new Array(limit);
  }

  put(key, value) {
    // create new node
    const newNode = new Node(key, value);
    // get the index of where we want to add the value
    const index = getIndexBelowMaxForKey(key, this._limit);
    // check to see if the space is empty
    const bucket = this._storage[index];
    if (!bucket) {
      this._storage[index] = newNode;
    } else {
      // if not empty, check to see if the linked list has a node with our key => if it does, replace it
      const oldNode = this._findNodeWithKey(bucket, key);
      if (oldNode) {
        oldNode.value = value;
      } else {
        // find the tail of that index => make it's next node our node
        const tail = this._findTail(bucket)
        // make our node's prev value = the old tail
        tail.next = newNode;
        newNode.prev = tail;
      }
    }
  }

  _findNodeWithKey(node, key) {
    if (node.key === key) return node;
    if (node.next) return (this._findNodeWithKey(node.next, key));
    if (!node) return null;
  }

  _findTail(node) {
    if (node.next) {
      return this._findTail(node.next);
    }

    return node;
  }

  get(key) {
    // get the index the key should be on
    const index = getIndexBelowMaxForKey(key, this._limit);
    const bucket = this._storage[index];
    if (bucket) {
      // find node with key => return value
      const node = this._findNodeWithKey(bucket, key);
      if (node) {
        return node.value;
      } else {
        return undefined;
      }
    } else {
      // check to see if there is any node there => if not return undefined;
      return undefined;
    }

  }

  remove(key) {
    // get index key should be on
    const index = getIndexBelowMaxForKey(key, this._limit);
    // check to see if there's a bucket there (if no bucket, return undefined) 
    const bucket = this._storage[index];
    if (!bucket) return null;
    // else find node with key
    const node = this._findNodeWithKey(bucket, key);
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    return node.value;
    // make node's .prev point to its .next, and its .next point to its .prev
    // return node.value
  }
}

const hash = new Hashtable(8);

hash.put('hi', 7);
hash.put('ho', 'katie breen');
hash.put('brothers', 'forbes, kevin');
console.log(hash.get('brothers'));
console.log(hash.get('ho'));
console.log(hash.remove('brothers'));
console.log(hash.get('brothers'));